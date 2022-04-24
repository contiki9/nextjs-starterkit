import React from 'react'
import { IconButton as ChkIconButton } from '@chakra-ui/react'
export type IconButtonProps = React.ComponentProps<typeof ChkIconButton>

export const IconButton: React.VFC<IconButtonProps> = ({
  ...IconButtonProps
}): JSX.Element => {
  return <ChkIconButton {...IconButtonProps} />
}
