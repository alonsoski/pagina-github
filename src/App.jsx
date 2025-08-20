import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          padding: "10px",
          width: "350px",
          height: "250 px",
          borderRadius: "25px",
          background: "#555",
        }}
      >
        <h1>Pagina de José Alonso</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
