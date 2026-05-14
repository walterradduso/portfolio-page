# Portfolio Page — walterradduso.dev

Portfolio personal construido como SPA con Next.js 16 App Router.

## Tech Stack

- **Framework:** Next.js 16.2.6 (App Router, Turbopack)
- **UI:** React 19.2.6, TypeScript 6.0.3
- **Estilos:** Tailwind CSS 4.3 (CSS-first config en `src/styles/globals.css` con `@theme` y `@custom-variant dark`)
- **Package Manager:** pnpm 11
- **Node:** v20.14.0 (ver `.nvmrc`)

## Comandos

- `pnpm dev` — servidor de desarrollo
- `pnpm build` — build de producción
- `pnpm lint` / `pnpm lint-fix` — linting
- `pnpm prettier-format` — formateo de código
- `pnpm clean` — borra `node_modules`, `pnpm-lock.yaml`, `.next`, `out`, caches de TS/ESLint/SWC/Turbo

## Estructura del Proyecto

```
src/
  app/
    components/    # Componentes de sección (Home, AboutMe, Resume, Portfolio, Skills, Footer, Navigation)
    fonts/         # Configuración de Poppins (Google Fonts)
    models/        # Interfaces TypeScript (Repository, UpdatedRepository)
    services/      # GitHub API (repositories.service.ts)
    layout.tsx     # Root layout con metadata y analytics
    page.tsx       # Página principal (SPA)
  components/      # Componentes reutilizables (Button, Link, Pill, Timeline, Title, ThemeSwitcher, etc.)
  contexts/        # React Context (ActiveSection, Theme via next-themes)
  hooks/           # useIntersectionObserver
  utils/           # scrollIntoView, monthPasses, capitalizeFirstLetter
  constants/       # languageIcon (mapeo tech→iconos), sectionThreshold
  styles/          # globals.css (directivas Tailwind)
public/
  images/          # Fotos de perfil, background, logos de empresas
  resume-*.pdf     # CV descargable
```

## Arquitectura

- **SPA con secciones:** Home → AboutMe → Resume → Portfolio → Skills → Footer
- **Server/Client Components:** Portfolio es un async server component que consume la GitHub API. Los componentes interactivos usan `'use client'`.
- **Dark mode:** next-themes con estrategia `class`
- **Navegación:** Intersection Observer detecta la sección visible y actualiza el nav (ActiveSectionContext)
- **GitHub API:** Requiere `GITHUB_TOKEN` en `.env.local` (ver `.env.example`)

## Convenciones de Código

- **Linting:** ESLint 9 (flat config) + Prettier + tailwindcss; reglas declaradas en `eslint.config.mjs`
- **Formato:** 140 chars max, single quotes, trailing commas, tab width 2
- **Path alias:** `@/*` → `./src/*`
- **Exports:** Barrel exports con `index.ts` en cada componente
- **Props:** Siempre tipadas con interfaces TypeScript

## Git Flow

- **Ramas principales:** `main` (producción), `develop` (integración)
- **Prefijos:** `feature/`, `bugfix/`, `release/`, `hotfix/`
- **Versionado:** Semantic Versioning (actual: 1.1.3)
- **Changelog:** `CHANGELOG.md` con formato Keep a Changelog

## Deployment

- **Plataforma:** Vercel

## Dependencias Clave

- `next-themes` — dark/light mode
- `react-icons` — iconos (bs, si, fa, md, ri, gr)
- `react-type-animation` — animación de texto en Home
- `clsx` — clases CSS condicionales

## Notas

- No hay tests (removidos en v1.1.2)
- No hay CI/CD configurado (sin GitHub Actions)
- Husky fue removido en v1.1.2
