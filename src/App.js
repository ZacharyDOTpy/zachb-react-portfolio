import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <div className="container mt-5">
          <Routes>
            <Route path="/zachb-react-portfolio" element={<About />} />
            <Route path="/zachb-react-portfolio/about" element={<About />} />
            <Route path="/zachb-react-portfolio/portfolio" element={<Portfolio />} />
            <Route path="/zachb-react-portfolio/contact" element={<Contact />} />
            <Route path="/zachb-react-portfolio/resume" element={<Resume />} />
          </Routes>
        </div>
      <Footer />
      </Router>
    </div>
  );
}

export default App;