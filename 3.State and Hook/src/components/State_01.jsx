import { useState } from "react";

const State_01 = () => {

    const [count,setCount] = useState(0); // count = current value , setcount = update function , useState(0) = initial set value 0

    const handleClick = ()=>{ // create function
        setCount(count + 1); // jyare handleClick call thay tyare +1 thay
    };

    return (
        <>
        
        <h1>{count}</h1> // current value define kare che 

        <button onClick={handleClick}>increase</button> // jyare click thay tyare handleClick chale 

        </>
        
    );
};

export default State_01;