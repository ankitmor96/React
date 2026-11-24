import React,{useState} from "react";
import Add from "./components/Add";
import ProductList from "./components/ProductList";
import DashBoard from "./components/DachBoard";

const App = () => {
  return (
    <>

    <Add />
    
    <br />
    <DashBoard />
    <br />

    <ProductList/>

    
    </>
  );
};

export default App;