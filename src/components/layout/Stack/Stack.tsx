import React from 'react'

import {
  Stack as ChkStack,
  StackProps as ChkStackProps,
  SystemProps,
} from '@chakra-ui/react'

export interface StackProps extends ChkStackProps {
  children: React.ReactNode
  spacing: SystemProps['margin']
  /*
   * ReactElementをSpaceの間に連続して挿入できます
   */
  divider?: React.ReactElement
}

export const Stack = (props: StackProps) => {
  const { children, ...args } = props
  return <ChkStack {...args}>{children}</ChkStack>
}
