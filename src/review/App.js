import React, { useState } from "react";
import Data from "../data";

function App() {
  const [number, setNumber] = useState("");
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let makeInt = parseInt(number);
    setText(Data.slice(0, makeInt));
  };

  return (
    <article>
      <form>
        <div>
          <label htmlFor="paragraph">Paragraphs: </label>
          <input
            type="text"
            id="paragraph"
            name="paragraph"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
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
