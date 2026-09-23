import External_03 from "./components/External_03";
import Home_04 from "./components/home_04";
import Inline_01 from "./components/Inline_01";
import Internal_02 from "./components/Internal_02";
import Module_04 from "./components/Module_04";
import OtherComponent from "./components/otherComponents";
import BasicExample from "./components/Bootstrap_05";

function App(){
  return(
    <div>
      <Inline_01 />
      <Internal_02 />
      <External_03 />
      <Module_04 />
      <Home_04 />
      <OtherComponent />
      <BasicExample />
      {/* <Button variant="secondary" >Button</Button> */}
    </div>
  )
}

export default App;