import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

import imageUrlBuilder from '@sanity/image-url';

// export const client = createClient({
//     projectId: "qslspj41",
//     dataset: "production",
//     apiVersion: "2024-01-01",
//     token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
//     useCdn: false

const builder = imageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source)
}
