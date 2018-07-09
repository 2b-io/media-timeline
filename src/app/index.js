import 'style/global'

import React from 'react'
import { render } from 'react-dom'
import { configureAnchors } from 'react-scrollable-anchor'

import App from './components/app'

configureAnchors({
  offset: -60,
  scrollDuration: 200
})

const root = document.getElementById('root')

render(
  <App />,
  root
)
