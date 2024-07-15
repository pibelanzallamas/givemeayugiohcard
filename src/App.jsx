import { useState } from "react";
import "./app.css";
import title from "./assets/yugioh-title.png";

function App() {
  const [get, setGet] = useState(false);
  const card = {
    image: "",
    title: "",
  };

  function randomYuGiOh() {
    setGet(true);
  }

  return (
    <main>
      <div className="title">
        <p>give me a</p>
        <figure>
          <img src={title} alt="title" />
        </figure>
        <p>card</p>
      </div>
      <div className="button">
        <button onClick={randomYuGiOh}>Get random!</button>
      </div>
      <figure className="image">
        <img src={card.image} alt={card.title} />
      </figure>
    </main>
  );
}

export default App;
