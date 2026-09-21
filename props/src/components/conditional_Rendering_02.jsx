import React , {useState} from "react";

const Conditional_Redering_02 = () => {
    const [login,setLogin] = useState(false);
    const [user,setUser] = useState(false);

    const handleClick = () => {
        setLogin(!login);
        setUser(!user)
    }

    return (
        <>
        <h1>{!user ? "click to login": "welcome user"}</h1>

        <button onClick={handleClick}>{login ? "logout" : "login"}</button>
        <br />
        <br />
        {user && `welcome ${user}`}
        </>
    )
};

export default Conditional_Redering_02;

