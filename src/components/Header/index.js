import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background: #FFF;
  padding: 20px;
  border: 2px solid #FE8A84;
`

const Description = styled.p`
  margin: 0;
  color: #FE8A84;
  font-size: 23px;
  text-align: left;
  line-height: 0.4;
  margin-bottom: 25px;
  span {
    font-weight: bold
  }
  @media(min-width: 600px){
    margin-bottom: 65px;
  }
`

const Total = styled.div`
  text-align: center;
  margin-top: 3px;
  font-size: 18px;
  color: #FFF;
  background: #8495fe;
  border-radius: 3px;
  padding: 4px 15px;
  margin-right: 20px;
    span {
        &:first-child {
            font-size: 19px;
            margin-right: 2px;
        }
    }
    p {
        margin: 0;
        font-size: 17px;
        font-weight: bold;
        text-transform: uppercase;
    }
`

const StatusContainer = styled.div`
    display: flex;
    @media(min-width: 600px){
      justify-content: center;
    }
`

const Status = () => (
    <StatusContainer>
        <Total>
            <span>255</span>
            <span>days</span>
            <p>Total</p>
        </Total>
        <Total>
            <span>5</span>
            <span>days</span>
            <p>January</p>
        </Total>
    </StatusContainer>
)

export default () => (
  <Header>
    <Description>my<span>5Minutes</span></Description>
    <Status />
  </Header>
)
