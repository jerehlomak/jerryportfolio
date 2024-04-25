import sanityCient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
 
export const client = sanityCient({
    projectId: `${process.env.SANITY_ID}`,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: `${process.env.SANITY_TOKEN}`,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)