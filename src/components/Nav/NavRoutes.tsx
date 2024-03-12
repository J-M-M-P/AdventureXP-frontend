import { NavLink } from "react-router-dom";

export default function NavRoutes() {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-fill ">
            <li className="nav-item">
                <NavLink className={"nav-link"} to="/">
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={"nav-link"} to="/aktivitet">
                    Aktiviteter
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={"nav-link"} to="/reservation">
                    Reservation
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={"nav-link"} to="/udstyr">
                    Udstyr
                </NavLink>
            </li>
        </ul>
    );
}