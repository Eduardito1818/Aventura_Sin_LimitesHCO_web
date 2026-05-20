import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      <Navbar />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </div>
  );
}