import React, { useState } from "react";
import Data from "../data";

function App() {
  const [number, setNumber] = useState("");
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hs");

    let num = parseInt(number);
    if (num > 0 && num < 9) setText(Data.slice(0, num));
    if (num < 0) setText(Data.slice(0, 0));
    if (num > 8) setText(Data.slice(0, Data.length));
  };

  return (
    <article>
      <h1>Lorem Ipsum</h1>
      <form>
        <label htmlFor="paragraphs">Paragraphs</label>
        <input
          type="text"
          id="paragraphs"
          name="paragraphs"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Sumbit
        </button>
      </form>
      {text.map(function (item, index) {
        return (
          <div key={index}>
            <p>{item}</p>
          </div>
        );
      })}
    </article>
  );
}

export default App;
