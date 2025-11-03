# Eisential Frontend — Task Manager App  

> *Organiza lo urgente, enfócate en lo esencial.*  
> Aplicación web de gestión de tareas basada en la *Matriz de Eisenhower*.  

---

## 📌 Descripción  
Eisential es una aplicación web que ayuda a los usuarios a *priorizar tareas* según su nivel de *urgencia* e *importancia*.  
Permite crear, categorizar y organizar tareas en un tablero visual de cuatro cuadrantes con *drag & drop*, además de ofrecer búsqueda, filtros, autenticación y notificaciones.  

---

## ✨ Funcionalidades principales  
- ✅ *Autenticación de usuarios* (OAuth con Google/GitHub).  
- ✅ *CRUD de tareas*: crear, editar, eliminar y marcar como completadas.  
- ✅ *Backlog general* para ver todas las tareas.  
- ✅ *Organización visual* en la matriz de Eisenhower (4 cuadrantes).  
- ✅ *Categorías personalizadas* para clasificar tareas.  
- ✅ *Filtros y búsqueda* por texto y categoría.  
- ✅ *Drag & Drop* para reorganizar tareas entre cuadrantes.

---

## 🛠 Tech Stack  

### Core
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **UI Library**: React 19

### Styling & Components
- **CSS Framework**: [TailwindCSS](https://tailwindcss.com/)
- **Drag & Drop**: [@dnd-kit](https://dndkit.com/)

### State & Data
- **API Client**: Custom fetch wrapper
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) (client)

### Testing & Quality
- **Testing Framework**: Jest + Testing Library
- **Code Quality**: SonarQube
- **Coverage**: 41 tests (100% passing)

---

## 📋 Requisitos Previos

- Node.js 18+
- npm o yarn
- Backend API ejecutándose (ver [Eisential-back](../Eisential-back/README.md))

---

## � Instalación

### 1. Clonar el repositorio

```bash
git clone <repository-url>
cd Eisential-web
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Copia el archivo de ejemplo y configura tus variables:

```bash
cp .env.example .env.local
```

Edita `.env.local`:

```env
# URL del backend API (puerto 3000 en desarrollo local)
NEXT_PUBLIC_API_URL="http://localhost:3000"

# URL del frontend (este proyecto, puerto 3001)
NEXTAUTH_URL="http://localhost:3001"

# Entorno
NODE_ENV="development"
```

### 4. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3001`

**⚠️ IMPORTANTE**: El backend debe estar ejecutándose en `http://localhost:3000`

---

## 🧪 Testing

Este proyecto incluye 41 tests unitarios que cubren componentes, servicios y utilidades.

### Ejecutar tests

```bash
# Modo watch (desarrollo)
npm test

# Ejecución única con cobertura
npm run test:coverage

# Modo CI (para integración continua)
npm run test:ci
```

### Cobertura de Tests

**Estado actual**: 41/41 tests pasando ✅

Para más detalles, consulta [TESTING.md](./TESTING.md)

---

## 📁 Estructura del Proyecto

```
Eisential-web/
├── src/
│   ├── app/
│   │   ├── dashboard/              # Dashboard principal
│   │   │   └── page.tsx           # Página del dashboard
│   │   ├── auth/                   # Páginas de autenticación
│   │   ├── api/                    # API routes (si hay)
│   │   ├── globals.css            # Estilos globales
│   │   └── layout.tsx             # Layout principal
│   ├── components/
│   │   ├── __tests__/             # ✅ Tests de componentes
│   │   ├── AuthProvider.tsx       # Provider de autenticación
│   │   ├── BacklogPanel.tsx       # Panel de backlog
│   │   ├── CreateNewTaskModal.tsx # Modal crear tarea
│   │   ├── EditTaskModal.tsx      # Modal editar tarea
│   │   ├── EisenhowerMatrix.tsx   # Matriz de Eisenhower
│   │   ├── Header.tsx             # Header de la app
│   │   ├── ManageCategoriesModal.tsx # Modal categorías
│   │   ├── MatrixQuadrant.tsx     # Cuadrante individual
│   │   └── TaskCard.tsx           # Tarjeta de tarea
│   ├── services/
│   │   ├── __tests__/             # ✅ Tests de servicios
│   │   ├── taskService.ts         # Servicio de tareas
│   │   └── categoryService.ts     # Servicio de categorías
│   ├── lib/
│   │   ├── __tests__/             # ✅ Tests de utilidades
│   │   ├── api.ts                 # Cliente HTTP
│   │   ├── types.ts               # Tipos TypeScript
│   │   └── utils.ts               # Funciones utilidad
│   └── types/
│       ├── jest-dom.d.ts          # Tipos de testing
│       └── next-auth.d.ts         # Tipos de NextAuth
├── public/
│   └── images/                     # Imágenes estáticas
├── jest.config.js                  # Configuración Jest
├── jest.setup.js                   # Setup de tests
├── tailwind.config.js              # Configuración Tailwind
├── next.config.ts                  # Configuración Next.js
└── tsconfig.json                   # Configuración TypeScript
```

---

## 🎨 Componentes Principales

### EisenhowerMatrix
Matriz visual de 4 cuadrantes con drag & drop:
- **Q1**: Hacer (Urgente e Importante) - Rojo
- **Q2**: Programar (No Urgente pero Importante) - Verde Lima
- **Q3**: Delegar (Urgente pero No Importante) - Amarillo
- **Q4**: Minimizar (Ni Urgente ni Importante) - Verde Menta

### TaskCard
Tarjeta de tarea con:
- Título y descripción
- Categoría con color
- Fecha de vencimiento
- Estado (completada/pendiente)
- Acciones (editar, eliminar)

### BacklogPanel
Panel lateral con todas las tareas sin asignar a cuadrantes.

---

## 🔌 Integración con Backend

El frontend se comunica con el backend mediante:

### API Client (`src/lib/api.ts`)
```typescript
// GET request
const tasks = await api.get<Task[]>('/api/task');

// POST request
const newTask = await api.post<Task>('/api/task', taskData);

// PATCH request
const updated = await api.patch<Task>('/api/task/123', updates);

// DELETE request
await api.delete('/api/task/123');
```

### Servicios

**TaskService** (`src/services/taskService.ts`)
- `getAllTasks()` - Obtener todas las tareas
- `createTask(data)` - Crear nueva tarea
- `updateTask(id, data)` - Actualizar tarea
- `deleteTask(id)` - Eliminar tarea
- `moveTaskToQuadrant(id, quadrant)` - Mover a cuadrante
- `completeTask(id)` - Marcar como completada
- `uncompleteTask(id)` - Desmarcar completada

**CategoryService** (`src/services/categoryService.ts`)
- `getAllCategories()` - Obtener categorías
- `createCategory(data)` - Crear categoría
- `deleteCategory(id)` - Eliminar categoría

---

## 🔒 Autenticación

El proyecto usa NextAuth.js para autenticación con OAuth:

### Flujo de autenticación:
1. Usuario hace clic en "Iniciar Sesión"
2. Redirige a `/api/auth/signin` del backend
3. Selecciona provider (Google/GitHub)
4. OAuth callback
5. Sesión creada, redirige al dashboard

---

## 🎯 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo (puerto 3001)
- `npm run build` - Construye para producción
- `npm start` - Inicia servidor de producción
- `npm test` - Ejecuta tests en modo watch
- `npm run test:coverage` - Tests con reporte de cobertura
- `npm run test:ci` - Tests para CI/CD
- `npm run lint` - Ejecuta linter

---

## 🐛 Troubleshooting

### Error: "Failed to fetch" al hacer requests
- Verifica que el backend esté ejecutándose en `http://localhost:3000`
- Asegúrate de que `NEXT_PUBLIC_API_URL` esté configurado correctamente
- Revisa que el backend tenga CORS configurado para `http://localhost:3001`

### Error de autenticación
- Verifica que el backend tenga las credenciales OAuth configuradas
- Asegúrate de que `NEXTAUTH_URL` coincida con la URL del frontend

### Tests fallan
- Ejecuta `npm install` para asegurar dependencias
- Verifica que no haya puertos en uso
- Limpia cache: `npm test -- --clearCache`

### Drag & Drop no funciona
- Asegúrate de que las tareas tengan un `id` único
- Verifica que el componente esté dentro de `<DndContext>`

---

## 📄 Licencia

Este proyecto es privado y confidencial.

---

## 👥 Equipo

Desarrollado por el equipo de Eisential

---

**Notas importantes:**
- El frontend depende completamente del backend para funcionar
- Asegúrate de tener el backend ejecutándose antes de iniciar el frontend
- Para más información sobre el backend, consulta [Eisential-back/README.md](../Eisential-back/README.md)
- Para información detallada sobre testing, consulta [TESTING.md](./TESTING.md)
