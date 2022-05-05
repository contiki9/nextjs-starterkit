import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'
import { MdAdd } from 'react-icons/md'

import { Button, ButtonProps } from './Button'
export default {
  title: 'Core/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `Chakra UI <a href="https://chakra-ui.com/docs/components/form/button">Button</a>`,
      },
    },
  },
  argTypes: {
    colorScheme: {
      control: {
        type: 'inline-radio',
        options: ['primary', undefined],
      },
    },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>{args.children}</Button>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
}

export const ColorScheme = () => {
  return (
    <>
      <Button>Default</Button>
      <Button colorScheme="primary">primary</Button>
    </>
  )
}

export const Variant = () => {
  return (
    <>
      <Button variant="solid">solid</Button>
      <Button variant="outline">outline</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
    </>
  )
}

export const Size = () => {
  return (
    <>
      <Button size="xs">xs</Button>
      <Button size="sm">sm</Button>
      <Button size="md">md</Button>
      <Button size="lg">lg</Button>
    </>
  )
}

export const leftIcon = () => {
  return (
    <>
      <Button leftIcon={<MdAdd />}>xs</Button>
    </>
  )
}
