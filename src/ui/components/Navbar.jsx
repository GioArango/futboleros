import { Link, NavLink } from 'react-router-dom';

export const Navbar = ({ navLogo = {}, optionsNavigate = [], onSelectNav, onBackNavigate }) => {

    const { logo, label, homePath } = navLogo;

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light p-2">
            <div className='d-inline'>
                <Link
                    className="navbar-brand"
                    to={homePath}
                >
                    <img src={logo} alt="Home" width="40" height="40" className='mx-2' />
                    <span className='fs-6 fw-bold lh-1 text-info'>{label}</span>
                </Link>

            </div>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    {
                        optionsNavigate.map(option => {
                            return <NavLink
                                key={option.id}
                                className="nav-item nav-link"
                                // className={(option.value === option.value ? "nav-item nav-link" : "bg-primary")}                                
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
                    Atrás
                </button>
            }
        </nav>
    )
}