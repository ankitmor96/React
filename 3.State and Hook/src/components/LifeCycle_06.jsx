
import { useEffect, useState } from "react";

const App = () => {

    // mounting :- load task in browser

    useEffect(() => {
        console.log("Mounting");
    }, []); // with empty dependency


    const [count, setCount] = useState(0);
    // count = current value
    // setCount = update function
    // useState(0) = initial set value 0


    // updating :- update task value

    useEffect(() => {
        console.log("Updating");
    }, [count]); // with dependency


    // unmounting :- remove task

    useEffect(() => {

        return () => {
            console.log("Unmounting");
        };

    }, []); // with empty dependency


    const handleClick = () => {
        setCount(count + 1);
        // jyare handleClick call thay tyare +1 thay
    };


    return (
        <>
            <h1>{count}</h1>
            {/* current value define kare che */}

            <button onClick={handleClick}>
                Increase
            </button>
            {/* jyare click thay tyare handleClick chale */}
        </>
    );

};

export default App;

