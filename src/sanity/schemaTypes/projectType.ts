import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Portfolio Projekt',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Projekt Billede',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Sorteringsorden',
      type: 'number',
    }),
  ],
})
