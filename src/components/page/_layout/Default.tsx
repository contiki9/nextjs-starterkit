import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

interface DefaultLayoutProps {
  children: React.ReactNode
}

export const DefaultLayout = ({
  children,
}: DefaultLayoutProps): JSX.Element => {
  return (
    <Box
      minH="calc(100vh - 32px)"
      minW="100%"
      bg="white"
      borderRadius="lg"
      p={6}
    >
      {children}
    </Box>
  )
}
