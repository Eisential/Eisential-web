// src/services/taskService.ts
/**
 * Servicio para gestionar tareas (CRUD completo)
 * Conecta con el backend API en /api/task
 */

import { api } from '@/src/lib/api';
import { Task, CreateTaskInput, UpdateTaskInput, TaskFilters } from '@/src/lib/types';

const TASK_ENDPOINT = '/api/task';

/**
 * Obtener todas las tareas del usuario autenticado
 * GET /api/task
 */
export async function getAllTasks(filters?: TaskFilters): Promise<Task[]> {
  try {
    const tasks = await api.get<Task[]>(TASK_ENDPOINT);
    
    // Aplicar filtros locales si es necesario
    if (!filters) return tasks;
    
    return tasks.filter(task => {
      if (filters.quadrant && task.quadrant !== filters.quadrant) return false;
      if (filters.categoryId && task.categoryId !== filters.categoryId) return false;
      if (filters.completed !== undefined && task.completed !== filters.completed) return false;
      return true;
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
}

/**
 * Obtener tareas por cuadrante específico
 */
export async function getTasksByQuadrant(quadrant: 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'B'): Promise<Task[]> {
  return getAllTasks({ quadrant });
}

/**
 * Obtener tareas del backlog (sin asignar a cuadrante)
 */
export async function getBacklogTasks(): Promise<Task[]> {
  return getTasksByQuadrant('B');
}

/**
 * Crear una nueva tarea
 * POST /api/task
 */
export async function createTask(taskData: CreateTaskInput): Promise<Task> {
  try {
    const newTask = await api.post<Task>(TASK_ENDPOINT, taskData);
    return newTask;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
}

/**
 * Actualizar una tarea existente (incluyendo moverla entre cuadrantes)
 * PATCH /api/task/[taskId]
 */
export async function updateTask(taskId: string, updates: UpdateTaskInput): Promise<Task> {
  try {
    const updatedTask = await api.patch<Task>(`${TASK_ENDPOINT}/${taskId}`, updates);
    return updatedTask;
  } catch (error) {
    console.error(`Error updating task ${taskId}:`, error);
    throw error;
  }
}

/**
 * Mover una tarea a un cuadrante específico (RF5)
 */
export async function moveTaskToQuadrant(
  taskId: string,
  quadrant: 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'B',
  position?: number
): Promise<Task> {
  return updateTask(taskId, { quadrant, position });
}

/**
 * Marcar una tarea como completada
 */
export async function completeTask(taskId: string): Promise<Task> {
  return updateTask(taskId, {
    completed: true,
    completedAt: new Date().toISOString(),
  });
}

/**
 * Marcar una tarea como no completada
 */
export async function uncompleteTask(taskId: string): Promise<Task> {
  return updateTask(taskId, {
    completed: false,
    completedAt: undefined,
  });
}

/**
 * Eliminar una tarea
 * DELETE /api/task/[taskId]
 */
export async function deleteTask(taskId: string): Promise<void> {
  try {
    await api.delete(`${TASK_ENDPOINT}/${taskId}`);
  } catch (error) {
    console.error(`Error deleting task ${taskId}:`, error);
    throw error;
  }
}

/**
 * Actualizar la posición de múltiples tareas (para drag & drop)
 */
export async function updateTaskPositions(
  updates: Array<{ id: string; position: number; quadrant?: string }>
): Promise<void> {
  try {
    // Actualizar cada tarea individualmente
    // En el futuro, esto podría optimizarse con un endpoint batch
    await Promise.all(
      updates.map(({ id, position, quadrant }) =>
        updateTask(id, { position, quadrant: quadrant as any })
      )
    );
  } catch (error) {
    console.error('Error updating task positions:', error);
    throw error;
  }
}
