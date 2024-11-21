import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'News',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Business', value: 'Business' },
        { label: 'Politics', value: 'Politics' },
        { label: 'Technology', value: 'Technology' },
        { label: 'Science', value: 'Science' },
      ],
    },
    {
      name: 'paragraphs',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
      ],
      hooks: {
        beforeChange: [
          ({ data, value }) => {
            let joinedValue = value.reduce((acc: any, current: any) => {
              return acc + current.text
            }, '')
            data.readTime = Math.max(1, joinedValue.length / (5 * 100))
            return value
          },
        ],
      },
    },
    {
      name: 'isBreaking',
      type: 'checkbox',
      required: true,
    },
    {
      name: 'readTime',
      type: 'number',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
