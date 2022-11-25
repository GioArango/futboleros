import React from 'react'

export const PlaceholderEvent = () => {
    return (
        <table className="table align-middle">
            <thead>
                <tr>
                    <th scope="col" className='fs-6' colSpan={2}>
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </h5>
                    </th>
                    <th scope="col" className='fs-6' colSpan={2}>
                        <p className="card-text placeholder-glow text-end">
                            <span className="placeholder col-2"></span>
                        </p>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td width="40%" className='fs-6 text-end'>
                        <div className='d-block'>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder btn btn-secondary disabled col-1"></span>
                            </p>
                        </div>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-1"></span>
                        </p>
                    </td>
                    <td width="20%" className="table-active">
                        <p className="card-text placeholder-glow text-center">
                            <span className="placeholder col-6"></span>
                            <br />
                            <span className="placeholder col-3"></span>
                        </p>
                    </td>
                    <td width="40%" className='fs-6 text-start'>
                        <div className='d-block'>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder btn btn-secondary disabled col-1"></span>
                            </p>
                        </div>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-1"></span>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
