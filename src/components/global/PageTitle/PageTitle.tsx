import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export interface PageTitleProps {
  title: string
  description?: string
}

export const PageTitle = ({ title, description }: PageTitleProps) => {
  return (
    <Box mb={8}>
      <Heading as="h1" size="lg" mb={3}>
        {title}
      </Heading>
      {description && (
        <Text fontSize="sm" color="gray.500">
          {description}
        </Text>
      )}
    </Box>
  )
}
