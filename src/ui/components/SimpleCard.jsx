import { Link } from "react-router-dom"

export const SimpleCard = ({ title, img, buttonName, navigatePath }) => {

    return (
        <div className="my-3">
            <div className="card w-75 text-center h-100">
                <div className="card-header">
                    <h5 className="card-title">{ title }</h5>
                </div>
                <div className="card-body d-flex align-content-center flex-wrap">
                    <img src={img} className="img-fluid rounded mx-auto d-block mb-2" alt={ title } style={{ width: '180px' }} />
                </div>
                <div className="card-footer">
                    {/* <button
                        type="button"
                        className="btn btn-primary"
                        onClick={onNavigate}
                    >
                        { buttonName }
                    </button> */}

                    <Link to={navigatePath}>
                        { buttonName }
                    </Link>
                </div>
            </div>
        </div>
    )
}
