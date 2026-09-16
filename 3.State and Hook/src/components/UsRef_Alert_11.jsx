import { useRef } from "react";

const UseRef_Alert_11 = () => {
    const nameRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const name = nameRef.current.value;

        alert(`hii ${name}`);

    };

    return (
        <>
            <h1>Name Alert Example</h1>

            <form onSubmit={handleSubmit}>

                <input type="text" placeholder="enter your name" ref={nameRef} />

                <button type="submit">submit</button>

            </form>

        </>
    );
};

export default UseRef_Alert_11;