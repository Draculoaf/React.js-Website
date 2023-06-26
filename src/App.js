import "../src/styles/App.css";
import NavBar from "./components/NavBar";
import { Router, Route, Routes, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Design from "./pages/Design";
import Art from "./pages/Art";
import React from "react";
import PersonTag from "./components/PersonTag";
import Chat from "./components/Chat";
import Blogs from "./pages/Blogs";
import BlogOne from "./pages/BlogOne";
import BlogTwo from "./pages/BlogTwo";
import BlogThree from "./pages/BlogThree";
import BlogFour from "./pages/BlogFour";
import BlogFive from "./pages/BlogFive";
import BlogSix from "./pages/BlogSix";
import BlogSeven from "./pages/BlogSeven";
import BlogEight from "./pages/BlogEight";
import BlogNine from "./pages/BlogNine";

function App() {
  return (
    <div className="App">
      <NavBar />
      <PersonTag />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Design" element={<Design />} />
        <Route path="/Art" element={<Art />} />
        <Route path="/Blog" element={<Blogs />} />
        <Route path="/BlogOne" element={<BlogOne />} />
        <Route path="/BlogTwo" element={<BlogTwo />} />
        <Route path="/BlogThree" element={<BlogThree />} />
        <Route path="/BlogFour" element={<BlogFour />} />
        <Route path="/BlogFive" element={<BlogFive />} />
        <Route path="/BlogSix" element={<BlogSix />} />
        <Route path="/BlogSeven" element={<BlogSeven />} />
        <Route path="/BlogEight" element={<BlogEight />} />
        <Route path="/BlogNine" element={<BlogNine />} />
      </Routes>

      <Chat />
    </div>
  );
}

export default App;
