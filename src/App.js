import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <div>
          <Dictionary keywordEntrance="beach" />
        </div>
        <footer>
          Coded by{" "}
          <a
            href="https://magnificent-buttercream-4c8fea.netlify.app/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Artemisa Avelar
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ArteAvelar/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open source
          </a>
        </footer>
      </div>
    </div>
  );
}
