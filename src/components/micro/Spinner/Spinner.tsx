import React from 'react'

import { Spinner as ChkSpinner } from '@chakra-ui/react'
export type SpinnerProps = React.ComponentProps<typeof ChkSpinner>

export const Spinner: React.VFC<SpinnerProps> = ({
  ...SpinnerProps
}): JSX.Element => {
  return (
    <ChkSpinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      {...SpinnerProps}
    />
  )
}
