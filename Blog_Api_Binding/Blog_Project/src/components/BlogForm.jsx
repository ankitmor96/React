import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlog } from "../context/BlogContext";

const BlogForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { singleBlog, LoadBlogById, CreateBlog, EditBlog, clearSingleBlog } = useBlog();

    const [input, setInput] = useState({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        category: "",
        tags: "",
        status: "draft"
    });

    const [coverImage, setCoverImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("");

    // id aave to blog load karo
    useEffect(() => {
        if (id) {
            LoadBlogById(id);
        } else {
            clearSingleBlog();
            setInput({ title: "", slug: "", excerpt: "", content: "", category: "", tags: "", status: "draft" });
            setCoverImage(null);
        }
    }, [id]);

    // singleBlog aave to form ma values bharO
    useEffect(() => {
        if (id && singleBlog) {
            setInput({
                title: singleBlog.title || "",
                slug: singleBlog.slug || "",
                excerpt: singleBlog.excerpt || "",
                content: singleBlog.content || "",
                category: singleBlog.category || "",
                tags: Array.isArray(singleBlog.tags) ? singleBlog.tags.join(", ") : singleBlog.tags || "",
                status: singleBlog.status || "draft"
            });
        }
    }, [singleBlog, id]);

    const handleChange = (field, e) => {
        setInput((prev) => ({ ...prev, [field]: e.target.value }));
        setErr("");
    };

    // Title thi auto slug generate
    const handleTitleChange = (e) => {
        const val = e.target.value;
        setInput((prev) => ({
            ...prev,
            title: val,
            slug: val.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErr("");

        const formData = new FormData();
        formData.append("title", input.title);
        formData.append("slug", input.slug);
        formData.append("excerpt", input.excerpt);
        formData.append("content", input.content);
        formData.append("category", input.category);
        formData.append("tags", input.tags);
        formData.append("status", input.status);
        if (coverImage) {
            formData.append("coverImage", coverImage);
        }

        try {
            if (id) {
                await EditBlog(id, formData);
            } else {
                await CreateBlog(formData);
            }
            navigate("/");
        } catch (error) {
            setErr(error.response?.data?.message || "Blog save thai shakyo nahi.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-wrapper">
            <div className="form-card">
                <h2>{id ? "Edit Blog" : "Add New Blog"}</h2>

                {err && <p className="error-msg">{err}</p>}

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Title *</label>
                        <input
                            type="text"
                            placeholder="Blog title"
                            value={input.title}
                            onChange={handleTitleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Slug *</label>
                        <input
                            type="text"
                            placeholder="blog-slug"
                            value={input.slug}
                            onChange={(e) => handleChange("slug", e)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Excerpt * <small style={{ fontWeight: "normal", color: "#888" }}>(short description)</small></label>
                        <input
                            type="text"
                            placeholder="Short description of blog"
                            value={input.excerpt}
                            onChange={(e) => handleChange("excerpt", e)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Content *</label>
                        <textarea
                            rows={6}
                            placeholder="Blog content..."
                            value={input.content}
                            onChange={(e) => handleChange("content", e)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Category *</label>
                        <input
                            type="text"
                            placeholder="e.g. Technology"
                            value={input.category}
                            onChange={(e) => handleChange("category", e)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Tags <small style={{ fontWeight: "normal", color: "#888" }}>(comma separated)</small></label>
                        <input
                            type="text"
                            placeholder="Node.js, React, MongoDB"
                            value={input.tags}
                            onChange={(e) => handleChange("tags", e)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Status</label>
                        <select value={input.status} onChange={(e) => handleChange("status", e)}>
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>
                            Cover Image {!id && <span style={{ color: "red" }}>*</span>}
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setCoverImage(e.target.files[0])}
                            required={!id}
                        />
                        {id && singleBlog?.coverImage && !coverImage && (
                            <div className="current-img">
                                <small>Current image:</small><br />
                                <img
                                    src={singleBlog.coverImage}
                                    alt="current"
                                    width="110"
                                    height="70"
                                    style={{ objectFit: "cover", borderRadius: "3px", marginTop: "4px" }}
                                />
                            </div>
                        )}
                    </div>

                    <div className="form-buttons">
                        <button type="submit" className="btn-primary" disabled={loading}>
                            {loading ? "Saving..." : id ? "Update Blog" : "Add Blog"}
                        </button>
                        <button type="button" className="btn-secondary" onClick={() => navigate("/")}>
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default BlogForm;
