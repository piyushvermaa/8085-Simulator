import "./App.css";
import "./components/MemoryAddress";
import MemoryAddress from "./components/MemoryAddress";
import FlagRegister from "./components/FlagRegister";
import Displaycontainer from "./components/Displaycontainer";
import Keypad from "./components/Keypad";

function App() {
  return (
   <>
   <Displaycontainer/>
   <Keypad/>
   <MemoryAddress/>
   <FlagRegister/>
   </>
  );
}

export default App;
