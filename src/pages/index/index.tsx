import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Meta } from 'src/components/global'
import { Flex } from 'src/components/layout'
import { DefaultLayout } from 'src/components/page/_layout'
import { Button } from 'src/components/core'

export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Meta />
      <Flex justify="center" align="center" direction="column">
        <DefaultLayout>
          contents here
          <Button>Button</Button>
        </DefaultLayout>
      </Flex>
    </>
  )
}
