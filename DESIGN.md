# 🎨 DESIGN SYSTEM

> Sate Solo Restaurant Landing Page

Version: 1.0

---

# Philosophy

The design aims to represent an authentic Indonesian restaurant while maintaining a modern, premium, and clean user experience.

The visual identity should communicate:

- Warmth
- Authenticity
- Premium Quality
- Traditional Taste
- Modern Simplicity

Inspired by:

- Apple Human Interface
- Luxury Restaurant Websites
- Indonesian Traditional Cuisine

---

# Brand Personality

Warm

Premium

Authentic

Elegant

Friendly

Minimal

---

# Design Principles

## 1. Content First

Photography should become the primary visual focus.

UI should support the content, not compete with it.

---

## 2. White Space

Large spacing creates a premium feeling.

Avoid cramped layouts.

---

## 3. Consistency

Every component must follow the same spacing, typography, border radius, and color tokens.

---

## 4. Accessibility

Readable typography

High color contrast

Large touch targets

Semantic HTML

Keyboard friendly

---

# Color Palette

## Primary

Deep Crimson

```
#8B263E
```

Purpose

- Primary Button
- Active Navigation
- CTA
- Important Heading

---

## Primary Hover

```
#731F33
```

---

## Secondary

Warm Amber

```
#E28743
```

Purpose

- Highlights
- Icons
- Decorative Elements

---

## Secondary Hover

```
#D2742F
```

---

## Accent

Dark Charcoal

```
#3B2A26
```

Purpose

- Badge
- Footer
- Dark Sections

---

## Background

```
#FAF8F5
```

---

## Surface

```
#FFFFFF
```

Used for:

- Cards
- Forms
- Testimonials

---

## Text

Primary

```
#1A110F
```

Secondary

```
#6E625F
```

---

## Border

```
#E6DED6
```

---

## Success

```
#3E8E41
```

---

## Warning

```
#D97706
```

---

# Typography

## Heading

Font

Playfair Display

Usage

- Hero Title
- Section Title
- Card Title

---

## Body

Font

Inter

Usage

- Paragraph
- Navigation
- Description
- Button

---

# Font Scale

Hero

```
text-5xl
lg:text-7xl
```

Section Title

```
text-3xl
lg:text-5xl
```

Heading Small

```
text-2xl
```

Body

```
text-base
```

Small Text

```
text-sm
```

---

# Layout

Container

```
max-w-7xl
```

Horizontal Padding

Mobile

```
px-4
```

Tablet

```
px-6
```

Desktop

```
px-8
```

---

# Section Spacing

Default

```
py-24
```

Large

```
py-32
```

Small

```
py-16
```

---

# Border Radius

Small

```
rounded-md
```

Medium

```
rounded-xl
```

Large

```
rounded-2xl
```

Extra Large

```
rounded-3xl
```

Button

```
rounded-full
```

---

# Shadow

Card

```
shadow-sm
```

Hover

```
shadow-md
```

Avoid heavy shadows.

---

# Images

Use:

- WebP
- Optimized Size
- Responsive Images
- next/image

Folders

```
public/images

hero/
menu/
gallery/
restaurant/
logo/
icons/
```

---

# Components

Reusable Components

```
Container

Button

Section

SectionTitle

Badge

Card

Input
```

Layout Components

```
Navbar

Footer
```

Section Components

```
Hero

About

Featured Menu

Gallery

Testimonials

FAQ

Location

Contact
```

---

# Responsive Breakpoints

Mobile

```
<640px
```

Tablet

```
640px+
```

Laptop

```
1024px+
```

Desktop

```
1280px+
```

---

# Animation

Use subtle animations only.

Preferred:

- Fade Up
- Fade In
- Scale
- Slide

Avoid:

- Bounce
- Flash
- Shake
- Spin

---

# Buttons

Primary

Background

Primary Color

Text

White

Hover

Primary Hover

---

Secondary

Background

White

Border

Primary

Text

Primary

---

# Icon Style

Library

Lucide React

Size

```
18
20
24
```

Never mix icon libraries.

---

# Coding Rules

Never hardcode colors.

✅

```
bg-primary
```

❌

```
bg-[#8B263E]
```

---

Never repeat layout code.

Always use

```
<Container />
```

---

Never repeat section spacing.

Always use

```
<Section />
```

---

Prefer reusable components over duplicated JSX.

---

# Future Features

Dark Mode

Reservation

CMS

Online Order

Multi Language

Blog

Analytics

---

# Goal

Create a modern, premium restaurant landing page that can be reused as a template for future freelance projects while maintaining production-quality code.