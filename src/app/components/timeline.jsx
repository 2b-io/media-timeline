import React from 'react'
import styled from 'styled-components'

import Event from './event'

const Wrapper = styled.div`
  position: relative;
  padding-top: 30px;
`

const Timeline = ({ events, selected }) => (
  <Wrapper>
    {
      events.map(
        (event, index) => (
          <Event
            key={ index }
            event={ event }
            odd={ !!(index % 2) }
            selected={ selected === index }
          />
        )
      )
    }
  </Wrapper>
)

export default Timeline
