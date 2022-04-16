import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <h1>📖 Dictionary</h1>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>
            {" "}
            <a
              href="https://github.com/yagmurrizvi/dictionary-project"
              target="_blank"
              rel="noopener"
            >
              Open-source code
            </a>{" "}
            by Yagmur Rizvi
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
