// src/components/MatrixQuadrant.tsx

import React from 'react';

// Definimos los props que aceptará este componente
type MatrixQuadrantProps = {
  title: string;
  subtitle: string;
  borderColor: string; // Clase de Tailwind para el color del borde
  children?: React.ReactNode; // Para poder poner TaskCards dentro
};

export const MatrixQuadrant = ({
  title,
  subtitle,
  borderColor,
  children,
}: MatrixQuadrantProps) => {
  return (
    // Usamos la clase `borderColor` que pasamos como prop
    <div className={`rounded-lg border-2 ${borderColor} p-4`}>
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
      
      {/* Contenedor para las tareas con un espacio entre ellas */}
      <div className="mt-4 space-y-3">
        {children}
      </div>
    </div>
  );
};