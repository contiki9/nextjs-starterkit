import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MdSearch } from 'react-icons/md'

import { IconButton } from './IconButton'
export default {
  title: 'Core/IconButton',
  component: IconButton,
  argTypes: {},
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  icon: <MdSearch />,
}
