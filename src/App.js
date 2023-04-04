import React from "react";
import "./App.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/about-us" Component={AboutUsPage} />
    </Routes>
    </Layout>
    </BrowserRouter>
  );
};

export default App;
