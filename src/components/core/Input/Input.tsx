import React, { HTMLInputTypeAttribute, HTMLAttributes } from 'react'
import {
  Input as ChkInput,
  InputProps as ChkInputProps,
} from '@chakra-ui/react'

export interface InputProps extends ChkInputProps {
  isDisabled?: boolean
  isFullWidth?: boolean
  value?: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
}

export const Input = (props: InputProps) => {
  return <ChkInput {...props} />
}
