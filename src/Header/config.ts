import { headerLink } from '@/fields/headerLink'
import type { GlobalConfig } from 'payload'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        headerLink({
          appearances: false,
        }),
      ],
      maxRows: 6,
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
