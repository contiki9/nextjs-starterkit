import React from 'react'

import ShallowRenderer from 'react-test-renderer/shallow'

import { Button } from './index'

const render = ShallowRenderer.createRenderer()
describe('<Button />', () => {
  it('初期表示', () => {
    render.render(<Button>Button</Button>)
    const container = render.getRenderOutput()
    expect(container).toMatchSnapshot()
  })
})
