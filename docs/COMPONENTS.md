# thecutebox.in — Component Inventory

## Layout Components (`src/components/layout/`)

### `Header.jsx`
- Fixed top navigation with announcement bar
- Responsive: desktop nav + mobile hamburger drawer
- Scroll-aware shadow effect
- Expandable search input
- Cart button with live item count + total
- Props: none (reads from `useCartStore`, `useLocation`)

### `Footer.jsx`
- Brand, Shop, Help, Contact columns
- Social links (Instagram, Twitter, Email)
- Newsletter signup input
- Copyright bar

---

## UI Components

### Cart (`src/components/cart/CartDrawer.jsx`)
- Right-side slide-in drawer
- Item list with qty controls (+/−) and remove
- Free shipping progress bar (up to ₹1,999)
- Animated entrance (`animate-slide-in-right`)
- Backdrop click to close
- Locks body scroll when open

---

## Product Components (`src/components/product/`)

### `ProductCard.jsx`
Props: `product` (object), `index` (number for stagger)

| Feature | Detail |
|---|---|
| Scroll-reveal animation | Staggered fade-up via `useScrollReveal` |
| Hover | Image zoom + quick-add overlay button |
| Badges | Bestseller, New, % discount |
| Wishlist | Heart toggle with Zustand |
| Rating | 5-star display with review count |
| OOS state | Overlay + disabled button |

---

## Hooks (`src/hooks/`)

### `useScrollReveal(threshold?)`
Returns `{ ref, isVisible }`. Attaches `IntersectionObserver` and fires once.

### `formatPrice(amount)`
Returns formatted INR string using `Intl.NumberFormat`.

---

## Stores (`src/store/cartStore.js`)

### `useCartStore` (Zustand + persist)
| Action | Type |
|---|---|
| `items` | `Product & { qty }[]` |
| `addItem(product, qty?)` | Adds or increments |
| `removeItem(id)` | Removes |
| `updateQty(id, qty)` | Updates, removes if qty ≤ 0 |
| `clearCart()` | Empties cart |
| `openCart / closeCart / toggleCart` | Drawer state |

### `useWishlistStore` (Zustand + persist)
| Action | Type |
|---|---|
| `ids` | `string[]` |
| `toggle(id)` | Adds or removes |
| `has(id)` | Returns boolean |
