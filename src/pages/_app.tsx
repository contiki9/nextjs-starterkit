import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider, useColorModeValue } from '@chakra-ui/react'
import { Sidebar } from '../components/global'
import { Box } from '../components/micro'
import TagManager from 'react-gtm-module'
import { theme } from '../theme'
import { gtmId } from 'site.config'

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
