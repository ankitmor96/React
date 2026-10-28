
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AllStudent, DeleteStudent } from "../api/axios";

const StudentPage = () => {

    const navigate = useNavigate();

    const [student, setStudent] = useState([]);

    const LoadStudent = async () => {

        try {

            const data = await AllStudent();

            setStudent(Array.isArray(data) ? data : []);
            
            console.log("data",data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        LoadStudent();

    }, []);

    const handleDelete = async (id) => {

        try {

            await DeleteStudent(id);

            LoadStudent();

        } catch (error) {

            console.log(error);

        }

    };

    return (
        <Container className="mt-4">
            <div className="d-flex gap-2">
                <h2>Student Management System</h2>
            </div>

            <div className="table-responsive">
                <table className="table  table-striped">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>GR ID</th>
                            <th>Email</th>
                            <th>Course</th>
                            <th>Mobile Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {student.map((s, index) => (
                            <tr key={s._id}>
                                <td>{index + 1}</td>
                                <td>{s.name}</td>
                                <td>{s.grId}</td>
                                <td>{s.email}</td>
                                <td>{s.course}</td>
                                <td>{s.mobileNumber}</td>

                                <td>
                                    <button className="btn-sm me-2" onClick={() => navigate(`/edit/${s._id}`)}>
                                        Edit
                                    </button>

                                    <button className="btn-sm" onClick={() => handleDelete(s._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default StudentPage;
