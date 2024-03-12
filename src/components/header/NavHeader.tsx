import { NavLink } from "react-router-dom";

export default function NavHeader() {
    return (
        <>
            <nav className="navbar bg-dark border-bottom navbar-expand-lg border-body" data-bs-theme="dark">
                <div className="container">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-fill">
                        <li className="nav-item">
                            <NavLink className={"nav-link"} to="/">
                                Hjem
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={"nav-link"} to="/aktivitet">
                                Aktiviteter
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={"nav-link"} to="/resevation">
                                Resevation
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={"nav-link"} to="/udstyr">
                                Udstyr
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav d-flex">
                        <li className="nav-item">
                            <NavLink className={"nav-link "} to="/login">
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
