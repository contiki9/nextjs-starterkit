import React from 'react'
import { Box } from '@chakra-ui/react'
import { colors } from '../../../theme'

import { Heading, HeadingProps } from './index'

const borderStyle = `2px solid ${colors.gray[800]}`
const heading = {
  display: 'block',
  padding: '16px',
  borderBottom: borderStyle,
}

export const HeadingPostH3 = ({
  as = 'h3',
  size = 'md',
  children,
}: HeadingProps) => {
  return (
    <Box mb={2} mt={4} py={4}>
      <div style={heading}>
        <Heading as={as} size={size} color="gray.600">
          {children}
        </Heading>
      </div>
    </Box>
  )
}
