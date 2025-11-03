import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

describe('Header', () => {
  const mockUser = {
    id: 'user-123',
    name: 'John Doe',
    email: 'john@example.com',
    image: 'https://example.com/avatar.jpg',
  };

  const mockOnNewTaskClick = jest.fn();
  const mockOnCategoriesClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render header with user name', () => {
    render(
      <Header
        user={mockUser}
        onNewTaskClick={mockOnNewTaskClick}
        onCategoriesClick={mockOnCategoriesClick}
      />
    );
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('should render "Nueva Tarea" button', () => {
    render(
      <Header
        user={mockUser}
        onNewTaskClick={mockOnNewTaskClick}
        onCategoriesClick={mockOnCategoriesClick}
      />
    );
    expect(screen.getByText('+ Nueva Tarea')).toBeInTheDocument();
  });

  it('should render "Categorias" button', () => {
    render(
      <Header
        user={mockUser}
        onNewTaskClick={mockOnNewTaskClick}
        onCategoriesClick={mockOnCategoriesClick}
      />
    );
    expect(screen.getByText('Categorias')).toBeInTheDocument();
  });

  it('should call onNewTaskClick when Nueva Tarea button is clicked', () => {
    render(
      <Header
        user={mockUser}
        onNewTaskClick={mockOnNewTaskClick}
        onCategoriesClick={mockOnCategoriesClick}
      />
    );
    const button = screen.getByText('+ Nueva Tarea');
    button.click();
    expect(mockOnNewTaskClick).toHaveBeenCalledTimes(1);
  });

  it('should call onCategoriesClick when Categorias button is clicked', () => {
    render(
      <Header
        user={mockUser}
        onNewTaskClick={mockOnNewTaskClick}
        onCategoriesClick={mockOnCategoriesClick}
      />
    );
    const button = screen.getByText('Categorias');
    button.click();
    expect(mockOnCategoriesClick).toHaveBeenCalledTimes(1);
  });
});
