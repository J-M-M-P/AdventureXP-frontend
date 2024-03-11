import { NavLink } from "react-router-dom";

export default function NavHeader() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}