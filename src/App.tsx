import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Services } from './pages/Services';
import { Sustainability } from './pages/Sustainability';
import { Investors } from './pages/Investors';
import { MediaGallery } from './pages/MediaGallery';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { InvestorPortalButton } from './components/InvestorPortalButton';
import { ChatBot } from './components/ChatBot';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/media" element={<MediaGallery />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <InvestorPortalButton />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;