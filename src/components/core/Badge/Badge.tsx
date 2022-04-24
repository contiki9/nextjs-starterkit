import React from 'react'
import { Badge as ChkBadge } from '@chakra-ui/react'
export type BadgeProps = React.ComponentProps<typeof ChkBadge>

export const Badge: React.VFC<BadgeProps> = ({
  children,
  ...BadgeProps
}): JSX.Element => {
  return <ChkBadge {...BadgeProps}>{children}</ChkBadge>
}
