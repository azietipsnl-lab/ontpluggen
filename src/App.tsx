import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import Nav from './components/Nav';
import Home from './pages/Home';
import SlowStays from './pages/SlowStays';
import AnalogShop from './pages/AnalogShop';
import Journal from './pages/Journal';
import Stories from './pages/Stories';
import Checkout from './pages/Checkout';

function AppRoutes() {
  const { pathname } = useLocation();
  const hideNav = pathname === '/checkout';

  return (
    <>
      {!hideNav && <Nav />}
      <CartDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slow-stays" element={<SlowStays />} />
        <Route path="/shop" element={<AnalogShop />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  );
}