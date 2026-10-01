import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <header>
                <h2>My Website</h2>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>© 2026 My Website</p>
            </footer>
        </>
    );
};

export default MainLayout;