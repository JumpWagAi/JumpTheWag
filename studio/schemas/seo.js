import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Recommended: under 65 characters. This appears in search engine results.',
      validation: (rule) =>
        rule.max(65).warning('Titles over 65 characters may be truncated in search results.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Recommended: under 155 characters. A short summary shown in search results.',
      validation: (rule) =>
        rule.max(155).warning('Descriptions over 155 characters may be truncated in search results.'),
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from search engines',
      type: 'boolean',
      description: 'If enabled, this page will not be indexed by search engines.',
      initialValue: false,
    }),
  ],
})
