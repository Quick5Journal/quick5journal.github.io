import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background: #FFF;
  height: calc(20% - 20px);
  padding: 20px;
  border: 2px solid #FE8A84;
`

const Description = styled.p`
  margin: 0;
  color: #FE8A84;
  font-size: 30px;
  text-align: left;
`

export default () => (
  <Header>
    <Description>Hello Victor,<br/>congratulations</Description>
  </Header>
)
