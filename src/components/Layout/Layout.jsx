import { Navigation } from "components/Navigation/Navigation";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    // const location = useLocation()
    return (
        <>
            <Navigation />
            {/* {!location.pathname.includes('details') && <Navigation />} */}
            <Outlet />
            {/* <footer>Footer</footer> */}
        </>
    );
};