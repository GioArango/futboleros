import { useState } from 'react';
import { LeagueTeamContext } from './LeagueTeamContext';

export const LeagueTeamProvider = ({ children }) => {

    const [leaguesData, setLeagueData] = useState();
    const [teamsData, setTeamsData] = useState();

    const setLeagues = ( leagues ) => {
        setLeagueData(leagues);
    }

    const setTeams = ( teams ) => {
        setTeamsData(teams)
    }

    return (
        <LeagueTeamContext.Provider value={{ leaguesData, setLeagues, teamsData, setTeams }}>
            {children}
        </LeagueTeamContext.Provider>
    )
}
