import React, { useState, useEffect } from 'react'

import {
  Alert as ChkAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react'
export type AlertProps = {
  isClose?: boolean
} & React.ComponentProps<typeof ChkAlert>

export const Alert: React.VFC<AlertProps> = ({
  children,
  title,
  hidden = false,
  isClose,
  ...AlertProps
}): JSX.Element => {
  const [isHidden, setHidden] = useState(hidden)

  useEffect(() => {
    setHidden(hidden)
  }, [hidden])

  const hiddenClick = () => {
    setHidden(true)
  }

  return (
    <ChkAlert {...AlertProps} hidden={isHidden}>
      <AlertIcon />
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
      {isClose && (
        <CloseButton
          position="absolute"
          right="8px"
          top="8px"
          onClick={() => hiddenClick()}
        />
      )}
    </ChkAlert>
  )
}
