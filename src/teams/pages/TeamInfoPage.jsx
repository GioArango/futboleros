import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { LeagueTeamContext } from "../../context/LeagueTeamContext"
import { Navbar } from "../../ui/components";

export const TeamInfoPage = () => {

  const { teamsData } = useContext(LeagueTeamContext);
  const { idLeague, idTeam } = useParams();
  const navigate = useNavigate();
  const teamSelected = teamsData.find(tm => tm.team.id == idTeam);
  
  const navbarOptions = {
      logo: teamSelected.team.logo,
      label: teamSelected.team.name,
      homePath: '/'
  }

  const optionsNavigate = [
    {
      id: new Date().getDate() * Math.random(0,9),
      label: 'Events',
      navigate: `/teams/${idLeague}/events/${idTeam}`
    },
    {
      id: new Date().getDate() * Math.random(0,9),
      label: 'Players',
      navigate: `/teams/${idLeague}/players/${idTeam}`
    }
  ]

  console.log('eeh', optionsNavigate);

  const { team, venue } = teamSelected;

  const onBackNavigate = () => {
    navigate(-1);
  }

  return (
    <>

      <Navbar 
        navLogo={navbarOptions}
        optionsNavigate={optionsNavigate}
      />

      <div className="m-5">
        <div className="row mt-5 border rounded shadow">
          <div className="col-sm-4 my-2">
            <img
              src={team.logo}
              alt={team.name}
              className="img-thumbnail" style={{ width: '400px' }}
            />
          </div>

          <div className="col-sm-8 mt-2 fst-italic">
            <h3 className="text-uppercase">{team.name}</h3>

            <div className="row">
              <div className="col-md-8 col-sm-6">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Founded: </b> {team.founded}
                  </li>
                  <li className="list-group-item">
                    <b>City: </b> {venue.city}
                  </li>
                  <li className="list-group-item">
                    <b>Stadium: </b> {venue.name}
                  </li>
                  <li className="list-group-item">
                    <b>Capacity: </b> {venue.capacity}
                  </li>
                  <li className="list-group-item">
                    <b>Address: </b> {venue.address}
                  </li>
                </ul>
              </div>

              <div className="col-md-4 col-sm-6 d-flex justify-content-center">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="img-thumbnail align-middle my-2"
                />
              </div>

            </div>
          </div>


        </div>
        <button
          onClick={onBackNavigate}
          className="btn btn-outline-success w-25 my-4"
        >
          Atrás
        </button>
      </div>
    </>

  )
}
