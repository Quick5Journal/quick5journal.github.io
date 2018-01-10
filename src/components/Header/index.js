import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background: #FFF;
  padding: 30px;
  border: 2px solid #FE8A84;
`

const Logo = styled.h1`
  margin: 0;
  color: #FE8A84;
  font-size: 23px;
  text-align: left;
  line-height: 0.4;
  span {
    font-weight: 400;
  }
`

export default () => (
  <Header>
    <Logo>Quick5Journal</Logo>
  </Header>
)
