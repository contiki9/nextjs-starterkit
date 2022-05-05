import { AppProps } from 'next/app'
import { useEffect } from 'react'

import { ChakraProvider, useColorModeValue } from '@chakra-ui/react'
import TagManager from 'react-gtm-module'

import { gtmId } from 'site.config'

import { Sidebar } from '../components/global'
import { Box } from '../components/micro'
import { theme } from '../theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: gtmId })
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
        <Sidebar />
        <Box ml={{ base: 0, md: 60 }} p="4">
          <Component {...pageProps} />
        </Box>
      </Box>
    </ChakraProvider>
  )
}
