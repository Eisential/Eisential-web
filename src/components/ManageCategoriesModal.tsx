// src/components/ManageCategoriesModal.tsx
'use client';

import { useState } from 'react';
import { Category } from '@/src/lib/types';
import { createCategory, deleteCategory } from '@/src/services/categoryService';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
  onCategoriesChange: () => void; // Callback para recargar categorías
};

export const ManageCategoriesModal = ({ isOpen, onClose, categories, onCategoriesChange }: ModalProps) => {
  const [newCategoryName, setNewCategoryName] = useState('');
  const [selectedColor, setSelectedColor] = useState('#3B82F6');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Paleta de colores predefinidos
  const colorOptions = [
    { name: 'Rojo', hex: '#EF4444' },
    { name: 'Naranja', hex: '#F97316' },
    { name: 'Amarillo', hex: '#EAB308' },
    { name: 'Verde', hex: '#22C55E' },
    { name: 'Azul', hex: '#3B82F6' },
    { name: 'Índigo', hex: '#6366F1' },
    { name: 'Morado', hex: '#A855F7' },
    { name: 'Rosa', hex: '#EC4899' },
    { name: 'Turquesa', hex: '#14B8A6' },
    { name: 'Cyan', hex: '#06B6D4' },
  ];

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategoryName.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      await createCategory({
        name: newCategoryName.trim(),
        color: selectedColor,
      });
      
      setNewCategoryName('');
      setSelectedColor('#3B82F6');
      onCategoriesChange(); // Recargar categorías
    } catch (err) {
      setError('Error al crear la categoría');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (categoryId: string) => {
    if (!confirm('¿Estás seguro de eliminar esta categoría? Las tareas asociadas también se eliminarán.')) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await deleteCategory(categoryId);
      onCategoriesChange(); // Recargar categorías
    } catch (err) {
      setError('Error al eliminar la categoría');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl border-2" style={{ borderColor: '#1A2D4A' }}>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold" style={{ color: '#5FA822' }}>Administrar Categorías</h2>
          <button 
            onClick={onClose} 
            className="text-3xl leading-none transition-colors"
            style={{ color: '#1E9B96' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FF6B6B'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#1E9B96'}
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4 pb-6" style={{ borderBottom: '2px solid #1E9B70' }}>
          <div>
            <label htmlFor="categoryName" className="block text-sm font-medium" style={{ color: '#1A2D4A' }}>
              Nombre de Categoría
            </label>
            <input
              type="text"
              id="categoryName"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="Ej: Trabajo, Personal, Estudio..."
              className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none"
              style={{ borderColor: '#1E9B96' }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#5FA822'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#1E9B96'}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#1A2D4A' }}>
              Color de la Categoría
            </label>
            <div className="grid grid-cols-5 gap-3">
              {colorOptions.map((color) => (
                <button
                  key={color.hex}
                  type="button"
                  onClick={() => setSelectedColor(color.hex)}
                  style={{ backgroundColor: color.hex }}
                  className={`h-10 w-10 rounded-full transition-all hover:scale-110 ${
                    selectedColor === color.hex ? 'ring-4 ring-offset-2 ring-[#5FA822]' : ''
                  }`}
                  title={color.name}
                />
              ))}
            </div>
            <p className="mt-2 text-xs" style={{ color: '#1E9B96' }}>
              Color seleccionado: <span className="font-semibold">{colorOptions.find(c => c.hex === selectedColor)?.name}</span>
            </p>
          </div>

          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg px-4 py-2 font-medium text-white transition-all hover:scale-105 disabled:opacity-50"
            style={{ backgroundColor: '#1E9B96' }}
            onMouseEnter={(e) => !isLoading && (e.currentTarget.style.backgroundColor = '#5FA822')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1E9B96')}
          >
            {isLoading ? 'Agregando...' : 'Añadir Categoría'}
          </button>
        </form>
        
        <div className="mt-6">
          <h3 className="font-semibold" style={{ color: '#1A2D4A' }}>Categorías Existentes</h3>
          <div className="mt-3 space-y-2">
            {categories.map(cat => (
              <div key={cat.id} className="flex items-center justify-between rounded-md p-2" style={{ backgroundColor: '#F0F9FF' }}>
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-full" style={{ backgroundColor: cat.color || '#3B82F6' }}></span>
                  <span style={{ color: '#1A2D4A' }}>{cat.name}</span>
                </div>
                <button
                  onClick={() => handleDelete(cat.id)}
                  disabled={isLoading}
                  className="text-sm transition-colors disabled:opacity-50"
                  style={{ color: '#1E9B96' }}
                  onMouseEnter={(e) => !isLoading && (e.currentTarget.style.color = '#FF6B6B')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#1E9B96')}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};