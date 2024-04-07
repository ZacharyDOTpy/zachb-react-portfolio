import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


function App() {
  return (
    <BrowserRouter>
    <div className = 'flex-parent'> 
      <Header />
      <div className = 'flex-child'>
         <Routes>
            <Route path = '/' element = {<About />} />
            <Route path = '/contact' element = {<Contact />} />
            <Route path = '/portfolio' element = {<Portfolio />} />
            <Route path = '/resume' element = {<Resume />} />
            <Route path = '*' element = {<About />} />
          </Routes>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;