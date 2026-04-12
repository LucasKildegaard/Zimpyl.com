import { type SchemaTypeDefinition } from 'sanity'
import { pageType } from './pageType'
import { projectType } from './projectType'
import { stepType } from './stepType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageType, projectType, stepType],
}
