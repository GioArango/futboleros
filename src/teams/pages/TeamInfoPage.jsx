import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { LeagueTeamContext } from "../../context/LeagueTeamContext"
import { Navbar } from "../../ui/components";
import { TeamInfo } from "../components/TeamInfo";
import { TeamEventsPage } from "./TeamEventsPage";
import { TeamPlayersPage } from "./TeamPlayersPage";

export const TeamInfoPage = () => {

  const { teamsData } = useContext(LeagueTeamContext);
  const [ optionNav, setOptionNav ] = useState(null);
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
      label: 'Information',
      navigate: `/teams/${idLeague}/events/${idTeam}`,
      value:'team'
    },
    {
      id: new Date().getDate() * Math.random(0,9),
      label: 'Events',
      navigate: `/teams/${idLeague}/events/${idTeam}`,
      value:'events'
    },
    {
      id: new Date().getDate() * Math.random(0,9),
      label: 'Players',
      navigate: `/teams/${idLeague}/players/${idTeam}`,
      value:'players'
    }
  ]

  const { team, venue } = teamSelected;

  const onBackNavigate = () => {
    navigate(-1);
  }

  const onSelectNav = ( optionLink ) => {
    setOptionNav(optionLink)
  }

  const renderSwitch = () => {
    switch (optionNav) {
      case 'team':
        return <TeamInfo team={team} venue={venue} onBackNavigate={onBackNavigate} />;
      case 'events':
        return <TeamEventsPage />;
      case 'players':
        return <TeamPlayersPage />;
      default:
        return <TeamInfo team={team} venue={venue} onBackNavigate={onBackNavigate} />;
    }
  };

  return (
    <>

      <Navbar 
        navLogo={navbarOptions}
        optionsNavigate={optionsNavigate}
        onSelectNav={onSelectNav}
      />

      {
        renderSwitch(optionNav)
      }
    </>

  )
}
