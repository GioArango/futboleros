import React from 'react'

export const PlaceholderPlayerCard = () => {
    return (
        <div className="col-md-4">
            <div className="card user-card">
                <div className="card-header bg-dark bg-gradient d-block placeholder-glow">
                    <span className="placeholder btn btn-secondary disabled col-1" style={{ height: '5px' }}></span>
                </div>
                <div className="card-block">
                    <div className="user-image mt-2 placeholder-glow">
                        <p className="card-text placeholder-glow placeholder col-12 h-100 rounded-circle" />
                    </div>
                    <div className="container my-2">
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-6"></span><br />
                            <span className="placeholder col-6"></span><br />
                            <span className="placeholder col-6"></span>
                        </p>
                    </div>
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-4"></span>
                    </p>
                    <hr />
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-5"></span>
                    </p>
                    <span className="placeholder col-12 bg-info mb-2"></span>
                    <div className="bg-dark bg-gradient counter-block p-20">
                        <div className="row">
                            <div className="col-4">
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder btn btn-secondary disabled col-1"></span>
                                </p>
                            </div>
                            <div className="col-4">
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder btn btn-secondary disabled col-1"></span>
                                </p>
                            </div>
                            <div className="col-4">
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder btn btn-secondary disabled col-1"></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
