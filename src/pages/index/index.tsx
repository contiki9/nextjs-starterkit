import React from 'react'

import { useDisclosure } from '@chakra-ui/react'

import { DefaultLayout } from 'src/components/page/_layout'

import { Button } from 'src/components/core'
import { Meta } from 'src/components/global'
import { Flex } from 'src/components/layout'

export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Meta />
      <Flex justify="center" align="center" direction="column">
        <DefaultLayout>
          contents here
          <Button></Button>
        </DefaultLayout>
      </Flex>
    </>
  )
}
