import React from 'react'

import { RangeSliderThumb } from '@chakra-ui/react'
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

const rangeList = () => {
  return (
    <>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  children: rangeList(),
}
