// src/components/MatrixQuadrant.tsx

import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

// Definimos los props que aceptará este componente
type MatrixQuadrantProps = {
  id: string; // ID para el drop zone
  title: string;
  subtitle: string;
  borderColor: string; // Clase de Tailwind para el color del borde
  children?: React.ReactNode; // Para poder poner TaskCards dentro
};

export const MatrixQuadrant = ({
  id,
  title,
  subtitle,
  borderColor,
  children,
}: MatrixQuadrantProps) => {
  // Hook para hacer este cuadrante un drop zone
  const { setNodeRef, isOver } = useDroppable({
    id: id,
  });

  return (
    // Usamos la clase `borderColor` que pasamos como prop
    <div 
      ref={setNodeRef}
      className={`rounded-lg border-2 ${borderColor} p-4 bg-white transition-colors ${
        isOver ? 'bg-gray-50 border-4' : ''
      }`}
    >
      <h3 className="font-bold" style={{ color: '#1A2D4A' }}>{title}</h3>
      <p className="text-sm font-medium" style={{ color: '#1E9B96' }}>{subtitle}</p>
      
      {/* Contenedor para las tareas con un espacio entre ellas */}
      <div className="mt-4 space-y-3 min-h-[100px]">
        {children}
      </div>
    </div>
  );
};