import "./App.css";
import Keypad from "./Components/Keypad";
import Displaycontainer from "./Components/Displaycontainer";
import MemoryAddress from "./components/MemoryAddress";
import FlagRegister from "./components/FlagRegister";

function App() {
  return (
    <>
    <div className="mt-[15rem] ml-10">
      <Displaycontainer />
      <Keypad />
      <MemoryAddress/>
      <FlagRegister/>
    </div>
    </>
  );
}

export default App;
