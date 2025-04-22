import { useState } from "react";
import "./app.css";
import title from "./assets/yugioh-title.png";
import axios from "axios";

function App() {
  const [get, setGet] = useState(false);
  const [card, setCard] = useState({ name: "", url: "" });
  const [loading, setLoading] = useState(false);

  const randomYuGiOh = async () => {
    setLoading(true);
    try {
      const resp = await axios.get("https://yugioh-back.onrender.com/");
      if (resp.data) {
        const card = resp.data.data[0];
        setGet(true);
        setCard({ name: card.name, url: card.card_images[0].image_url });
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <main>
      <div className="title">
        <p>give me a</p>
        <figure>
          <img src={title} alt="title" />
        </figure>
        <p>card</p>
      </div>
      <div style={{ flex: "1" }}>
        {!card.name &&
          (loading ? (
            <span class="loader"></span>
          ) : (
            <div className="button" style={{ flex: "1" }}>
              <button onClick={randomYuGiOh}>Get random!</button>
            </div>
          ))}
      </div>
      {get && (
        <div className="card">
          <h3>{card.name}</h3>
          <figure className="image">
            <a href={card.url} target="_blank">
              <img src={card.url} alt={card.name} />
            </a>
          </figure>
        </div>
      )}
      <footer className="top">
        <p>Developed by pibelanzallamas 🔥</p>
      </footer>
    </main>
  );
}

export default App;
