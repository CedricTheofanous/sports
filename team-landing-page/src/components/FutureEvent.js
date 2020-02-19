import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled('div')`
  margin-top: 0;
  margin-bottom: 1vh;
`

const StyledP = styled('p')`
  margin-top: 0;
  margin-bottom: 0.5vh;
`

const FutureEvent = props => {
  const {strHomeTeam, strAwayTeam, dateEventLocal} = props

  return (
    <StyledDiv>
      <StyledP>{`${dateEventLocal}`}</StyledP>
      <StyledP>{`${strHomeTeam}  vs.`}</StyledP>
      <StyledP>{`${strAwayTeam}`}</StyledP>
    </StyledDiv>
  )
}

export default FutureEvent
