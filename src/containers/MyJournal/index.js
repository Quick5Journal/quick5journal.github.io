import React, { Component } from 'react'
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

export default class MyJournal extends Component {
  constructor(){
    super()
    this.state = {
      questions: [
        {
          id: '123',
          name: 'I am grateful for...',
          answers: [
            { id:'321',
              value: 'My day yy...',
              example: 'Lorem Ipsum asnm',
            },
            { id:'3243',
              value: 'My day yy...',
              example: 'Lorem Ipsum asnm',
            }
          ]
        }
      ]
    }
  }

  render(){
    return (
      <Container>
        <Hamburguer />
        <Prompt handleQuestionFocus={this.handleQuestionFocus}
                questions={this.state.questions}/>
      </Container>
    )
  }
}

