import { defineField, defineType } from 'sanity'

export const stepType = defineType({
  name: 'step',
  title: 'Proces Trin',
  type: 'document',
  fields: [
    defineField({
      name: 'stepNumber',
      title: 'Trin Nummer',
      type: 'string', // E.g. "01."
    }),
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
      name: 'order',
      title: 'Sorteringsorden',
      type: 'number',
    }),
  ],
})
