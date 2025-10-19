// src/components/CreateNewTaskModal.tsx
'use client';

import { useState } from 'react';
import { Task, Category } from '@/src/app/dashboard/page';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (taskData: Omit<Task, 'id'>) => void;
  categories: Category[];
};

export const CreateNewTaskModal = ({ isOpen, onClose, onAddTask, categories }: ModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | undefined>(categories[0]?.id);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !selectedCategoryId) {
      alert('Title and category are required!');
      return;
    }

    const selectedCategory = categories.find(cat => cat.id === selectedCategoryId);
    if (!selectedCategory) return;

    onAddTask({
      title,
      category: selectedCategory.name,
      color: selectedCategory.color,
      date: 'Oct 20, 2025',
    });
    
    setTitle('');
    setDescription('');
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='w-full max-w-md rounded-lg bg-white p-6 shadow-xl border-2' style={{ borderColor: '#1A2D4A' }}>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold' style={{ color: '#5FA822' }}>Crear Nueva Tarea</h2>
          <button 
            onClick={onClose} 
            className='text-3xl leading-none transition-colors'
            style={{ color: '#1E9B96' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FF6B6B'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#1E9B96'}
          >
            &times;
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className='mt-4 space-y-4'>
          <div>
            <label htmlFor='title' className='block text-sm font-medium' style={{ color: '#1A2D4A' }}>
              Título
            </label>
            <input
              type='text'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Título de la tarea'
              className='mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none'
              style={{ borderColor: '#1E9B96' }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#5FA822'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#1E9B96'}
              required
            />
          </div>
          
          <div>
            <label htmlFor='description' className='block text-sm font-medium' style={{ color: '#1A2D4A' }}>
              Descripción
            </label>
            <textarea
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Añade una descripción...'
              rows={3}
              className='mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none'
              style={{ borderColor: '#1E9B96' }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#5FA822'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#1E9B96'}
            ></textarea>
          </div>
          
          <div>
            <label htmlFor='category' className='block text-sm font-medium' style={{ color: '#1A2D4A' }}>
              Categoría *
            </label>
            <select
              id='category'
              value={selectedCategoryId}
              onChange={(e) => setSelectedCategoryId(Number(e.target.value))}
              className='mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none'
              style={{ borderColor: '#1E9B96' }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#5FA822'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#1E9B96'}
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className='flex justify-end gap-4 pt-4'>
            <button 
              type='button' 
              onClick={onClose} 
              className='rounded-lg border px-4 py-2 font-medium transition-all'
              style={{ borderColor: '#1E9B70', color: '#1A2D4A' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F0F9FF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Cancelar
            </button>
            <button 
              type='submit' 
              className='rounded-lg px-4 py-2 font-medium text-white transition-all hover:scale-105'
              style={{ backgroundColor: '#1E9B96' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5FA822'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1E9B96'}
            >
              Crear Tarea
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};