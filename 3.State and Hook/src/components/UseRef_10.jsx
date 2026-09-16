import { useRef } from "react";

const UseRef_10 = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <h2>useRef Example</h2>

            <input
                ref={inputRef}
                type="text"
                placeholder="Enter your name"
            />

            <button onClick={handleFocus}>
                Focus Input
            </button>
        </>
    );
};

export default UseRef_10;