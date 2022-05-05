import React from 'react'

import { Box } from '@chakra-ui/react'

import { colors } from '../../../theme'

import { Heading, HeadingProps } from './index'

const lineBox = {
  content: '',
  display: 'block',
  width: '80px',
  height: '6px',
  background: colors.primary[500],
  marginTop: '16px',
}

export const HeadingPostH1 = ({
  as = 'h1',
  size = 'lg',
  children,
}: HeadingProps) => {
  return (
    <Box mb={8}>
      <Heading as={as} size={size}>
        {children}
      </Heading>
      <div style={lineBox}></div>
    </Box>
  )
}
