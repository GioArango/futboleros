
export const TeamInfo = ({ team, venue, onBackNavigate }) => {
    return (
        <div className="m-5">
            <div className="row mt-5 border rounded shadow">
                <div className="col-sm-4 my-2">
                    <img
                        src={team.logo}
                        alt={team.name}
                        className="img-thumbnail" style={{ width: '400px' }}
                    />
                </div>

                <div className="col-sm-8 mt-2 fst-italic">
                    <h3 className="text-uppercase">{team.name}</h3>

                    <div className="row">
                        <div className="col-md-8 col-sm-6">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Founded: </b> {team.founded}
                                </li>
                                <li className="list-group-item">
                                    <b>City: </b> {venue.city}
                                </li>
                                <li className="list-group-item">
                                    <b>Stadium: </b> {venue.name}
                                </li>
                                <li className="list-group-item">
                                    <b>Capacity: </b> {venue.capacity}
                                </li>
                                <li className="list-group-item">
                                    <b>Address: </b> {venue.address}
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 col-sm-6 d-flex justify-content-center">
                            <img
                                src={venue.image}
                                alt={venue.name}
                                className="img-thumbnail align-middle my-2"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
