import React, { Component } from 'react'
import TextareaAutosize from 'react-autosize-textarea'
import styled from 'styled-components'

const InputStyled = styled(TextareaAutosize)`
  width: 80%;
  border: none;
  padding: 2px 0;
  font-size: 22px;
  outline: none;
  background: none;
  margin: 0 auto 40px auto;
  resize: none;
  border-bottom: 3px solid white;
  color: #FFF;
  transition: all .3s;
  &::placeholder {
    color: #FFF;
  }
  &:focus {
    background: #00000030;
    border-radius: 4px;
    padding: 6px 10px;
  }
`

export default class Input extends Component {
  constructor(){
    super()
    this.state = {
      active: false
    }
  }

  render() {
    return (
      <div>
        <InputStyled
            onFocus={() => this.setState({ active: true })}
          {...this.props}/>
      </div>
    )
  }
}
