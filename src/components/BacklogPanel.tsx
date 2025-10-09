// src/components/BacklogPanel.tsx

import { TaskCard } from './TaskCard';
import { Task } from '@/src/app/dashboard/page';

type BacklogPanelProps = {
  tasks: Task[];
};

export const BacklogPanel = ({ tasks }: BacklogPanelProps) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <h2 className="text-xl font-bold">Backlog</h2>
      <div className="mt-4 space-y-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id} // 👈 AÑADE ESTA LÍNEA
            title={task.title}
            category={task.category}
            date={task.date}
            categoryColor={task.color}
          />
        ))}
      </div>
    </div>
  );
};