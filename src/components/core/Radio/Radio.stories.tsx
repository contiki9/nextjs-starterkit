import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Radio } from './Radio'
export default {
  title: 'Core/Form/Radio',
  component: Radio,
  argTypes: {},
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => (
  <Radio {...args}>{args.children}</Radio>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Radio',
}
