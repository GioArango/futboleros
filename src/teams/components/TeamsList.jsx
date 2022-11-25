import { useContext } from "react";
import { useParams } from "react-router-dom";
import { LeagueTeamContext } from "../../context/LeagueTeamContext";
import { SimpleCard } from "../../ui/components";

export const TeamsList = () => {
    const { teamsData } = useContext(LeagueTeamContext);
    const { idLeague } = useParams();

    return (
        <div className="bg-success bg-opacity-25 rounded mt-3 row row-cols-md-3 d-flex justify-content-center">            
            {
                teamsData.map( ({ team }) => {
                    return <SimpleCard
                                key={ team?.id } 
                                title={ team?.name }
                                img={ team?.logo }
                                buttonName='See information'
                                navigatePath={`/teams/${idLeague}/info/${team.id}`}
                            />
                })
            }
        </div>
    )
}
