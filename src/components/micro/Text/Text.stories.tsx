import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Text, TextProps } from './index'
export default {
  title: 'Micro/Text',
  component: Text,
  argTypes: {
    as: {
      control: {
        type: 'inline-radio',
        options: ['span', 'div', undefined],
      },
    },
  },
} as Meta

const Template: Story<TextProps> = (args) => (
  <Text {...args}>{args.children}</Text>
)

export const Default = Template.bind({})
Default.args = {
  children:
    '単語や音素のような言語単位に対応し，線的に配列されてその言語を表わすための，視覚的記号の体系。その体系をなすひとつひとつの記号 letter; characterも日本語では文字',
}

export const ColorScheme = () => {
  return (
    <>
      <Text>Default</Text>
      <Text color="primary">primary</Text>
    </>
  )
}
