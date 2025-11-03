// src/app/dashboard/page.tsx
'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
  pointerWithin,
  DragOverEvent,
  closestCorners,
  rectIntersection,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSession } from 'next-auth/react';
import type { User as NextAuthUser } from 'next-auth';

import { Header } from '@/src/components/Header';
import { BacklogPanel } from '@/src/components/BacklogPanel';
import { EisenhowerMatrix } from '@/src/components/EisenhowerMatrix';
import { CreateNewTaskModal } from '@/src/components/CreateNewTaskModal';
import { EditTaskModal } from '@/src/components/EditTaskModal';
import { ManageCategoriesModal } from '@/src/components/ManageCategoriesModal';
import { TaskCard } from '@/src/components/TaskCard';
import { getAllCategories } from '@/src/services/categoryService';
import { getAllTasks, moveTaskToQuadrant } from '@/src/services/taskService';
import type { Category, Task as ApiTask } from '@/src/lib/types';
import { requestNotificationPermission, scheduleNotificationForTask, clearAllScheduled } from '@/src/lib/notifications';

// Define los 'types' aquí fuera para que sean exportables y reutilizables
export type Task = { 
  id: string; // Cambiar a string para usar el ID real de la API
  title: string; 
  category: string; 
  date: string; 
  color: string;
  quadrant: string; // Agregar quadrant para filtrar
};

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirigir a login si no está autenticado
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  // Mostrar loading mientras se verifica la sesión
  if (status === 'loading') {
    return (
      <div className="min-h-screen w-full flex items-center justify-center" style={{ backgroundColor: '#28436B' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto" style={{ borderColor: '#36EBE4' }}></div>
          <p className="mt-4 font-medium" style={{ color: '#8EEB36' }}>Cargando Dashboard...</p>
        </div>
      </div>
    );
  }

  // Si está autenticado y tenemos un usuario en la sesión, renderizamos el layout
  if (status === 'authenticated' && session?.user) {
    return (
      <div className="min-h-screen w-full bg-gray-50 text-gray-800">
        <DashboardLayout user={session.user} />
      </div>
    );
  }

  // Fallback mientras redirige
  return null;
}

function DashboardLayout({ user }: { user: NextAuthUser }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [apiTasks, setApiTasks] = useState<ApiTask[]>([]); // Guardar tareas originales de la API
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [selectedTask, setSelectedTask] = useState<ApiTask | null>(null); // Tarea seleccionada para editar
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
  const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false);
  const [notificationPermission, setNotificationPermission] = useState<string | null>(null);

  // Cargar categorías desde la API
  const loadCategories = async () => {
    try {
      const data = await getAllCategories();
      setCategories(data);
    } catch (error) {
      console.error('Error loading categories:', error);
    }
  };

  // Cargar tareas desde la API
  const loadTasks = async () => {
    try {
      const data = await getAllTasks();
      setApiTasks(data); // Guardar datos originales
      
      // Crear un mapa para acceso rápido por ID real
      const taskMap = new Map(data.map(task => [task.id, task]));
      
      // Convertir el formato de la API al formato del componente (temporal)
      // Filtrar solo tareas NO completadas
      const formattedTasks: Task[] = data
        .filter((task: ApiTask) => !task.completed) // Solo mostrar tareas no completadas
        .map((task: ApiTask) => ({
          id: task.id, // Usar el ID real de la API en lugar del índice
          title: task.title,
          category: task.category?.name || 'Sin categoría',
          date: task.dueDate ? new Date(task.dueDate).toLocaleString('es-ES', {
            dateStyle: 'medium',
            timeStyle: 'short'
          }) : 'Sin fecha',
          color: task.category?.color || '#9CA3AF', // Color hex por defecto
          quadrant: task.quadrant || 'B', // Agregar quadrant
        }));
      setTasks(formattedTasks);
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  // Cargar datos al montar el componente
  useEffect(() => {
    loadCategories();
    loadTasks();
  }, []);

  // Pedir permiso para notificaciones cuando se monte el layout
  useEffect(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      setNotificationPermission(Notification.permission);
      // Do not auto-request permission on mount to avoid unexpected prompts; leave it to the user
      // If you prefer auto-request, uncomment below
      // requestNotificationPermission().catch((err) => console.error('Notification permission error', err));
    }
  }, []);

  // Re-programar notificaciones cuando cambien las tareas de la API
  useEffect(() => {
    // Limpiar timers previos
    clearAllScheduled();
    // Programar notificaciones para tareas no completadas con dueDate
    apiTasks.forEach((t) => {
      if (!t.completed && t.dueDate) {
        scheduleNotificationForTask(t, 60); // 60 minutos antes
      }
    });
    return () => {
      clearAllScheduled();
    };
  }, [apiTasks]);

  const handleEnableNotifications = async () => {
    try {
      const granted = await requestNotificationPermission();
      setNotificationPermission(granted ? 'granted' : Notification.permission);
      if (granted) {
        // Schedule now for already-loaded tasks
        apiTasks.forEach((t) => {
          if (!t.completed && t.dueDate) scheduleNotificationForTask(t, 60);
        });
      }
    } catch (err) {
      console.error('Error enabling notifications', err);
    }
  };

  const handleTestNotification = async () => {
    try {
      if (typeof window === 'undefined' || !('Notification' in window)) return;
      let granted = Notification.permission === 'granted';
      if (!granted) {
        granted = await requestNotificationPermission();
        setNotificationPermission(granted ? 'granted' : Notification.permission);
      }
      if (granted) {
        new Notification('Prueba de notificación', { body: 'Esta es una notificación de prueba.' });
      } else {
        console.warn('Notification permission not granted for test');
      }
    } catch (err) {
      console.error('Error showing test notification', err);
    }
  };

  // Filtrar tareas por cuadrante
  const backlogTasks = useMemo(() => tasks.filter(t => t.quadrant === 'B'), [tasks]);
  const q1Tasks = useMemo(() => tasks.filter(t => t.quadrant === 'Q1'), [tasks]);
  const q2Tasks = useMemo(() => tasks.filter(t => t.quadrant === 'Q2'), [tasks]);
  const q3Tasks = useMemo(() => tasks.filter(t => t.quadrant === 'Q3'), [tasks]);
  const q4Tasks = useMemo(() => tasks.filter(t => t.quadrant === 'Q4'), [tasks]);

  const handleDragStart = (event: DragStartEvent) => {
    const task = tasks.find((t) => t.id === event.active.id);
    if (task) setActiveTask(task);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    setActiveTask(null);
    const { active, over } = event;

    console.log('=== DRAG END DEBUG ===');
    console.log('Active ID:', active.id, 'Type:', typeof active.id);
    console.log('Over ID:', over?.id, 'Type:', typeof over?.id);

    if (!over) {
      console.log('No over target detected');
      return;
    }

    const taskId = String(active.id);
    let overId = String(over.id);
    
    console.log('Converted - taskId:', taskId, 'overId:', overId);
    
    // Si overId no es un cuadrante, podría ser otra tarea
    // En ese caso, buscar en qué cuadrante está esa tarea
    if (!['backlog', 'Q1', 'Q2', 'Q3', 'Q4'].includes(overId)) {
      console.log('Over ID is not a quadrant, checking if it\'s a task...');
      const overTask = apiTasks.find(t => String(t.id) === overId);
      if (overTask) {
        overId = overTask.quadrant === 'B' ? 'backlog' : overTask.quadrant || 'backlog';
        console.log('Found over task, using its quadrant:', overId);
      } else {
        console.log('Over target not recognized:', overId);
        return;
      }
    }
    
    // Verificar si se soltó sobre un cuadrante
    if (['backlog', 'Q1', 'Q2', 'Q3', 'Q4'].includes(overId)) {
      const task = apiTasks.find(t => String(t.id) === taskId);
      
      console.log('Found task:', task);
      
      if (!task) {
        console.log('Task not found with ID:', taskId);
        return;
      }

      const quadrantMap: { [key: string]: 'B' | 'Q1' | 'Q2' | 'Q3' | 'Q4' } = {
        'backlog': 'B',
        'Q1': 'Q1',
        'Q2': 'Q2',
        'Q3': 'Q3',
        'Q4': 'Q4',
      };

      const newQuadrant = quadrantMap[overId];
      console.log('Moving task from', task.quadrant, 'to', newQuadrant);
      
      if (task.quadrant !== newQuadrant) {
        try {
          console.log('Calling moveTaskToQuadrant with:', task.id, newQuadrant);
          await moveTaskToQuadrant(task.id, newQuadrant);
          console.log('Task moved successfully, reloading...');
          await loadTasks();
          console.log('Tasks reloaded');
        } catch (error) {
          console.error('Error moving task:', error);
        }
      } else {
        console.log('Task already in target quadrant');
      }
    } else {
      console.log('Drop target not a quadrant:', overId);
    }
    console.log('=== END DRAG DEBUG ===');
  };

  const handleTaskClick = (taskId: string) => {
    // Buscar la tarea directamente por su ID real
    const task = apiTasks.find(t => t.id === taskId);
    
    if (task) {
      setSelectedTask(task);
      setIsEditTaskModalOpen(true);
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <DndContext
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <Header
          user={user}
          onNewTaskClick={() => setIsNewTaskModalOpen(true)}
          onCategoriesClick={() => setIsCategoriesModalOpen(true)}
        />

        {/* Banner para habilitar notificaciones si no están concedidas */}
        {typeof window !== 'undefined' && 'Notification' in window && notificationPermission !== 'granted' && (
          <div className="w-full bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 p-3 m-4 rounded">
            <div className="flex items-center justify-between">
              <div>
                <strong>Notificaciones deshabilitadas.</strong>
                <div className="text-sm">Activa las notificaciones para recibir recordatorios 1 hora antes de tus tareas.</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleEnableNotifications}
                  className="ml-4 rounded bg-yellow-300 px-3 py-1 text-sm font-medium hover:bg-yellow-400"
                >
                  Habilitar
                </button>
                <button
                  onClick={handleTestNotification}
                  className="ml-2 rounded bg-transparent border px-3 py-1 text-sm font-medium hover:bg-yellow-50"
                >
                  Probar ahora
                </button>
              </div>
            </div>
          </div>
        )}

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <BacklogPanel tasks={backlogTasks} onTaskClick={handleTaskClick} />
            </div>
            <div className="lg:col-span-2">
              <EisenhowerMatrix 
                q1Tasks={q1Tasks}
                q2Tasks={q2Tasks}
                q3Tasks={q3Tasks}
                q4Tasks={q4Tasks}
                onTaskClick={handleTaskClick}
              />
            </div>
          </div>
        </main>

        <CreateNewTaskModal
          isOpen={isNewTaskModalOpen}
          onClose={() => setIsNewTaskModalOpen(false)}
          onTaskCreated={loadTasks}
          categories={categories}
        />
        <EditTaskModal
          isOpen={isEditTaskModalOpen}
          onClose={() => {
            setIsEditTaskModalOpen(false);
            setSelectedTask(null);
          }}
          onTaskUpdated={loadTasks}
          task={selectedTask}
          categories={categories}
        />
        <ManageCategoriesModal
          isOpen={isCategoriesModalOpen}
          onClose={() => setIsCategoriesModalOpen(false)}
          categories={categories}
          onCategoriesChange={loadCategories}
        />

        <DragOverlay>
          {activeTask ? <TaskCard {...activeTask} /> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}