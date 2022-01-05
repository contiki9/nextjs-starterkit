import React from 'react'
import { Story, Meta } from '@storybook/react'
import {
  Title,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs'
import { Box, BoxProps } from './index'
export default {
  title: 'Micro/Box',
  component: Box,
  argTypes: {},
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <p>
            <a
              href="https://chakra-ui.com/docs/layout/box"
              target="_blank"
              rel="noreferrer"
            >
              chakra ui Box
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

const Template: Story<BoxProps> = (args) => <Box {...args}>{args.children}</Box>

export const Default = Template.bind({})
Default.args = {
  children:
    '単語や音素のような言語単位に対応し，線的に配列されてその言語を表わすための，視覚的記号の体系。その体系をなすひとつひとつの記号 letter; characterも日本語では文字',
}
