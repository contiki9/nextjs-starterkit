import React from 'react'
import { Select as ChkSelect } from '@chakra-ui/react'
export type SelectProps = React.ComponentProps<typeof ChkSelect>

export const Select: React.VFC<SelectProps> = ({
  children,
  ...SelectProps
}): JSX.Element => {
  return <ChkSelect {...SelectProps}>{children}</ChkSelect>
}
