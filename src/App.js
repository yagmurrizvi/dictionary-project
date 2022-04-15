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
          <smaller>Coded by Yagmur Rizvi</smaller>
        </footer>
      </div>
    </div>
  );
}

export default App;
