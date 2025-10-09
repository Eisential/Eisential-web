// src/components/auth/LoginCard.tsx

import Image from 'next/image';
import Link from 'next/link';

export const LoginCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
      {/* Contenedor del Logo y Título */}
      <div className="flex flex-col items-center mb-6">
        <Image 
          src="/images/logo.jpeg" // La ruta a tu logo en la carpeta public
          alt="Eisential Logo"
          width={64} // Ajusta el tamaño según tu logo
          height={64}
        />
        <h1 className="text-2xl font-bold text-gray-800 mt-4">Eisential</h1>
        <p className="text-gray-500 mt-1">
          Gestiona tus tareas con la Matriz de Eisenhower
        </p>
      </div>

      {/* Botones de Autenticación */}
      <div className="flex flex-col gap-4">
        <button className="flex items-center justify-center gap-2 w-full bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
          {/* Aquí iría el ícono de Google */}
          Continuar con Google
        </button>
        <button className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors">
          {/* Aquí iría el ícono de GitHub */}
          Continuar con GitHub
        </button>
      </div>

      {/* Términos de Servicio */}
      <p className="text-xs text-gray-400 mt-6">
        Al continuar, aceptas nuestros{' '}
        <Link href="/terms" className="underline hover:text-gray-600">
          términos de servicio
        </Link>
        .
      </p>
    </div>
  );
};