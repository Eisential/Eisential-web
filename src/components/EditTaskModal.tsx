// src/components/EditTaskModal.tsx
'use client';

import { useState, useEffect } from 'react';
import { Category, Task } from '@/src/lib/types';
import { updateTask, deleteTask, completeTask, uncompleteTask } from '@/src/services/taskService';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onTaskUpdated: () => void;
  task: Task | null;
  categories: Category[];
};

export const EditTaskModal = ({ isOpen, onClose, onTaskUpdated, task, categories }: ModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');
  const [completed, setCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cargar datos de la tarea cuando se abre el modal
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description || '');
      setSelectedCategoryId(task.categoryId || '');
      // Mantener fecha y hora al editar
      if (task.dueDate) {
        const date = new Date(task.dueDate);
        setDueDate(date.toISOString().split('T')[0]);
        setDueTime(date.toTimeString().slice(0, 5));
      } else {
        setDueDate('');
        setDueTime('');
      }
      setCompleted(task.completed || false);
    }
  }, [task]);

  if (!isOpen || !task) return null;

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

      await updateTask(task.id, {
        title: title.trim(),
        description: description.trim() || undefined,
        categoryId: selectedCategoryId,
        dueDate: dueDateWithTime,
      });

      onTaskUpdated();
      onClose();
    } catch (err: any) {
      const errorMessage = err?.message || 'Error al actualizar la tarea';
      setError(errorMessage);
      console.error('Error updating task:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleComplete = async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (completed) {
        // Desmarcar como completada
        await uncompleteTask(task.id);
        setCompleted(false);
        onTaskUpdated();
      } else {
        // Marcar como completada - la tarea desaparecerá del dashboard
        await completeTask(task.id);
        onTaskUpdated();
        onClose(); // Cerrar el modal inmediatamente
      }
    } catch (err: any) {
      const errorMessage = err?.message || 'Error al cambiar el estado de la tarea';
      setError(errorMessage);
      console.error('Error toggling task completion:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await deleteTask(task.id);
      onTaskUpdated();
      onClose();
    } catch (err: any) {
      const errorMessage = err?.message || 'Error al eliminar la tarea';
      setError(errorMessage);
      console.error('Error deleting task:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='w-full max-w-md rounded-lg bg-white p-6 shadow-xl border-2' style={{ borderColor: '#1A2D4A' }}>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold' style={{ color: '#5FA822' }}>Editar Tarea</h2>
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
              Título <span style={{ color: '#EF4444' }}>*</span>
            </label>
            <input
              type='text'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Título de la tarea'
              required
              className='mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none'
              style={{ borderColor: '#1E9B96' }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#5FA822'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#1E9B96'}
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

          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor='dueDate' className='block text-sm font-medium' style={{ color: '#1A2D4A' }}>
                Fecha de Vencimiento
              </label>
              <input
                type='date'
                id='dueDate'
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className='mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none'
                style={{ borderColor: '#1E9B96' }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#5FA822'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#1E9B96'}
              />
            </div>
            <div className="flex-1">
              <label htmlFor='dueTime' className='block text-sm font-medium' style={{ color: '#1A2D4A' }}>
                Hora de Vencimiento
              </label>
              <input
                type='time'
                id='dueTime'
                value={dueTime}
                onChange={(e) => setDueTime(e.target.value)}
                className='mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none'
                style={{ borderColor: '#1E9B96' }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#5FA822'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#1E9B96'}
              />
            </div>
          </div>

          <div className='flex items-center justify-between p-3 rounded-md' style={{ backgroundColor: '#F0FDF4', borderLeft: '4px solid #5FA822' }}>
            <div>
              <p className='text-sm font-medium' style={{ color: '#1A2D4A' }}>
                Estado de la tarea
              </p>
              <p className='text-xs' style={{ color: '#6B7280' }}>
                {completed ? 'Completada' : 'Pendiente'}
              </p>
            </div>
            <button
              type='button'
              onClick={handleToggleComplete}
              disabled={isLoading}
              className='px-4 py-2 rounded-md text-sm font-medium transition-colors'
              style={{
                backgroundColor: completed ? '#5FA822' : '#E5E7EB',
                color: completed ? 'white' : '#1A2D4A'
              }}
            >
              {completed ? '✓ Completada' : 'Marcar como completada'}
            </button>
          </div>

          {error && (
            <div className='rounded-md p-3' style={{ backgroundColor: '#FEE2E2', borderLeft: '4px solid #EF4444' }}>
              <p className='text-sm' style={{ color: '#991B1B' }}>{error}</p>
            </div>
          )}

          <div className='flex gap-2 pt-2'>
            <button
              type='button'
              onClick={handleDelete}
              disabled={isLoading}
              className='flex-1 rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90 disabled:opacity-50'
              style={{ backgroundColor: '#EF4444' }}
            >
              {isLoading ? 'Eliminando...' : 'Eliminar'}
            </button>
            <button
              type='button'
              onClick={onClose}
              disabled={isLoading}
              className='flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50'
              style={{ backgroundColor: '#E5E7EB', color: '#1A2D4A' }}
            >
              Cancelar
            </button>
            <button
              type='submit'
              disabled={isLoading}
              className='flex-1 rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90 disabled:opacity-50'
              style={{ backgroundColor: '#5FA822' }}
            >
              {isLoading ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
