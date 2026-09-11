import { useEffect, useState } from "react";

const FeatchApi_07 = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        console.log("Mounting");

        const fetchUsers = async () => {

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            const data = await response.json();

            setUsers(data);
        };

        fetchUsers();

        // Unmounting
        return () => {
            console.log("Unmounting");
        };

    }, []);

    return (
        <div>

            <h1>User List</h1>

            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}

        </div>
    );
};

export default FeatchApi_07;