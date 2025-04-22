/* eslint-disable @typescript-eslint/no-explicit-any */
export type FilterTypes = {
    result: ResultFilterTypes | null;
    loading: boolean;
    error: string;
}

export type ResultFilterTypes = {
    schema: {
        attributes: {
            origin: {
                enum: any
            }
        }
    }
}