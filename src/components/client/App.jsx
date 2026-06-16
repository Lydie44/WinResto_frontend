import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SplashPage from './pages/client/SplashPage';
import MenuPage from './pages/client/MenuPage';
import CartPage from './pages/client/CartPage';
import LocationVerificationPage from './pages/client/LocationVerificationPage';
import TrackingPage from './pages/client/TrackingPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Default Landing Page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Client PWA Routes */}
          <Route path="/client" element={<SplashPage />} />
          <Route path="/client/menu" element={<MenuPage />} />
          <Route path="/client/cart" element={<CartPage />} />
          <Route path="/client/location" element={<LocationVerificationPage />} />
          <Route path="/client/tracking" element={<TrackingPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
