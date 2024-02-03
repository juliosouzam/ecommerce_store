import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { Product } from '@/types';
import toast from 'react-hot-toast';

type CartStore = {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
};

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (product: Product) => {
        const currentItems = get().items;
        const existingItems = currentItems.find(
          (item) => item.id === product.id,
        );
        if (existingItems) {
          return toast('Product already added.');
        }

        set((state) => ({ items: [...state.items, product] }));
        return toast.success('Product added successfully');
      },
      removeItem: (id: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
        return toast.success('Product removed successfully');
      },
      removeAll: () => set(() => ({ items: [] })),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
