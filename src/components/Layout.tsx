import NavHeader from "./Nav/header/NavHeader";
import NavFooter from "./Nav/footer/NavFooter";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <header>
                <NavHeader />
            </header>
            <main>{children}</main>
            <footer>
                <NavFooter />
            </footer>
        </div>
    );
};

export default Layout;
