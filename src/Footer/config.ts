import type { GlobalConfig } from 'payload'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'footerItems',
      type: 'array',
      label: 'Footer Content',
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
      maxRows: 3,
    },
    {
      name: 'footerLogo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
