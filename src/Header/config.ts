import { link } from '@/fields/link'
import type { GlobalConfig } from 'payload'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'headerTypes',
      type: 'group',
      fields: [
        {
          name: 'enableDefaultHeader',
          type: 'checkbox',
          admin: {
            condition: (_, { enableCustomHeader }) => Boolean(!enableCustomHeader),
          },
        },
        {
          name: 'enableCustomHeader',
          type: 'checkbox',
          admin: {
            condition: (_, { enableDefaultHeader }) => Boolean(!enableDefaultHeader),
          },
        },
      ],
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
        {
          name: 'dropdownItems',
          type: 'array',
          fields: [
            link({
              appearances: false,
            }),
          ],
        },
      ],
      maxRows: 7,
    },
    {
      name: 'buttonItems',
      type: 'array',
      fields: [
        {
          name: 'url',
          label: 'Custom URL',
          type: 'text',
        },
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'appearance',
          type: 'select',
          defaultValue: 'default',
          options: [
            {
              label: 'Outline',
              value: 'outline',
            },
            {
              label: 'Default',
              value: 'default',
            },
          ],
        },
      ],
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
