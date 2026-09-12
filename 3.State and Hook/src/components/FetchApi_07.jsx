import { useEffect, useState } from "react";

const FetchApi_07 = () => {
    const [user, setUser] = useState([]);
    const [fetchData, setFetchData] = useState(false);

    useEffect(() => {

        const fetchUser = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            const data = await response.json();

            setUser(data);

            console.log("data :", data);
        };

        if (fetchData === true) {
            fetchUser();
        }

    }, [fetchData]);

    return (
        <>
            <button onClick={() => setFetchData(true)}>fetchUser Data</button>

            {user.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.email}</p>
                </div>
            ))}
        </>
    );
};

export default FetchApi_07;