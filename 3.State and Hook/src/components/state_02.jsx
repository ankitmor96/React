import React, { useState } from "react";

const State_02 = () => {

    const [count, setCount] = useState(0);

    const [input, setInput] = useState(""); // input leva mate , and input value update karva mate 

    const handleChanged = (e) => { 

        setInput(e.target.value); // input update ma parameter aapi ne update kariye current value
    };

    return (
        <>

            <h1>{count}</h1>

            <h1> State_02  </h1 >

            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} /> // jyare click thay tyare chale handleChanged function

            <br />

            you have typed input 
            
            <h1>{input}</h1> // input vale define kare che 

        </>
);

};

export default State_02;