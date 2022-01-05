import React from 'react'
import { Divider as ChkDivider } from '@chakra-ui/react'

export type DividerProps = {
  orientation?: 'horizontal' | 'vertical'
}

export const Divider = (props: DividerProps) => {
  return <ChkDivider {...props} />
}
