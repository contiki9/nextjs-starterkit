import React from 'react'

import { Story, Meta } from '@storybook/react'

import { Image, ImageProps } from './index'
export default {
  title: 'Micro/Images',
  component: Image,
  argTypes: {},
} as Meta

const Template: Story<ImageProps> = ({ alt, src, ...args }) => (
  <>
    <Image {...args} alt={alt} src={src} />
  </>
)

const args = {
  src: 'https://bit.ly/sage-adebayo',
  alt: 'test',
}

export const Default = Template.bind({})
Default.args = {
  src: args.src,
  alt: args.alt,
}

export const boxSize = () => {
  return (
    <>
      <Image
        src="https://media.istockphoto.com/photos/row-of-books-on-a-shelf-multicolored-book-spines-stack-in-the-picture-id1222550815?b=1&k=20&m=1222550815&s=170667a&w=0&h=MTxBeBrrrYtdlpzhMpD1edwLYQf3OPgkNeDEgIzYJww="
        alt={args.alt}
        boxSize="150px"
      />
    </>
  )
}

export const Radius = () => {
  return (
    <>
      <Image src={args.src} alt={args.alt} radius="md" htmlWidth="150px" />
      <Image src={args.src} alt={args.alt} radius="full" htmlWidth="300px" />
    </>
  )
}
