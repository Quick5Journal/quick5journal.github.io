import React from 'react'
import styled from 'styled-components'
import Input from '../Input'

const Container = styled.div`
  padding-top: 40px;
`

const Section = styled.section`

`

const QuestionContainer = styled.div`
  padding: 30px 20px;

`

const Question = styled.h4`
  margin: 0;
  color: #FFF;
  font-weight: bold;
  font-size: 30px;

`

const Submit = styled.button`
  border: none;
  width: 80%;
  height: 60px;
  color: #FFF;
  background: #8486cb;
  font-size: 20px;
  text-transform: uppercase;
  border-radius: 4px;
`


export default ({ questions, onChangeAnswer }) => (
  <Container>
    { questions.map( question => (
        <Section key={question.id}>
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
        <Submit>Next</Submit>
        </Section>))
    }
  </Container>
)
