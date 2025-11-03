# Testing Guide - Eisential Web

## 🧪 Configuración de Pruebas

Este proyecto utiliza **Jest** y **React Testing Library** para pruebas unitarias.

## 📦 Dependencias Instaladas

```json
{
  "@testing-library/jest-dom": "^6.1.5",
  "@testing-library/react": "^14.1.2",
  "@testing-library/user-event": "^14.5.1",
  "@types/jest": "^29.5.11",
  "jest": "^29.7.0",
  "jest-environment-jsdom": "^29.7.0"
}
```

## 🚀 Comandos Disponibles

### Ejecutar pruebas en modo watch (desarrollo)
```bash
npm test
```

### Ejecutar pruebas con reporte de cobertura
```bash
npm run test:coverage
```

### Ejecutar pruebas en modo CI (para SonarQube)
```bash
npm run test:ci
```

## 📊 Objetivos de Cobertura

El proyecto está configurado con los siguientes umbrales de cobertura:

- **Branches**: 80%
- **Functions**: 80%
- **Lines**: 80%
- **Statements**: 80%

## 📁 Estructura de Pruebas

```
src/
├── components/
│   ├── __tests__/
│   │   ├── TaskCard.test.tsx
│   │   ├── BacklogPanel.test.tsx
│   │   └── Header.test.tsx
│   └── ...
├── services/
│   ├── __tests__/
│   │   ├── taskService.test.ts
│   │   └── categoryService.test.ts
│   └── ...
└── lib/
    ├── __tests__/
    │   └── utils.test.ts
    └── ...
```

## 🔧 Configuración de SonarQube

El archivo `sonar-project.properties` está configurado para:

1. **Reportar cobertura**: Lee el archivo `coverage/lcov.info`
2. **Excluir archivos de prueba**: No analiza archivos `.test.ts` y `.spec.ts`
3. **Excluir código generado**: Ignora `src/generated/**`

### Ejecutar análisis de SonarQube

```bash
# 1. Ejecutar pruebas con cobertura
npm run test:ci

# 2. Ejecutar análisis de SonarQube
sonar-scanner
```

## ✅ Cobertura Actual

Las pruebas cubren:

- ✅ **Servicios**:
  - `taskService.ts`: CRUD completo de tareas
  - `categoryService.ts`: CRUD completo de categorías

- ✅ **Componentes**:
  - `TaskCard.tsx`: Renderizado y eventos
  - `BacklogPanel.tsx`: Renderizado y estado vacío
  - `Header.tsx`: Renderizado e interacciones

- ✅ **Utilidades**:
  - `utils.ts`: Funciones auxiliares

## 📝 Ejemplo de Prueba

```typescript
import { render, screen } from '@testing-library/react';
import { TaskCard } from '../TaskCard';

describe('TaskCard', () => {
  it('should render task card with title', () => {
    render(<TaskCard title="Test Task" /* ... */ />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });
});
```

## 🐛 Debugging

Para ejecutar pruebas en modo debug:

```bash
node --inspect-brk node_modules/.bin/jest --runInBand
```

Luego conecta el debugger de VS Code con la configuración:

```json
{
  "type": "node",
  "request": "attach",
  "name": "Jest Debug",
  "port": 9229,
  "skipFiles": ["<node_internals>/**"]
}
```

## 📚 Recursos

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Next.js Testing](https://nextjs.org/docs/testing)
