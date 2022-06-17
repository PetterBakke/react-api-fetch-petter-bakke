import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageDetail from './components/pagedetail/PageDetail';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="page/:id" element={<PageDetail />} />
    </Routes>

  );
}

export default App;