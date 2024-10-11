import type { Block, Field } from 'payload'


import { link } from '@/fields/link'

const columnFields: Field[] = [
  {
    name: 'enableLink',
    type: 'checkbox',
  },
  {
    name: 'contentLogo',
    type: 'upload',
    relationTo: 'media',
    required: true,
  },
  link({
    overrides: {
      admin: {
        condition: (_, { enableLink }) => Boolean(enableLink),
      },
    },
  }),
]

export const CustomContent: Block = {
  slug: 'customContent',
  interfaceName: 'CustomContentBlock',
  fields: [
    {
      name: 'columns',
      type: 'array',
      fields: columnFields,
    },
  ],
}
