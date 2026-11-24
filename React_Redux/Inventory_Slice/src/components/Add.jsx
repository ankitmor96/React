import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { add, handleEdit } from "../Feartures/InventorySlice";


const Add = () => {

    const [input, setInput] = useState({
        name: "",
        qty: "",
        price: "",
        category: "",
    });

const {editValue} = useSelector((state) => state.inventory);

    useEffect(()=> {
        if(editValue){
            setInput(editValue);
        }
    },[editValue]);

    const handleChange = (field, e) => {
        setInput((p) => {
            return {
                ...p,
                [field]: e.target.value
            };
        });
    };

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!input.name || !input.qty || !input.price || !input.category) {
            return alert("all data required");
        }

        if(editValue){
            dispatch(handleEdit(input));

            setInput({
            name: "",
            qty: "",
            price: "",
            category: ""
        });

        }else{

            dispatch(add(input));

        setInput({
            name: "",
            qty: "",
            price: "",
            category: ""
        });

        }

        console.log("Add Product:", input);
    };

    return (
        <>
            <h1>Inventory Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name : </label>
                <input
                    type="text"
                    value={input.name}
                    onChange={(e) => handleChange("name", e)}
                />
                <br />
                <br />
                <label htmlFor="qty">Qty : </label>
                <input
                    type="number"
                    value={input.qty}
                    onChange={(e) => handleChange("qty", e)}
                />
                <br />
                <br />
                <label htmlFor="price">Price : </label>
                <input
                    type="number"
                    value={input.price}
                    onChange={(e) => handleChange("price", e)}
                />
                <br />
                <br />
                <label htmlFor="category">Category : </label>
                <input
                    type="text"
                    value={input.category}
                    onChange={(e) => handleChange("category", e)}
                />
                <br />
                <br />
                <button onClick={handleSubmit}>{editValue ? "edit" : "add"}</button>
            </form>
        </>
    )
}

export default Add;