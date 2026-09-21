import { useRef } from "react";

const UnControlled_Component_04 = () => {
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("input", inputRef.current.value);
    };


    return (
        <>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="enter your text"
                    ref={inputRef}
                />

                <br />

                <button type="submit">submit</button>
                
            </form>
        </>
    );

};

export default UnControlled_Component_04;