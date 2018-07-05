import React from 'react'
import Icon from 'react-icons-kit'
import { goToAnchor } from 'react-scrollable-anchor'
import styled from 'styled-components'

import { arrowUpCircle } from 'react-icons-kit/feather/arrowUpCircle'

const Button = styled.button.attrs({
  type: 'button'
})`
  appearance: none;
  border: none;
  background: transparent;
  position: fixed;
  bottom: 15px;
  right: 15px;
  outline: none;
  cursor: pointer;
  display: inline-flex;
  padding: 0;
  margin: 0;
`

const GoToTop = () => (
  <Button onClick={ () => goToAnchor('#0', true) }>
    <Icon icon={ arrowUpCircle } size={ 48 } />
  </Button>
)

export default GoToTop
