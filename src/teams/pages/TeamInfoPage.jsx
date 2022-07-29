import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { LeagueTeamContext } from "../../context/LeagueTeamContext"
import { Navbar } from "../../ui/components";
import { TeamInfo } from "../components/TeamInfo";

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

      <TeamInfo 
        team={team}
        venue={venue}
        onBackNavigate={onBackNavigate}
      />
    </>

  )
}
