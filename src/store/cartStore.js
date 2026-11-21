import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, qty = 1) => {
        const { items } = get()
        const existing = items.find(i => i.id === product.id)
        if (existing) {
          set({
            items: items.map(i =>
              i.id === product.id ? { ...i, qty: i.qty + qty } : i
            ),
          })
        } else {
          set({ items: [...items, { ...product, qty }] })
        }
        set({ isOpen: true })
      },

      removeItem: (id) =>
        set(state => ({ items: state.items.filter(i => i.id !== id) })),

      updateQty: (id, qty) => {
        if (qty <= 0) {
          get().removeItem(id)
          return
        }
        set(state => ({
          items: state.items.map(i => (i.id === id ? { ...i, qty } : i)),
        }))
      },

      clearCart: () => set({ items: [] }),

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set(state => ({ isOpen: !state.isOpen })),

      get total() {
        return get().items.reduce((sum, i) => sum + i.price * i.qty, 0)
      },
      get count() {
        return get().items.reduce((sum, i) => sum + i.qty, 0)
      },
    }),
    { name: 'thecutebox-cart' }
  )
)

export const useWishlistStore = create(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (id) => {
        const { ids } = get()
        set({ ids: ids.includes(id) ? ids.filter(i => i !== id) : [...ids, id] })
      },
      has: (id) => get().ids.includes(id),
    }),
    { name: 'thecutebox-wishlist' }
  )
)
