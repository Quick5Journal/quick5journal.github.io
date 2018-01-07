import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import Hamburguer from '../../components/Hamburguer'
import Prompt from '../../components/Prompt'
import Actions from '../../components/Actions'

const Container = styled.div`
  background: linear-gradient(#8495FE, #C7B0F9);
  height: 100%;
  text-align: center;
`

export default () => (
  <Container>
    <Hamburguer />
    <Prompt/>
  </Container>
)
