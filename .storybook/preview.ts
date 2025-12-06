import '../styles/globals.css'

import Wrapper from './components/wrapper'
import Container from './components/container'

import { type Preview } from '@storybook/nextjs'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    actions: {argTypesRegex: '^on.*'},
    controls: {
      expended: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', ['Components', 'Shared', 'Utils', 'Helpers', 'Changelog']]
      }
    },
    docs: {
      autodocs: true,
      container: Container
    },
    backgrounds: null
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        icon: 'paintbrush',
        items: [
          {value: 'light', icon: 'sun', title: 'Light mode'},
          {value: 'dark', icon: 'moon', title: 'Dark mode'}
        ],
        showName: false,
        dynamicTitle: false
      }
    },
    RTL: {
      name: 'RTL',
      description: 'Controls RTL mode',
      defaultValue: 'LRT',
      toolbar: {
        icon: 'transfer',
        dynamicTitle: true,
        items: [
          {value: 'ltr', right: '⇒', title: 'LTR'},
          {value: 'rtl', right: '⇐', title: 'RTL'}
        ]
      }
    }
  },
  initialGlobals: {
    theme: 'light'
  },
  decorators: [Wrapper]
}

export default preview
