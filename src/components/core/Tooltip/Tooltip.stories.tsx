import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tooltip } from './index'
export default {
  title: 'Core/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: `Tooltipのコンポーネントです`,
      },
    },
  },
  argTypes: {},
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>{args.children}</Tooltip>
)

const DefaultAttr = {
  children: `Tooltip`,
  label: `Hey, I'm here!`,
}

export const Default = Template.bind({})
Default.args = {
  ...DefaultAttr,
}
