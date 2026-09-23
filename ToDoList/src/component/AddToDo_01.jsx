import { useState } from "react"

const AddToDo_01 = () => {

    const [input, setInput] = useState({
        task: "",
        description: ""
    });



    const handleChange = (field, e) => {
        setInput((p) => {
            return {
                ...p,
                [field]: e.target.value
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    } 


    return (
        <>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="enter ypur text"
                    value={input.task}
                    onChange={(e)=> handleChange("taskk",e)}
                />

                <br />

                <input
                    type="text"
                    placeholder="enter ypur text"
                    value={input.description}
                    onChange={(e)=> handleChange("description",e)}
                />

                <br />

                <button type="submit">add</button>

            </form>

        </>
    );
};

export default AddToDo_01;