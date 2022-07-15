import { Link, NavLink } from 'react-router-dom';


export const Navbar = ({ navLogo = {}, optionsNavigate = [] }) => {

    const { logo, label, homePath } = navLogo;
    console.log(optionsNavigate);
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

                    {/* <NavLink
                        className="nav-item nav-link"
                        to="/teams/info"
                    >
                        Information
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/teams/events"
                    >
                        Events
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/teams/events"
                    >
                        Players
                    </NavLink> */}
                </div>
            </div>

            {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div> */}
        </nav>
    )
}