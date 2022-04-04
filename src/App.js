import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from '././Componants/Home/Home';
import './App.css';
import Dashboard from './Componants/Dashboard/Dashboard';
import Header from "./Componants/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/dashborad' element={<Dashboard />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
