import React from 'react'

import { Text as ChkText } from '@chakra-ui/react'

export type TextProps = {
  as?: any
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  color?:
    | 'primary'
    | 'white'
    | 'black'
    | 'light'
    | 'xlight'
    | 'error'
    | 'success'
  isTruncated?: boolean
  children: React.ReactNode
}

export const Text = ({
  as = undefined,
  size,
  isTruncated = false,
  children,
  ...props
}: TextProps): JSX.Element => {
  const color = () => {
    let value
    switch (props.color) {
      case 'primary':
        value = 'primary.500'
        break
      case 'white':
        value = 'white'
        break
      case 'black':
        value = 'gray.900'
        break
      case 'light':
        value = 'gray.500'
        break
      case 'xlight':
        value = 'gray.300'
        break
      case 'error':
        value = 'red.500'
        break
      case 'success':
        value = 'green.500'
        break
      default:
        value = 'gray.900'
        break
    }
    return value
  }

  return (
    <ChkText as={as} fontSize={size} color={color()} isTruncated={isTruncated}>
      {children}
    </ChkText>
  )
}
