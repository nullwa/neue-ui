import type { Meta, StoryObj } from '@storybook/nextjs'
import { IconEditOff, IconPlus, IconTrash } from '@tabler/icons-react'

import { Button } from '@/core/ui/button'
import Doc from '@/core/doc/button.doc.mdx'

// storybook metadata
const meta = {
  title: 'ui/button',
  component: Button,
  tags: ['autodocs'],
  parameters: {docs: {page: Doc}},
  argTypes: {
    variant: {
      control: {type: 'select'},
      options: ['default', 'outline', 'error', 'success', 'warning', 'brand', 'ghost'],
      description: 'The variant style of the button.',
      table: {defaultValue: {summary: 'default'}}
    },
    isFancy: {
      control: {type: 'boolean'},
      description: 'Whether to apply a fancy border style to the button.',
      table: {defaultValue: {summary: 'false'}}
    },
    size: {
      control: {type: 'select'},
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button.',
      table: {defaultValue: {summary: 'md'}}
    },
    rounded: {
      control: {type: 'radio'},
      options: ['default', 'none'],
      description: 'The border radius of the button.',
      table: {defaultValue: {summary: 'default'}}
    },
    disabled: {
      control: {type: 'boolean'},
      description: 'Whether to apply a disabled border style to the button.',
      table: {defaultValue: {summary: 'false'}}
    },
    className: {
      control: {type: 'text'},
      description: 'Additional tailwind utility classes to apply to the button.',
      table: {defaultValue: {summary: ''}}
    }
  },
  args: {
    variant: 'default',
    isFancy: false,
    size: 'md',
    rounded: 'default',
    disabled: false,
    className: ''
  }
} satisfies  Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => <Button {...args}>Primary Button</Button>
}

export const Overview: Story = {
  render: () => <Button variant={'brand'}>overview button</Button>
}

export const HasIcon: Story = {
  render: () => <div className={'flex items-center gap-2'}>
    <Button variant={'outline'} className={'gap-1'}><IconPlus size={14}/>add</Button>
    <Button variant={'warning'} className={'gap-1'}>edit<IconEditOff size={14}/></Button>
    <Button variant={'error'}><IconTrash size={14}/></Button>
  </div>
}