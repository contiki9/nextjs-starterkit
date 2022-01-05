import { Tag as ChkTag, TagLabel, Flex, Box, FlexProps } from '@chakra-ui/react'
import React from 'react'

export type TagProps = {
  /**
   * Tagのカラーパターン
   */
  colorScheme?: 'primary'
  variant?: 'solid' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  bgColor?: string
  mb?: number
  children: React.ReactNode
}

export const Tag = ({
  colorScheme = undefined,
  variant = 'solid',
  size = 'md',
  bgColor,
  children,
  mb,
}: TagProps): JSX.Element => {
  return (
    <ChkTag
      colorScheme={colorScheme}
      variant={variant}
      size={size}
      borderRadius="full"
      bgColor={bgColor}
      px="1em"
      mb={mb}
    >
      <TagLabel>{children}</TagLabel>
    </ChkTag>
  )
}
export const TagGroup = (props: FlexProps) => {
  const { children, ...FlexProps } = props
  const items = React.useMemo(
    () =>
      React.Children.toArray(children)
        .filter<React.ReactElement<TagProps>>(React.isValidElement)
        .map((item, i) => {
          return (
            <Box key={i} mb={1} mr={2}>
              {item}
            </Box>
          )
        }),
    [children]
  )
  return <Flex wrap="wrap">{items}</Flex>
}
