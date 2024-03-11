import "./App.css";
import Keypad from "./Components/Keypad";
import Displaycontainer from "./Components/Displaycontainer";

function App() {
  return (
    <>
    <div className="mt-[15rem] ml-10">
      <Displaycontainer />
      <Keypad />
    </div>
    </>
  );
}

export default App;
