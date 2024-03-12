import { NavLink } from "react-router-dom";
import NavRoutes from "../NavRoutes";

export default function NavHeader() {
    return (
        <>
            <nav className="navbar bg-dark border-bottom navbar-expand-lg border-body" data-bs-theme="dark">
                <div className="container">
                    <NavRoutes />
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
