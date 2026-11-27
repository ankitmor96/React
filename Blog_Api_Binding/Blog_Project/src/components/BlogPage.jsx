import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../context/BlogContext";

const BlogPage = () => {
    const navigate = useNavigate();
    const { blogs, loading, LoadBlogs, RemoveBlog } = useBlog();

    useEffect(() => {
        LoadBlogs();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Blog delete karvu che?")) return;
        await RemoveBlog(id);
    };

    return (
        <div className="page-wrapper">
            <div className="page-header">
                <h2>All Blogs</h2>
                <button className="btn-primary" onClick={() => navigate("/add")}>
                    + Add Blog
                </button>
            </div>

            {loading && <p>Loading...</p>}

            {!loading && (
                <table className="blog-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Cover</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="empty-msg">
                                    No blogs found. Click "+ Add Blog" to create one.
                                </td>
                            </tr>
                        ) : (
                            blogs.map((blog, index) => (
                                <tr key={blog._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        {blog.coverImage ? (
                                            <img
                                                src={blog.coverImage}
                                                alt="cover"
                                                width="70"
                                                height="45"
                                                style={{ objectFit: "cover", borderRadius: "3px" }}
                                            />
                                        ) : (
                                            <span style={{ color: "#aaa" }}>No Image</span>
                                        )}
                                    </td>
                                    <td>{blog.title}</td>
                                    <td>{blog.category}</td>
                                    <td>
                                        <span className={`status-badge ${blog.status === "published" ? "status-published" : "status-draft"}`}>
                                            {blog.status || "draft"}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            className="btn-edit"
                                            onClick={() => navigate(`/edit/${blog._id}`)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn-delete"
                                            onClick={() => handleDelete(blog._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default BlogPage;
