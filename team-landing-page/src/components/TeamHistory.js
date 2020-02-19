import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledP = styled('p')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: calc(10px + 1vmin);
  text-align: center;
  width: 80%;
`

const TeamHistory = props => {
  const {strDescriptionEn} = props

  return (
    <StyledDiv>
      <h2>Team History</h2>
      <StyledP id="team-description">{strDescriptionEn}</StyledP>
      <br></br>
    </StyledDiv>
  )
}

export default TeamHistory
