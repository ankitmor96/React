import { Outlet } from "react-router-dom";
import Navbars from "../components/Navbars";

const MainLayout = () => {
    return (
        <>
            <Navbars />
            <Outlet />
        </>
    );
};

export default MainLayout;
