import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import { Tag, TagProps } from './Tag'
export default {
  title: 'Core/Tag',
  component: Tag,
  argTypes: {
    colorScheme: {
      control: {
        type: 'inline-radio',
        options: ['primary', undefined],
      },
    },
  },
} as Meta

const Template: Story<TagProps> = (args) => <Tag {...args}>{args.children}</Tag>

export const Default = Template.bind({})
Default.args = {
  children: 'Tag',
}

export const ColorScheme = () => {
  return (
    <>
      <Tag>Default</Tag>
      <Tag colorScheme="primary">primary</Tag>
    </>
  )
}

export const Variant = () => {
  return (
    <>
      <Tag variant="solid">solid</Tag>
      <Tag variant="outline">outline</Tag>
    </>
  )
}

export const Size = () => {
  return (
    <>
      <Tag size="sm">sm</Tag>
      <Tag size="md">md</Tag>
      <Tag size="lg">lg</Tag>
    </>
  )
}
