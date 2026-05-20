import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

export default function Resenas() {
  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      <Navbar />
      <main className="pt-16">
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}