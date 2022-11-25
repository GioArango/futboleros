import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LeagueTeamContext } from '../../context/LeagueTeamContext';
import { FetchHelper } from '../../helpers';
import { useGetTime } from '../../hooks';
import { Navbar } from '../../ui/components';
import { TeamsList } from '../components/TeamsList';

export const TeamsContentPage = () => {

    const { idLeague } = useParams();
    const { leaguesData, teamsData, setTeams, year } = useContext(LeagueTeamContext);
    const leagueInfo = leaguesData.find(logo => logo.league.id == idLeague);
    const navbarOptions = {
        logo: leagueInfo.league.logo,
        label: leagueInfo.league.name,
        homePath: '/search'
    }

    const getTeams = async () => {
        const resp = await FetchHelper(`https://api-football-v1.p.rapidapi.com/v3/teams?league=${idLeague}&season=${year}`, 'GET');
        const { response } = resp;
        setTeams(response);
        console.log(response);
    }

    useEffect(() => {
        getTeams();
    }, [idLeague]);

    return (
        <>
            <Navbar
                navLogo={navbarOptions}
            />
            <div className='container'>
                {
                    (teamsData?.length > 0)
                    &&
                    <TeamsList />
                }
            </div>
        </>
    )
}
