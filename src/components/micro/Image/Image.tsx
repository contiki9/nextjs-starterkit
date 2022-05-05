import React from 'react'

import {
  Image as ChkImage,
  ImageProps as ChkImageProps,
} from '@chakra-ui/react'

export interface ImageProps extends ChkImageProps {
  objectFit?:
    | 'fill'
    | 'contain'
    | 'cover'
    | 'scale-down'
    | 'none'
    | 'initial'
    | 'inherit'
  /**
   * 正方形のサイズになります。
   */
  boxSize?: string
  src: string
  alt: string
  radius?: string | 'full'
  htmlHeight?: string | number
  htmlWidth?: string | number
}

export const Image = (props: ImageProps) => {
  const { radius, ...args } = props
  return <ChkImage borderRadius={radius} {...args} />
}
