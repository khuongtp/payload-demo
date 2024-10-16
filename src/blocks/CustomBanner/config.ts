import { link } from '@/fields/link'
import type { Block } from 'payload'

export const CustomBanner: Block = {
  slug: 'customBanner',
  fields: [
    {
      name: 'links',
      type: 'array',
      label: 'BreadCrumb',
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
  interfaceName: 'CustomBannerBlock',
}
