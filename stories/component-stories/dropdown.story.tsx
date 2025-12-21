import type { Meta, StoryObj } from '@storybook/nextjs'
import { DropDown } from '@/core/components/dropdown'

import Template from '@/templates/dropdown.template.mdx'

// Storybook metadata
const meta = {
  title: 'core/DropDown',
  component: DropDown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: Template
    }
  },
  argTypes: {
    multiple: {
      control: {type: 'boolean'},
      description: 'Allows multiple selections if set to true.'
    },
    data: {
      control: {type: 'object'},
      description: 'List of items to display in the dropdown.'
    },
    label: {
      control: {type: 'text'},
      description: 'Label shown when nothing is selected.'
    },
    align: {
      control: {type: 'radio'},
      options: ['start', 'center', 'end'],
      description: 'Alignment of the dropdown popup.'
    },
    placeholder: {
      control: {type: 'text'},
      description: 'Placeholder text for the search input.'
    },
    size: {
      control: {type: 'radio'},
      options: ['sm', 'md', 'lg'],
      description: 'Size of the dropdown component.'
    }
  }
} satisfies  Meta<typeof DropDown>

export default meta
type Story = StoryObj<typeof DropDown>

export const Default: Story = {
  args: {
    multiple: false,
    label: 'Select...',
    placeholder: 'Search...',
    align: 'center',
    size: 'md',
    data: [
      {label: {title: 'Alice Johnson', summary: 'Product Designer'}, value: 'alice'},
      {label: {title: 'Mark Spencer', summary: 'UX Researcher'}, value: 'mark'},
      {label: {title: 'Wale Sebii', summary: 'Frontend Engineer', avatar: 'https://avatars.githubusercontent.com/u/213305469?v=4'}, value: 'wale'},
      {label: {title: 'Daniel Roberts', summary: 'Full-stack Engineer'}, value: 'daniel'},
      {label: {title: 'Emily Carter', summary: 'QA Specialist'}, value: 'emily', disabled: true},
      {label: {title: 'Finance Team', summary: 'Budget & Accounting'}, value: 'finance'},
      {label: {title: 'Operations', summary: 'Logistics & Planning'}, value: 'operations'},
      {label: {title: 'Support Bot', summary: 'Automated Assistant', avatar: '/avatars/support.png'}, value: 'bot', disabled: true},
      {label: {title: 'Nora West', summary: 'HR Manager'}, value: 'nora'},
      {label: {title: 'Training Team', summary: 'Employee Development'}, value: 'training'}
    ]

  }
}
