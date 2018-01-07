import React, { Component } from 'react'
import styled from 'styled-components'
import iconSun from './sun-icon.svg'
import iconClose from './close-icon.svg'

const InputStyled = styled.textarea`
  width: 80%;
  border: none;
  font-size: 22px;
  line-height: 0.8;
  outline: none;
  background: none;
  margin: 0 auto 40px auto;
  resize: none;
  border-bottom: 3px solid white;
  color: #FFF;
  &::placeholder {
    color: #FFF;
  }
`

const Container = styled.div`
  transition: all .3s;
  opacity: 0;
  visibility: hidden;
  position: fixed;
  background: #03a9f4;
  padding-top: 20px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation-duration: .3s;
  animation-fill-mode: both;
  &.active {
    opacity: 1;
    animation-name: fadeInUp;
    visibility: visible;
    width: 100%;
    height: 100%;
    background: #2196F3;
    top: 0;
  }
`

const FullInput = styled(InputStyled)`
  height: 190px;
  width: 90%;
  border-bottom: none;
  background: #00000047;
  margin: 0 auto 12px auto;
  line-height: 1.8;
  padding: 20px;
  border-radius: 4px;
`
const Question = styled.h4`
  color: #FFF;
  font-size: 30px;
  margin: 10px 0 30px;
`

const IconSun = styled.img`
  width: 60px;
  height: 60px;
`
const Close = styled.img`
  position: absolute;
  top: 0;
  cursor: pointer;
  right: 0;
  width: 50px;
  height: 50px;
`

const Next = styled.button`
  width: 100px;
  height: 40px;
  font-size: 16px;
  background: #2685d2;
  border: none;
  border-radius: 4px;
  color: #FFF;
  outline: none;
  box-shadow: 0px 5px 0px 0px #2676ba;
  cursor: pointer;
  &:active {
    transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px #2676ba;
  }
`

export default class Input extends Component {
  constructor(){
    super()
    this.state = {
      active: false
    }
  }

  onFocusInput = () => {
    this.setState({ active: true }, () => {
      console.log(this.focusInput)
      this.focusInput.focus()
    })
  }

  render() {
    return (
      <div>
        <Container className={this.state.active && 'active'}>
          <Close src={iconClose} onClick={() => this.setState({ active: false })} />
          <IconSun src={iconSun}/>
          <Question> { this.props.question }</Question>
          <FullInput innerRef={(inputf) => { this.focusInput = inputf }} {...this.props}/>
          <Next>Next</Next>
        </Container>

        <InputStyled
          onFocus={this.onFocusInput}
          {...this.props}/>
      </div>
    )
  }
}
