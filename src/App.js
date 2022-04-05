import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from '././Componants/Home/Home';
import './App.css';
import Blogs from './Componants/Blogs/Blogs';
import Dashboard from './Componants/Dashboard/Dashboard';
import Header from "./Componants/Header/Header";
import PageNotFound from './Componants/PageNotFound/PageNotFound';
import Reviews from './Componants/Reviews/Reviews';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/dashborad' element={<Dashboard />} ></Route>
        <Route path='/reviews' element={<Reviews />} ></Route>
        <Route path='/blogs' element={<Blogs />} ></Route>
        <Route path='*' element={<PageNotFound />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
