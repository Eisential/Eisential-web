import React from 'react';
import { render, screen } from '@testing-library/react';
import { BacklogPanel } from '../BacklogPanel';

// Mock de @dnd-kit
jest.mock('@dnd-kit/core', () => ({
  useDroppable: () => ({
    setNodeRef: jest.fn(),
    isOver: false,
  }),
}));

jest.mock('@dnd-kit/sortable', () => ({
  SortableContext: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  verticalListSortingStrategy: {},
}));

jest.mock('../TaskCard', () => ({
  TaskCard: ({ title }: { title: string }) => <div>{title}</div>,
}));

describe('BacklogPanel', () => {
  const mockTasks = [
    {
      id: 'task-1',
      title: 'Task 1',
      category: 'Work',
      date: '2025-11-10',
      color: '#FF0000',
      quadrant: 'B',
    },
    {
      id: 'task-2',
      title: 'Task 2',
      category: 'Personal',
      date: '2025-11-11',
      color: '#00FF00',
      quadrant: 'B',
    },
  ];

  const mockOnTaskClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render backlog panel with title', () => {
    render(<BacklogPanel tasks={mockTasks} onTaskClick={mockOnTaskClick} />);
    expect(screen.getByText('Backlog')).toBeInTheDocument();
  });

  it('should render all tasks', () => {
    render(<BacklogPanel tasks={mockTasks} onTaskClick={mockOnTaskClick} />);
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  it('should show empty state when no tasks', () => {
    render(<BacklogPanel tasks={[]} onTaskClick={mockOnTaskClick} />);
    expect(screen.getByText('No hay tareas en esta categoría')).toBeInTheDocument();
  });

  it('should display task count in filter', () => {
    render(<BacklogPanel tasks={mockTasks} onTaskClick={mockOnTaskClick} />);
    expect(screen.getByText(/Todos \(2\)/)).toBeInTheDocument();
  });
});
