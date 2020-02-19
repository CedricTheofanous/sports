import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled('div')`
  background-color: black;
  color: white;
  width: 100vw;
`
const StyledH1 = styled('h1')`
  font-size: calc(16px + 3vmin);
`

const StyledImage = styled('img')`
  width: 100%;
  height: auto;
`
const MainBanner = props => {
  const {strTeam, intFormedYear, imageUrl} = props

  return (
    <StyledDiv>
      <StyledH1 id="banner-title">{strTeam}</StyledH1>
      <p>{`est. ${intFormedYear}`}</p>
      <StyledImage
        id="banner-img"
        src={`${imageUrl}`}
        alt={`${strTeam} fan art`}
      ></StyledImage>
    </StyledDiv>
  )
}

export default MainBanner
