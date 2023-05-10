import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";


function App() {
  return (
    <div className="bg-coffeeMain min-h-screen">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<div><RecordList /></div>} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
