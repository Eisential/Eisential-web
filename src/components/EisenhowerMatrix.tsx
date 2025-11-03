// src/components/EisenhowerMatrix.tsx

import { MatrixQuadrant } from './MatrixQuadrant';
import { TaskCard } from './TaskCard';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Task } from '@/src/app/dashboard/page';

type EisenhowerMatrixProps = {
  q1Tasks: Task[];
  q2Tasks: Task[];
  q3Tasks: Task[];
  q4Tasks: Task[];
  onTaskClick: (taskId: string) => void;
};

export const EisenhowerMatrix = ({ q1Tasks, q2Tasks, q3Tasks, q4Tasks, onTaskClick }: EisenhowerMatrixProps) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow border-2" style={{ borderColor: '#1A2D4A' }}>
      <h2 className="text-xl font-bold" style={{ color: '#5FA822' }}>Matriz Eisenhower</h2>
      
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        
        {/* Cuadrante 1: Hacer - Rojo urgente */}
        <MatrixQuadrant 
          id="Q1"
          title="Hacer" 
          subtitle="Importante y Urgente" 
          borderColor="border-red-600"
        >
          <SortableContext items={q1Tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
            {q1Tasks.map(task => (
              <TaskCard 
                key={task.id}
                id={task.id}
                title={task.title}
                category={task.category}
                date={task.date}
                categoryColor={task.color}
                onClick={() => onTaskClick(task.id)}
              />
            ))}
          </SortableContext>
        </MatrixQuadrant>

        {/* Cuadrante 2: Programar - Verde lima oscuro */}
        <MatrixQuadrant 
          id="Q2"
          title="Programar" 
          subtitle="Importante y No Urgente" 
          borderColor="border-[#5FA822]"
        >
          <SortableContext items={q2Tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
            {q2Tasks.map(task => (
              <TaskCard 
                key={task.id}
                id={task.id}
                title={task.title}
                category={task.category}
                date={task.date}
                categoryColor={task.color}
                onClick={() => onTaskClick(task.id)}
              />
            ))}
          </SortableContext>
        </MatrixQuadrant>

        {/* Cuadrante 3: Delegar - Turquesa oscuro */}
        <MatrixQuadrant 
          id="Q3"
          title="Delegar" 
          subtitle="No Importante y Urgente" 
          borderColor="border-[#1E9B96]"
        >
          <SortableContext items={q3Tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
            {q3Tasks.map(task => (
              <TaskCard 
                key={task.id}
                id={task.id}
                title={task.title}
                category={task.category}
                date={task.date}
                categoryColor={task.color}
                onClick={() => onTaskClick(task.id)}
              />
            ))}
          </SortableContext>
        </MatrixQuadrant>

        {/* Cuadrante 4: Eliminar - Verde menta oscuro */}
        <MatrixQuadrant 
          id="Q4"
          title="Minimizar" 
          subtitle="No Importante y No Urgente" 
          borderColor="border-[#1E9B70]"
        >
          <SortableContext items={q4Tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
            {q4Tasks.map(task => (
              <TaskCard 
                key={task.id}
                id={task.id}
                title={task.title}
                category={task.category}
                date={task.date}
                categoryColor={task.color}
                onClick={() => onTaskClick(task.id)}
              />
            ))}
          </SortableContext>
        </MatrixQuadrant>

      </div>
    </div>
  );
};