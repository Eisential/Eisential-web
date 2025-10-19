// src/components/ManageCategoriesModal.tsx
'use client';

import { useState } from 'react';
import { Category } from '@/src/app/dashboard/page';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
  onAddCategory: (name: string, color: string) => void;
};

export const ManageCategoriesModal = ({ isOpen, onClose, categories, onAddCategory }: ModalProps) => {
  const [newCategoryName, setNewCategoryName] = useState('');
  const [selectedColor, setSelectedColor] = useState('bg-blue-500');

  // Paleta de colores predefinidos
  const colorOptions = [
    { name: 'Rojo', class: 'bg-red-500', hex: '#EF4444' },
    { name: 'Naranja', class: 'bg-orange-500', hex: '#F97316' },
    { name: 'Amarillo', class: 'bg-yellow-500', hex: '#EAB308' },
    { name: 'Verde', class: 'bg-green-500', hex: '#22C55E' },
    { name: 'Azul', class: 'bg-blue-500', hex: '#3B82F6' },
    { name: 'Índigo', class: 'bg-indigo-500', hex: '#6366F1' },
    { name: 'Morado', class: 'bg-purple-500', hex: '#A855F7' },
    { name: 'Rosa', class: 'bg-pink-500', hex: '#EC4899' },
    { name: 'Turquesa', class: 'bg-teal-500', hex: '#14B8A6' },
    { name: 'Cyan', class: 'bg-cyan-500', hex: '#06B6D4' },
  ];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategoryName.trim()) return;

    onAddCategory(newCategoryName, selectedColor);
    setNewCategoryName('');
    setSelectedColor('bg-blue-500'); // Reset al color por defecto
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
                  key={color.class}
                  type="button"
                  onClick={() => setSelectedColor(color.class)}
                  className={`h-10 w-10 rounded-full transition-all hover:scale-110 ${color.class} ${
                    selectedColor === color.class ? 'ring-4 ring-offset-2 ring-[#5FA822]' : ''
                  }`}
                  title={color.name}
                />
              ))}
            </div>
            <p className="mt-2 text-xs" style={{ color: '#1E9B96' }}>
              Color seleccionado: <span className="font-semibold">{colorOptions.find(c => c.class === selectedColor)?.name}</span>
            </p>
          </div>

          <button 
            type="submit" 
            className="w-full rounded-lg px-4 py-2 font-medium text-white transition-all hover:scale-105"
            style={{ backgroundColor: '#1E9B96' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5FA822'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1E9B96'}
          >
            Añadir Categoría
          </button>
        </form>
        
        <div className="mt-6">
          <h3 className="font-semibold" style={{ color: '#1A2D4A' }}>Categorías Existentes</h3>
          <div className="mt-3 space-y-2">
            {categories.map(cat => (
              <div key={cat.id} className="flex items-center justify-between rounded-md p-2" style={{ backgroundColor: '#F0F9FF' }}>
                <div className="flex items-center gap-2">
                  <span className={`h-4 w-4 rounded-full ${cat.color}`}></span>
                  <span style={{ color: '#1A2D4A' }}>{cat.name}</span>
                </div>
                <button 
                  className="text-sm transition-colors"
                  style={{ color: '#1E9B96' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF6B6B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#1E9B96'}
                >
                  Quitar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};