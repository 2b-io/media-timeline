import React from 'react'
import styled from 'styled-components'

import GoToTop from './go-to-top'
import Event from './event'

const Wrapper = styled.div`
  position: relative;
  padding-top: 30px;
`

const Timeline = ({ events }) => (
  <Wrapper>
    {
      events.map(
        (event, index) => (
          <Event
            key={ index }
            event={ event }
            odd={ !!(index % 2) }
          />
        )
      )
    }
    <GoToTop />
  </Wrapper>
)

export default Timeline
