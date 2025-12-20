import type { Meta, StoryObj } from '@storybook/nextjs'
import { Badge } from '@/core/components/badge'
import { iconNames } from 'lucide-react/dynamic'

import Template from '@/templates/badge.template.mdx'

// Storybook metadata
const meta: Meta<typeof Badge> = {
  title: 'core/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: Template
    }
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Texte affiché dans le badge.'
    },
    count: {
      control: 'number',
      description: 'Affiche un nombre à droite du texte.'
    },
    icon: {
      control: 'select',
      options: [...iconNames],
      description: 'Nom de l’icône Lucide.'
    },
    removable: {
      control: 'boolean',
      description: 'Affiche un bouton X pour supprimer le badge.'
    },
    onRemove: {
      action: 'removed',
      description: 'Callback déclenché lors de la suppression.'
    },
    onClick: {
      action: 'clicked',
      description: 'Callback lors du clic sur le badge.'
    },
    variant: {
      control: 'select',
      options: ['default', 'outline', 'brand', 'ghost', 'error', 'success', 'ghost-success', 'warning', 'ghost-warning', 'ghost-brand', 'ghost-error']
    },
    radius: {
      control: 'radio',
      options: ['pilled', 'squared']
    }
  }
}
export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    text: 'Badge',
    count: undefined,
    removable: false,
    icon: undefined,
    radius: 'squared',
    variant: 'default'
  }
}
