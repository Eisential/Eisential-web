import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CreateNewTaskModal } from '../CreateNewTaskModal';

// Mock de taskService
jest.mock('@/src/services/taskService', () => ({
  createTask: jest.fn(() => Promise.resolve({ id: 'new-task-id' })),
}));

describe('CreateNewTaskModal', () => {
  const mockOnClose = jest.fn();
  const mockOnTaskCreated = jest.fn();
  const mockCategories = [
    { id: '1', name: 'Work', color: '#FF0000', userId: 'user-1', createdAt: new Date() },
    { id: '2', name: 'Personal', color: '#00FF00', userId: 'user-1', createdAt: new Date() },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render modal when isOpen is true', () => {
    render(
      <CreateNewTaskModal
        isOpen={true}
        onClose={mockOnClose}
        onTaskCreated={mockOnTaskCreated}
        categories={mockCategories}
      />
    );
    
    expect(screen.getByText(/Nueva Tarea/i)).toBeInTheDocument();
  });

  it('should not render modal when isOpen is false', () => {
    const { container } = render(
      <CreateNewTaskModal
        isOpen={false}
        onClose={mockOnClose}
        onTaskCreated={mockOnTaskCreated}
        categories={mockCategories}
      />
    );
    
    expect(container.firstChild).toBeNull();
  });

  it('should render all form fields', () => {
    render(
      <CreateNewTaskModal
        isOpen={true}
        onClose={mockOnClose}
        onTaskCreated={mockOnTaskCreated}
        categories={mockCategories}
      />
    );
    
    expect(screen.getByLabelText(/Título/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Descripción/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Categoría/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Fecha/i)).toBeInTheDocument();
  });

  it('should call onClose when cancel button is clicked', () => {
    render(
      <CreateNewTaskModal
        isOpen={true}
        onClose={mockOnClose}
        onTaskCreated={mockOnTaskCreated}
        categories={mockCategories}
      />
    );
    
    const cancelButton = screen.getByText(/Cancelar/i);
    fireEvent.click(cancelButton);
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should update title input value', () => {
    render(
      <CreateNewTaskModal
        isOpen={true}
        onClose={mockOnClose}
        onTaskCreated={mockOnTaskCreated}
        categories={mockCategories}
      />
    );
    
    const titleInput = screen.getByLabelText(/Título/i) as HTMLInputElement;
    fireEvent.change(titleInput, { target: { value: 'New Task Title' } });
    
    expect(titleInput.value).toBe('New Task Title');
  });
});
