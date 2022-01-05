import React, { HTMLAttributes } from 'react'
import {
  Textarea as ChkTextarea,
  TextareaProps as ChkTextareaProps,
} from '@chakra-ui/react'

export interface TextareaProps extends ChkTextareaProps {
  isDisabled?: boolean
  isFullWidth?: boolean
  placeholder?: string
  value?: string
}

export const Textarea = (props: TextareaProps) => {
  return <ChkTextarea {...props} />
}
