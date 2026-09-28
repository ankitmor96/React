import { useEffect, useState } from "react"

const AddToDo_01 = ({handleAdd,selectedTodo,handleUpdate}) => {

    const [input, setInput] = useState({
        task: "",
        description: ""
    });

    useEffect(() => {
        if(selectedTodo){
            setInput({
                task: selectedTodo.task,
                description:selectedTodo.description
            });
        };
    },[selectedTodo]);



    const handleChange = (field, e) => {   // input change karva 
        setInput((p) => {
            return {
                ...p,
                [field]: e.target.value
            };
        });
    };

    const handleSubmit = (e) => {   // form submit karva
        e.preventDefault();

        if(selectedTodo){
            handleUpdate({
                ...selectedTodo,
                ...input
            });

            setInput({ task: "" , description: ""});

            return;
        }

        handleAdd(input);  // new todo add karva

        setInput({task: "", description: ""})
    } 


    return (
        <>

            <form onSubmit={handleSubmit}> 

                <input
                    type="text"
                    placeholder="enter ypur text"
                    value={input.task}
                    onChange={(e)=> handleChange("task",e)}
                    required
                />

                <br />

                <input  
                    type="text"
                    placeholder="enter ypur text"
                    value={input.description}
                    onChange={(e)=> handleChange("description",e)}
                    required
                />

                <br />

                <button type="submit">
                    {
                        selectedTodo ? "Update" : "Add" // condition check karva 
                    }
                    </button>

            </form>

        </>
    );
};

export default AddToDo_01;