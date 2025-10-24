// src/components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

interface User {
  id: string;
  email?: string | null;
  name?: string | null;
  image?: string | null;
}

type HeaderProps = {
  user?: User;
  onNewTaskClick: () => void;
  onCategoriesClick: () => void;
};

export const Header = ({ user, onNewTaskClick, onCategoriesClick }: HeaderProps) => {
  const handleLogout = async () => {
    // Usar signOut de next-auth con callbackUrl personalizado
    await signOut({ 
      callbackUrl: '/',
      redirect: true 
    });
  };

  return (
    <header className="flex h-16 items-center justify-between border-b px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#28436B' }}>
      <div className="flex items-center gap-3">
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <Image 
            src="/images/logo.jpeg"
            alt="Eisential Logo"
            width={40}
            height={40}
            className="rounded-lg transition-transform group-hover:scale-105"
          />
          <span className="text-xl font-bold transition-colors" style={{ color: '#8EEB36' }}>
            Eisential
          </span>
        </Link>
      </div>
      
      <div className="flex items-center gap-4">
        <button
          onClick={onCategoriesClick}
          className="rounded-lg px-4 py-2 text-sm font-medium text-white border transition-all hover:scale-105"
          style={{ borderColor: '#36EBA6', backgroundColor: 'transparent' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#36EBA6'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Categorias
        </button>
        <button
          onClick={onNewTaskClick}
          className="rounded-lg px-4 py-2 text-sm font-medium transition-all hover:scale-105"
          style={{ backgroundColor: '#36EBE4', color: '#28436B' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#36EBA6'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#36EBE4'}
        >
          + Nueva Tarea
        </button>
        
        {/* Mostrar info del usuario */}
        {user && (
          <div className="flex items-center gap-3 pl-4" style={{ borderLeft: '1px solid #36EBA6' }}>
            <div className="text-right">
              <p className="text-sm font-medium" style={{ color: '#8EEB36' }}>{user.name || 'Usuario'}</p>
              <p className="text-xs" style={{ color: '#36EBE4' }}>{user.email}</p>
            </div>
            {user.image && (
              <Image
                src={user.image}
                alt={user.name || 'User'}
                width={40}
                height={40}
                className="rounded-full border-2"
                style={{ borderColor: '#8EEB36' }}
              />
            )}
            <button
              onClick={handleLogout}
              className="ml-2 text-sm transition-colors hover:scale-110"
              style={{ color: '#36EBE4' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FF6B6B'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#36EBE4'}
              title="Cerrar sesión"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};