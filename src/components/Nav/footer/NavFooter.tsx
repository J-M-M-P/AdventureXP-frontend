import NavRoutes from "../NavRoutes";
import NavSocials from "./NavSocials";

export default function NavFooter() {
    return (
        <nav className="navbar fixed-bottom bg-body-tertiary" data-bs-theme="dark">
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
                        <h5 className="text-body-emphasis">Contact</h5>
                        <p className="nav-item text-secondary-emphasis">123-456-7890</p>
                        <p className="nav-item text-secondary-emphasis"> 1234 Main St</p>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="container">
                    <p className="text-xs-center text-dark-emphasis">
                        &copy;{new Date().getFullYear()} AdventureXP - All Rights Reserved
                    </p>
                </div>
            </div>
        </nav>
    );
}
