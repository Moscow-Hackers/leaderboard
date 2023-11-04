// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'

// 2. Define a `type` and `schema` for each collection
const hackerCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      pwnCollegeId: z.number(),
      avatar: image().optional(),
    }),
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  hackers: hackerCollection,
}
