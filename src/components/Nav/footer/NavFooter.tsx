import NavRoutes from "../NavRoutes";
import NavSocials from "./NavSocials";

export default function NavFooter() {
    return (
        <nav className="navbar sticky-bottom bg-body-tertiary" data-bs-theme="dark">
            <div className="container text-center">
                <div className="row w-100 justify-content-md-center">
                    <div className="col ">
                        <h5 className="text-body-emphasis">Links</h5>
                        <NavRoutes />
                    </div>
                    <div className="col-md-auto">
                        <h5 className="text-body-emphasis">Social</h5>
                        <NavSocials />
                    </div>
                    <div className="col ">
                        <h5 className="text-body-emphasis pt-4 pb-3">Contact</h5>
                        <ul className="list-unstyled">
                            <li className="nav-item text-secondary-emphasis">Guldbergsgade 29N</li>
                            <li className="nav-item text-secondary-emphasis">2200 København N</li>
                            <li className="nav-item text-secondary-emphasis pt-3">tlf. +45 46 46 00 00</li>
                        </ul>
                    </div>
                </div>
                <p className="text-xs-center text-dark-emphasis">
                    &copy;{new Date().getFullYear()} AdventureXP - All Rights Reserved
                </p>
            </div>
        </nav>
    );
}
