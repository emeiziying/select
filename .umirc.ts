// more config: https://d.umijs.org/config
import { defineConfig } from 'dumi';

export default defineConfig({
  title: '@sweet7/rc-select',
  favicon:
    'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  logo:
    'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  outputPath: '.doc',
  exportStatic: {},
  styles: [
    `
      .markdown table {
        width: auto !important;
      }
    `,
  ]
});