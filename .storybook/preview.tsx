import { ChakraProvider } from '@chakra-ui/react'
import { Story } from '@storybook/react'
import React from 'react'
import { theme } from '../src/theme'
import * as nextImage from 'next/image'
const withChakra = (Story: Story) => {
  return (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  )
}
// nextImageのerror回避
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
})

export const decorators = [withChakra]

const customViewports = {
  /** iPhone X */
  base: {
    name: 'base',
    styles: {
      width: '375px',
      height: '812px',
    },
    type: 'mobile',
  },
  /** iPad */
  md: {
    name: 'md',
    styles: {
      width: '768px',
      height: '1024px',
    },
    type: 'tablet',
  },
  /** MacBook Air */
  lg: {
    name: 'lg',
    styles: {
      width: '1280px',
      height: '800px',
    },
    type: 'desktop',
  },
}

export const parameters = {
  viewport: {
    viewports: customViewports,
    defaultViewport: 'base',
  },
  controls: { expanded: true },
  options: {
    storySort: {
      order: ['Docs', 'Micro', 'Core', 'Pattern', 'Catalog'],
    },
  },
}
