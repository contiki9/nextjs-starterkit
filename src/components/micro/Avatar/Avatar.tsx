import React from 'react'

import { Avatar as ChkAvatar, AvatarBadge } from '@chakra-ui/react'
export type AvatarProps = {
  isShowBadge?: boolean
} & React.ComponentProps<typeof ChkAvatar>

export const Avatar: React.VFC<AvatarProps> = ({
  isShowBadge,
  ...AvatarProps
}): JSX.Element => {
  return (
    <ChkAvatar {...AvatarProps}>
      {isShowBadge && <AvatarBadge bg="green.500" boxSize="1.25em" />}
    </ChkAvatar>
  )
}
