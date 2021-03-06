import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Input from '../Input'
import iconCloud from './cloud-icon.svg'
import iconSun from './sun-icon.svg'
import iconLike from './like-icon.svg'
import iconMoon from './moon-icon.svg'
import iconStar from './star-icon.svg'
import iconBack from './back-icon.svg'

const Container = styled.div`
  height: 100%;
`

const Section = styled.section`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;
  @media(min-width: 600px){
    margin: 0 auto;
  }
  &:before {
    content: "";
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 60px;
  }

  &:nth-child(1) {
    background: #FE8A84;
    &:before {
      background: url(${iconCloud}) no-repeat;
      background-size: cover;
    }
  }

  &:nth-child(2) {
    background: #F866AD;
    &:before {
      background: url(${iconSun}) no-repeat;
      background-size: cover;
    }
  }

  &:nth-child(3){
    background: #8D48F7;
    &:before {
      background: url(${iconLike}) no-repeat;
      background-size: cover;
    }
  }

  &:nth-child(4){
    background: #435F96;
    &:before {
      background: url(${iconMoon}) no-repeat;
      background-size: cover;
    }
  }

  &:nth-child(5){
    background: #2196f3;
    &:before {
      background: url(${iconStar}) no-repeat;
      background-size: cover;
    }
  }

`

const QuestionContainer = styled.div`
  padding: 30px 20px 50px 20px;

`

const Question = styled.h4`
  margin: 0;
  color: #FFF;
  font-weight: bold;
  font-size: 30px;
  @media(min-width: 600px){
    font-size: 40px
  }
`

const Back = styled.img`
  position: absolute;
  cursor: pointer;
  width: 50px;
  height: 50px;
  top: 13px;
  left: 20px;
  z-index: 10;
`

const Submit = styled.button`
  border: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  outline: none;
  height: 60px;
  color: #FE8A84;
  font-weight: bold;
  background: #fff;
  border: 2px solid #FE8A84;
  font-size: 20px;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 4px;
  transition: all .3s;
  &:hover {
    background: #FE8A84;
    color: #FFF;
  }
`

export default ({ questions, onChangeAnswer, isSomeAsnwered }) => (
  <Container>
    <Link to="/">
      <Back src={iconBack} />
    </Link>
    <div>
    { questions.map( question => (
        <Section key={question.id}>
          <QuestionContainer>
          <Question>{ question.name }</Question>
          </QuestionContainer>
          <div>
            { question.answers.map(answer => (
            <Input
              key={answer.id}
              value={answer.value}
              type="text"
              onChange={(e) => onChangeAnswer(question.id, answer.id, e.target.value)}
              placeholder={answer.example}></Input>))
            }
          </div>
        </Section>
      ))
    }
    </div>
    <Submit>Save</Submit>
  </Container>
)
