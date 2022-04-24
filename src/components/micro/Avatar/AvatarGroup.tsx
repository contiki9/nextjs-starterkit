import React from 'react'
import { AvatarGroup as ChkAvatarGroup } from '@chakra-ui/react'
export type AvatarGroupProps = React.ComponentProps<typeof ChkAvatarGroup>

export const AvatarGroup: React.VFC<AvatarGroupProps> = ({
  children,
  ...AvatarGroupProps
}): JSX.Element => {
  return <ChkAvatarGroup {...AvatarGroupProps}>{children}</ChkAvatarGroup>
}
