import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";

function App() {
  const [count, setCount] = useState(5);

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a

          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </header>
      
    </div>
  );
}

export default App;
