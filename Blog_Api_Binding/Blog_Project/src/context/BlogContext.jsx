import { createContext, useContext, useState, useEffect } from "react";
import {
    LoginUser,
    GetMe,
    AllBlogs,
    AddBlog,
    UpdateBlog,
    DeleteBlog,
    GetBlogById
} from "../api/blogAxios";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [user, setUser] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [singleBlog, setSingleBlog] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Initial load: jo token hoy to user profile fetch karo
    useEffect(() => {
        if (token && !user) {
            LoadMe(token);
        }
    }, [token]);

    const Login = async (credentials) => {
        try {
            const data = await LoginUser(credentials);
            const receivedToken = data.token;
            localStorage.setItem("token", receivedToken);
            setToken(receivedToken);
            await LoadMe(receivedToken);
        } catch (error) {
            throw error;
        }
    };

    const LoadMe = async (tkn) => {
        try {
            const currentToken = tkn || token || localStorage.getItem("token");
            if (!currentToken) return;
            const data = await GetMe(currentToken);
            setUser(data.user || null);
        } catch (error) {
            console.log("LoadMe error:", error);
            // Token expired hoy to auto logout
            if (error.response?.status === 400 || error.response?.status === 401) {
                Logout();
            }
        }
    };

    const Logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
        setBlogs([]);
        setSingleBlog(null);
    };

    const LoadBlogs = async () => {
        try {
            setLoading(true);
            const currentToken = token || localStorage.getItem("token");
            const data = await AllBlogs(currentToken);
            setBlogs(Array.isArray(data.blogs) ? data.blogs : []);
        } catch (error) {
            setError(error.response?.data?.message || "Blogs load nahi thaya");
        } finally {
            setLoading(false);
        }
    };

    const LoadBlogById = async (id) => {
        try {
            setSingleBlog(null);
            const currentToken = token || localStorage.getItem("token");
            const data = await GetBlogById(id, currentToken);
            setSingleBlog(data.blog || data.data || null);
        } catch (error) {
            console.log("LoadBlogById error:", error);
        }
    };

    const clearSingleBlog = () => {
        setSingleBlog(null);
    };

    const CreateBlog = async (formData) => {
        try {
            const currentToken = token || localStorage.getItem("token");
            await AddBlog(formData, currentToken);
            await LoadBlogs();
        } catch (error) {
            throw error;
        }
    };

    const EditBlog = async (id, formData) => {
        try {
            const currentToken = token || localStorage.getItem("token");
            await UpdateBlog(id, formData, currentToken);
            await LoadBlogs();
        } catch (error) {
            throw error;
        }
    };

    const RemoveBlog = async (id) => {
        try {
            const currentToken = token || localStorage.getItem("token");
            await DeleteBlog(id, currentToken);
            await LoadBlogs();
        } catch (error) {
            console.log("Delete error:", error.response?.data || error.message);
            alert(error.response?.data?.message || "Blog delete nathi thayo.");
        }
    };

    return (
        <BlogContext.Provider value={{
            token,
            user,
            blogs,
            singleBlog,
            loading,
            error,
            Login,
            Logout,
            LoadMe,
            LoadBlogs,
            LoadBlogById,
            clearSingleBlog,
            CreateBlog,
            EditBlog,
            RemoveBlog
        }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = () => useContext(BlogContext);
