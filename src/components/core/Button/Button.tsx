import React from 'react'

import { Button as ChkButton } from '@chakra-ui/react'

export type ButtonProps = {
  /**
   * Buttonのカラーパターン
   */
  colorScheme?: 'primary'
  variant?: 'solid' | 'outline' | 'ghost' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  onClick?: any
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  children: React.ReactNode
  isFullWidth?: boolean
}

export const Button = ({
  colorScheme = undefined,
  variant = 'solid',
  size = 'md',
  onClick,
  leftIcon,
  rightIcon,
  children,
  isFullWidth,
}: ButtonProps): JSX.Element => {
  const color = colorScheme === undefined ? 'primary.500' : undefined
  return (
    <ChkButton
      color={color}
      colorScheme={colorScheme}
      variant={variant}
      size={size}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      isFullWidth={isFullWidth}
      onClick={onClick}
    >
      {children}
    </ChkButton>
  )
}
