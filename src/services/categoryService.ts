// src/services/categoryService.ts
/**
 * Servicio para gestionar categorías
 * Conecta con el backend API en /api/category
 */

import { api } from '@/src/lib/api';
import { Category, CreateCategoryInput, UpdateCategoryInput } from '@/src/lib/types';

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
 * Actualizar una categoría existente
 * PATCH /api/category/[categoryId]
 * Nota: Esto requiere que el backend tenga implementado el endpoint PATCH
 */
export async function updateCategory(
  categoryId: string,
  updates: UpdateCategoryInput
): Promise<Category> {
  try {
    const updatedCategory = await api.patch<Category>(
      `${CATEGORY_ENDPOINT}/${categoryId}`,
      updates
    );
    return updatedCategory;
  } catch (error) {
    console.error(`Error updating category ${categoryId}:`, error);
    throw error;
  }
}

/**
 * Eliminar una categoría
 * DELETE /api/category/[categoryId]
 * Nota: Esto requiere que el backend tenga implementado el endpoint DELETE
 */
export async function deleteCategory(categoryId: string): Promise<void> {
  try {
    await api.delete(`${CATEGORY_ENDPOINT}/${categoryId}`);
  } catch (error) {
    console.error(`Error deleting category ${categoryId}:`, error);
    throw error;
  }
}

/**
 * Obtener una categoría por ID
 * GET /api/category/[categoryId]
 * Nota: Esto requiere que el backend tenga implementado el endpoint GET individual
 */
export async function getCategoryById(categoryId: string): Promise<Category> {
  try {
    const category = await api.get<Category>(`${CATEGORY_ENDPOINT}/${categoryId}`);
    return category;
  } catch (error) {
    console.error(`Error fetching category ${categoryId}:`, error);
    throw error;
  }
}
