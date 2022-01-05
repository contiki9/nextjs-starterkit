import React from 'react'
import { Story, Meta } from '@storybook/react'
import {
  Title,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs'
import { Button } from '../../core'
import { Box } from '../../micro'
import { Flex } from './index'
export default {
  title: 'Layout/Flex',
  component: Flex,
  argTypes: {
    align: {
      control: {
        type: 'inline-radio',
        options: [
          `stretch`,
          `center`,
          `flex-start`,
          `flex-end`,
          `baseline`,
          `initial`,
          `inherit`,
        ],
      },
    },
    direction: {
      control: {
        type: 'inline-radio',
        options: [
          `rows`,
          `row-reverse`,
          `column`,
          `column-reverse`,
          `initial`,
          `inherit`,
        ],
      },
    },
    justify: {
      control: {
        type: 'inline-radio',
        options: [
          `flex-start`,
          `flex-end`,
          `center`,
          `space-between`,
          `space-around`,
          `initial`,
          `inherit`,
        ],
      },
    },
    wrap: {
      control: {
        type: 'inline-radio',
        options: [`nowrap`, `wrap`, `wrap-reverse`, `initial`, `inherit`],
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
              href="https://chakra-ui.com/docs/layout/flex"
              target="_blank"
              rel="noreferrer"
            >
              chakra ui Flex
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

const Template: Story = (args) => {
  return (
    <Flex {...args}>
      <Box>
        <Button>Button</Button>
      </Box>
      <Box>
        <Button>Button2</Button>
      </Box>
      <Box>
        <Button>Button3</Button>
      </Box>
    </Flex>
  )
}

export const Default = Template.bind({})
Default.args = {}
