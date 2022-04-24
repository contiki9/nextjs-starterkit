import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Progress } from './index'
export default {
  title: 'Core/Progress',
  component: Progress,
  parameters: {
    docs: {
      description: {
        component: `Progressのコンポーネントです`,
      },
    },
  },
  argTypes: {},
} as ComponentMeta<typeof Progress>

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
)

const DefaultAttr = {
  value: 30,
}

export const Default = Template.bind({})
Default.args = {
  ...DefaultAttr,
}
