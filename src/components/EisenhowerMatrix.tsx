// src/components/EisenhowerMatrix.tsx

import { MatrixQuadrant } from './MatrixQuadrant';
import { TaskCard } from './TaskCard';

export const EisenhowerMatrix = () => {
  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <h2 className="text-xl font-bold">Matriz Eisenhower</h2>
      
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        
        {/* Cuadrante 1: Do First (Hacer) */}
        <MatrixQuadrant 
          title="Hacer Primero" 
          subtitle="Importante y Urgente" 
          borderColor="border-red-500"
        >
          <TaskCard 
            id={101} // 👈 AÑADE ESTA LÍNEA (usa un ID que no se repita)
            title="Configurar el proyecto y la base de datos"
            category="Work"
            date="Oct 10, 2025"
            categoryColor="bg-red-500"
          />
        </MatrixQuadrant>

        {/* Cuadrante 2: Schedule (Planificar) */}
        <MatrixQuadrant 
          title="Horario" 
          subtitle="Importante y No Urgente" 
          borderColor="border-green-500"
        >
          <TaskCard 
            id={102} // 👈 AÑADE ESTA LÍNEA (usa un ID que no se repita)
            title="Diseñar los componentes de la UI en Figma"
            category="Work"
            date="Oct 15, 2025"
            categoryColor="bg-green-500"
          />
        </MatrixQuadrant>

        {/* Cuadrante 3: Delegate (Delegar) */}
        <MatrixQuadrant 
          title="Delegar" 
          subtitle="No Importante y Urgente" 
          borderColor="border-yellow-500"
        >
          {/* Vacío */}
        </MatrixQuadrant>

        {/* Cuadrante 4: Eliminate (Eliminar) */}
        <MatrixQuadrant 
          title="Eliminar" 
          subtitle="No Importante y No Urgente" 
          borderColor="border-gray-400"
        >
          {/* Vacío */}
        </MatrixQuadrant>

      </div>
    </div>
  );
};