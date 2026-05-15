# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2026-05-14

### Added

- Adopted **shadcn/ui** as the design system. Added `components.json`, `src/lib/utils.ts` (`cn` helper) and primitives in `src/components/ui/` (`button`, `card`, `badge`, `separator`, `navigation-menu`, `sheet`, `tooltip`).
- New section structure under `src/app/sections/`: `Hero`, `TrustBar`, `About`, `Experience`, `Work`, `Stack`, `Contact`, `Footer`, `Navigation`.
- New `src/data/profile.ts` — single source of truth for profile, experience, featured projects, stack groups, companies, navigation sections, and contact data.
- New reusable components: `SectionHeading`, `MotionFadeIn` (framer-motion wrapper that honors `prefers-reduced-motion`), `ExperienceItem`, `work/FeaturedProject`, `work/RepoCard`, and `icons/BrandIcons` (inline SVGs for LinkedIn/GitHub/Twitter).
- **Hybrid Selected Work**: 3 curated featured projects + auto-fetched GitHub repos (filtered to those with a description and either a homepage or topics).
- Dynamic OpenGraph image generated via `src/app/opengraph-image.tsx` (`next/og`, edge runtime, 1200×630).
- `src/app/sitemap.ts` with `MetadataRoute.Sitemap`.
- Tailwind 4 token system rewritten in shadcn shape (`--background`, `--foreground`, `--primary`, `--accent`, etc.) with `oklch` values for both `:root` and `.dark`.
- Global `prefers-reduced-motion` CSS guard, smooth scroll, and `scroll-margin-top` for anchor offsets.
- `tw-animate-css` plugin (Tailwind 4 replacement for `tailwindcss-animate`).

### Changed

- Complete redesign of the personal portfolio site, end-to-end: components, styles, copy, structure, and information architecture.
- Replaced **Poppins** with **Archivo** (headings) + **Space Grotesk** (body), wired via `next/font/google` with CSS variables `--font-archivo` / `--font-space-grotesk`.
- Rewrote `src/app/layout.tsx` with expanded metadata (canonical URL, OG/Twitter card, themeColor viewport, structured keywords).
- Rewrote `src/app/page.tsx` to compose the new sections in conversion order: Hero → TrustBar → About → Experience → Work → Stack → Contact → Footer.
- Updated `src/app/services/repositories.service.ts`: added filter (description required + homepage OR topics), `Promise`-safe error handling, configurable limit, `per_page=100&sort=updated`.
- Rewrote `error.tsx`, `loading.tsx`, `not-found.tsx` against the new design tokens.
- Reworked `Navigation` into a sticky top navbar with shadcn `Sheet` for mobile (replaces the old left sidebar).
- Updated `next.config.js`: `optimizePackageImports` now lists `lucide-react` and `framer-motion`.
- `ThemeSwitcher` now uses lucide-react icons and a shadcn `Button`.
- Updated `src/constants/sectionThreshold.ts` with new section IDs (`home`, `about`, `experience`, `work`, `stack`, `contact`).

### Removed

- Removed `react-icons` and `react-type-animation` (replaced by `lucide-react` and inline brand SVGs; hero no longer uses a typewriter animation).
- Removed legacy components: `src/components/Button`, `Link`, `Pill`, `SkillsPill`, `Title`, `Timeline`, `TimelineItem`, `MenuLink`, `DownloadResume`.
- Removed legacy sections under `src/app/components/`: `Home`, `AboutMe`, `Resume`, `Portfolio`, `Skills`, `Footer`, `Navigation`-family (`NavBurger`, `NavContainer`, `NavLinks`, `NavPicture`, `NavSocial`), `RenderCompanyLogo`, `PageContainer`.
- Removed `src/constants/skills.tsx`, `socialLinks.ts`, `navigationItems.ts`, `languageIcon.tsx` (migrated to `src/data/profile.ts`).
- Removed Poppins font config and Poppins-related CSS tokens.

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
