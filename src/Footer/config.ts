import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'
import { address } from '@/fields/address'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
    },
    { name: 'socialLinks', type: 'array', fields: [link({ appearances: false })] },
    {
      name: 'addresses',
      type: 'array',
      fields: [
        {
          type: 'text',
          name: 'Country',
        },
        {
          type: 'array',
          name: 'locations',

          fields: [
            {
              type: 'row',
              fields: [
                {
                  type: 'text',
                  name: 'phone',
                },
                {
                  type: 'text',
                  name: 'locationName',
                },
                {
                  type: 'text',
                  name: 'fullAddress',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'certificates',
      type: 'array',
      fields: [
        {
          type: 'upload',
          name: 'image',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'email',
      type: 'email',
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
