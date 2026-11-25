import { createAsyncThunk } from "@reduxjs/toolkit";


const fetchProduct = createAsyncThunk(
    "product/getAllProducts" , async () => {
        
    const res = await fetch("https://fakestoreapi.com/products");

    if(!res.ok){
        throw new Error("failed to fetch");
    }

    const data = await res.json();

    console.log("data",data);

    return data ;

    });

    export default fetchProduct;