import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RangeSlider } from './RangeSlider'
export default {
  title: 'Core/Form/RangeSlider',
  component: RangeSlider,
  argTypes: {},
} as ComponentMeta<typeof RangeSlider>

const Template: ComponentStory<typeof RangeSlider> = (args) => (
  <RangeSlider {...args} />
)

export const Default = Template.bind({})
Default.args = {}
