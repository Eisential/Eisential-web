// src/components/CreateNewTaskModal.tsx
'use client';

import { useState } from 'react';
import { Category } from '@/src/lib/types';
import { createTask } from '@/src/services/taskService';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onTaskCreated: () => void; // Callback para recargar tareas
  categories: Category[];
};

export const CreateNewTaskModal = ({ isOpen, onClose, onTaskCreated, categories }: ModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setSelectedCategoryId('');
    setDueDate('');
    setDueTime('');
    setError(null);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('El título es requerido');
      return;
    }

    if (!selectedCategoryId) {
      setError('La categoría es requerida');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const dueDateWithTime = dueDate && dueTime 
        ? new Date(`${dueDate}T${dueTime}`).toISOString()
        : dueDate 
          ? new Date(`${dueDate}T00:00:00`).toISOString()
          : undefined;

      console.log('Creating task with date:', {
        dueDate,
        dueTime,
        dueDateWithTime,
        fullDate: dueDate && dueTime ? new Date(`${dueDate}T${dueTime}`) : null
      });

      await createTask({
        title: title.trim(),
        description: description.trim() || undefined,
        categoryId: selectedCategoryId,
        dueDate: dueDateWithTime,
        quadrant: 'B', // Siempre se crea en Backlog
        position: 0,
      });
      
      resetForm();
      onTaskCreated(); // Recargar tareas
      onClose();
    } catch (err) {
      setError('Error al crear la tarea');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='w-full max-w-md rounded-lg bg-white p-6 shadow-xl border-2' style={{ borderColor: '#1A2D4A' }}>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold' style={{ color: '#5FA822' }}>Crear Nueva Tarea</h2>
          <button 
            onClick={handleClose} 
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
              Título <span style={{ color: '#EF4444' }}>*</span>
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
              Categoría <span style={{ color: '#EF4444' }}>*</span>
            </label>
            <select
              id='category'
              value={selectedCategoryId}
              onChange={(e) => setSelectedCategoryId(e.target.value)}
              className='mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none'
              style={{ borderColor: '#1E9B96' }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#5FA822'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#1E9B96'}
              required
            >
              <option value="">Selecciona una categoría</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor='dueDate' className='block text-sm font-medium mb-1' style={{ color: '#1A2D4A' }}>
                Fecha y Hora de Vencimiento
              </label>
              <div className="flex gap-4">
                <div className="flex-1">
                  <input
                    type='date'
                    id='dueDate'
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className='w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none cursor-pointer hover:border-gray-400'
                    style={{ borderColor: '#1E9B96' }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#5FA822'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#1E9B96'}
                  />
                </div>
                <div className="flex-1">
                  <input
                    type='time'
                    id='dueTime'
                    value={dueTime}
                    onChange={(e) => setDueTime(e.target.value)}
                    className='w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none cursor-pointer hover:border-gray-400'
                    style={{ borderColor: '#1E9B96' }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#5FA822'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#1E9B96'}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='p-3 rounded-md' style={{ backgroundColor: '#E0F2FE', borderLeft: '4px solid #1E9B96' }}>
            <p className='text-sm' style={{ color: '#1A2D4A' }}>
              <span className='font-semibold'>💡 Tip:</span> Las tareas se crean en el Backlog. Usa drag & drop para moverlas a los cuadrantes de la Matriz Eisenhower.
            </p>
          </div>

          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}

          <div className='flex justify-end gap-4 pt-4'>
            <button 
              type='button' 
              onClick={handleClose} 
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
              disabled={isLoading}
              className='rounded-lg px-4 py-2 font-medium text-white transition-all hover:scale-105 disabled:opacity-50'
              style={{ backgroundColor: '#1E9B96' }}
              onMouseEnter={(e) => !isLoading && (e.currentTarget.style.backgroundColor = '#5FA822')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1E9B96')}
            >
              {isLoading ? 'Creando...' : 'Crear Tarea'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};