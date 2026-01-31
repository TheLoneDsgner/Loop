# Project Overview

This is a React application built with Vite. It uses React Router for routing and includes a component library with `Button`, `NavBar`, `Features`, and `Hero` components. The project is set up with ESLint for linting and Vitest for testing. It also uses `lucide-react` for icons.

# Building and Running

## Development

To run the development server, use the following command:

```bash
npm run dev
```

## Building

To build the application for production, use the following command:

```bash
npm run build
```

## Testing

To run the tests, use the following command:

```bash
npm test
```

# Development Conventions

## Linting

The project uses ESLint to enforce code quality. To run the linter, use the following command:

```bash
npm run lint
```

## Components

Reusable components are located in the `src/components` directory. When creating new components, follow the existing structure and use CSS modules for styling.

## Styling

The project uses a combination of global CSS files (`src/index.css`, `src/App.css`) and CSS modules for component-specific styles. When creating new components, prefer CSS modules to avoid style conflicts.

## Additional Coding Preferences

-Do not use semicolon for any Javascript/Typescript.
-Do not use Tailwind classes in component template.
-Alway use colors from variable in the root file.
-Keep project dependecies minimal.
-Use relative imports and Not a path alias.

# Dependencies

- **React**: ^19.2.0
- **React Router**: ^7.12.0
- **Vite**: ^7.2.4
- **Vitest**: ^4.0.18
- **ESLint**: ^9.39.1
- **lucide-react**: ^0.562.0