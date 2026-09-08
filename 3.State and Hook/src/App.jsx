import { useState } from "react";
import State_01 from "./components/State_01.jsx";

const App = ()=>{

  const [counter, setCount] = useState(0);
  
  console.log(App);

  return(
    <> 
     <State_01/> 
    </>
  );

};

export default App;