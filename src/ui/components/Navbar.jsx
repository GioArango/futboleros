import { Link, NavLink } from 'react-router-dom';


export const Navbar = ({ navLogo = {}, optionsNavigate = [] }) => {

    const { logo, label, homePath } = navLogo;
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light p-2">
            <div className='d-inline'>
            <Link
                className="navbar-brand"
                to={homePath}
            >
                <img src={logo} alt="Home" width="40" height="40" className='mx-2'/>
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
                                        to={option.navigate}
                                    >
                                        {option.label}
                                    </NavLink>
                        })
                    }
                </div>
            </div>
        </nav>
    )
}