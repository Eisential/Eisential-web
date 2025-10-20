# Eisential — Task Manager App  

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
- ✅ *Notificaciones de vencimiento* para tareas próximas.  

---

## 🛠 Tecnologías utilizadas  
- *Frontend:* [Next.js 14](https://nextjs.org/) (React + TypeScript)  
- *UI:* [TailwindCSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)  
- *Drag & Drop:* [@dnd-kit](https://dndkit.com/)  
- *Estado y datos:* React Query + Zustand  
- *Backend/API:* Next.js Route Handlers (REST)  
- *Base de datos:* PostgreSQL  
- *ORM:* [Prisma](https://www.prisma.io/)  
- *Autenticación:* [NextAuth](https://next-auth.js.org/)  
- *Calidad de código:* SonarQube

---
##Cambios realizados 1.1 (Diego)

Se hizo un cambios en el codigo "TaskCard.tsx" para que permita tener un checkbox en las TaskCards
También se implementó la logica para que pueda hacerse el cambio entre completado y pendiente y se hizo una primera versión del código para cambiar el estado de una taskCard dentro de la base de datos

