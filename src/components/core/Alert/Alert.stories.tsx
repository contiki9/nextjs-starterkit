import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Alert } from './Alert'
export default {
  title: 'Core/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: `Alertのコンポーネントです`,
      },
    },
  },
  argTypes: {},
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}>{args.children}</Alert>
)

const DefaultAttr = {
  children: 'Alert',
}

export const Default = Template.bind({})
Default.args = {
  ...DefaultAttr,
}

export const Title = Template.bind({})
Title.args = {
  title: 'Title',
  ...DefaultAttr,
}

export const Status = () => {
  return (
    <>
      <Alert status="info" isClose={true}>
        {DefaultAttr.children}
      </Alert>
      <Alert status="warning">{DefaultAttr.children}</Alert>
      <Alert status="success">{DefaultAttr.children}</Alert>
      <Alert status="error">{DefaultAttr.children}</Alert>
    </>
  )
}

export const IsClose = Template.bind({})
IsClose.args = {
  isClose: true,
  ...DefaultAttr,
}
