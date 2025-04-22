export type productType = {
    id: number;
    active: boolean;
    productName: string;
    documentId: string;
    description: string;
    isFeatured: boolean;
    slug: string;
    origin: string;
    taste: string;
    price: number
    image: {
        id: number;
        url: string;
        hash: string;
        formats: {
            small: {
                url: string
            }
        };
    }[];
    category: {
        id: number;
        slug: string;
        categoryName: string;

    }
}