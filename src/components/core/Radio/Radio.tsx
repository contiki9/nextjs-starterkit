import React from 'react'
import { Radio as ChkRadio } from '@chakra-ui/react'
export type RadioProps = React.ComponentProps<typeof ChkRadio>

export const Radio: React.VFC<RadioProps> = ({
  children,
  ...RadioProps
}): JSX.Element => {
  return <ChkRadio {...RadioProps}>{children}</ChkRadio>
}
