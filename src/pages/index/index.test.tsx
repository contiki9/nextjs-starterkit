import React from 'react'

import { render } from 'src/__tests__/utils'
import HomePage from 'src/pages/index'

test('ホームページ', () => {
  const { container } = render(<HomePage />)
  expect(container).toMatchSnapshot()
})
