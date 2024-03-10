import NavHeader from "./NavHeader";

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
        </div>
    );
};

export default Layout;
