import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import fetchProduct from "../features/Products/ProductThunk";




const ProductList = () => {

    const dispatch = useDispatch();

    const {products,loading,error} = useSelector((state)=> state.products);

    useEffect(()=>{
        dispatch(fetchProduct());

        console.log("fetchProduct ",fetchProduct);
    },[fetchProduct]);

    if(loading){
        return <h1>Loading ....</h1>
    }

    if(error){
        return <h1>Error ...{error.message}</h1>
    }

    return (
        <>
        <h1>Product List</h1>

        <br />
        <br />

        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {products.map((p,index)=>{
                    return(
                       <tr key={p.id}>
                            <td>{index+1}</td>
                            <td>{p.title}</td>
                            <td>{p.price}</td>
                            <td><img src={p.image} alt={p.title} style={{height:"200px",width:"150px"}} /></td>
                       </tr>
                    )
                })}
            </tbody>
        </table>
        </>

        
    )
};

export default ProductList;