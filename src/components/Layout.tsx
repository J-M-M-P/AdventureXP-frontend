import NavHeader from "./Nav/NavHeader";
import NavFooter from "./Nav/NavFooter";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <header className="mb-5">
                <NavHeader />
            </header>
            <main>{children}</main>
            <footer className="mt-5 pt-5">
                <NavFooter />
            </footer>
        </div>
    );
};

export default Layout;
