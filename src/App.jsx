import { useState } from "react";
import "./app.css";
import title from "./assets/yugioh-title.png";
import axios from "axios";

function App() {
  const [get, setGet] = useState(false);
  const [card, setCard] = useState({ name: "", url: "" });
  const [loading, setLoading] = useState(false);

  function randomYuGiOh() {
    axios
      .get("https://db.ygoprodeck.com/api/v7/randomcard.php")
      .then((res) => {
        const url = res.data.card_images[0].image_url;
        setCard({ name: res.data.name, url });
        setGet(true);
      })
      .catch((err) => {
        console.log(err);
        alert("sory erro", err);
      });
  }

  const y = async () => {
    setLoading(true);
    try {
      const r = await axios.get(
        "https://db.ygoprodeck.com/api/v7/randomcard.php"
      );

      setCard(r);
    } catch (e) {
      console.log(e);
      alert("sorry");
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
      {!card.name &&
        (loading ? (
          <p>Loading...</p>
        ) : (
          <div className="button">
            <button onClick={randomYuGiOh}>Get random!</button>
          </div>
        ))}
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
    </main>
  );
}

export default App;
