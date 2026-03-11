# Portfolio Page — walterradduso.dev

Portfolio personal construido como SPA con Next.js 14 App Router.

## Tech Stack

- **Framework:** Next.js 14.2.6 (App Router)
- **UI:** React 18.3.1, TypeScript 5.5.4
- **Estilos:** Tailwind CSS 3.4.10 + Sass 1.77.8
- **Package Manager:** pnpm
- **Node:** v20.14.0 (ver `.nvmrc`)

## Comandos

- `pnpm dev` — servidor de desarrollo
- `pnpm build` — build de producción
- `pnpm lint` / `pnpm lint-fix` — linting
- `pnpm prettier-format` — formateo de código

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

- **Linting:** ESLint airbnb-typescript + Prettier + tailwindcss
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
- **Analytics:** @vercel/analytics integrado en layout.tsx

## Dependencias Clave

- `next-themes` — dark/light mode
- `react-icons` — iconos (bs, si, fa, md, ri, gr)
- `react-type-animation` — animación de texto en Home
- `clsx` — clases CSS condicionales

## Notas

- No hay tests (removidos en v1.1.2)
- No hay CI/CD configurado (sin GitHub Actions)
- Husky fue removido en v1.1.2
