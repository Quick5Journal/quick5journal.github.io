import React from 'react'
import styled from 'styled-components'
import { Circle } from 'rc-progress';
import iconEdit from './edit-icon.svg'

const Container = styled.div`
  background: linear-gradient(#8495FE,#C7B0F9);
  cursor: pointer;
  padding: 80px 0;
  position: relative;
`
const Description = styled.p`
  position: absolute;
  top: 113px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  color: #FFF;
  font-weight: 300;
`

const Icon = styled.img`
  width: 60px;
  position: absolute;
  left: 100px;
  top: 59px;
`

const Center = styled.div`
  width: 250px;
  height: 250px;
  margin: 0 auto;
  position: relative;
`

export default ({className}) => (
  <Container className={className}>
    <Center>
       <Circle percent="25" strokeWidth="4" trailColor="#FFF" strokeColor="#FE8A84" />
       <Icon src={iconEdit} />
       <Description>Click here to continue</Description>
     </Center>
  </Container>
)
