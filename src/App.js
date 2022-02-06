import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Tutorial from './Pages/Tutorial';
import ConverterPage from './Pages/ConverterPage';
import Home from './Pages/Home';
import Contact from './Pages/Contact';


function App() {
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
