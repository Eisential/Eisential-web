// src/lib/types.ts
/**
 * Tipos TypeScript que coinciden con el schema de Prisma del backend
 */

export interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  email_verified?: Date | null;
  image?: string | null;
  created_at?: Date;
}

export interface Category {
  id: string;
  name: string;
  color?: string | null;
  user_id?: string | null;
  created_at?: Date | null;
}

export interface Task {
  id: string;
  title: string;
  description?: string | null;
  due_date?: Date | null;
  quadrant?: string | null;
  position?: number | null;
  completed?: boolean | null;
  completed_at?: Date | null;
  category_id?: string | null;
  user_id?: string | null;
  created_at?: Date | null;
  updated_at?: Date | null;
  category?: Category | null;
}

export interface Notification {
  id: string;
  task_id?: string | null;
  type?: string | null;
  send_at: Date;
  title: string;
  message: string;
  read?: boolean | null;
  read_at?: Date | null;
  created_at?: Date | null;
}

// Tipos para crear/actualizar (sin ID ni timestamps automáticos)
export type CreateTaskInput = {
  title: string;
  description?: string;
  due_date?: Date | string;
  category_id?: string;
  quadrant?: 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'B'; // Q1-Q4 = cuadrantes, B = backlog
  position?: number;
};

export type UpdateTaskInput = Partial<CreateTaskInput> & {
  completed?: boolean;
  completed_at?: Date | string;
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
  category_id?: string;
  completed?: boolean;
}
