import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar.js";
import Landing from "./Component/Landing.js";
import CardList from "./Component/CardList.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <CardList />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
