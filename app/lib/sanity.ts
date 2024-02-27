import imageUrlBuilder from '@sanity/image-url';
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: '3pvnr3or',
    dataset: 'production',
    apiVersion: '2024-02-07',
    useCdn: true,
    perspective: 'published'
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source);
};