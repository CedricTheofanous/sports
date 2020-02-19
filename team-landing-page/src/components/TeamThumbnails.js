import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 1vh;
  grid-column-gap: 1vw;
  background-color: black;
`

const StyledImage = styled('img')`
  width: 100%;
`

const TeamThumbnails = props => {
  const {arrTeamFanArt} = props

  return (
    <StyledDiv>
      {arrTeamFanArt.map((imgSrc, index) => {
        return (
          <div key={`div ${index}-${imgSrc}`}>
            <StyledImage
              key={`image ${index}-${imgSrc}`}
              src={`${imgSrc}`}
              alt={`fan art`}
            ></StyledImage>
          </div>
        )
      })}
    </StyledDiv>
  )
}

export default TeamThumbnails
