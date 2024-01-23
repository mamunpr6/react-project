import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen w-full bg-red-200 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-center">CodeRex</h2>
      </div>
    </>
  );
}

export default App;
