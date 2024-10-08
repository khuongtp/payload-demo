import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      //     // name: 'navItems',
      //     // type: 'array',
      //     // fields: [
      //     //   link({
      //     //     appearances: false,
      //     //   }),

      //     // ],
      //     // maxRows: 6,
      //   },
      // ],
      name: 'navItems', // required
      type: 'array', // required
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
