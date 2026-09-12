import axios from "axios";
import { useEffect, useState } from "react";

const FetchApi_error_08 = () => {
    const [user, setUser] = useState([]);
    const [fetchData, setFetchData] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {

            const response = await axios("https://jsonplaceholder.typicode.com/users");

            if (!response.data.ok) { // use response.data 
                setError("failed to this api");
            }

            const data = await response.json();

            if (data.length === 0) {
                setError("data length is 0 ");
            }

            setUser(response.data);

            console.log("data", data);

        };

        if (fetchData === true) {
            fetchUser();
        }
    }, [fetchData]);

    return (

        <>

            <button onClick={() => setFetchData(true)}>fetchUser data</button>

            {error != null ? (
                <h1>{error}</h1>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            )
            }

        </>
    );
};

export default FetchApi_error_08;

