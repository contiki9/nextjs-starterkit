import React from 'react'
import { Tooltip as ChkTooltip } from '@chakra-ui/react'

export type TooltipProps = React.ComponentProps<typeof ChkTooltip>

export const Tooltip: React.VFC<TooltipProps> = ({
  children,
  ...TooltipProps
}): JSX.Element => {
  return <ChkTooltip {...TooltipProps}>{children}</ChkTooltip>
}
