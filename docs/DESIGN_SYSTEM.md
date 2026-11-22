# thecutebox.in — Design System

## Brand Identity
> "Gift With Intent" — artisanal, warm, editorial, boutique

### Logo
- Warm isometric gift box with heart-bow ribbon
- File: `public/logo.jpg`

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `terracotta-500` | `#B85C38` | Primary brand, CTAs, accents |
| `terracotta-50` | `#fdf4f0` | Soft backgrounds, hover states |
| `rose-warm` | `#D4857A` | Secondary accent |
| `rose-light` | `#E8B4A0` | Blush tones |
| `cream` | `#F5EFE6` | Card backgrounds |
| `cream-light` | `#FDFAF6` | Page backgrounds |
| `charcoal` | `#2D2320` | Primary text |
| `charcoal-light` | `#4A3D3A` | Secondary text |
| `charcoal-muted` | `#7A6E6C` | Placeholder / metadata |

---

## Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Headings, Display | Playfair Display | 600–700 | `display-md` = 2.25rem |
| Body, UI | Plus Jakarta Sans | 400–700 | 16px base |
| Labels, Tags | Plus Jakarta Sans | 600 | 11–14px |

```css
font-family: "Playfair Display", Georgia, serif;    /* .font-display */
font-family: "Plus Jakarta Sans", system-ui, sans;  /* .font-sans */
```

---

## Spacing Scale

Uses Tailwind default spacing + custom:
- `space-18` = `4.5rem`
- `section-pad` = `py-16 md:py-24 lg:py-32`
- `container-site` = `max-w-7xl mx-auto px-5 md:px-8 lg:px-12`

---

## Component Classes

| Class | Description |
|---|---|
| `.btn-primary` | Filled terracotta pill button |
| `.btn-secondary` | Outlined cream button |
| `.btn-ghost` | Ghost terracotta link-button |
| `.card` | White rounded-3xl card with shadow |
| `.tag` | Small uppercase pill label |
| `.input-field` | Styled form input |
| `.section-pad` | Consistent vertical section spacing |
| `.container-site` | Centered max-width container |

---

## Shadows

| Token | Value |
|---|---|
| `shadow-warm` | `0 4px 20px rgba(45,35,32,0.10)` |
| `shadow-warm-lg` | `0 8px 40px rgba(45,35,32,0.12)` |
| `shadow-product` | `0 4px 24px rgba(184,92,56,0.12)` |
| `shadow-product-hover` | `0 12px 40px rgba(184,92,56,0.20)` |

---

## Border Radii

| Token | Value |
|---|---|
| `rounded-3xl` | `1.5rem` — product cards |
| `rounded-4xl` | `2rem` — section cards |
| `rounded-full` | `9999px` — buttons, tags |

