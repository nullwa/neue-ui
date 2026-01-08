import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/core/ui/button'

// storybook metadata
const meta = {
  title: 'ui/button',
  component: Button,
  tags: ['autodocs']
  // parameters: {docs: {page: Doc}}
} satisfies  Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {}
}