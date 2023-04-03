import React from "react";
import "./App.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/about-us" Component={AboutUsPage} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
