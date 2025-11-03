// src/lib/types.ts
/**
 * Tipos TypeScript que coinciden con el schema de Prisma del backend
 */

export interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
  createdAt?: Date;
}

export interface Category {
  id: string;
  name: string;
  color?: string | null;
  userId?: string | null;
  createdAt?: Date | null;
}

export interface Task {
  id: string;
  title: string;
  description?: string | null;
  dueDate?: Date | null;
  quadrant?: string | null;
  position?: number | null;
  completed?: boolean | null;
  completedAt?: Date | null;
  categoryId?: string | null;
  userId?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  category?: Category | null;
}

export interface Notification {
  id: string;
  taskId?: string | null;
  type?: string | null;
  sendAt: Date;
  title: string;
  message: string;
  read?: boolean | null;
  readAt?: Date | null;
  createdAt?: Date | null;
}

// Tipos para crear/actualizar (sin ID ni timestamps automáticos)
export type CreateTaskInput = {
  title: string;
  description?: string;
  dueDate?: Date | string;
  categoryId?: string;
  quadrant?: 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'B'; // Q1-Q4 = cuadrantes, B = backlog
  position?: number;
};

export type UpdateTaskInput = Partial<CreateTaskInput> & {
  completed?: boolean;
  completedAt?: Date | string;
};

export type CreateCategoryInput = {
  name: string;
  color?: string;
};

export type UpdateCategoryInput = Partial<CreateCategoryInput>;

// Tipos de respuesta de la API
export interface ApiResponse<T> {
  data?: T;
  message?: string;
  error?: string;
}

// Tipos para filtros y queries
export interface TaskFilters {
  quadrant?: string;
  categoryId?: string;
  completed?: boolean;
}
