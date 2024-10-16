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

const contactFields: Field[] = [
  {
    name: 'enableContact',
    type: 'checkbox',
  },
  {
    name: 'title',
    type: 'text',
  },
]

export const CustomContent: Block = {
  slug: 'customContent',
  interfaceName: 'CustomContentBlock',
  fields: [
    {
      name: 'home',
      type: 'group',
      fields: [
        {
          name: 'enableHome',
          type: 'checkbox',
        },
        {
          name: 'columns',
          type: 'array',
          fields: columnFields,
        },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      fields: contactFields,
    },
  ],
}
