import React from 'react'
import styled from 'styled-components'
import Input from '../Input'
import iconCloud from './cloud-icon.svg'

const Container = styled.div`
  height: 100%;
`

const Section = styled.section`
  width: 100%;
  height: 100%;
  @media(min-width: 600px){
    margin: 0 auto;
  }

  &:nth-child(2) {
    background: #2196F3;
  }

  &:nth-child(3) {
    background: #00bcd4;
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

const Submit = styled.button`
  border: none;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  color: #FE8A84;
  font-weight: bold;
  background: #fff;
  border: 2px solid #FE8A84;
  font-size: 20px;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 4px;
`

const CloudIcon = styled.img`
    width: 70px;
    position: absolute;
    left: ${props => props.x}px;
    top: ${props => props.y}px;
    opacity: .5;
    animation: cloud 120s ease-in-out infinite;

`

const Center = styled.div`
padding-top: 100px
`

export default ({ questions, onChangeAnswer }) => (
  <Container>
    <CloudIcon x={100} y={100} src={iconCloud} />
    { questions.map( question => (
        <Section key={question.id}>
          <Center>
            <QuestionContainer>
            <Question>{ question.name }</Question>
            </QuestionContainer>
            <div>
              { question.answers.map(answer => (
              <Input
                key={answer.id}
                type="text"
                question={question.name}
                placeholder={answer.example}></Input>))
              }
            </div>
          </Center>
        </Section>))
    }
  </Container>
)
