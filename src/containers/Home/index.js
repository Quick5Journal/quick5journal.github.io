import React from 'react'
import styled from 'styled-components'
import Hamburguer from '../../components/Hamburguer'
import MyProgress from '../../components/MyProgress'
import Actions from '../../components/Actions'

const Container = styled.div`
  background: linear-gradient(#8495FE, #C7B0F9);
  height: 100%;
  text-align: center;
`

export default () => (
  <Container>
    <Hamburguer />
    <Actions/>
    <MyProgress/>
  </Container>
)
