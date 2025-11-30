import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.story.@(ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: '../next.config.js'
    }
  },
  staticDirs: ['../public'],
  managerHead: (head) => {
    return `
      ${head}
      <link rel="icon" type="image/x-icon" href="/icon-blue.svg" />
      <link rel="stylesheet" href="https://1.www.s81c.com/common/carbon/plex/sans.css" />
    `
  },
  docs: {
    docsMode: true,
    defaultName: 'Documentation'
  }
}

export default config
