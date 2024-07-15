import { useState } from "react";
import "./app.css";
import title from "./assets/logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="title">
        <p>Give me a </p>
        <figure>
          <img src={title} alt="title" />
        </figure>
        <p> Card!</p>
      </div>
    </main>
  );
}

export default App;
