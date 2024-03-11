import "./App.css";
import Keypad from "./components/Keypad";
import Displaycontainer from "./components/Displaycontainer";
import MemoryAddress from "./components/MemoryAddress";
import FlagRegister from "./components/FlagRegister";

function App() {
  return (
    <>
      <MemoryAddress/>
      <FlagRegister/>
    <div className="mt-[2rem] ml-10">
      <Displaycontainer />
      <Keypad />
    </div>
    </>
  );
}

export default App;
