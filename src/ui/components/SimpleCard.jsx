import { Link } from "react-router-dom"

export const SimpleCard = ({ title, img, buttonName, navigatePath }) => {

    return (
        <div className="my-3">
            <div className="card text-center h-100">
                <div className="card-header p-2">
                    <h4 className="card-title m-0">{ title }</h4>
                </div>
                <div className="card-body d-flex align-content-center flex-wrap">
                    <img src={img} className="img-fluid rounded mx-auto d-block" alt={ title } style={{ width: '180px' }} />
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
