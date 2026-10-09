import { config } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'philip-voultsos',
      name: 'astro-blog-starter-template',
    },
  },
  collections: {},
});
