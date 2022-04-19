import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <h1>📖 Dictionary</h1>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="text-center">
          <small>
            {" "}
            This page is coded by Yagmur Rizvi and{" "}
            <a
              href="https://github.com/yagmurrizvi/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
