import React, { Component } from 'react'

const REACT_LATENCY = 200

class Navigator extends Component {
  componentDidMount() {
    console.log('mount')

    window.addEventListener('click', this.handleClick = (e) => {
      clearTimeout(this.clickThrottle)

      this.clickThrottle = setTimeout(() => {
        this.processLastClick(e)
      }, REACT_LATENCY)
    })
  }

  componentWillUnmount() {
    console.log('unmount')

    window.removeEventListener('click', this.handleClick)
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
}

export default Navigator
