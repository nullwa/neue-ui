import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../stories/**/*.story.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-docs'],
  framework: '@storybook/react-vite',
  core: {builder: '@storybook/builder-vite'},
  staticDirs: ['../public'],
  docs: {docsMode: true, defaultName: 'Documentation'}
}

export default config