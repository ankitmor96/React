import { useState } from "react";

const ObjectUseState = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleEmail = (field, e) => {
        setUser((prev) => {
            return {
                ...prev,
                [field]: e.target.value
            };
        });
    };



    return (

        <>
            <input type="text" value={user.name} placeholder="name" onChange={(e) => handleEmail("name", e)} />

            <br />

            <input type="email" value={user.email} placeholder="email" onChange={(e) => handleEmail("email", e)} />

            <br />

            <input type="password" value={user.password} placeholder="password" onChange={(e) => handleEmail("password", e)} />

            <h1>Name: {user.name}</h1>
            <br />
            <h1>Email: {user.email}</h1>
            <br />
            <h1>Password: {user.password}</h1>

        </>
    );
};

export default ObjectUseState;