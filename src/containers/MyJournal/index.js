import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import Hamburguer from '../../components/Hamburguer'
import Prompt from '../../components/Prompt'
import Actions from '../../components/Actions'

const Container = styled.div`
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
            },
            { id:'lkdjsa3',
              value: 'My day yy...',
              example: 'Lorem Ipsum asnm',
            }
          ]
        },
        {
          id: 'k83j',
          name: 'What would today great?',
          answers: [
            { id:'321',
              value: 'My day yy...',
              example: 'Lorem Ipsum asnm',
            },
            { id:'3243',
              value: 'My day yy...',
              example: 'Lorem Ipsum asnm',
            },
            { id:'39128',
              value: 'My day yy...',
              example: 'Lorem Ipsum asnm',
            }
          ]
        },
        {
          id: 'jjjiu',
          name: 'Daily affirmation. I am...',
          answers: [
            { id:'321',
              value: 'My day yy...',
              example: 'Lorem Ipsum asnm',
            },
            { id:'39128',
              value: 'My day yy...',
              example: 'Lorem Ipsum asnm',
            }
          ]
        },
        {
          id: 'aaa',
          name: '3 Amazing things that happened today...',
          answers: [
            { id:'321',
              value: 'My day yy...',
              example: 'Lorem Ipsum asnm',
            },
            { id:'39128',
              value: 'My day yy...',
              example: 'Lorem Ipsum asnm',
            },
            { id:'kkk',
              value: 'My day yy...',
              example: 'Lorem Ipsum asnm',
            }
          ]
        },
        {
          id: 'uuuuu',
          name: 'How could I have made today even better?',
          answers: [
            { id:'321',
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
        <Hamburguer color="#FFF" />
        <Prompt handleQuestionFocus={this.handleQuestionFocus}
                questions={this.state.questions}/>
      </Container>
    )
  }
}

