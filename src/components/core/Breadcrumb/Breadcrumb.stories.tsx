import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Breadcrumb, BreadcrumbItem } from './index'
export default {
  title: 'Core/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component: `Breadcrumbのコンポーネントです`,
      },
    },
  },
  argTypes: {},
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args}>{args.children}</Breadcrumb>
)

const DefaultAttr = {
  children: (
    <>
      <BreadcrumbItem href="#">Link1</BreadcrumbItem>
      <BreadcrumbItem href="#">Link2</BreadcrumbItem>
      <BreadcrumbItem isCurrentPage={true}>Link3</BreadcrumbItem>
    </>
  ),
}

export const Default = Template.bind({})
Default.args = {
  ...DefaultAttr,
}
