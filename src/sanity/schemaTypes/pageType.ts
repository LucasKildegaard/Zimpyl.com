import { defineField, defineType } from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Forside Indhold',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Hjemmeside Titel',
      type: 'string',
    }),
    defineField({
      name: 'heroTitleLines',
      title: 'Hero Overskrift (Linjer)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'introTitle',
      title: 'Introduktion Overskrift',
      type: 'string',
    }),
    defineField({
      name: 'introText1',
      title: 'Introduktion Tekst 1',
      type: 'text',
    }),
    defineField({
      name: 'introText2',
      title: 'Introduktion Tekst 2',
      type: 'text',
    }),
  ],
})
