
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { AddStudent, GetById, UpdateStudent } from "../api/axios";

const StudentForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [input, setInput] = useState({
        name: "",
        grId: "",
        email: "",
        course: "",
        mobileNumber: ""
    });

    useEffect(() => {
        if (id) {
            GetStudentData(id);
        }
    }, [id]);

    const GetStudentData = async (id) => {
        try {
            const data = await GetById(id);

            console.log("Student:", data);

            if (!data) {
                console.log("Student data not found");
                return;
            }

            setInput({
                name: data.name || "",
                grId: data.grId || "",
                email: data.email || "",
                course: data.course || "",
                mobileNumber: data.mobileNumber || ""
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (field, e) => {
        setInput((prev) => ({
            ...prev,
            [field]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const StudentData = {
            ...input,
            grId: Number(input.grId),
            mobileNumber: Number(input.mobileNumber)
        };

        try {
            if (id) {
                await UpdateStudent(id, StudentData);
            } else {
                await AddStudent(StudentData);
            }

            navigate("/");
        } catch (error) {
            console.log(error);
            alert(
                error.response?.data?.message ||
                "Student save thai shakyo nahi."
            );
        }
    };

    return (
        <Container className="mt-4">
            <h2>{id ? "Edit Student" : "Add Student"}</h2>

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    className="form-control mb-3"
                    type="text"
                    value={input.name}
                    onChange={(e) => handleChange("name", e)}
                    required
                />

                <label>GR ID</label>
                <input
                    className="form-control mb-3"
                    type="number"
                    value={input.grId}
                    onChange={(e) => handleChange("grId", e)}
                    required
                />

                <label>Email</label>
                <input
                    className="form-control mb-3"
                    type="email"
                    value={input.email}
                    onChange={(e) => handleChange("email", e)}
                    required
                />

                <label>Course</label>
                <select
                    className="form-select mb-3"
                    value={input.course}
                    onChange={(e) => handleChange("course", e)}
                    required
                >
                    <option value="">Select Course</option>
                    <option value="fullStack">Full Stack Development</option>
                    <option value="graphic design">Graphic Design</option>
                    <option value="UI/UX">UI/UX</option>
                </select>

                <label>Mobile Number</label>
                <input
                    className="form-control mb-3"
                    type="number"
                    value={input.mobileNumber}
                    onChange={(e) => handleChange("mobileNumber", e)}
                    required
                />

                <button className="btn btn-primary me-2" type="submit">
                    {id ? "Update" : "Add"}
                </button>

                <button
                    type="button"
                    onClick={() => navigate("/")}
                >
                    Cancel
                </button>
            </form>
        </Container>
    );
};

export default StudentForm;
