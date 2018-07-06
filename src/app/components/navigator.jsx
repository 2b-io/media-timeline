import React, { Component } from 'react'

const REACT_LATENCY = 200

class Navigator extends Component {
  componentDidMount() {
    window.addEventListener('click', this.handleClick = event => {
      clearTimeout(this.clickThrottle)

      this.clickThrottle = setTimeout(() => {
        this.processLastClick(event)
      }, REACT_LATENCY)
    })

    window.addEventListener('keydown', this.handleKeyDown = event => {
      if (event.keyCode === 38 || event.keyCode === 40) {
        event.preventDefault()
      }

      clearTimeout(this.keyboardThrottle)

      this.keyboardThrottle = setTimeout(() => {
        this.processLastKeyDown(event)
      }, REACT_LATENCY)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClick)
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  render() {
    return null
  }

  processLastClick(event) {
    const { onBack: back, onNext: next } = this.props

    if (event.detail === 1) {
      next()
    } else {
      back()
    }
  }

  processLastKeyDown(event) {
    const { onBack: back, onNext: next } = this.props

    if (event.keyCode === 40) {
      next()
    } else if (event.keyCode === 38) {
      back()
    }
  }

}

export default Navigator
