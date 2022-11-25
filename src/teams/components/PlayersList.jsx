
import { PlayerCard } from "../../ui/components";
import { v4 as uuid } from 'uuid'

export const PlayersList = ({playersList}) => {

    return (
        <div className="container">
            <div className="row">

                {
                    playersList.map(({ player, statistics, sort }) => {
                        return <PlayerCard
                            key={uuid()}
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
