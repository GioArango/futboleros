import { Link } from "react-router-dom"
import './SimpleCard.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

export const SimpleCard = ({ title, img, buttonName, navigatePath }) => {

    return (
        <div className="my-3">
            <div className="card text-center h-100">
                <div className="card-header p-2" style={{ backgroundColor: "#EEEEEE" }}>
                    <h4 className="card-title m-0 fw-bold">{title}</h4>
                </div>
                <div className="card-body d-flex align-content-center flex-wrap" style={{ backgroundColor: "#F3F3F3" }}>
                    <LazyLoadImage src={img} loading="lazy" className="img-fluid rounded mx-auto d-block" alt={title} style={{ width: '180px' }} />
                </div>
                <div className="card-footer" style={{ backgroundColor: "#EEEEEE" }}>
                    <Link to={navigatePath} className="button">
                        <span className="label">{buttonName}</span>
                        <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                        </span>

                    </Link>
                </div>
            </div>
        </div>
    )
}
