import { useNavigate } from "react-router-dom";
import { useBlog } from "../context/BlogContext";

const Navbars = () => {
    const navigate = useNavigate();
    const { token, user, Logout } = useBlog();

    const handleLogout = () => {
        Logout();
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <span className="navbar-brand" onClick={() => navigate("/")}>
                BlogVerse
            </span>
            {token && (
                <div className="navbar-links">
                    <span onClick={() => navigate("/")}>All Blogs</span>
                    <span onClick={() => navigate("/add")}>Add Blog</span>
                    {user && <span>👤 {user.name}</span>}
                    <span onClick={handleLogout}>Logout</span>
                </div>
            )}
        </nav>
    );
};

export default Navbars;
