
import axios from "axios";

const URL = import.meta.env.VITE_DATABASE_URL;

console.log("API URL:", URL);

export const AllStudent = async () => {
    const res = await axios.get(`${URL}/getAllStudents`);

    console.log("Students:", res.data.students);

    return res.data.students;
};

export const AddStudent = async (StudentData) => {
    try {
        const res = await axios.post(`${URL}/add`, StudentData);

        console.log("Add response:", res.data);

        return res.data;
    } catch (error) {
        console.log("Add error:", error.response?.data || error.message);
        throw error;
    }
};

export const DeleteStudent = async (id) => {

    try {

        const res = await axios.delete(`${URL}/${id}`);

        return res.data;

    } catch (error) {

        console.log(error);

        throw error;
    }
};

export const UpdateStudent = async (id, StudentData) => {
    try {
        const res = await axios.patch(`${URL}/${id}`, {
            name: StudentData.name,
            email: StudentData.email,
            mobileNumber: Number(StudentData.mobileNumber)
        });

        console.log("Update response:", res.data);

        return res.data;
    } catch (error) {
        console.log("Update error:", error.response?.data || error);
        throw error;
    }
};
export const GetById = async (id) => {
    try {

        const res = await axios.get(`${URL}/${id}`);

        return res.data.studentData;

    } catch (error) {

        console.log(error);
        throw error;

    }

};
