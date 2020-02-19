import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled('div')`
  margin-top: 0;
  margin-bottom: 1vh;
`

const StyledP = styled('p')`
  margin-top: 0;
  margin-bottom: .5vh;
`

const PastEvent = props => {
  const {
    strHomeTeam,
    strAwayTeam,
    dateEventLocal,
    intHomeScore,
    intAwayScore,
  } = props
  return (
    <StyledDiv>
      <StyledP>{`${dateEventLocal}`}</StyledP>
      <StyledP>{`${strHomeTeam}: ${intHomeScore}`}</StyledP>
      <StyledP>{`${strAwayTeam}: ${intAwayScore}`}</StyledP>
    </StyledDiv>
  )
}

export default PastEvent
