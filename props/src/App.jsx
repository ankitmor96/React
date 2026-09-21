import { useState } from "react";
import Conditional_Redering_02 from "./components/conditional_Rendering_02";
import Props_01 from "./components/Props_01";
import Student from "./components/Props_01";
import Conditional_Rendering_03 from "./components/conditional_Rendering_03";
import UnControlled_Component_04 from "./components/UnControlled_Components_04";
import Controlled_Components_05 from "./components/Controlled_Components_05";
import Validation_06 from "./components/Validation_06";

function App() {

    const [input,setInput] =useState("");

    const [name,setName] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setName((p)=> [...p,input]);
    };

    return (
        <div>
            
          {/* <Student name="Ankit" /> // define props value in app.jsx */}
          {/* <Props_01 name={"ankit"}/> */}

          {/* <Props_01 name={"kalpesh"}/> */}

          <br />
{/* 
          <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="enter your name" 
            value={input} 
            onChange={(e)=> setInput(e.target.value)} 
            />

            <button>submit</button>

          </form> */}

          {/* <Conditional_Redering_02 /> */}

          {/* <Conditional_Rendering_03 /> */}

          {/* <UnControlled_Component_04 /> */}

          {/* <Controlled_Components_05 /> */}

          <Validation_06 />

        </div>
    );
}

export default App;