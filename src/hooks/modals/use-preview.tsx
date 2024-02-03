import { create } from 'zustand';

import type { Product } from '@/types';

type PreviewModalStore = {
  isOpen: boolean;
  data?: Product;
  onOpen: (product: Product) => void;
  onClose: () => void;
};

export const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (product) => {
    set({ isOpen: true, data: product });
  },
  onClose: () => set({ isOpen: false }),
}));
