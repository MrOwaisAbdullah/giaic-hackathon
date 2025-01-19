import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import { categorySchema } from './categories'
import { sellerSchema } from './sellerSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, categorySchema, sellerSchema],
}
