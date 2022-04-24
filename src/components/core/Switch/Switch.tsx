import React from 'react'
import { Switch as ChkSwitch } from '@chakra-ui/react'
export type SwitchProps = React.ComponentProps<typeof ChkSwitch>

export const Switch: React.VFC<SwitchProps> = ({
  ...SwitchProps
}): JSX.Element => {
  return <ChkSwitch {...SwitchProps} />
}
