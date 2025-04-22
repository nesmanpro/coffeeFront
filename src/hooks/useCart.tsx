import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "sonner";
import { productType } from "@/types/product";

interface CartStore {
  items: productType[];
  addItem: (data: productType) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: productType) => {
        const currentItems = get().items;
        const existingItems = currentItems.find((item) => item.id === data.id);

        if (existingItems) {
          return toast("No se pudo añadir el producto! 🚫", {
            description: "Éste producto ya esta en el carrito",
            action: {
              label: "close",
              onClick: () => toast.dismiss(this),
            },
          });
        }

        set({
          items: [...get().items, data],
        });
        toast("Product añadido 🛍️", {
          description: "El producto se añadio exitosamente al carrito",
          action: {
            label: "close",
            onClick: () => toast.dismiss(this),
          },
        });
      },
      removeItem: (id: number) => {
        set({
          items: [...get().items.filter((item) => item.id !== id)],
        });
        toast("Producto eliminado 🗑️", {
          description: "El producto se ha eliminado del carrito",
          action: {
            label: "close",
            onClick: () => toast.dismiss(this),
          },
        });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cartStorage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
