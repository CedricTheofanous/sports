import React from 'react'
import styled from 'styled-components'
import './App.css'
import TeamContainer from './containers/TeamContainer'

const StyledApp = styled('div')`
  text-align: center;
  font-size: calc(12px + 2vmin);
`

// pass in teamName as prop to TeamContainer in the format of {city_team} to display your favorite team

function App() {
  return (
    <StyledApp className="App">
      <TeamContainer />
    </StyledApp>
  )
}

export default App
