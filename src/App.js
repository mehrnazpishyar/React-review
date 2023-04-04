import React from "react";
import "./App.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import Layout from "./Layout/Layout";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/about-us" Component={AboutUsPage} />
      <Route path="/blogs" Component={BlogPage} />
      <Route path="/blogs/:id" Component={Blog} />
      <Route path="*" Component={NotFound} />
    </Routes>
    </Layout>
    </BrowserRouter>
  );
};

export default App;
