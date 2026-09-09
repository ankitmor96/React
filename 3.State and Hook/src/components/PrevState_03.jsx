import React,{ useState } from "react";

const PrevState_03 = () => {
const [count,setCount] = useState(0); //  count = current value , setcount = update function , useState(0) = initial set value 0

const handleClick = () => { // create function declaration

    // setCount(count+1); // jyare 1-1  count + karva hoy tyare  

    setCount((prev)=> prev+1); // jyare previose count ne + karva hoy tyare , pela ni value check kare pache j + thay
}

return(

    <>
    
    <h1>{count}</h1>

    <button onclick={handleClick}>+1</button> // jyare 1-1  count + karva hoy tyare  

    <br />
    <br />

    <button onClick={()=>{  // jyare previose count ne +4 karva hoy tyare
        handleClick();
        handleClick();
        handleClick();
        handleClick();
    }}>+4</button>
    
    </>
);

};

export default PrevState_03;