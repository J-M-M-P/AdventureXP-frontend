import { NavLink } from "react-router-dom";
import { useAuth } from "../../security/AuthProvider";

export default function NavRoutes() {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-fill ">
            <li className="nav-item">
                <NavLink className={"nav-link"} to="/">
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={"nav-link"} to="/activity">
                    Aktiviteter
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={"nav-link"} to="/reservation">
                    Reservation
                </NavLink>
            </li>
            {useAuth().isLoggedIn() && (
            <li className="nav-item">
                <NavLink className={"nav-link"} to="/utility">
                    Udstyr
                </NavLink>
                </li>
            )}
        </ul>
    );
}
