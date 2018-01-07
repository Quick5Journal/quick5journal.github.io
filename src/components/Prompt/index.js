import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding-top: 40px;
`

const Section = styled.section`

`

const Input = styled.input`
  width: 80%;
  height: 40px;
  border: none;
  font-size: 22px;
  background: none;
  margin: 0 auto 40px auto;
  border-bottom: 3px solid white;
  &::placeholder {
    color: #FFF;
  }
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


export default () => (
  <Container>
    <Section>
      <QuestionContainer>
        <Question>I am grateful for...</Question>
      </QuestionContainer>
    <div>
      <Input type="text" placeholder="Lorem ipsum asme"></Input>
      <Input type="text" placeholder="Lorem ipsum asme"></Input>
      <Input type="text" placeholder="Lorem ipsum asme"></Input>
    </div>
    <Submit>Submit</Submit>
    </Section>
  </Container>
)
