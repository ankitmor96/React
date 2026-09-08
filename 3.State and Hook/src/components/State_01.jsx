import { useState } from "react";

const State_01 = () => {

    const [counter,setCount] = useState(0);

    const handleClick = ()=>{
        setCount(counter + 1);
    };

    return (
        <>
        <h1>{counter}</h1>

        <button onClick={handleClick}>increase</button>

        </>
        
    );
};

export default State_01;