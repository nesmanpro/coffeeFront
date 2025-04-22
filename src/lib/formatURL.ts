

export default function formatURL(IMG_URL: string) {
    const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

    return (API_URL + IMG_URL)
}
