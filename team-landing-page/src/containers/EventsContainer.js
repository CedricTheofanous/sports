import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import FutureEvent from '../components/FutureEvent'
import PastEvent from '../components/PastEvent'
import LoadingSpinner from '../components/LoadingSpinner'

const StyledDiv = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5vw;
`

// errors running multiple fetch requests in the same effect, decided to test what I have working instead of debug

const EventsContainer = props => {
  const {idTeam, teamName} = props
  const [isEventsLoading, setIsEventsLoading] = useState(true)
  const [pastEvents, setPastEvents] = useState([])
  const [futureEvents, setFutureEvents] = useState([])

  useEffect(() => {
    let cancel = false

    const runEffect = async () => {
      // past
      const pastFetch = await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${idTeam}`,
      )
      if (cancel) {
        return
      }
      const pastResults = await pastFetch.json()
      if (cancel) {
        return
      }
      setPastEvents(pastResults.results)

      // future
      const futureFetch = await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${idTeam}`,
      )
      if (cancel) {
        return
      }
      const futureResults = await futureFetch.json()
      if (cancel) {
        return
      }
      console.log(futureResults)
      setFutureEvents(futureResults.events)
      setIsEventsLoading(false)
    }
    runEffect()

    return () => {
      cancel = true
    }
  }, [idTeam, teamName])

  if (isEventsLoading) {
    return (
      <StyledDiv>
        <LoadingSpinner />
      </StyledDiv>
    )
  }

  return (
    <StyledDiv>
      <section>
        <h2>Schedule</h2>
        {futureEvents.map(event => {
          return (
            <FutureEvent
              key={event.idEvent}
              strHomeTeam={event.strHomeTeam}
              strAwayTeam={event.strAwayTeam}
              dateEventLocal={event.dateEventLocal}
            ></FutureEvent>
          )
        })}
      </section>
      <section>
        {console.log(pastEvents)}
        <h2>Scores</h2>{' '}
        {pastEvents.map(event => {
          return (
            <PastEvent
              key={event.idEvent}
              strHomeTeam={event.strHomeTeam}
              strAwayTeam={event.strAwayTeam}
              dateEventLocal={event.dateEventLocal}
              intHomeScore={event.intHomeScore}
              intAwayScore={event.intAwayScore}
            ></PastEvent>
          )
        })}
      </section>
    </StyledDiv>
  )
}

export default EventsContainer
