import React, { Component } from 'react'
import Icon from 'react-icons-kit'
import LightBox from 'react-images'
import ScrollableAnchor from 'react-scrollable-anchor'
import styled, { css } from 'styled-components'

import { image } from 'react-icons-kit/feather/image'

import PrettyDate from './pretty-date'

const Time = styled.div`
  position: absolute;
  white-space: nowrap;
  padding: 0 10px;
  height: 30px;
  display: flex;
  align-items: center;
  ${
    ({ left }) => left ?
      css`
        right: 30px;
      ` :
      css`
        left: 30px;
      `
  }
`

const Content = styled.div`
  transition: background .2s linear;
  position: absolute;
  top: 15px;
  transform: translateY(-50%);
  padding: 10px 20px;
  border: 2px solid black;
  ${
    ({ left }) => left ?
      css`
        right: 70px;
      ` :
      css`
        left: 70px;
      `
  }
`

const ContentLine = styled.div`
  position: absolute;
  border-bottom: 2px solid black;
  top: 14px;
  width: 40px;
  ${
    ({ left }) => left ?
      css`
        right: 30px;
      ` :
      css`
        left: 30px;
      `
  }
`

const ContentRow = styled.div`
  white-space: nowrap;
  line-height: 1.5em;
`

const Line = styled.div`
  border-right: 2px dashed black;
  width: 0;
  margin-left: 14px;
  min-height: 60px;
  height: ${
    ({ length }) => length ? `${ length / 15000000 }px` : '200px'
  };
`

const Point = styled.div`
  transition: background .2s linear;
  width: 30px;
  height: 30px;
  border: 2px solid black;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Anchor = styled.a`
  opacity: 0;
  width: 30px;
  height: 30px;
  display: inline-block;
`

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 30px;
  font-weight: 600;

  & {
    ${
      ({ selected }) => selected && css`
        ${ Point } {
          background: yellow;
        }

        ${ Content } {
          background: yellow;
        }
      `
    }
  }
`

class Event extends Component {
  constructor(...args) {
    super(...args)

    this.state = {
      showImages: false,
      currentImage: 0
    }

    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
  }

  render() {
    const { odd, event, selected } = this.props
    const { currentImage, showImages } = this.state

    return (
      <Wrapper selected={ selected } onClick={
        (e) => e.stopPropagation()
      }>
        <Time left={ !odd }>
          <PrettyDate date={ event.when } />
        </Time>
        <Content left={ odd }>
          {
            event.content.map(
              (line, index) => <ContentRow key={ index }>{ line }</ContentRow>
            )
          }
        </Content>
        <ContentLine left={ odd } />
        <ScrollableAnchor id={ event.index.toString() }>
          <Point onClick={ this.toggleImages(true) }>
            {
              event.images &&
                <Icon icon={ image } size={ 16 } />
            }
          </Point>
        </ScrollableAnchor>
        <Line length={ event.next } />
        {
          event.images &&
            <LightBox
              currentImage={ currentImage }
              images={ event.images }
              isOpen={ showImages }
              onClose={ this.toggleImages(false) }
              onClickNext={ this.gotoNext }
              onClickPrev={ this.gotoPrevious }
              onClickImage={ e => e.stopPropagation() }
            />
        }
      </Wrapper>
    )
  }

  toggleImages(showImages) {
    return e => {
      if (e) {
        e.stopPropagation()
        e.preventDefault()
      }

      this.setState({
        showImages: showImages,
        currentImage: 0
      })
    }
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown = event => {
      if (event.keyCode === 13) {
        event.preventDefault()
      }

      clearTimeout(this.keyboardThrottle)

      this.keyboardThrottle = setTimeout(() => {
        this.processLastKeyDown(event)
      }, 100)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  processLastKeyDown(e) {
    const { selected, event } = this.props

    if (!selected || !event.images) {
      return
    }

    if (e.keyCode === 13) {
      console.log('x')

      this.setState({
        showImages: true,
        currentImage: 0
      })
    }
  }
}
export default Event
