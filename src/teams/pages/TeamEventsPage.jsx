import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchHelper } from '../../helpers';

export const TeamEventsPage = () => {

  const { idTeam } = useParams();
  const [events, setEvents] = useState([]);

  const getEventsTeam = async () => {
    const events = await FetchHelper(`https://run.mocky.io/v3/4c031d7b-9261-4ec7-b745-c3babebaae16`, 'GET');
    // const events = await FetchHelper(`/v3/fixtures?season=2022&team=${idTeam}`, 'GET');
    const { response } = events;
    setEvents(response);
    console.log(response);
  }

  useEffect(() => {
    getEventsTeam();
  }, []);


  return (
    <div className='container mt-3'>

      {
        events.map( ({fixture, goals, league, score, teams }) => (
          <table className="table align-middle">
            <thead>
              <tr>
                <th scope="col" className='fs-6' colSpan={4}><img src={league.logo} width="30rem"/> {league.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <th scope="row">1</th> */}
                <td width="40%" className='fs-6 text-end'><img src={teams.home.logo} width="30rem"/> <br/> {teams.home.name}</td>
                <td width="20%" className="table-active">
                  {
                    (fixture.status.long.toLowerCase().includes('finished'))
                    ?
                    <>
                      <h6 className='text-muted text-center fs-6 m-0'>{`${fixture.status.long}`}</h6>
                      <h6 className='text-muted text-center fs-4 m-0'>{`${goals.home} - ${goals.away}`}</h6>
                    </>
                    : ''
                  }
                </td>
                <td width="40%" className="fs-6 text-start"><img src={teams.away.logo} width="30rem"/> <br/> {teams.away.name}</td>
              </tr>
            </tbody>
          </table>
        ))
      }


    </div>
  )
}
