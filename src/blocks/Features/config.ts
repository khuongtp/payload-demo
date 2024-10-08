import { Block } from 'payload'

export const Features: Block = {
  slug: 'features',
  interfaceName: 'FeaturesBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'backgroundStyle',
      type: 'radio',
      options: [
        {
          value: 'image',
          label: 'Image',
        },
        {
          value: 'color',
          label: 'Color',
        },
      ],
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, { backgroundStyle }) => backgroundStyle === 'image',
      },
    },
    {
      name: 'features',
      type: 'relationship',
      relationTo: 'features',
      hasMany: true,
      maxRows: 3,
    },
  ],
  labels: {
    plural: 'Features',
    singular: 'Features',
  },
}
