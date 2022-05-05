import React from 'react'

import {
  Title,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs'
import { Story, Meta } from '@storybook/react'

import { Button, Divider as DividerAs } from '../../core'
import { Box } from '../../micro'

import { Stack, StackProps } from './index'
export default {
  title: 'Layout/Stack',
  component: Stack,
  argTypes: {
    direction: {
      control: {
        type: 'inline-radio',
        options: ['row', 'column', 'row-reverse', 'column-reverse'],
      },
    },
    justify: {
      control: {
        type: 'inline-radio',
        options: [
          'start',
          'center',
          'space-between',
          'space-around',
          'space-evenly',
        ],
      },
    },
    align: {
      control: {
        type: 'inline-radio',
        options: ['stretch', 'center', 'start', 'end'],
      },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <p>
            <a
              href="https://chakra-ui.com/docs/layout/stack"
              target="_blank"
              rel="noreferrer"
            >
              chakra ui Stack
            </a>
            と
            <a
              href="https://chakra-ui.com/docs/features/style-props"
              target="_blank"
              rel="noreferrer"
            >
              chakra ui Style Props
            </a>
            の同じ内容が使えます。
          </p>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta

const Template: Story<StackProps> = (args) => (
  <Stack {...args}>
    <Box>
      <Button size="sm">Button</Button>
    </Box>
    <Box>
      <Button>Button2</Button>
    </Box>
    <Box>
      <Button size="lg">Button3</Button>
    </Box>
  </Stack>
)

export const Default = Template.bind({})
Default.args = {
  spacing: '1',
  divider: undefined,
}
export const Divider = () => {
  return (
    <Stack spacing="15" divider={<DividerAs />}>
      <Box>
        <Button size="sm">Button</Button>
      </Box>
      <Box>
        <Button>Button2</Button>
      </Box>
      <Box>
        <Button size="lg">Button3</Button>
      </Box>
    </Stack>
  )
}
