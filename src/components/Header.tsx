// src/components/Header.tsx
'use client';

import Link from 'next/link';

// 1. Añadimos la nueva función al tipo de props
type HeaderProps = {
  onNewTaskClick: () => void;
  onCategoriesClick: () => void;
};

// 2. Recibimos ambas funciones
export const Header = ({ onNewTaskClick, onCategoriesClick }: HeaderProps) => {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <Link href="/dashboard" className="text-xl font-bold">
          Eisential
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {/* 3. Conectamos el onClick al botón de Categories */}
        <button
          onClick={onCategoriesClick}
          className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100"
        >
          Categories
        </button>
        <button
          onClick={onNewTaskClick}
          className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
        >
          + New Task
        </button>
      </div>
    </header>
  );
};