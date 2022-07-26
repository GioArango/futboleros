
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoccerBall, faShoePrints, faClock } from '@fortawesome/free-solid-svg-icons';

export const PlayerCard = ({ player, statistics }) => {
    return (
        <div className="col-md-4">
            <div className="card user-card">
                <div className="card-header bg-dark bg-gradient d-block">
                    <img src={`https://countryflagsapi.com/png/${player.nationality}`} alt={`${player.nationality} flag`} style={{ width: '30px' }} />
                    {/* <span className='text-muted m-3'>Attacker</span> */}
                </div>
                <div className="card-block">
                    <div className="user-image">
                        <img src={player.photo} className="rounded-circle my-2" alt={player.firstname} />
                    </div>
                    <h6 className="f-w-600">{player.name}</h6>
                    <p className="text-muted">{player.age} | {player.height} | {player.weight} <br /> {player.birth.date} - {player.nationality}</p>
                    <p className="text-muted">{statistics[0].games.position}</p>
                    <hr />
                    <p className="text-muted mt-4">Raiting: 6.62</p>
                    <ul className="list-unstyled activity-leval">
                        <li className="active"></li>
                        <li className="active"></li>
                        <li className="active"></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div className="bg-dark bg-gradient counter-block p-20">
                        <div className="row">
                            <div className="col-4">
                                <FontAwesomeIcon icon={faSoccerBall} />
                                <p>1256</p>
                            </div>
                            <div className="col-4">
                                <FontAwesomeIcon icon={faShoePrints} />
                                <p>8562</p>
                            </div>
                            <div className="col-4">
                                <FontAwesomeIcon icon={faClock} />
                                <p>189</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
