# Portfolio Page — walterradduso.dev

Portfolio personal construido como SPA con Next.js 16 App Router. Sitio de venta con foco en conseguir oportunidades senior de frontend.

## Tech Stack

- **Framework:** Next.js 16.2.6 (App Router, Turbopack)
- **UI:** React 19.2.6, TypeScript 6.0.3
- **Estilos:** Tailwind CSS 4.3 (CSS-first config en `src/styles/globals.css` con `@theme inline` y `@custom-variant dark`) + `tw-animate-css`
- **Design system:** shadcn/ui (new-york style, base `zinc`, accent azul `#2563EB`)
- **Tipografías:** Archivo (display) + Space Grotesk (body) — `next/font/google`
- **Animaciones:** `framer-motion` (con guard `prefers-reduced-motion`)
- **Iconos:** `lucide-react` + inline SVGs de brand icons en `src/components/icons/`
- **Package Manager:** pnpm 11 (con `verifyDepsBeforeRun: false` y `@parcel/watcher` aprobado en `pnpm-workspace.yaml`)
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
    sections/        # Una carpeta por sección renderizada en la SPA
      Hero/          # Headline, subhead, dual CTA, foto
      TrustBar/      # Logos de empresas (Nullplatform, Deel, MercadoLibre, Mundi, Endeev)
      About/         # Bio + side card con highlights
      Experience/    # Timeline con shadcn Card + Badge (lee experience de @/data/profile)
      Work/          # Featured (curados) + auto-fetched GitHub (server component async)
      Stack/         # Skills agrupados por categoría
      Contact/       # CTA card con mailto + LinkedIn + CV link discreto
      Footer/        # Minimal: nombre, año, social links
      Navigation/    # Sticky top navbar + shadcn Sheet en mobile
    fonts/           # Archivo + Space Grotesk (next/font/google)
    models/          # Repository, UpdatedRepository (GitHub API)
    services/        # repositories.service.ts (GitHub API)
    layout.tsx       # Root layout con metadata SEO completa y themeColor
    page.tsx         # Composición de las 7 secciones
    opengraph-image.tsx  # OG image dinámica generada por next/og (edge)
    sitemap.ts       # Sitemap dinámico
    error.tsx, loading.tsx, not-found.tsx
  components/
    ui/              # Primitivas shadcn (button, card, badge, separator, navigation-menu, sheet, tooltip)
    icons/           # BrandIcons (LinkedIn, GitHub, Twitter inline SVG)
    work/            # FeaturedProject (card grande), RepoCard (card compacta de GitHub)
    ExperienceItem/  # Item de la timeline
    MotionFadeIn/    # Wrapper framer-motion con prefers-reduced-motion
    SectionContainer/ # Wrapper con Intersection Observer + id
    SectionHeading/  # Eyebrow + título + descripción
    ThemeSwitcher/   # Toggle dark/light con lucide
  contexts/          # ActiveSection, Theme (next-themes)
  data/
    profile.ts       # Single source of truth: profile, experience, featuredProjects, stack, companies, contact
  hooks/             # useIntersectionObserver
  utils/             # scrollIntoView, monthPasses, capitalizeFirstLetter
  constants/         # sectionThreshold (umbrales del IntersectionObserver por sección)
  lib/
    utils.ts         # cn (clsx + tailwind-merge) — helper de shadcn
  styles/            # globals.css (tokens shadcn, fonts, prefers-reduced-motion)
public/
  images/companies/  # Logos de empresas (5 + WebDev histórico)
  images/work/       # SVG placeholders de los 3 proyectos featured
  walPic.jpeg        # Foto de perfil
  homeBg.jpeg        # (legado, sin uso actual)
  resume-*.pdf       # CV descargable (link discreto en Contact)
```

## Arquitectura

- **SPA con secciones:** Hero → TrustBar → About → Experience → Work → Stack → Contact → Footer.
- **Server/Client Components:** `Work` es un async server component que consume la GitHub API. Los componentes interactivos (`Navigation`, `Hero`, `MotionFadeIn`, `ThemeSwitcher`) usan `'use client'`.
- **Dark mode:** `next-themes` con estrategia `class`. Variables CSS shadcn (`--background`, `--foreground`, etc.) definidas en `:root` y `.dark` con valores `oklch`.
- **Navegación:** sticky top navbar con shadcn `Sheet` en mobile. Active section detection vía `useIntersectionObserver` + `ActiveSectionContext`.
- **GitHub API:** Requiere `GITHUB_TOKEN` en `.env.local`. El service filtra repos (description + (homepage OR topics)), `revalidate: 3600`, fallback "More projects coming soon" si falla.
- **SEO:** metadata completa en `layout.tsx`, OG image dinámica vía `opengraph-image.tsx`, sitemap, themeColor por modo.

## Convenciones de Código

- **Linting:** ESLint 9 (flat config) + Prettier; reglas declaradas en `eslint.config.mjs`.
- **Formato:** 140 chars max, single quotes, trailing commas, tab width 2. Tailwind class order vía `prettier-plugin-tailwindcss`.
- **Path alias:** `@/*` → `./src/*`. Alias específicos de shadcn en `components.json`: `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils`, `@/hooks`.
- **Exports:** Barrel exports con `index.ts` en cada componente/sección.
- **Props:** Siempre tipadas con interfaces TypeScript. Componentes de shadcn usan `ComponentProps<...>` para reusar tipos de Radix.
- **Iconos:** lucide para genéricos; brand icons (LinkedIn/GitHub/Twitter) como SVGs en `src/components/icons/BrandIcons.tsx` (lucide 1.x removió las marcas).

## Git Flow

- **Ramas principales:** `main` (producción), `develop` (integración).
- **Prefijos:** `feature/`, `bugfix/`, `release/`, `hotfix/`.
- **Versionado:** Semantic Versioning (actual: 1.2.0).
- **Changelog:** `CHANGELOG.md` con formato Keep a Changelog.

## Deployment

- **Plataforma:** Vercel.

## Dependencias Clave

- `next` 16, `react` 19, `typescript` 6
- `tailwindcss` 4 + `@tailwindcss/postcss` + `tw-animate-css`
- `next-themes` — dark/light mode
- `framer-motion` — animaciones de entrada
- `lucide-react` — iconos
- `clsx` + `tailwind-merge` — `cn` helper
- `class-variance-authority` — variants en shadcn primitives
- `@radix-ui/react-{dialog,navigation-menu,separator,slot,tooltip}` — primitives de shadcn

## Notas

- No hay tests (removidos en v1.1.2).
- No hay CI/CD configurado (sin GitHub Actions).
- Husky fue removido en v1.1.2.
- El sitio está pensado como **personal sales page** — no es un blog ni una app multi-página. Cualquier nueva sección debe encajar en el flujo Hero → Trust → About → Experience → Work → Stack → Contact.
