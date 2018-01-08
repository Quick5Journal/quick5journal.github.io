import React from 'react'
import styled from 'styled-components'
import iconTotal from './total-icon.svg'
import iconTotalHover from './total-icon-hover.svg'
import iconBook from './book-icon.svg'
import iconBookHover from './book-icon-hover.svg'

const Header = styled.header`
  background: #FFF;
  padding: 20px;
  border: 2px solid #FE8A84;
`

const Logo = styled.h1`
  margin: 0;
  color: #FE8A84;
  font-size: 23px;
  text-align: left;
  line-height: 0.4;
  margin-bottom: 35px;
  span {
    font-weight: 400 
  }
  @media(min-width: 600px){
    margin-bottom: 35px;
  }
`

const Total = styled.button`
  position: relative;
  text-align: center;
  margin-top: 3px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #FE8A84;
  background: #FFF;
  border: 2px solid #FE8A84;
  border-radius: 3px;
  width: 100%;
  padding: 4px 15px;
  outline: none;
  transition: all .2s;
  &:before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    left: 14px;
    top: 12px;
  }

  &:first-child {
    margin-right: 20px;
    &:before {
        background: url(${iconTotal}) no-repeat;
    }
    &:hover {
      &:before {
        background-image: url(${iconTotalHover})
      }
      @media(max-width: 500px){
         &:before {
            background: none;
         }
      }
    }

    @media(max-width: 500px){
      &:before {
        background: none;
      }
    }
  }

  &:nth-child(2){
    &:before {
       background: url(${iconBook}) no-repeat;
    }

    &:hover {
      &:before {
        background-image: url(${iconBookHover})
      }
      @media(max-width: 500px){
         &:before {
            background: none;
         }
      }
    }
    @media(max-width: 500px){
      &:before {
        background: none;
      }
    }
  }

  span {
     font-weight: 300;
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

  &:hover {
     background: #FE8A84;
     color: #FFF;
  }
`

const StatusContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media(min-width: 600px){
        max-width: 500px;
        margin: 0 auto ;
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
    <Logo>Quick5Journal</Logo>
    <Status />
  </Header>
)
