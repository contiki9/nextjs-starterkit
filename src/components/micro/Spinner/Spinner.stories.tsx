import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Spinner } from './Spinner'
export default {
  title: 'Micro/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: `Spinnerのコンポーネントです`,
      },
    },
  },
  argTypes: {},
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />

const DefaultAttr = {}

export const Default = Template.bind({})
Default.args = {
  ...DefaultAttr,
}
