# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Added `eslint.config.mjs` (ESLint 9 flat config) and `.prettierrc.json`.
- Added `src/global.d.ts` declaring `*.css` modules to satisfy TypeScript 6's `noUncheckedSideEffectImports`.
- Migrated Tailwind theme to CSS-first config in `src/styles/globals.css` using `@import 'tailwindcss'`, `@theme` for tokens (colors, breakpoints, font, text sizes, shadows, animations) and `@custom-variant dark (&:where(.dark, .dark *))` for dark mode.

### Changed

- Upgraded Next.js from 14.2.6 to 16.2.6 (Turbopack by default).
- Upgraded React and React DOM from 18.3.1 to 19.2.6.
- Upgraded TypeScript from 5.5.4 to 6.0.3.
- Upgraded ESLint from 8.57.0 to 9.39.4 with flat config based on `eslint-config-next@16` (core-web-vitals + typescript).
- Upgraded Tailwind CSS from 3.4.10 to 4.3.0 (CSS-first config, Oxide engine, `@tailwindcss/postcss` plugin).
- Upgraded @types/node from 22 to 25, @types/react and @types/react-dom from 18 to 19, eslint-config-prettier from 9 to 10.
- Bumped postcss, prettier, prettier-plugin-tailwindcss to latest minor/patch.
- Replaced `next lint` script with direct `eslint src` (Next 16 removed the lint command).
- Replaced PostCSS `tailwindcss + autoprefixer` plugins with `@tailwindcss/postcss` (autoprefixer is built into Tailwind 4).
- Cleaned `next.config.js` (removed deprecated `swcMinify` and `sassOptions`).
- Replaced `<a href="/">` with `<Link />` from `next/link` in `NavPicture` to comply with `@next/next/no-html-link-for-pages`.

### Removed

- Removed @vercel/analytics integration.
- Removed unused `sass` devDependency (no `.scss`/`.sass` files in the project).
- Removed `autoprefixer` (built into Tailwind 4).
- Removed `tailwind.config.js` (theme migrated to CSS-first `@theme` block in `globals.css`).
- Removed `eslint-plugin-tailwindcss` (broken with Tailwind 4 + pnpm; class ordering covered by `prettier-plugin-tailwindcss`).
- Removed `eslint-config-airbnb-typescript` (abandoned, incompatible with ESLint 9 and @typescript-eslint v8).
- Removed `.eslintrc.json` (replaced by flat config).
- Dropped redundant direct devDependencies now provided transitively by `eslint-config-next@16`: `@eslint/js`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `eslint-plugin-import`, `eslint-plugin-react`, `typescript-eslint`.

## [1.1.3] - 2024-07-26

### Added

- Add new RenderCompanyLogo component.

### Changed

- Update about me section.
- Update work experience.
- Update utils functions.
- Update node version to 20.14.0.
- Update dependencies.

## [1.1.2] - 2024-02-10

### Added

- Add new work experience to the website, in this case Deel company.
- Add time between job dates to work experience.

### Changed

- Update resumen pdf.

### Removed

- Removed husky.
- Removed jest and testing-library from the project.
- Removed unused files and dependencies.

## [1.1.1] - 2023-05-31

### Added

- Add analytics to the website.

### Changed

- Update tailwind configuration.
- Update home styles.

### Removed

- Remove unused font files and font css files.

## [1.1.0] - 2023-05-22

### Added

- Add analytics to the website.

## [1.0.0] - 2023-05-21

### Added

- First version of my personal portfolio.
