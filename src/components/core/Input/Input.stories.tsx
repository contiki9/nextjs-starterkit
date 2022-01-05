import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Input, InputProps } from './index'
export default {
  title: 'Core/Form/Input',
  component: Input,
  argTypes: {},
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'placeholder',
}

export const Disabled = () => {
  return <Input value="Input" isDisabled />
}
