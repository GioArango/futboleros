import React, { useContext, Suspense } from "react"
import { LeagueTeamContext } from "../../context/LeagueTeamContext";
import { PlaceholderCard } from "../../ui/components";
import { SimpleCard } from "../../ui/components";

export const LeagueList = () => {

    const { leaguesData } = useContext(LeagueTeamContext);

    return (
        <div className="bg-success bg-opacity-25 rounded my-3 row row-cols-md-3 d-flex justify-content-center">
            {
                leaguesData.map(({ league }) => (
                    <SimpleCard
                        key={league.id}
                        title={league.name}
                        img={league.logo}
                        buttonName='Ver equipos'
                        navigatePath={`/teams/${league.id}`}
                    />
                ))
            }
        </div>
    )
}
