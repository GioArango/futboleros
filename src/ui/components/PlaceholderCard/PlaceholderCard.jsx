import React from 'react'
import './PlaceholderCard.css'

export const PlaceholderCard = () => {
    
    return (

        <div className="bg-success bg-opacity-25 rounded my-3 row row-cols-md-3 d-flex justify-content-center">
            <div className="my-3">
                <div className="card text-center h-100">
                    <div className="card-header p-2 placeholder-glow">
                        <h4 className="placeholder col-12 bg-dark"></h4>
                    </div>
                    <div className="card-body d-flex align-content-center flex-wrap">
                        <div className="item empty">
                            <div className="image-container">
                                <img src="" />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                    <p className='text-center my-2 placeholder-glow'>
                        <span className="placeholder col-6 bg-primary"></span>
                    </p>
                    </div>
                </div>
            </div>

            <div className="my-3">
                <div className="card text-center h-100">
                    <div className="card-header p-2 placeholder-glow">
                        <h4 className="placeholder col-12 bg-dark"></h4>
                    </div>
                    <div className="card-body d-flex align-content-center flex-wrap">
                        <div className="item empty">
                            <div className="image-container">
                                <img src="" />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                    <p className='text-center my-2 placeholder-glow'>
                        <span className="placeholder col-6 bg-primary"></span>
                    </p>
                    </div>
                </div>
            </div>

            <div className="my-3">
                <div className="card text-center h-100">
                    <div className="card-header p-2 placeholder-glow">
                        <h4 className="placeholder col-12 bg-dark"></h4>
                    </div>
                    <div className="card-body d-flex align-content-center flex-wrap">
                        <div className="item empty">
                            <div className="image-container">
                                <img src="" />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                    <p className='text-center my-2 placeholder-glow'>
                        <span className="placeholder col-6 bg-primary"></span>
                    </p>
                    </div>
                </div>
            </div>


        </div>
    )
}
