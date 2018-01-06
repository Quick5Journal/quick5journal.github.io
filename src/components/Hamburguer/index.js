import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 40px;
    height: 30px;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`

export default () => (
    <Container>
      <div class="hamburguer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Container>
)
