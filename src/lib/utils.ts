// src/lib/utils.ts

/**
 * Combina clases de CSS, filtrando valores falsy
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ');
}

/**
 * Formatea una fecha a un string legible
 * @param date - La fecha a formatear
 * @returns String formateado o 'Invalid Date' si la fecha no es válida
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(dateObj.getTime())) {
    return 'Invalid Date';
  }
  
  return dateObj.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
