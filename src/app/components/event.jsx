import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import styled, { css } from 'styled-components'

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
  border-right: 2px solid black;
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

  &:hover {
    ${ Point } {
      background: black;
    }

    ${ Content } {
      background: yellow;
    }
  }
`

const StartEvent = ({ odd, event }) => (
  <Wrapper>
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
      <Point>
        <Anchor href={ `#${ event.index }` } />
      </Point>
    </ScrollableAnchor>
    <Line length={ event.next } />
  </Wrapper>
)

export default StartEvent
