import React, {Fragment, useState, useEffect} from 'react'
import styled from 'styled-components'
import LoadingSpinner from '../components/LoadingSpinner'
import MainBanner from '../components/MainBanner'
// import EventsContainer from './EventsContainer'
import TeamThumbnails from '../components/TeamThumbnails'
import TeamHistory from '../components/TeamHistory'

const StyledDiv = styled('div')`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const TeamContainer = props => {
  // not a hawks fan? assign teamName to your favorite team
  const teamName = 'chicago_blackhawks'
  const [isTeamDataLoading, setIsTeamDataLoading] = useState(true)
  const [teamData, setTeamData] = useState([])

  useEffect(() => {
    document.title = `${teamName.replace('_', ' ')}`
  }, [teamName])

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${teamName}`,
    )
      .then(response => response.json())
      .then(data => {
        setTeamData(data.teams[0])
        setIsTeamDataLoading(false)
      })
      .catch(err => console.log(err))
  }, [teamName])

  if (isTeamDataLoading) {
    return (
      <StyledDiv>
        <LoadingSpinner />
      </StyledDiv>
    )
  }

  return (
    <Fragment>
      {/* <Header strTeamBadge={teamData.strTeamBadge}></Header> */}
      <StyledDiv>
        <MainBanner
          strTeam={teamData.strTeam}
          strLeague={teamData.strLeague}
          imageUrl={teamData.strTeamFanart1}
          strSport={teamData.strSport}
          intFormedYear={teamData.intFormedYear}
        ></MainBanner>
        <TeamHistory strDescriptionEn={teamData.strDescriptionEN}></TeamHistory>
        {/* <EventsContainer
          idTeam={teamData.idTeam}
          teamName={teamName}
        ></EventsContainer> */}
        <TeamThumbnails
          arrTeamFanArt={[
            teamData.strStadiumThumb,
            teamData.strTeamFanart2,
            teamData.strTeamFanart3,
            teamData.strTeamFanart4,
          ]}
        ></TeamThumbnails>
      </StyledDiv>
    </Fragment>
  )
}

export default TeamContainer
