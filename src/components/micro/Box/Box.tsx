import React from 'react'

import { Box as ChkBox, BoxProps as ChkBoxProps } from '@chakra-ui/react'

export interface BoxProps extends ChkBoxProps {
  children?: React.ReactNode
}

export const Box = (props: BoxProps) => {
  return <ChkBox {...props}>{props.children}</ChkBox>
}
