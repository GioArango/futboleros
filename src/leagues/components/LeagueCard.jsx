import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LeagueTeamContext } from "../../context/LeagueTeamContext";
import { FetchHelper } from "../../helpers";
import { useGetTime } from "../../hooks";
import { SimpleCard } from "../../ui/components";

export const LeagueCard = ({ id, logo, name, type }) => {

    // const { setTeams } = useContext(LeagueTeamContext);
    // const navigate = useNavigate();  
    // const { year } = useGetTime();
    // console.log('year',year);

    // const onNavigate = async () => {
    //     const resp = await FetchHelper(`https://api-football-v1.p.rapidapi.com/v3/teams?league=${id}&season=2022`, 'GET');
    //     console.log(resp);
    //     setTeams(resp);
    //     navigate('/teams/info'); 
    // }

    return (
        <SimpleCard 
            title={ name }
            img={ logo }
            buttonName='See teams'
            navigatePath={`/teams/${id}`}
        />
    )
}
