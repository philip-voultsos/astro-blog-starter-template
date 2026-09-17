import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'YOUR_GITHUB_USERNAME',
      name: 'YOUR_REPO_NAME',
    },
  },
  collections: {
    essays: collection({
      label: 'Writing Archive',
      slugField: 'title',
      path: 'src/content/essays/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        category: fields.text({ label: 'Category (e.g., Macroeconomics, Philosophy)' }),
        description: fields.text({ label: 'Brief Description', multiline: true }),
        publishDate: fields.date({ label: 'Publish Date' }),
        content: fields.document({
          label: 'Essay Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
