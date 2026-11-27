import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import BlogPage from "./components/BlogPage";
import BlogForm from "./components/BlogForm";
import LoginPage from "./components/LoginPage";
import MainLayout from "./Routes/MainLayout";
import ProtectedRoute from "./Routes/ProtectedRoute";
import { BlogProvider } from "./context/BlogContext";

const router = createBrowserRouter([
    {
        element: (
            <BlogProvider>
                <Outlet />
            </BlogProvider>
        ),
        children: [
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/",
                element: (
                    <ProtectedRoute>
                        <MainLayout />
                    </ProtectedRoute>
                ),
                children: [
                    {
                        index: true,
                        element: <BlogPage />
                    },
                    {
                        path: "add",
                        element: <BlogForm />
                    },
                    {
                        path: "edit/:id",
                        element: <BlogForm />
                    }
                ]
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
