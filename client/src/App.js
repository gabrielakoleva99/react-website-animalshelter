import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Pets from './components/pages/Pets'
import Shelter from './components/pages/Shelter';
import Adopt from './components/pages/Adopt';
import PostAnimalForm from './components/PostAnimalForm';
import ThankYouPage from './components/pages/ThankYouPage';


function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path="/pets" element={<Pets />} /> 
      <Route path="/shelter" element={<Shelter />} /> 
      <Route path="/adopt" element={<Adopt />} /> 
      <Route path="/postanimalform" element={<PostAnimalForm />} /> 
      <Route path="/thank-you-page" element={<ThankYouPage />} />



    </Routes>
    </Router>
    </>

  );
}

export default App;
