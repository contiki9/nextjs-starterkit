import React from 'react'

import { Heading as ChkHeading } from '@chakra-ui/react'

export interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  size?: 'xl' | 'lg' | 'md'
  color?: string
  children: React.ReactNode
}
export const Heading = (props: HeadingProps) => {
  const { children, ...args } = props
  return <ChkHeading {...args}>{children}</ChkHeading>
}
