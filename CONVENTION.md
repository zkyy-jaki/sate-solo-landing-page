# 💻 Coding Convention

## General Rules

- Use TypeScript
- Never use any
- Keep components small
- Reusable first
- Composition over duplication

---

# Folder Structure

components/

layout/

sections/

ui/

common/

---

# File Naming

PascalCase

```
Hero.tsx
Button.tsx
Container.tsx
```

Hooks

camelCase

```
useScroll.ts
```

Data

camelCase

```
menu.ts
gallery.ts
```

---

# Import Order

1. React

2. Next.js

3. Third-party Libraries

4. Internal Components

5. Utils

6. Styles

---

# Tailwind

Never

```
bg-[#8B263E]
```

Always

```
bg-primary
```

---

# Component Rules

Every component should have a single responsibility.

Avoid giant components.

Maximum recommended length:

200 lines.

---

# Git Commit

Examples

```
feat:
fix:
docs:
style:
refactor:
chore:
```

Examples

```
feat: create hero section

fix: improve mobile navigation

refactor: simplify button component
```