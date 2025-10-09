// src/app/dashboard/page.tsx
'use client';

import { useState } from 'react';
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

import { Header } from '@/src/components/Header';
import { BacklogPanel } from '@/src/components/BacklogPanel';
import { EisenhowerMatrix } from '@/src/components/EisenhowerMatrix';
import { CreateNewTaskModal } from '@/src/components/CreateNewTaskModal';
import { ManageCategoriesModal } from '@/src/components/ManageCategoriesModal';
import { TaskCard } from '@/src/components/TaskCard';

// Define los 'types' aquí fuera para que sean exportables y reutilizables
export type Task = { id: number; title: string; category: string; date: string; color: string; };
export type Category = { id: number; name: string; color: string; };


export default function DashboardPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-800">
      <DashboardLayout />
    </div>
  );
}

function DashboardLayout() {
  // Mueve los datos iniciales DENTRO del componente
  const initialTasks: Task[] = [
    { id: 1, title: 'Configurar el proyecto y la base de datos', category: 'Work', date: 'Oct 10, 2025', color: 'bg-red-500' },
    { id: 2, title: 'Diseñar los componentes de la UI en Figma', category: 'Work', date: 'Oct 15, 2025', color: 'bg-green-500' },
    { id: 3, title: 'Revisar correos y responder mensajes', category: 'Admin', date: 'Oct 09, 2025', color: 'bg-yellow-500' },
  ];
  
  const initialCategories: Category[] = [
    { id: 1, name: 'Work', color: 'bg-red-500' },
    { id: 2, name: 'Personal', color: 'bg-blue-500' },
    { id: 3, name: 'Admin', color: 'bg-yellow-500' },
  ];

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false);

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

  const handleAddCategory = (categoryName: string) => {
    const newCategory: Category = { id: Date.now(), name: categoryName, color: 'bg-gray-400' };
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <Header
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
        onAddCategory={handleAddCategory}
      />

      <DragOverlay>
        {activeTask ? <TaskCard {...activeTask} /> : null}
      </DragOverlay>
    </DndContext>
  );
}