import React from 'react'
import { Link } from 'react-router-dom'
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
  max-width: 600px;
  margin: 0 auto;
`

const Item = styled.li`
  position: relative;
`

const Circle = styled.div`
  border-radius: 100%;
  background: #FFF;
  position: relative;
  margin-bottom: 10px;
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

const Description = styled(Link)`
  margin: 14px 0 0 0;
  text-decoration: none;
  cursor: pointer;
  color: #FFF;
  font-weight: bold;
  border-bottom: 2px solid #FFF;
  padding-bottom: 5px;
`

export default () => (
  <Menu>
    <Items>
      <Item>
        <Circle>
            <Icon src={iconJournal}/>
        </Circle>
        <Description to="/myjournal">My 5 minutes</Description>
      </Item>
      <Item>
        <Circle>
          <Icon src={iconJournalOld}/>
        </Circle>
        <Description to="timeline">Timeline</Description>
      </Item>
      <Item>
        <Circle>
          <Icon src={iconDay}/>
        </Circle>
        <Description to="quote">Quote of day</Description>
      </Item>
    </Items>
  </Menu>
)
