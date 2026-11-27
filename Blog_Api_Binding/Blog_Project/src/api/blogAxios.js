
import axios from "axios";

const URL = import.meta.env.VITE_DATABASE_URL;

// AUTH

export const LoginUser = async (credentials) => {
    const res = await axios.post(
        `${URL}/users/login`,
        credentials
    );

    return res.data;
};

export const GetMe = async (token) => {
    const res = await axios.post(
        `${URL}/users/me`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return res.data;
};

// BLOG

export const AllBlogs = async (token) => {
    const res = await axios.get(
        `${URL}/blogs`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return res.data;
};

export const GetBlogById = async (id, token) => {
    const res = await axios.get(
        `${URL}/blogs/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return res.data;
};

export const AddBlog = async (formData, token) => {
    try {
        const res = await axios.post(
            `${URL}/blogs`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        return res.data;

    } catch (error) {
        console.error(
            "Add Blog Error:",
            error.response?.data || error.message
        );

        throw error;
    }
};

export const UpdateBlog = async (id, formData, token) => {
    try {
        const res = await axios.patch(
            `${URL}/blogs/${id}`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        return res.data;

    } catch (error) {
        console.error(
            "Update Blog Error:",
            error.response?.data || error.message
        );

        throw error;
    }
};

export const DeleteBlog = async (id, token) => {
    const res = await axios.delete(
        `${URL}/blogs/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return res.data;
};
