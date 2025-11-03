// src/lib/api.ts
/**
 * Cliente API genérico para comunicarse con el backend
 * Maneja autenticación, errores y transformación de datos
 */

// En desarrollo, usamos rewrites de Next.js para redireccionar a localhost:3000
// En producción, ambos estarán en el mismo servidor
const API_BASE_URL = typeof window !== 'undefined' ? '' : (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000');

export class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

interface RequestOptions extends RequestInit {
  requiresAuth?: boolean;
}

/**
 * Función genérica para hacer peticiones HTTP
 */
export async function apiRequest<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { requiresAuth = true, ...fetchOptions } = options;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...fetchOptions.headers,
  };

  // Si requiere autenticación, agregamos el token (NextAuth lo maneja automáticamente con cookies)
  // En Next.js, las cookies de sesión se envían automáticamente si usamos fetch desde el servidor
  // Para el cliente, necesitamos usar getSession() o middleware

  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      headers,
      credentials: 'include', // Importante para enviar cookies de sesión
    });

    // Manejo de respuestas sin contenido (204 No Content)
    if (response.status === 204) {
      return null as T;
    }

    // Intentar parsear el JSON
    let data;
    try {
      data = await response.json();
    } catch {
      // Si no es JSON, retornar el texto
      data = await response.text();
    }

    // Si la respuesta no es exitosa, lanzar error
    if (!response.ok) {
      const errorMessage = data?.message || `Error ${response.status}: ${response.statusText}`;
      console.error('API Error:', {
        status: response.status,
        statusText: response.statusText,
        url,
        data,
      });
      throw new ApiError(
        response.status,
        errorMessage,
        data
      );
    }

    return data as T;
  } catch (error) {
    // Si es un ApiError, lo relanzamos
    if (error instanceof ApiError) {
      throw error;
    }

    // Si es un error de red u otro
    if (error instanceof Error) {
      throw new ApiError(500, `Network error: ${error.message}`);
    }

    throw new ApiError(500, 'Unknown error occurred');
  }
}

/**
 * Métodos HTTP convenientes
 */
export const api = {
  get: <T>(endpoint: string, options?: RequestOptions) =>
    apiRequest<T>(endpoint, { ...options, method: 'GET' }),

  post: <T>(endpoint: string, data?: any, options?: RequestOptions) =>
    apiRequest<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    }),

  patch: <T>(endpoint: string, data?: any, options?: RequestOptions) =>
    apiRequest<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(data),
    }),

  put: <T>(endpoint: string, data?: any, options?: RequestOptions) =>
    apiRequest<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  delete: <T>(endpoint: string, options?: RequestOptions) =>
    apiRequest<T>(endpoint, { ...options, method: 'DELETE' }),
};
