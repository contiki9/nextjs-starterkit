import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Badge } from './Badge'
export default {
  title: 'Core/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: `Badgeのコンポーネントです`,
      },
    },
  },
  argTypes: {},
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>{args.children}</Badge>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Badge',
}
