// src/app/page.tsx
import { Suspense } from "react";
import { LoginCard } from "@/src/components/LoginCard";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <Suspense fallback={
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      }>
        <LoginCard />
      </Suspense>
    </main>
  );
}