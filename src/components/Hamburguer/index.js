import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 40px;
    height: 30px;
    position: absolute;
    top: 20px;
    z-index: 10;
    right: 20px;
    cursor: pointer;
    .hamburguer span {
      background: ${props => props.color ? props.color : ''}
    }
`

export default (props) => (
    <Container {...props}>
      <div className="hamburguer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Container>
)
