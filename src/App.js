import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar.js";
import Landing from "./Component/Landing.js";
import CardList from "./Component/CardList.js";
import SearchList from "./Component/SearchList";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <CardList />
      <SearchList />
      <Footer />
    </div>
  );
}

export default App;
