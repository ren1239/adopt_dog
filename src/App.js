import "./App.css";
import Navbar from "./Component/Navbar.js";
import Landing from "./Component/Landing.js";
import CardList from "./Component/CardList.js";
import SearchList from "./Component/SearchList";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import Cat from "./Pages/Cat";
import Dog from "./Pages/Dog";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
            <CardList />
            <SearchList />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/cat" component={Cat} />
          <Route path="/dog" component={Dog} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
