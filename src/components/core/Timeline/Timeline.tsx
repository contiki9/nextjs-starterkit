import {
  Box,
  HStack,
  Stack,
  Flex,
  Circle,
  Text,
  useColorModeValue,
  Heading,
  StackProps,
} from '@chakra-ui/react'
import React from 'react'

import { Tag } from '../Tag'
export interface TimelineProps {
  title: string
  subTitle?: string
  tag?: string
  isLastItem?: boolean
  children?: React.ReactNode
}

export const Timeline = (props: TimelineProps) => {
  const { title, subTitle, tag, isLastItem, children, ...stackProps } = props

  return (
    <Stack as="li" direction="row" spacing="4" {...stackProps}>
      <Flex direction="column" alignItems="center" aria-hidden="true">
        <Circle
          bg="primary.500"
          size="5"
          borderWidth="4px"
          borderColor={useColorModeValue('white', 'gray.800')}
          mt={1}
        ></Circle>
        {!isLastItem && <Flex flex="1" borderRightWidth="1px" mb="-5" />}
      </Flex>
      <Stack spacing="1" pt="1" flex="1">
        <Flex direction="column">
          {tag && (
            <Box>
              <Tag size="sm" colorScheme="primary">
                {tag}
              </Tag>
            </Box>
          )}
          <Heading fontSize="md" fontWeight="semibold" mb={1}>
            {title}
          </Heading>
          <Text fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>
            {subTitle}
          </Text>
        </Flex>
        <Flex pb={6}>{children}</Flex>
      </Stack>
    </Stack>
  )
}

export const TimelineGroup = (props: StackProps) => {
  const { children, ...stackProps } = props
  const items = React.useMemo(
    () =>
      React.Children.toArray(children)
        .filter<React.ReactElement<TimelineProps>>(React.isValidElement)
        .map((item, index, array) =>
          index + 1 === array.length
            ? React.cloneElement(item, { isLastItem: true })
            : item
        ),
    [children]
  )
  return (
    <Stack as="ul" {...stackProps}>
      {items}
    </Stack>
  )
}
