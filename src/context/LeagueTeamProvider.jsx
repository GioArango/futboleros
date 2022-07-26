import { useState } from 'react';
import { LeagueTeamContext } from './LeagueTeamContext';

export const LeagueTeamProvider = ({ children }) => {

    const [leaguesData, setLeagueData] = useState();
    const [teamsData, setTeamsData] = useState();
    const [playersData, setPlayersData] = useState();

    const setLeagues = ( leagues ) => {
        setLeagueData(leagues);
    }

    const setTeams = ( teams ) => {
        setTeamsData(teams)
    }

    const setPlayers = ( players ) => {
        setPlayersData(players);
    }

    return (
        <LeagueTeamContext.Provider value={{ leaguesData, setLeagues, teamsData, setTeams, playersData, setPlayers }}>
            {children}
        </LeagueTeamContext.Provider>
    )
}
