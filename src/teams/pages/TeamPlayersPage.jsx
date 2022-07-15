import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoccerBall, faShoePrints } from '@fortawesome/free-solid-svg-icons'

export const TeamPlayersPage = () => {

    const { idTeam } = useParams();
    console.log(idTeam);

    return (
        <>
            <h1>TeamPlayers</h1>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card user-card">
                            <div className="card-header bg-dark bg-gradient d-block">
                                <img src="https://countryflagsapi.com/png/uy" alt="Uruguay flag" style={{ width: '30px'}}/>
                                {/* <span className='text-muted m-3'>Attacker</span> */}
                            </div>
                            <div className="card-block">
                                <div className="user-image">
                                    <img src="https://media.api-sports.io/football/players/274.png" className="rounded-circle my-2" alt="User-Profile-Image" />
                                </div>
                                <h6 className="f-w-600">E. Cavani</h6>
                                <p className="text-muted">35 | 184 cm | 71 kg <br /> 1987-02-14 - Uruguay</p>
                                <p className="text-muted">Attacker</p>
                                <hr />
                                <p className="text-muted mt-4">Raiting: 6.62</p>
                                <ul className="list-unstyled activity-leval">
                                    <li className="active"></li>
                                    <li className="active"></li>
                                    <li className="active"></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <div className="bg-c-blue counter-block p-20">
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
                                            <i className="fa fa-suitcase"></i>
                                            <p>189</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="m-t-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <hr />
                                <div className="row justify-content-center user-social-link">
                                    <div className="col-auto"><a href="#!"><i className="fa fa-facebook text-facebook"></i></a></div>
                                    <div className="col-auto"><a href="#!"><i className="fa fa-twitter text-twitter"></i></a></div>
                                    <div className="col-auto"><a href="#!"><i className="fa fa-dribbble text-dribbble"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card user-card">
                            <div className="card-header">
                                <h5>Profile</h5>
                            </div>
                            <div className="card-block">
                                <div className="user-image">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-radius" alt="User-Profile-Image" />
                                </div>
                                <h6 className="f-w-600 m-t-25 m-b-10">Alessa Robert</h6>
                                <p className="text-muted">Active | Male | Born 23.05.1992</p>
                                <hr />
                                <p className="text-muted m-t-15">Activity Level: 87%</p>
                                <ul className="list-unstyled activity-leval">
                                    <li className="active"></li>
                                    <li className="active"></li>
                                    <li className="active"></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <div className="bg-c-green counter-block m-t-10 p-20">
                                    <div className="row">
                                        <div className="col-4">
                                            <i className="fa fa-comment"></i>
                                            <p>1256</p>
                                        </div>
                                        <div className="col-4">
                                            <i className="fa fa-user"></i>
                                            <p>8562</p>
                                        </div>
                                        <div className="col-4">
                                            <i className="fa fa-suitcase"></i>
                                            <p>189</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="m-t-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <hr />
                                <div className="row justify-content-center user-social-link">
                                    <div className="col-auto"><a href="#!"><i className="fa fa-facebook text-facebook"></i></a></div>
                                    <div className="col-auto"><a href="#!"><i className="fa fa-twitter text-twitter"></i></a></div>
                                    <div className="col-auto"><a href="#!"><i className="fa fa-dribbble text-dribbble"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card user-card">
                            <div className="card-header">
                                <h5>Profile</h5>
                            </div>
                            <div className="card-block">
                                <div className="user-image">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="img-radius" alt="User-Profile-Image" />
                                </div>
                                <h6 className="f-w-600 m-t-25 m-b-10">Alessa Robert</h6>
                                <p className="text-muted">Active | Male | Born 23.05.1992</p>
                                <hr />
                                <p className="text-muted m-t-15">Activity Level: 87%</p>
                                <ul className="list-unstyled activity-leval">
                                    <li className="active"></li>
                                    <li className="active"></li>
                                    <li className="active"></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <div className="bg-c-yellow counter-block m-t-10 p-20">
                                    <div className="row">
                                        <div className="col-4">
                                            <i className="fa fa-comment"></i>
                                            <p>1256</p>
                                        </div>
                                        <div className="col-4">
                                            <i className="fa fa-user"></i>
                                            <p>8562</p>
                                        </div>
                                        <div className="col-4">
                                            <i className="fa fa-suitcase"></i>
                                            <p>189</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="m-t-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <hr />
                                <div className="row justify-content-center user-social-link">
                                    <div className="col-auto"><a href="#!"><i className="fa fa-facebook text-facebook"></i></a></div>
                                    <div className="col-auto"><a href="#!"><i className="fa fa-twitter text-twitter"></i></a></div>
                                    <div className="col-auto"><a href="#!"><i className="fa fa-dribbble text-dribbble"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
