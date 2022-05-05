import React from 'react'
import HomePage from 'src/pages/index'
import { render } from 'src/__tests__/utils'

test('ホームページ', () => {
  const { container } = render(<HomePage />)
  expect(container).toMatchSnapshot()
})
