import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

function App() {
  const [photo, setPhoto] = useState("");
  const [clientId, setClientId] = useState(
    "FCJFswdAg3vyLfd4BrNNFzYDWfHWPRGc-VrT5DfgUwk"
  );

  function handleChange(event) {}
  function handleSubmit(event) {}
  return (
    <div className="App">
      <h1>Unsplash Photo search in React</h1>
      <input
        onChange={handleChange}
        type="text"
        name="photo"
        placeholder="search for photos...."
      />
      <button onClick={handleSubmit} type="submit">
        Search
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
