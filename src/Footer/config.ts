import { link } from '@/fields/link'
import type { GlobalConfig } from 'payload'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      label: 'heading',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'groups',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
