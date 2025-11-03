import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Solo permitir que las rutas pasen - la validación se hace en el cliente
  // El token JWT se valida automáticamente por SessionProvider
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
