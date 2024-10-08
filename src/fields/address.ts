import { Field } from 'payload'

export const address = () => {
  const address: Field = {
    type: 'row',
    fields: [
      {
        type: 'text',
        name: 'Country',
        admin: {
          width: '100%',
        },
      },
      {
        type: 'array',
        name: 'locations',
        admin: {
          width: '100%',
        },
        fields: [
          {
            type: 'row',
            fields: [
              {
                type: 'text',
                name: 'phone',
              },
            ],
          },
        ],
      },
    ],
  }

  return address
}
