# CLAUDE.md

## Project Overview

This project is a professional restaurant landing page built with Next.js.

The goal is to produce production-quality code that can be showcased in a portfolio and later reused as a template for freelance restaurant websites.

---

# Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

Future

- Framer Motion
- React Hook Form
- Zod
- Lucide React

---

# Architecture

Follow feature-based component organization.

```
components/
    layout/
    sections/
    ui/
    common/
```

---

# Code Style

- Use TypeScript everywhere.
- Never use `any`.
- Prefer reusable components.
- Keep components small and focused.
- Maximum ~200 lines per component when possible.
- Prefer composition over duplication.
- Use functional components only.

---

# Naming Convention

Components

```
Navbar.tsx
Hero.tsx
FeaturedMenu.tsx
```

Hooks

```
useNavbar.ts
useScroll.ts
```

Types

```
menu.ts
faq.ts
gallery.ts
```

Constants

```
constants.ts
```

---

# Folder Rules

UI Components

```
components/ui
```

Layout Components

```
components/layout
```

Home Sections

```
components/sections
```

Shared Components

```
components/common
```

Business Data

```
data/
```

Types

```
types/
```

Helpers

```
lib/
```

---

# Styling Rules

- Use Tailwind CSS.
- Avoid inline styles.
- Prefer utility classes.
- Extract repeated styles into reusable components.
- Maintain consistent spacing.

---

# Responsive

Desktop First

Supported:

- Mobile
- Tablet
- Laptop
- Desktop

---

# Images

Store images inside

```
public/images/
```

Structure

```
hero/
menu/
gallery/
restaurant/
logo/
icons/
```

Use WebP whenever possible.

---

# Data

Never hardcode business data inside components.

Store data inside

```
data/
```

Example

```
menu.ts
faq.ts
gallery.ts
testimonials.ts
```

---

# Git Convention

Commit messages

```
feat:
fix:
refactor:
style:
docs:
chore:
```

Example

```
feat: create hero section

feat: implement responsive navbar

fix: mobile menu overflow
```

---

# Performance Goals

Lighthouse

Performance > 90

Accessibility > 90

Best Practices > 90

SEO > 95

---

# Development Principles

- Write clean code.
- Keep components reusable.
- Optimize for SEO.
- Optimize images.
- Prefer readability over clever code.
- Follow production-level project structure.

---

# End Goal

The final project should look and feel like a premium restaurant landing page suitable for real clients and freelance portfolio.