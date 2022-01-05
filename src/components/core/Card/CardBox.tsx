import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

export interface CardBoxProps {
  title?: string
  children: React.ReactNode
}

export const CardBox = ({ title, children }: CardBoxProps) => {
  return (
    <Box bgColor="gray.50" borderRadius="lg" overflow="hidden" p={4}>
      {title && (
        <Heading as="h2" size="md" mb={3}>
          {title}
        </Heading>
      )}
      {children}
    </Box>
  )
}
