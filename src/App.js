import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from "./containers/Home/Home";
import Abouts from "./containers/Abouts/Abouts";
import PageNotFound from "./containers/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abouts" element={<Abouts />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
