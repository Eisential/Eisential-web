// src/components/EisenhowerMatrix.tsx

import { MatrixQuadrant } from './MatrixQuadrant';
import { TaskCard } from './TaskCard';

export const EisenhowerMatrix = () => {
  return (
    <div className="rounded-lg bg-white p-4 shadow border-2" style={{ borderColor: '#1A2D4A' }}>
      <h2 className="text-xl font-bold" style={{ color: '#5FA822' }}>Matriz Eisenhower</h2>
      
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        
        {/* Cuadrante 1: Hacer - Rojo urgente */}
        <MatrixQuadrant 
          title="Hacer" 
          subtitle="Importante y Urgente" 
          borderColor="border-red-600"
        >
          <TaskCard 
            id={101}
            title="Configurar el proyecto y la base de datos"
            category="Work"
            date="Oct 10, 2025"
            categoryColor="bg-red-500"
          />
        </MatrixQuadrant>

        {/* Cuadrante 2: Programar - Verde lima oscuro */}
        <MatrixQuadrant 
          title="Programar" 
          subtitle="Importante y No Urgente" 
          borderColor="border-[#5FA822]"
        >
          <TaskCard 
            id={102}
            title="Diseñar los componentes de la UI en Figma"
            category="Work"
            date="Oct 15, 2025"
            categoryColor="bg-green-500"
          />
        </MatrixQuadrant>

        {/* Cuadrante 3: Delegar - Turquesa oscuro */}
        <MatrixQuadrant 
          title="Delegar" 
          subtitle="No Importante y Urgente" 
          borderColor="border-[#1E9B96]"
        >
          {/* Vacío */}
        </MatrixQuadrant>

        {/* Cuadrante 4: Eliminar - Verde menta oscuro */}
        <MatrixQuadrant 
          title="Eliminar" 
          subtitle="No Importante y No Urgente" 
          borderColor="border-[#1E9B70]"
        >
          {/* Vacío */}
        </MatrixQuadrant>

      </div>
    </div>
  );
};