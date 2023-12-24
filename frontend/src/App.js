import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar.js";
import Landing from "./Component/Landing.js";
import CardList from "./Component/CardList.js";
import SearchList from "./Component/SearchList";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Dog from "./Pages/Dog";
import Contact from "./Pages/Contact";
import Donate from "./Pages/Donate.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className=" pt-20">
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
            <Route path="/register" element={<Register />} />
            <Route path="/dogs" element={<Dog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
