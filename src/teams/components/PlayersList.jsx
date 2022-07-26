import { useContext } from "react";
import { LeagueTeamContext } from "../../context/LeagueTeamContext";
import { PlayerCard } from "../../ui/components";

export const PlayersList = ({playersList}) => {

    // const { playersData } = useContext(LeagueTeamContext);

    return (
        <div className="container">
            <div className="row">

                {
                    playersList.map(({ player, statistics }) => {
                        return <PlayerCard
                            key={player.id}
                            player={player}
                            statistics={statistics}
                        />
                    })
                }

            </div>
        </div>
    )
}
