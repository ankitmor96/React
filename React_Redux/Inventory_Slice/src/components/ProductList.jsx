import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteProduct, setEditValue } from "../Feartures/InventorySlice";


const ProductList = () => {

    const invetoryList = useSelector(
        (state) => state.inventory.products
    );

    const disptch = useDispatch();

    const handleDelete = (id) => {
        disptch(deleteProduct(id));
    }

    const [productQuery, setProductQuery] = useState({
        search: "",
        sort: "asc"
    });

    const handleChange = (field, e) => {
        setProductQuery((p) => ({
            ...p,
            [field]: e.target.value
        }));
    };

    const handleReset = () => {
        setProductQuery({
            search: "",
            sort: "asc"
        });
    };

    const filterLisl = invetoryList.filter((p) =>
        p.name.toLowerCase().includes(productQuery.search.toLowerCase())
    );

    const sotedList = [...filterLisl].sort((a, b) => {
        if (productQuery.sort === "asc") {
            return a.id - b.id;
        }

        if (productQuery.sort === "desc") {
            return b.id - a.id;
        }

        if (productQuery.sort === "priceAscending") {
            return Number(a.price) - Number(b.price);
        }

        if (productQuery.sort === "priceDescending") {
            return Number(b.price) - Number(a.price);
        }

        if (productQuery.sort === "QtyAsc") {
            return Number(a.qty) - Number(b.qty);
        }

        if (productQuery.sort === "QtyDesc") {
            return Number(b.qty) - Number(a.qty);
        }

    });


    return (
        <>

            <input
                type="text"
                value={productQuery.search}
                placeholder="Enter product name"
                onChange={(e) => handleChange("search", e)}
            />

            <select
                value={productQuery.sort}
                onChange={(e) => handleChange("sort", e)}
            >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
                <option value="priceAscending">Price Ascending</option>
                <option value="priceDescending">Price Descending</option>
                <option value="QtyAsc">Quantity Ascending</option>
                <option value="QtyDesc">Quantity Descending</option>
            </select>

            <button onClick={handleReset}>reset</button>

            {sotedList.length === 0 ? (
                <h3>no data found</h3>
            ) : (
                <>
                    <h2>Inventory List</h2>

                    <table border={2}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {sotedList.map((e, index) => (
                                <tr key={e.id || index}>
                                    <td>{index + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.qty}</td>
                                    <td>{e.price}</td>
                                    <td>{e.category}</td>
                                    <td>
                                        <button onClick={() => disptch(setEditValue(e))}>
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(e.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}

        </>
    )


};

export default ProductList;