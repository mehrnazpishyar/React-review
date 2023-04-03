import React from "react";
import "./App.css";
import { BrowserRouter,Routes, Route,Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";

const App = () => {
  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about-us">about-us</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/about-us" Component={AboutUsPage} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
