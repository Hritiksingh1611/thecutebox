# thecutebox.in — Data Schema

## Product

```ts
interface Product {
  id: string              // e.g. 'p1'
  name: string
  slug: string            // URL-safe name
  category: 'wellness' | 'candles' | 'hampers' | 'artisan' | 'gourmet'
  tags: string[]          // 'bestseller' | 'new' | 'popular' | 'handmade' | 'unique'
  price: number           // INR
  originalPrice: number | null  // for discount display
  rating: number          // 1–5
  reviewCount: number
  artisan: string         // "Name, City"
  shortDescription: string
  description: string
  contents: string[]      // list of included items
  images: string[]        // URLs, first = primary
  color: string           // hex, used for card accent
  inStock: boolean
  occasions: string[]     // 'birthday' | 'anniversary' | ...
}
```

## Artisan

```ts
interface Artisan {
  id: string
  name: string
  craft: string
  location: string
  story: string
  avatar: string   // URL
  productCount: number
}
```

## Testimonial

```ts
interface Testimonial {
  id: string
  name: string
  location: string
  avatar: string   // URL
  rating: number
  text: string
  product: string
  occasion: string
}
```

## Cart Item (Zustand)

```ts
interface CartItem extends Product {
  qty: number
}
```

## Data Files

| File | Exports |
|---|---|
| `src/data/products.js` | `products`, `categories`, `occasions`, `getProductById`, `getProductBySlug`, `getByCategory`, `getFeatured` |
| `src/data/testimonials.js` | `testimonials`, `artisans` |
