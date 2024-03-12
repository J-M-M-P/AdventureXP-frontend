import NavRoutes from "../NavRoutes";

export default function NavFooter() {
    return (
        <nav className="navbar sticky-bottom bg-body-tertiary" data-bs-theme="dark">
            <div className="container ">
                <div >
                    <h5 className="text-secondary-emphasis">Links</h5>
                    <NavRoutes />
                </div>
                <div >
                    <h5 className="text-secondary-emphasis">Social</h5>
                    <ul className="navbar-nav d-flex">
                        <li className="nav-item">
                            <a
                                className={"nav-link text-secondary-emphasis"}
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Facebook
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={"nav-link text-secondary-emphasis"}
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Twitter
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={"nav-link text-secondary-emphasis"}
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
                <div >
                    <h5 className="text-secondary-emphasis">Contact</h5>
                    <p className="nav-item text-secondary-emphasis">123-456-7890</p>
                    <p className="nav-item text-secondary-emphasis"> 1234 Main St</p>
                </div>
            </div>
        </nav>
    );
}
