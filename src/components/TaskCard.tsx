// src/components/TaskCard.tsx}
import { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type Props = {
  id: number;
  title: string;
  category: string;
  date: string;
  completado: boolean;
  categoryColor?: string;
  onToggle?: (id: string, next: boolean) => void | Promise<void>;
};

export const TaskCard = ({ id, title, category, date, categoryColor = 'bg-gray-400', completado = false, onToggle }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  const [localCompleted, setLocalCompleted] = useState(completado);
  const [loading, setLoading] = useState(false);

  const handleToggle = async (next: boolean) => {
    setLocalCompleted(next); // Optimistic
    try {
      setLoading(true);
      await onToggle?.(id, next);
    } catch (e) {
      setLocalCompleted(!next); // revertir si falla
      console.error(e);
      alert('No se pudo actualizar la tarea');
    } finally {
      setLoading(false);
    }
};

 return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative touch-none rounded-lg border bg-white p-4 shadow-sm"
      { ...attributes } { ...listeners }
    >
      <div className={`absolute left-0 top-0 h-full w-1.5 rounded-l-lg ${categoryColor}`} />

      <div className="pl-3 pr-8 flex items-start gap-3">
        {/* Checkbox: no iniciar drag desde aquí */}
        <input
          type="checkbox"
          className="mt-1 h-5 w-5 accent-green-600 cursor-pointer"
          checked={localCompleted}
          disabled={loading}
          onChange={(e) => handleToggle(e.target.checked)}
          onPointerDown={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        />

        <div className="flex-1">
          <p className={`font-semibold ${localCompleted ? 'line-through text-gray-400' : 'text-gray-800'}`}>
            {title}
          </p>
          <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
            <span className={`rounded-full px-2 py-0.5 text-xs font-semibold text-white ${categoryColor}`}>
              {category}
            </span>
            <span>{date}</span>
          </div>
        </div>

        {/* Drag handle: listeners SOLO aquí */}
        <button
          type="button"
          aria-label="Reordenar tarea"
          className="absolute right-2 top-2 cursor-grab text-gray-400 hover:text-gray-600 select-none"
          {...attributes}
          {...listeners}
          onPointerDown={(e) => e.stopPropagation()}
        >
          ⋮⋮
        </button>
      </div>
    </div>
  );
};