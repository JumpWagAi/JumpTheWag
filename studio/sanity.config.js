import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { media } from 'sanity-plugin-media'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'jumpwag',
  title: 'JumpWag Blog',
  projectId: 'rgpf9esn',
  dataset: 'production',
  plugins: [structureTool(), media()],
  schema: {
    types: schemaTypes,
  },
})
