// src/components/CreateNewTaskModal.tsx
'use client';

import { useState } from 'react';
import { Task, Category } from '@/src/app/dashboard/page'; // Importamos ambos tipos

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (taskData: Omit<Task, 'id'>) => void;
  categories: Category[]; // 1. Recibe la lista de categorías
};

export const CreateNewTaskModal = ({ isOpen, onClose, onAddTask, categories }: ModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // 2. Estado para guardar la categoría seleccionada. Le damos un valor inicial.
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | undefined>(categories[0]?.id);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !selectedCategoryId) {
      alert('Title and category are required!');
      return;
    }

    // 3. Buscamos la categoría completa a partir del ID seleccionado
    const selectedCategory = categories.find(cat => cat.id === selectedCategoryId);
    if (!selectedCategory) return; // Seguridad por si no se encuentra

    // 4. Usamos los datos de la categoría seleccionada para crear la tarea
    onAddTask({
      title,
      category: selectedCategory.name,
      color: selectedCategory.color,
      date: 'Oct 20, 2025', // La fecha sigue siendo fija por ahora
    });
    
    setTitle('');
    setDescription('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Create New Task</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium">Title *</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task title"
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add a description..."
              rows={3}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
            ></textarea>
          </div>
          
          {/* 5. AÑADIMOS EL MENÚ DESPLEGABLE PARA CATEGORÍAS */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium">Category *</label>
            <select
              id="category"
              value={selectedCategoryId}
              onChange={(e) => setSelectedCategoryId(Number(e.target.value))}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button type="button" onClick={onClose} className="rounded-lg border px-4 py-2 font-medium hover:bg-gray-100">Cancel</button>
            <button type="submit" className="rounded-lg bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-700">Create Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};