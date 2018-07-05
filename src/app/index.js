import 'style/global'

import React from 'react'
import { render } from 'react-dom'
import { configureAnchors } from 'react-scrollable-anchor'

import Timeline from './components/timeline'
import events from './data'

configureAnchors({
  offset: -60,
  scrollDuration: 500
})

const root = document.getElementById('root')

render(
  <Timeline events={ events } />,
  root
)
