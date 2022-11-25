import { Link, NavLink } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Navbar = ({ navLogo = {}, optionsNavigate = [], onSelectNav, onBackNavigate, optionSelected }) => {

    const { logo, label, homePath } = navLogo;

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light p-2">
            <div className='d-inline'>
                <Link
                    className="navbar-brand"
                    to={homePath}
                >
                    <LazyLoadImage src={logo} alt="Home" width="40" height="40" className='mx-2' />
                    <span className='fs-6 fw-bold lh-1 text-info'>{label}</span>
                </Link>

            </div>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    {
                        optionsNavigate.map(option => {
                            return <NavLink
                                key={option.id}
                                className={(option.value === optionSelected ? "nav-item nav-link text-primary fw-bold" : "nav-item nav-link")}                                
                                to={''}
                                onClick={() => onSelectNav(option.value)}
                            >
                                {option.label}
                            </NavLink>
                        })
                    }
                </div>
            </div>
            
            {
                (optionsNavigate.length > 0)
                &&
                <button
                    onClick={onBackNavigate}
                    className="btn btn-success btn-sm mx-3"
                    style={{ width: '6rem'}}
                >
                    Back
                </button>
            }
        </nav>
    )
}