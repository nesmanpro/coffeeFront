import { productType } from "@/types/product";

export const formatOrderItems = (items: productType[]) => {
    return items.map((item) => ({
        documentId: item.documentId,
        productName: item.productName,
        price: item.price,
        image: item.image?.[0]?.formats?.small?.url || null,
    }));
};