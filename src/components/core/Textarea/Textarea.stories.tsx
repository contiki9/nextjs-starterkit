import React from 'react'

import { Story, Meta } from '@storybook/react'

import { Textarea, TextareaProps } from './index'
export default {
  title: 'Core/Form/Textarea',
  component: Textarea,
  argTypes: {},
} as Meta

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'placeholder',
}

export const Disabled = () => {
  return <Textarea value="Textarea" isDisabled />
}
