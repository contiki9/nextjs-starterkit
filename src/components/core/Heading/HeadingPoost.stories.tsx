import React from 'react'

import { Meta } from '@storybook/react/types-6-0'

import { HeadingPostH1, HeadingPostH2, HeadingPostH3 } from './index'
export default {
  title: 'Core/Heading/HeadingPost',
  component: HeadingPostH1,
  argTypes: {},
} as Meta

export const H1 = () => {
  return <HeadingPostH1>HeadingPostH1</HeadingPostH1>
}
export const H2 = () => {
  return <HeadingPostH2>HeadingPostH2</HeadingPostH2>
}
export const H3 = () => {
  return <HeadingPostH3>HeadingPostH3</HeadingPostH3>
}
