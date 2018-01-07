import React from 'react'
import styled from 'styled-components'
import iconJournal from './journal.svg'
import iconDay from './day-icon.svg'
import iconJournalOld from './journal-old.svg'

const Menu = styled.section`
  background: #FE8A84;
  padding: 20px;
  height: 112px;
`

const Items = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
  justify-content: space-between;
`

const Item = styled.li`
  position: relative;
`

const Circle = styled.div`
  border-radius: 100%;
  background: #FFF;
  position: relative;
  width: 80px;
  height: 80px;
`

const Icon = styled.img`
  position: absolute;
  width: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Description = styled.p`
  margin: 14px 0 0 0;
  color: #FFF;
  font-weight: bold;
`

export default () => (
  <Menu>
    <Items>
      <Item>
        <Circle>
            <Icon src={iconJournal}/>
        </Circle>
        <Description>My 5 minutes</Description>
      </Item>
      <Item>
        <Circle>
          <Icon src={iconJournalOld}/>
        </Circle>
        <Description>Timeline</Description>
      </Item>
      <Item>
        <Circle>
          <Icon src={iconDay}/>
        </Circle>
        <Description>Quote of day</Description>
      </Item>
    </Items>
  </Menu>
)