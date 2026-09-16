import { useRef } from "react";

const UseRef_Event_12 = () => {

    const inputRef = useRef(null);

    // onClick
    const handleClick = () => {
        inputRef.current.focus();
    };

    // onSubmit
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(inputRef.current.value);
    };

    return (
        <div>

            <h1>UseRef Events onClick & onSubmit</h1>

            <form onSubmit={handleSubmit}>

                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Enter your name"
                />

                <br /><br />

                <button type="button" onClick={handleClick}>
                    Focus Input
                </button>

                <button type="submit">
                    Submit
                </button>

            </form>

        </div>
    );
};

export default UseRef_Event_12;