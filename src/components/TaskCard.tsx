// src/components/TaskCard.tsx
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type Props = {
  id: string | number; // Aceptar tanto string como number
  title: string;
  category: string;
  date: string | Date; // Aceptar tanto string como Date
  categoryColor?: string; // Color hex como #EF4444
  onClick?: () => void; // Callback para editar
};

export const TaskCard = ({ id, title, category, date, categoryColor = '#9CA3AF', onClick }: Props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevenir que se active el drag
    e.preventDefault(); // Prevenir comportamiento por defecto
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="relative touch-none rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-all group cursor-grab active:cursor-grabbing"
    >
      {/* Barra lateral de color de categoría */}
      <div 
        className="absolute left-0 top-0 h-full w-1.5 rounded-l-lg" 
        style={{ backgroundColor: categoryColor }}
      ></div>
      
      <div className="pl-2">
        <div className="flex items-start justify-between gap-2">
          <p className="font-semibold text-gray-800 flex-1">{title}</p>
          
          {/* Botón de editar */}
          <button
            onPointerDown={(e) => e.stopPropagation()} // Detener propagación al drag
            onClick={handleEditClick}
            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-gray-100 cursor-pointer z-10 relative"
            style={{ color: '#1E9B96' }}
            title="Editar tarea"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
          </button>
        </div>
        
        <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
          <span 
            className="rounded-full px-2 py-0.5 text-xs font-semibold text-white"
            style={{ backgroundColor: categoryColor }}
          >
            {category}
          </span>
          <span>
            {(() => {
              const dateObj = typeof date === 'string' ? new Date(date) : date;
              return dateObj.toLocaleString('es-ES', {
                dateStyle: 'medium',
                timeStyle: 'short'
              });
            })()}
          </span>
        </div>
      </div>
    </div>
  );
};