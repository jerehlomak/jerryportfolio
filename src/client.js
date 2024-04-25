import sanityCient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
 
export const client = sanityCient({
    projectId: 'dye697o6',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skA8cH9KbUeBBeVsGHULwaIeJmRis18S6DPuesGu2W6mzWf7y1bxSeeJ6uKICnS3739DjbI0Gzxy4IVgWvlivYzcJXzcIfQnB7nIbwH0pDFZrUPirz4ZuFvHvgXrcVERVYRZSOAkI5Knl2Cfhf3pTq7eg9amhKPI0rIPZ72m1TBA44z243qX',
})

const builder = imageUrlBuilder(client) 
 
export const urlFor = (source) => builder.image(source)