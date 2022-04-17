import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Select } from './Select'
export default {
  title: 'Core/Form/Select',
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>{args.children}</Select>
)

const optionList = () => {
  return (
    <>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  children: optionList(),
}
