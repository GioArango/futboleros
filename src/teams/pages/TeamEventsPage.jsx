import { memo, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchHelper } from '../../helpers';
import { v4 as uuid } from 'uuid'
import { Loader } from '../../ui/components';
import { PlaceholderEvent } from '../../ui/components/PlaceholderEvent';

export const TeamEventsPage = () => {

  const { idTeam } = useParams();
  const [events, setEvents] = useState([]);
  const [load, setLoad] = useState(false)

  const getEventsTeam = async () => {
    // const events = await FetchHelper(`https://run.mocky.io/v3/4c031d7b-9261-4ec7-b745-c3babebaae16`, 'GET');
    try {
      setLoad(true)
      const events = await FetchHelper(`https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2022&team=${idTeam}`, 'GET');
      console.log(events)
      const { response } = events;

      const sortedEvents = response.sort((a, b) => {
        const date1 = new Date(a.fixture.date)
        const date2 = new Date(b.fixture.date)
        return date1 - date2
      })

      setEvents(sortedEvents);
    } catch (error) {
      alert('Error obteniendo los eventos')
    } finally {
      setLoad(false)
    }
  }

  useEffect(() => {
    getEventsTeam();
  }, []);


  return (
    <div className='container mt-3'>
      {
        (load)
        &&
        <>
          <PlaceholderEvent />
          <PlaceholderEvent />
          <PlaceholderEvent />
          <PlaceholderEvent />
          <PlaceholderEvent />        
        </>
      }
      {
        (!load)
        &&
        events?.map(({ fixture, goals, league, score, teams }) => {
          const splitMatchDate = fixture.date.split('T');
          const matchDate = splitMatchDate[0];
          let hourMatch = splitMatchDate[1].split('+');
          hourMatch = hourMatch[0];
          return <table key={uuid()} className="table align-middle">
            <thead>
              <tr>
                <th scope="col" className='fs-6' colSpan={2}><img src={league.logo} width="30rem" /> {league.name}</th>
                {
                  (fixture.status.long.toLowerCase().includes('finished'))
                  &&
                  <th scope="col" className='fs-6' colSpan={2}><p className="text-muted text-end m-0 fs-6 fw-light">{matchDate}</p></th>
                }
              </tr>
            </thead>
            <tbody>
              <tr>
                <td width="40%" className='fs-6 text-end'><img src={teams.home.logo} width="30rem" /> <br /> {teams.home.name}</td>
                <td width="20%" className="table-active">
                  {
                    (fixture.status.long.toLowerCase().includes('finished'))
                      ?
                      <>
                        <h6 className='text-muted text-center fs-6 m-0'>{`${fixture.status.long}`}</h6>
                        <h6 className='text-muted text-center fs-4 m-0'>{`${goals.home} - ${goals.away}`}</h6>
                      </>
                      :
                      <>
                        <h6 className='text-muted text-center fs-6 m-0'>{`${matchDate}`}</h6>
                        <h6 className='text-muted text-center fs-6 m-0'>{`${hourMatch}`}</h6>
                      </>
                  }
                </td>
                <td width="40%" className="fs-6 text-start"><img src={teams.away.logo} width="30rem" /> <br /> {teams.away.name}</td>
              </tr>
            </tbody>
          </table>
        })
      }


    </div>
  )
}