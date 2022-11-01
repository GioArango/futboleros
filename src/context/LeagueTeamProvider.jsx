import { useState } from 'react';
import { LeagueTeamContext } from './LeagueTeamContext';

export const LeagueTeamProvider = ({ children }) => {

    const [countriesData, setCountriesData] = useState([])
    const [leaguesData, setLeagueData] = useState([]);
    const [teamsData, setTeamsData] = useState([]);
    const [playersData, setPlayersData] = useState([]);


    const setCountries = (countries) => {
        setCountriesData(countries)
    }
    
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
        <LeagueTeamContext.Provider value={{ leaguesData, setLeagues, teamsData, setTeams, playersData, setPlayers, countriesData, setCountries }}>
            {children}
        </LeagueTeamContext.Provider>
    )
}
