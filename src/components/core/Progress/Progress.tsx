import React from 'react'
import { Progress as ChkProgress } from '@chakra-ui/react'
export type ProgressProps = React.ComponentProps<typeof ChkProgress>

export const Progress: React.VFC<ProgressProps> = ({
  ...ProgressProps
}): JSX.Element => {
  return <ChkProgress {...ProgressProps} />
}
