import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

//import { AvatarGroup } from '@chakra-ui/react'
import { Avatar, AvatarGroup } from './index'
export default {
  title: 'Micro/Avatar',
  component: Avatar,
  subcomponents: { AvatarGroup },
  parameters: {
    docs: {
      description: {
        component: `Avatarのコンポーネントです`,
      },
    },
  },
  argTypes: {},
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

const DefaultAttr = {
  name: 'Dan Abrahmov',
}

export const Default = Template.bind({})
Default.args = {
  ...DefaultAttr,
}

export const IsShowBadge = Template.bind({})
IsShowBadge.args = {
  isShowBadge: true,
  ...DefaultAttr,
}

export const Group = () => {
  return (
    <AvatarGroup size="md" max={2}>
      <Avatar name="Ryan Florence" />
      <Avatar name="Segun Adebayo" />
      <Avatar name="Kent Dodds" />
      <Avatar name="Prosper Otemuyiwa" />
      <Avatar name="Christian Nwamba" />
    </AvatarGroup>
  )
}
