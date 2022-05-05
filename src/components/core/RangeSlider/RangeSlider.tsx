import React from 'react'

import {
  RangeSlider as ChkRangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
} from '@chakra-ui/react'

export type RangeSliderProps = React.ComponentProps<typeof ChkRangeSlider>

export const RangeSlider: React.VFC<RangeSliderProps> = ({
  defaultValue = [0, 100],
  children,
  ...RangeSliderProps
}): JSX.Element => {
  return (
    <ChkRangeSlider defaultValue={defaultValue} {...RangeSliderProps}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      {children}
    </ChkRangeSlider>
  )
}
