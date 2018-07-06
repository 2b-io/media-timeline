import React, { Component, Fragment } from 'react'
import { goToAnchor } from 'react-scrollable-anchor'

import Navigator from './navigator'
import Timeline from './timeline'

import events from '../data'

class App extends Component {
  constructor(...args) {
    super(...args)

    this.state = {
      selected: 0
    }

    this.back = this.back.bind(this)
    this.next = this.next.bind(this)
  }

  componentDidMount() {
    this.goToEvent(0)
  }

  render() {
    const { selected } = this.state

    return (
      <Fragment>
        <Timeline
          events={ events }
          selected={ selected }
        />
        <Navigator
          onBack={ this.back }
          onNext={ this.next }
        />
      </Fragment>
    )
  }

  back() {
    const { selected } = this.state

    if (selected > 0) {
      this.setState({
        selected: selected - 1
      })

      this.goToEvent((selected - 1) || 0)
    }
  }

  next() {
    const { selected } = this.state

    if (events && events.length > selected + 1) {
      this.setState({
        selected: selected + 1
      })

      this.goToEvent((selected + 1) || 0)
    }
  }

  goToEvent(selected) {
    goToAnchor(`#${ selected }`, true)
  }
}

export default App
