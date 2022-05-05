import React from 'react'

import {
  Flex as ChkFlex,
  FlexProps as ChkFlexProps,
  SystemProps,
} from '@chakra-ui/react'

export interface FlexProps extends ChkFlexProps {
  /**
   * `stretch`,`center`,`flex-start`,`flex-end`,`baseline`,`initial`,`inherit`
   */
  align?: SystemProps['alignItems']
  /**
   * `rows`,`row-reverse`,`column`,`column-reverse`,`initial`,`inherit`
   */
  direction?: SystemProps['flexDirection']
  /**
   * `number`,`auto`,`initial`,`inherit`
   */
  basis?: SystemProps['flexBasis']
  /**
   * `number`,`initial`,`inherit`
   */
  grow?: SystemProps['flexGrow']
  /**
   * `flex-start`,`flex-end`,`center`,`space-between`,`space-around`,`initial`,`inherit`
   */
  justify?: SystemProps['justifyContent']
  /**
   * `number`,`initial`,`inherit`
   */
  shrink?: SystemProps['flexShrink']
  /**
   * `nowrap`,`wrap`,`wrap-reverse`,`initial`,`inherit`
   */
  wrap?: SystemProps['flexWrap']
  children: React.ReactNode
}

export const Flex = (props: FlexProps) => {
  const { children, ...args } = props
  return <ChkFlex {...args}>{children}</ChkFlex>
}
