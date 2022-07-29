
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoccerBall, faClock, faCalendarDays, faWeightScale, faPersonArrowUpFromLine, faEarthAmericas, faPeopleArrows, faMitten } from '@fortawesome/free-solid-svg-icons';

import { PlayerRaiting } from '../../teams/components/';

export const PlayerCard = ({ player, statistics, sort }) => {

    return (
        <div className="col-md-4">
            <div className="card user-card">
                <div className="card-header bg-dark bg-gradient d-block">
                    <img src={`https://countryflagsapi.com/png/${player.nationality}`} alt={`${player.nationality} flag`} style={{ width: '30px' }} />
                </div>
                <div className="card-block">
                    <div className="user-image">
                        <img src={player.photo} className="rounded-circle my-2" alt={player.firstname} />
                    </div>
                    <h6 className="f-w-600">{player.name}</h6>
                    <div className="container my-3">
                        <span className="text-muted"> <FontAwesomeIcon icon={faCalendarDays} /> {player.birth.date} ({player.age}) </span><br />
                        {
                            (player.height)
                            &&
                            <span className="text-muted"> <FontAwesomeIcon icon={faPersonArrowUpFromLine} /> {player.height}</span>
                        }
                        {
                            (player.weight)
                            &&
                            <>
                                <span className="text-muted"> | <FontAwesomeIcon icon={faWeightScale} /> {player.weight}</span>
                            </>
                        }
                        <br />
                        <span className="text-muted"> <FontAwesomeIcon icon={faEarthAmericas} /> {player.nationality} </span>
                    </div>
                    <p className="text-muted">{statistics[0].games.position}</p>
                    <hr />
                    <p className="text-muted mt-4">Rating: {(statistics[0].games.rating) ? statistics[0].games.rating.substring(0,4) : '0.0'}</p>
                    <PlayerRaiting rating={(statistics[0].games.rating) ? statistics[0].games.rating.substring(0,4) : '0.0'}/>
                    <div className="bg-dark bg-gradient counter-block p-20">
                        <div className="row">
                            <div className="col-4">
                                <FontAwesomeIcon icon={faSoccerBall} />
                                <p>
                                    {
                                        (sort==1)
                                        ?
                                        ((statistics[0].goals.conceded) ? statistics[0].goals.conceded : '0')
                                        :
                                        ((statistics[0].goals.total) ? statistics[0].goals.total : '0')
                                    }
                                </p>
                            </div>
                            <div className="col-4">
                                <FontAwesomeIcon icon={(sort==1) ? faMitten : faPeopleArrows} />
                                <p>
                                    {
                                        (sort==1)
                                        ?
                                        (statistics[0].goals.saves) ? statistics[0].goals.saves : '0'
                                        :
                                        (statistics[0].goals.assists) ? statistics[0].goals.assists : '0'
                                    }
                                </p>
                            </div>
                            <div className="col-4">
                                <FontAwesomeIcon icon={faClock} />
                                <p>{(statistics[0].games.minutes) ? statistics[0].games.minutes : '0'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
