'use client';

import { SessionProvider } from 'next-auth/react';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // Con rewrites, usamos la ruta local que se proxea al backend
  return (
    <SessionProvider basePath="/api/auth">
      {children}
    </SessionProvider>
  );
};
