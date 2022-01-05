import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Meta } from '../components/global'
import { Flex } from '../components/layout'
import { DefaultLayout } from '../components/page/_layout'

export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Meta />
      <Flex justify="center" align="center" direction="column">
        <DefaultLayout>contents here</DefaultLayout>
      </Flex>
    </>
  )
}
