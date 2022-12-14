import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '30dvupmg',
    dataset: 'production',
    apiVersion: '2022-09-14',
    useCdn: true,
    token: process.env.SANITY_PUBLIC_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)