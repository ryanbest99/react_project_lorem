import React, { useState } from "react";
import Text from "./data";

function App() {
  const [number, setNumber] = useState("");
  const [data, setData] = useState([]);
  //   console.log(Text);

  const handleGenerate = (e) => {
    e.preventDefault();
    console.log("handleGenerate");
    // let makeInt = parseInt(number);

    console.log(setData(Text.slice(0, parseInt(number))));

    // if (parseInt(number) === 1) {
    //   setData(Text[0]);
    // } else if (parseInt(number) === 2) {
    //   setData(Text[1]);
    // }
  };

  return (
    <article>
      <form>
        <div>
          <label htmlFor="paragraphs">Paragraphs: </label>
          <input
            type="text"
            id="paragraphs"
            name="paragraphs"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button type="submit" onClick={handleGenerate}>
            Generate
          </button>
        </div>
      </form>
      {data.map(function (d) {
        console.log(d);
        return (
          <div>
            <p>{d}</p>
          </div>
        );
      })}
    </article>
  );
}

export default App;
