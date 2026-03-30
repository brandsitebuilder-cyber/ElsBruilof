/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import Home from './pages/Home';
import Details from './pages/Details';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent/30 overflow-x-hidden">
          <Navbar />
          <MusicPlayer />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details" element={<Details />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
