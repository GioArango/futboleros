import { useContext } from "react"
import { LeagueTeamContext } from "../../context/LeagueTeamContext";
import { SimpleCard } from "../../ui/components";

export const LeagueList = () => {

    const { leaguesData } = useContext(LeagueTeamContext);

    return (
        <div className="bg-success bg-opacity-25 rounded mt-3 row row-cols-md-3 d-flex justify-content-center">            
            {
                leaguesData.map( ({league}) => {
                    return <SimpleCard
                                key={ league.id } 
                                title={ league.name }
                                img={ league.logo }
                                buttonName='Ver equipos'
                                navigatePath={`/teams/${league.id}`}
                            />
                })
            }
        </div>
    )
}
