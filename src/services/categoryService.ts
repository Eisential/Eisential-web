// src/services/categoryService.ts
/**
 * Servicio para gestionar categorías
 * Conecta con el backend API en /api/category
 */

import { api } from '@/src/lib/api';
import { Category, CreateCategoryInput } from '@/src/lib/types';

const CATEGORY_ENDPOINT = '/api/category';

/**
 * Obtener todas las categorías del usuario autenticado
 * GET /api/category
 */
export async function getAllCategories(): Promise<Category[]> {
  try {
    const categories = await api.get<Category[]>(CATEGORY_ENDPOINT);
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

/**
 * Crear una nueva categoría
 * POST /api/category
 */
export async function createCategory(categoryData: CreateCategoryInput): Promise<Category> {
  try {
    const newCategory = await api.post<Category>(CATEGORY_ENDPOINT, categoryData);
    return newCategory;
  } catch (error) {
    console.error('Error creating category:', error);
    throw error;
  }
}

/**
 * Eliminar una categoría
 * DELETE /api/category/[categoryId]
 */
export async function deleteCategory(categoryId: string): Promise<void> {
  try {
    await api.delete(`${CATEGORY_ENDPOINT}/${categoryId}`);
  } catch (error) {
    console.error(`Error deleting category ${categoryId}:`, error);
    throw error;
  }
}
