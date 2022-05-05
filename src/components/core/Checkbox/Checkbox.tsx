import React from 'react'

import { Checkbox as ChkCheckbox } from '@chakra-ui/react'
export type CheckboxProps = React.ComponentProps<typeof ChkCheckbox>

export const Checkbox: React.VFC<CheckboxProps> = ({
  children,
  ...CheckboxProps
}): JSX.Element => {
  return <ChkCheckbox {...CheckboxProps}>{children}</ChkCheckbox>
}
