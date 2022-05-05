import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import { CardBox, CardBoxProps } from './CardBox'
export default {
  title: 'Core/CardBox',
  component: CardBox,
  argTypes: {},
} as Meta

const Template: Story<CardBoxProps> = (args) => (
  <CardBox {...args}>{args.children}</CardBox>
)

export const Default = Template.bind({})
Default.args = {
  children: 'CardBox',
  title: '',
}
export const title = () => {
  return <CardBox title="title">children</CardBox>
}
