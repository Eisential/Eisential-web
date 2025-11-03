import React from 'react';
import { render, screen } from '@testing-library/react';
import { EisenhowerMatrix } from '../EisenhowerMatrix';

// Mock de MatrixQuadrant
jest.mock('../MatrixQuadrant', () => ({
  MatrixQuadrant: ({ title, id }: { title: string; id: string }) => (
    <div data-testid={`quadrant-${id}`}>{title}</div>
  ),
}));

// Mock de @dnd-kit
jest.mock('@dnd-kit/core', () => ({
  DndContext: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DragOverlay: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  PointerSensor: jest.fn(),
  useSensor: jest.fn(),
  useSensors: jest.fn(() => []),
}));

jest.mock('@dnd-kit/sortable', () => ({
  SortableContext: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  arrayMove: jest.fn((array) => array),
  verticalListSortingStrategy: {},
}));

describe('EisenhowerMatrix', () => {
  const mockQ1Tasks = [
    {
      id: 'task-1',
      title: 'Urgent and Important',
      quadrant: 'Q1',
      category: 'Work',
      date: '2025-11-10',
      color: '#FF0000',
    },
  ];

  const mockQ2Tasks = [
    {
      id: 'task-2',
      title: 'Not Urgent but Important',
      quadrant: 'Q2',
      category: 'Personal',
      date: '2025-11-11',
      color: '#00FF00',
    },
  ];

  const mockOnTaskClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render all four quadrants', () => {
    render(
      <EisenhowerMatrix
        q1Tasks={mockQ1Tasks}
        q2Tasks={mockQ2Tasks}
        q3Tasks={[]}
        q4Tasks={[]}
        onTaskClick={mockOnTaskClick}
      />
    );
    
    expect(screen.getByTestId('quadrant-Q1')).toBeInTheDocument();
    expect(screen.getByTestId('quadrant-Q2')).toBeInTheDocument();
    expect(screen.getByTestId('quadrant-Q3')).toBeInTheDocument();
    expect(screen.getByTestId('quadrant-Q4')).toBeInTheDocument();
  });

  it('should render quadrant titles correctly', () => {
    render(
      <EisenhowerMatrix
        q1Tasks={[]}
        q2Tasks={[]}
        q3Tasks={[]}
        q4Tasks={[]}
        onTaskClick={mockOnTaskClick}
      />
    );
    
    expect(screen.getByText('Hacer')).toBeInTheDocument();
    expect(screen.getByText('Programar')).toBeInTheDocument();
    expect(screen.getByText('Delegar')).toBeInTheDocument();
    expect(screen.getByText('Minimizar')).toBeInTheDocument();
  });

  it('should render with empty tasks', () => {
    render(
      <EisenhowerMatrix
        q1Tasks={[]}
        q2Tasks={[]}
        q3Tasks={[]}
        q4Tasks={[]}
        onTaskClick={mockOnTaskClick}
      />
    );
    
    expect(screen.getByTestId('quadrant-Q1')).toBeInTheDocument();
    expect(screen.getByTestId('quadrant-Q2')).toBeInTheDocument();
    expect(screen.getByTestId('quadrant-Q3')).toBeInTheDocument();
    expect(screen.getByTestId('quadrant-Q4')).toBeInTheDocument();
  });

  it('should render matrix title', () => {
    render(
      <EisenhowerMatrix
        q1Tasks={[]}
        q2Tasks={[]}
        q3Tasks={[]}
        q4Tasks={[]}
        onTaskClick={mockOnTaskClick}
      />
    );
    
    expect(screen.getByText('Matriz Eisenhower')).toBeInTheDocument();
  });
});
