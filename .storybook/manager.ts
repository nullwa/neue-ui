import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

addons.setConfig({
  showPanel: true,
  panelPosition: 'right',
  theme: create({
    base: 'dark',
    brandTitle: 'Neue UI',
    brandUrl: 'https://github.com/nullwa/neue-ui',
    brandImage: '/icon-text-white.svg',
    appBorderRadius: 2,
    inputBorderRadius: 2,
    fontBase: '\'IBM Plex Sans\', sans-serif',
    fontCode: '\'IBM Plex Mono\', monospace'
  }),
  previewTabs: {
    canvas: 'Playground'
  },
  navSize: 250
})
