// src/app/dashboard/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSession } from 'next-auth/react';
import type { User as NextAuthUser } from 'next-auth';

import { Header } from '@/src/components/Header';
import { BacklogPanel } from '@/src/components/BacklogPanel';
import { EisenhowerMatrix } from '@/src/components/EisenhowerMatrix';
import { CreateNewTaskModal } from '@/src/components/CreateNewTaskModal';
import { ManageCategoriesModal } from '@/src/components/ManageCategoriesModal';
import { TaskCard } from '@/src/components/TaskCard';
import { getAllCategories } from '@/src/services/categoryService';
import type { Category } from '@/src/lib/types';

// Define los 'types' aquí fuera para que sean exportables y reutilizables
export type Task = { id: number; title: string; category: string; date: string; color: string; };

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
  // Datos iniciales con tareas de ejemplo
  const initialTasks: Task[] = [
    { id: 1, title: 'Configurar el proyecto y la base de datos', category: 'Work', date: 'Oct 10, 2025', color: 'bg-red-500' },
    { id: 2, title: 'Diseñar los componentes de la UI en Figma', category: 'Work', date: 'Oct 15, 2025', color: 'bg-green-500' },
    { id: 3, title: 'Revisar correos y responder mensajes', category: 'Admin', date: 'Oct 09, 2025', color: 'bg-yellow-500' },
  ];

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false);

  // Cargar categorías desde la API
  const loadCategories = async () => {
    try {
      const data = await getAllCategories();
      setCategories(data);
    } catch (error) {
      console.error('Error loading categories:', error);
    }
  };

  // Cargar categorías al montar el componente
  useEffect(() => {
    loadCategories();
  }, []);

  const handleDragStart = (event: DragStartEvent) => {
    const task = tasks.find((t) => t.id === event.active.id);
    if (task) setActiveTask(task);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveTask(null);
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setTasks((currentTasks) => {
        const oldIndex = currentTasks.findIndex((t) => t.id === active.id);
        const newIndex = currentTasks.findIndex((t) => t.id === over.id);
        return arrayMove(currentTasks, oldIndex, newIndex);
      });
    }
  };

  const handleAddTask = (newTaskData: Omit<Task, 'id'>) => {
    const newTask: Task = { id: Date.now(), ...newTaskData };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setIsNewTaskModalOpen(false);
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <Header
        user={user}
        onNewTaskClick={() => setIsNewTaskModalOpen(true)}
        onCategoriesClick={() => setIsCategoriesModalOpen(true)}
      />

      <main className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
              <BacklogPanel tasks={tasks} />
            </SortableContext>
          </div>
          <div className="lg:col-span-2">
            <EisenhowerMatrix />
          </div>
        </div>
      </main>

      <CreateNewTaskModal
        isOpen={isNewTaskModalOpen}
        onClose={() => setIsNewTaskModalOpen(false)}
        onAddTask={handleAddTask}
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
  );
}