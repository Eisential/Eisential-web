// src/components/ManageCategoriesModal.tsx
'use client';

import { useState } from 'react';
// Importamos el tipo Category que definimos en la página del dashboard
import { Category } from '@/src/app/dashboard/page';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[]; // Recibe la lista de categorías
  onAddCategory: (name: string) => void; // Recibe la función para añadir una
};

export const ManageCategoriesModal = ({ isOpen, onClose, categories, onAddCategory }: ModalProps) => {
  // 1. Estado para el input del nombre de la nueva categoría
  const [newCategoryName, setNewCategoryName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategoryName.trim()) return; // Evita nombres vacíos

    onAddCategory(newCategoryName);
    setNewCategoryName(''); // Limpia el input después de añadir
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Administrar Categorias</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
        </div>

        {/* 2. Conectamos el formulario a la función handleSubmit */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4 border-b pb-6">
          <div>
            <label htmlFor="categoryName" className="block text-sm font-medium">Nombre de Categoria</label>
            {/* 3. Conectamos el input a su estado */}
            <input
              type="text"
              id="categoryName"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="E.g., Study"
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <button type="submit" className="w-full rounded-lg bg-purple-600 py-2 font-medium text-white hover:bg-purple-700">
            Añadir Categoria
          </button>
        </form>
        
        <div className="mt-6">
          <h3 className="font-semibold">Categorias Existentes</h3>
          {/* 4. Hacemos el map sobre las categorías que recibimos como props */}
          <div className="mt-3 space-y-2">
            {categories.map(cat => (
              <div key={cat.id} className="flex items-center justify-between rounded-md bg-gray-50 p-2">
                <div className="flex items-center gap-2">
                  <span className={`h-4 w-4 rounded-full ${cat.color}`}></span>
                  <span>{cat.name}</span>
                </div>
                <button className="text-sm text-gray-400 hover:text-red-600">Quitar</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};