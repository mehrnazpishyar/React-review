import React from "react";
import "./App.css";
import { BrowserRouter,Routes, Route,Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <BrowserRouter>
  <Navigation />
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/about-us" Component={AboutUsPage} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
