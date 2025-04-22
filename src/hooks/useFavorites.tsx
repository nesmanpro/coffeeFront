import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "sonner";
import { productType } from "@/types/product";

interface FavoritesStore {
  items: productType[];
  addFavorite: (data: productType) => void;
  removeFavorite: (id: number) => void;
}

const useFavorites = create(
  persist<FavoritesStore>(
    (set, get) => ({
      items: [],
      addFavorite: (data: productType) => {
        const currentItems = get().items;
        const existingItems = currentItems.some((item) => item.id === data.id);

        if (existingItems) {
          return toast("Este producto ya está en favoritos! ❤️", {
            action: {
              label: "close",
              onClick: () => toast.dismiss(this),
            },
          });
        }

        set({
          items: [...get().items, data],
        });
        toast("💛 Product añadido a favoritos ❤️", {
          action: {
            label: "close",
            onClick: () => toast.dismiss(this),
          },
        });
      },
      removeFavorite: (id: number) => {
        set({
          items: [...get().items.filter((item) => item.id !== id)],
        });
        toast.warning("Producto eliminado de favoritos 😔", {
          action: {
            label: "close",
            onClick: () => toast.dismiss(this),
          },
        });
      },
    }),
    {
      name: "favoritesStorage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useFavorites;
