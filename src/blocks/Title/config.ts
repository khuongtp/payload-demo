import { Block } from 'payload'

export const Title: Block = {
  slug: 'title',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'subtitle',
      type: 'text',
    },
  ],
}
