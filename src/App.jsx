import { useState } from "react";
import "./app.css";
import title from "./assets/yugioh-title.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="title">
        <p>GIVE ME A </p>
        <figure>
          <img src={title} alt="title" />
        </figure>
        <p> CARD</p>
      </div>
    </main>
  );
}

export default App;
