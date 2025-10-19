// src/components/BacklogPanel.tsx
'use client';

import { useState, useMemo } from 'react';
import { TaskCard } from './TaskCard';
import { Task } from '@/src/app/dashboard/page';

type BacklogPanelProps = {
  tasks: Task[];
};

export const BacklogPanel = ({ tasks }: BacklogPanelProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // Obtener categorías únicas de las tareas
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(tasks.map(task => task.category)));
    return uniqueCategories;
  }, [tasks]);

  // Filtrar tareas según el filtro seleccionado
  const filteredTasks = useMemo(() => {
    if (selectedFilter === 'all') {
      return tasks;
    }
    return tasks.filter(task => task.category === selectedFilter);
  }, [tasks, selectedFilter]);

  return (
    <div className="rounded-lg bg-white p-4 shadow border-2" style={{ borderColor: '#1E9B70' }}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold" style={{ color: '#5FA822' }}>Backlog</h2>
        
        {/* Filtro de categorías - ComboBox */}
        <div className="flex items-center gap-2">
          <label htmlFor="category-filter" className="text-sm font-medium" style={{ color: '#1A2D4A' }}>
            Filtrar:
          </label>
          <select
            id="category-filter"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="rounded-lg px-3 py-2 text-sm font-medium focus:outline-none cursor-pointer transition-colors"
            style={{
              borderColor: '#1E9B96',
              color: '#1A2D4A',
              backgroundColor: 'white',
              border: '2px solid #1E9B96'
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = '#5FA822'}
            onBlur={(e) => e.currentTarget.style.borderColor = '#1E9B96'}
          >
            <option value="all">Todos ({tasks.length})</option>
            {categories.map(category => {
              const categoryTasks = tasks.filter(t => t.category === category);
              return (
                <option key={category} value={category}>
                  {category} ({categoryTasks.length})
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* Lista de tareas filtradas */}
      <div className="mt-4 space-y-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              category={task.category}
              date={task.date}
              categoryColor={task.color}
            />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-sm" style={{ color: '#1E9B96' }}>
              No hay tareas en esta categoría
            </p>
          </div>
        )}
      </div>
    </div>
  );
};