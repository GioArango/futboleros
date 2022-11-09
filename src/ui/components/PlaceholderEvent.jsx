import React from 'react'

export const PlaceholderEvent = () => {
    return (
        <table className="table align-middle">
            <thead>
                <tr>
                    <th scope="col" className='fs-6' colSpan={2}>
                        <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                        </h5>
                    </th>
                    <th scope="col" className='fs-6' colSpan={2}>
                        <p class="card-text placeholder-glow text-end">
                            <span class="placeholder col-2"></span>
                        </p>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td width="40%" className='fs-6 text-end'>
                        <div className='d-block'>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder btn btn-secondary disabled col-1"></span>
                            </p>
                        </div>
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-1"></span>
                        </p>
                    </td>
                    <td width="20%" className="table-active">
                        <p class="card-text placeholder-glow text-center">
                            <span class="placeholder col-6"></span>
                            <br />
                            <span class="placeholder col-3"></span>
                        </p>
                    </td>
                    <td width="40%" className='fs-6 text-start'>
                        <div className='d-block'>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder btn btn-secondary disabled col-1"></span>
                            </p>
                        </div>
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-1"></span>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
