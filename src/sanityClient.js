import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'rgpf9esn',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export function urlForWithVanity(source, vanityFilename) {
  const base = builder.image(source)
  if (vanityFilename) {
    return base.vanityName(vanityFilename)
  }
  return base
}
