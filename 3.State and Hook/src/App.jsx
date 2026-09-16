import { useState } from "react";
import State_01 from "./components/State_01.jsx";
import State_02 from "./components/state_02.jsx";
import PrevState_03 from "./components/PrevState_03.jsx";
import PrevState_04 from "./components/PrevState_04.jsx";
import ObjectUseState from "./components/objectUseState_05.jsx";
import LifeCycle_06 from "./components/LifeCycle_06.jsx";
import FetchApi_07 from "./components/FetchApi_07.jsx"
import FetchApi_error_08 from "./components/FetchApi_error_08.jsx";
import UseRef_10 from "./components/UseRef_10.jsx";
import AxiosApi_09 from "./components/axiosApi_09.jsx";
import UseRef_Alert_11 from "./components/UsRef_Alert_11.jsx";
import UseRef_Event_12 from "./components/UseRef_Event_12.jsx";

const App = ()=>{

  const [counter, setCount] = useState(0);
  
  console.log(App);

  return(
    <> 
     {/* <State_01/> */} 

     {/* <State_02/> */} 

     {/* <PrevState_03/>*/} 

     {/* <PrevState_04/>*/} 

     {/* <ObjectUseState /> */}

     {/* <LifeCycle_06/> */}

     {/* <FetchApi_07/> */}

     {/* <AxiosApi_09/> */}

     {/* <UseRef_10/> */}

     {/* <UseRef_Alert_11/> */}

     <UseRef_Event_12/>

    </>
  );

};

export default App;