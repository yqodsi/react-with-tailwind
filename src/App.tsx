import React, { useState, useRef, ReactEventHandler } from "react";
import TodoList from "../components/TodoList";
import "./index.css";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes ,Route } from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>heyyy</h1>} />
        <Route path="testing" element={<h1>testing</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// modal tooltip popover button dropdown navbar form input select switch table card layout 