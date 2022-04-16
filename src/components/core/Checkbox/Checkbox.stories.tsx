import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Checkbox } from './Checkbox'
export default {
  title: 'Core/Checkbox',
  component: Checkbox,
  argTypes: {},
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args}>{args.children}</Checkbox>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Checkbox',
}
