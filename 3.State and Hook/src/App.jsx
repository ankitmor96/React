import { useState } from "react";
import State_01 from "./components/State_01.jsx";
import State_02 from "./components/state_02.jsx";
import PrevState_03 from "./components/PrevState_03.jsx";
import PrevState_04 from "./components/PrevState_04.jsx";
import ObjectUseState from "./components/objectUseState_05.jsx";
import LifeCycle_06 from "./components/LifeCycle_06.jsx";
import FetchApi_07 from "./components/FetchApi_07.jsx"
import FetchApi_error_08 from "./components/FetchApi_error_08.jsx";

const App = ()=>{

  const [counter, setCount] = useState(0);
  
  console.log(App);

  return(
    <> 
     {/* <State_01/> */}  // jyare count +1 kariye tyare 

     {/* <State_02/> */} // jyare input sathe update pan kariye tyare

     {/* <PrevState_03/>*/} // jyare previous state + kariye tyare 

     {/* <PrevState_04/>*/} // jyare previous input update karvu hoy tyare 

     {/* <ObjectUseState /> */}

     {/* <LifeCycle_06/> */}

     {/* <FetchApi_07/> */}

     <FetchApi_error_08/>

    </>
  );

};

export default App;