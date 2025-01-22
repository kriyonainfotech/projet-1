import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatYouGet } from './components/WhatYouGet';
import { ThinkAboutIt } from './components/ThinkAboutIt';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Main route */}
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Features />
              <WhatYouGet />
              <ThinkAboutIt />
              <FAQ />
            </>
          } />

          {/* Redirects */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/index" element={<Navigate to="/" replace />} />
          <Route path="/main" element={<Navigate to="/" replace />} />
          <Route path="/features" element={<Navigate to="/#features" replace />} />
          <Route path="/faq" element={<Navigate to="/#faq" replace />} />
          <Route path="/what-you-get" element={<Navigate to="/#what-you-get" replace />} />
          <Route path="/think-about-it" element={<Navigate to="/#think-about-it" replace />} />
          
          {/* Catch all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;