import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ReviewPage from './pages/ReviewPage';
import CategoryListing from './pages/CategoryListing';
import About from './pages/About';
import GeminiAssistant from './components/GeminiAssistant';
import SoloLevelingPage from './pages/SoloLevelingPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gaming-900 text-slate-300 font-sans selection:bg-gaming-accent selection:text-white">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<CategoryListing />} />
            <Route path="/review/:id" element={<ReviewPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/game/solo-leveling" element={<SoloLevelingPage />} />
            {/* Fallback for blog/other links to category for demo */}
            <Route path="/blog" element={<CategoryListing />} />
            <Route path="*" element={<div className="p-20 text-center">404 - Page Not Found</div>} />
          </Routes>
        </main>

        <Footer />
        <GeminiAssistant />
      </div>
    </Router>
  );
};

export default App;
