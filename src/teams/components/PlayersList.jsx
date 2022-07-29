
import { PlayerCard } from "../../ui/components";

export const PlayersList = ({playersList}) => {

    return (
        <div className="container">
            <div className="row">

                {
                    playersList.map(({ player, statistics, sort }) => {
                        return <PlayerCard
                            key={player.id}
                            player={player}
                            statistics={statistics}
                            sort={sort}
                        />
                    })
                }

            </div>
        </div>
    )
}
