import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Tutorial from './Pages/Tutorial';
import ConverterPage from './Pages/ConverterPage';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import { useEffect } from 'react';
// import axiosInst from '../src/Axios';
import axios from 'axios';


function App() {
  useEffect(()=>{
    // axiosInst.get().then((res) =>console.log(res.data));
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/api/old_image',
    })
      .then(function (response) {
        console.log(response.data);
      });

  })
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/tutorial" element={<Tutorial/>} />
          <Route exact path="/converter" element={<ConverterPage/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>

    </>
  );
}

export default App;
