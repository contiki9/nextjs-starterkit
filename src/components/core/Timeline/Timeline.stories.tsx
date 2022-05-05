import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import { Timeline, TimelineProps, TimelineGroup } from './Timeline'
export default {
  title: 'Core/Timeline',
  component: Timeline,
  argTypes: {},
} as Meta

const Template: Story<TimelineProps> = (args) => (
  <Timeline {...args}>{args.children}</Timeline>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Have a Coffee Break with Chakra UI',
  children: 'Contents',
}

export const SubTitle = () => {
  return (
    <Timeline title="初めての体験" subTitle="生まれて始めての経験をしました。">
      Contents
    </Timeline>
  )
}

export const Tag = () => {
  return (
    <Timeline title="初めての体験" tag="2016年">
      Contents
    </Timeline>
  )
}

export const Group = () => {
  return (
    <TimelineGroup>
      <Timeline title="初めての体験" tag="2016">
        Contents
      </Timeline>
      <Timeline title="2つ目の体験">Contents</Timeline>
    </TimelineGroup>
  )
}
