import React, { useState } from "react";

const PrevState_04 = () => {

    const [input, setInput] = useState("");  // input add karva mate and uodate karva mate 

    const [user, setUser] = useState([]); // user add karva mate and update karva mate 

    const handleSubmit = (e) => {
        e.preventDefault();

        setUser((prev) => [...prev, input]); // pela na input ma new input add karva mate sprade operator

        // setUser(() => [input]); // old maj add kare che update thayel input ne 
    };

    console.log(user);

    return (
        <>

            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} /> // jyare input change kariye tyare value current ley te mate

                <button type="submit">add user</button> // user ma input add karva mate click kare tyare 

            </form>

            <ul>
                {user.map((U) => {
                    return <li>{U}</li> // badha user input line ma aave niche aetle
                })}
            </ul>

        </>
    );
};

export default PrevState_04;