import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../App'

it('renders correctly', () => {
  // eslint-disable-next-line import/no-named-as-default-member
  renderer.create(<App />)
})
