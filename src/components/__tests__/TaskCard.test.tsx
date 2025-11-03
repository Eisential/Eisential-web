import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskCard } from '../TaskCard';

// Mock de @dnd-kit/sortable
jest.mock('@dnd-kit/sortable', () => ({
  useSortable: () => ({
    attributes: {},
    listeners: {},
    setNodeRef: jest.fn(),
    transform: null,
    transition: null,
    isDragging: false,
  }),
}));

describe('TaskCard', () => {
  const defaultProps = {
    id: 'task-1',
    title: 'Test Task',
    category: 'Work',
    date: '2025-11-10',
    categoryColor: '#FF0000',
    onClick: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render task card with title', () => {
    render(<TaskCard {...defaultProps} />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  it('should render task card with category', () => {
    render(<TaskCard {...defaultProps} />);
    expect(screen.getByText('Work')).toBeInTheDocument();
  });

  it('should render task card with date', () => {
    render(<TaskCard {...defaultProps} />);
    expect(screen.getByText('2025-11-10')).toBeInTheDocument();
  });

  it('should call onClick when edit button is clicked', () => {
    render(<TaskCard {...defaultProps} />);
    const editButton = screen.getByRole('button', { name: /editar tarea/i });
    fireEvent.click(editButton);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('should stop propagation when clicking edit button', () => {
    render(<TaskCard {...defaultProps} />);
    const editButton = screen.getByRole('button', { name: /editar tarea/i });
    const clickEvent = new MouseEvent('click', { bubbles: true });
    const stopPropagationSpy = jest.spyOn(clickEvent, 'stopPropagation');
    
    fireEvent(editButton, clickEvent);
    
    expect(stopPropagationSpy).toHaveBeenCalled();
  });

  it('should apply category color', () => {
    const { container } = render(<TaskCard {...defaultProps} />);
    const colorBar = container.querySelector('[style*="background-color"]');
    expect(colorBar).toBeTruthy();
  });
});
