import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'

const books = defineCollection({
  loader: glob({ base: 'src/content/books', pattern: '*.md' }),
  schema: z.object({
    title: z.string().nonempty(),
    author: z.string().nonempty(),
    rating: z.number().positive().min(0).max(10),
    summary: z.string().optional(),
  }),
})

export const collections = { books }
