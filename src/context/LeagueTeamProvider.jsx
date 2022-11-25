import { useState } from 'react';
import { LeagueTeamContext } from './LeagueTeamContext';

export const LeagueTeamProvider = ({ children }) => {

    const [countriesData, setCountriesData] = useState([])
    const [leaguesData, setLeagueData] = useState([]);
    const [teamsData, setTeamsData] = useState([]);
    const [playersData, setPlayersData] = useState([]);
    const [year, setYear] = useState(2021);


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

    const setCurrentYear = ( currentYear ) => {
        setYear(currentYear)
    }

    return (
        <LeagueTeamContext.Provider 
            value={{ 
                leaguesData, 
                setLeagues, 
                teamsData, 
                setTeams, 
                playersData, 
                setPlayers, 
                countriesData, 
                setCountries,
                year,
                setCurrentYear
            }}>
            {children}
        </LeagueTeamContext.Provider>
    )
}
