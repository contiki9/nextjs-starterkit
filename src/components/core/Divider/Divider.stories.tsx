import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Divider, DividerProps } from './index'
export default {
  title: 'Core/Divider',
  component: Divider,
  argTypes: {},
} as Meta

const Template: Story<DividerProps> = (args) => (
  <div style={{ height: '40px' }}>
    <Divider {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}
