import React, { useState, useRef, ReactEventHandler } from "react";
import TodoList from "../components/TodoList";
import "./index.css";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="testing" element={<h1>testing</h1>} />
          <Route path="1" element={<h1>1</h1>} />
          <Route path="2" element={<h1>2</h1>} />
          <Route path="3" element={<h1>3</h1>} />
          <Route path="4" element={<h1>4</h1>} />
        </Route>
        <Route path="/about" element={<About />}>
          <Route path="6" element={<h1>6</h1>} />
          <Route path="7" element={<h1>7</h1>} />
        </Route>
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// modal tooltip popover button dropdown navbar form input select switch table card layout
