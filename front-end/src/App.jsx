import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Docs from './components/Docs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <HeroSection />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
