import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar.js";
import Landing from "./Component/Landing.js";
import CardList from "./Component/CardList.js";
import SearchList from "./Component/SearchList";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Cat from "./Pages/Cat";
import Dog from "./Pages/Dog";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Landing />
                <CardList />
                <SearchList />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
