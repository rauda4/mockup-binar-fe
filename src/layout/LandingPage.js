import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../compnents/Navbar';
import Footer from '../compnents/Footer';

export default function LandingPage() {
  return (
    <>
      <Navbar transparent />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/*'
          element={<Navigate to={'/'} />}
        />
      </Routes>
      <Footer />
    </>
  );
}
