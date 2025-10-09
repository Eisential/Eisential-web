// src/components/TaskCard.tsx
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// 1. CAMBIAMOS EL NOMBRE DE LAS PROPS PARA QUE NO HAYA CONFLICTO
type Props = {
  id: number;
  title: string;
  category: string;
  date: string;
  categoryColor?: string;
};

export const TaskCard = ({ id, title, category, date, categoryColor = 'bg-gray-400' }: Props) => {
  // 2. USAMOS EL HOOK 'useSortable'
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: id });

  // 3. Creamos los estilos para la animación de arrastre
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    // 4. Conectamos el div principal a dnd-kit
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="relative touch-none rounded-lg border bg-white p-4 shadow-sm" // 'touch-none' para mejor compatibilidad en móviles
    >
      <div className={`absolute left-0 top-0 h-full w-1.5 rounded-l-lg ${categoryColor}`}></div>
      <div className="pl-2">
        <p className="font-semibold text-gray-800">{title}</p>
        <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
          <span className={`rounded-full px-2 py-0.5 text-xs font-semibold text-white ${categoryColor}`}>
            {category}
          </span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};