import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Meta } from '../components/global'
import { Flex } from '../components/layout'

export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex justify="center" align="center" direction="column">
      <Meta />
    </Flex>
  )
}
