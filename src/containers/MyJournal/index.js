import React, { Component } from 'react'
import styled from 'styled-components'
import Hamburguer from '../../components/Hamburguer'
import Prompt from '../../components/Prompt'

const Container = styled.div`
  height: 100%;
  text-align: center;
`

export default class MyJournal extends Component {
  constructor(){
    super()
    this.state = {
      someAnswered: false,
      questions: [
        {
          id: '123',
          name: 'I am grateful for...',
          answers: [
            { id:'321',
              value: '',
              example: 'Lorem Ipsum asnm',
            },
            { id:'3243',
              value: '',
              example: 'Lorem Ipsum asnm',
            },
            { id:'lkdjsa3',
              value: '',
              example: 'Lorem Ipsum asnm',
            }
          ]
        },
        {
          id: 'k83j',
          name: 'What would today great?',
          answers: [
            { id:'321',
              value: '',
              example: 'Lorem Ipsum asnm',
            },
            { id:'3243',
              value: '',
              example: 'Lorem Ipsum asnm',
            },
            { id:'39128',
              value: '',
              example: 'Lorem Ipsum asnm',
            }
          ]
        },
        {
          id: 'jjjiu',
          name: 'Daily affirmation. I am...',
          answers: [
            { id:'321',
              value: '',
              example: 'Lorem Ipsum asnm',
            },
            { id:'39128',
              value: '',
              example: 'Lorem Ipsum asnm',
            }
          ]
        },
        {
          id: 'aaa',
          name: '3 Amazing things that happened today...',
          answers: [
            { id:'321',
              value: '',
              example: 'Lorem Ipsum asnm',
            },
            { id:'39128',
              value: '',
              example: 'Lorem Ipsum asnm',
            },
            { id:'kkk',
              value: '',
              example: 'Lorem Ipsum asnm',
            }
          ]
        },
        {
          id: 'uuuuu',
          name: 'How could I have made today even better?',
          answers: [
            { id:'321',
              value: '',
              example: 'Lorem Ipsum asnm',
            }
          ]
        }
      ]
    }
  }

  onChangeAnswer = (questionid, answerid, newvalue) => {
    const newQuestions = this.state.questions.map(question => {
      if(question.id === questionid) {
        return Object.assign(question, { answers: question.answers.map(answer => {
          if(answer.id === answerid) {
            return Object.assign(answer, { value: newvalue })
          }else
            return answer
        })})
      }else
        return question
    })

    if(newvalue !== '') {
      this.setState({ someAnswered: true })
    }
    this.setState({ questions: newQuestions })
  }

  render(){
    return (
      <Container>
        <Hamburguer color="#FFF" />
        <Prompt onChangeAnswer={this.onChangeAnswer}
                isSomeAsnwered={this.state.someAnswered}
                questions={this.state.questions}/>
      </Container>
    )
  }
}

