import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import MyProgress from '../../components/MyProgress'
import Actions from '../../components/Actions'
import Hamburguer from '../../components/Hamburguer'

const Container = styled.div`
  background: linear-gradient(#8495FE, #C7B0F9);
  height: 100%;
  text-align: center;
`

export default () => (
  <Container>
    <Header/>
    <Hamburguer/>
    <Actions/>
    <MyProgress/>
  </Container>
)
