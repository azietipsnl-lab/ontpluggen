import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { useCart } from '../context/CartContext';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Ontpluggen Boek', to: '/journal', highlight: true },
  { label: 'Shop', to: '/shop' },
  { label: 'Stories', to: '/stories' },
  { label: 'Slow Stays', to: '/slow-stays' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { cartCount, setCartOpen } = useCart();
  const isHome = pathname === '/';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const cartBadge = cartCount > 0 && (
    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#9f402d] text-white text-[9px] font-bold flex items-center justify-center leading-none">
      {cartCount > 9 ? '9+' : cartCount}
    </span>
  );

  if (isHome) {
    return (
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#fbf9f4]/95 backdrop-blur-xl shadow-sm border-b border-[#ddc0ba]/30' : 'bg-transparent'}`}>
        <nav className="flex justify-between items-center px-6 md:px-20 py-5 max-w-7xl mx-auto">
          <Link to="/"><Logo color="#9f402d" size="sm" /></Link>
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.map(({ label, to, highlight }) =>
              highlight ? (
                <Link key={to} to={to} className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 active:scale-95" style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: pathname === to ? '#802918' : '#9f402d', color: '#fff' }}>{label}</Link>
              ) : (
                <Link key={to} to={to} className={`text-sm transition-colors ${pathname === to ? 'text-[#9f402d] font-semibold' : scrolled ? 'text-[#56423e] hover:text-[#9f402d]' : 'text-[#1b1c19] hover:text-[#9f402d]'}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>{label}</Link>
              )
            )}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setCartOpen(true)} className="relative text-[#9f402d] hover:scale-110 transition-transform p-1"><ShoppingCart size={22} />{cartBadge}</button>
            <button className="md:hidden text-[#1b1c19] p-1" onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </nav>
        {open && (
          <div className="md:hidden bg-[#fbf9f4]/98 backdrop-blur-xl border-t border-[#ddc0ba]/30 px-6 py-8 flex flex-col gap-6">
            {links.map(({ label, to, highlight }) => (
              <Link key={to} to={to} onClick={() => setOpen(false)} className={highlight ? 'self-start text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full' : 'text-[#56423e] hover:text-[#9f402d] transition-colors text-lg font-medium'} style={{ fontFamily: "'DM Sans', sans-serif", ...(highlight ? { backgroundColor: '#9f402d', color: '#fff' } : {}) }}>{label}</Link>
            ))}
          </div>
        )}
      </header>
    );
  }

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl rounded-full bg-[#fbf9f4]/90 backdrop-blur-xl border border-[#ddc0ba]/30 shadow-sm z-50">
      <nav className="flex justify-between items-center px-5 sm:px-8 py-2.5 sm:py-3">
        <Link to="/"><Logo color="#9f402d" size="xs" /></Link>
        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          {links.map(({ label, to, highlight }) =>
            highlight ? (
              <Link key={to} to={to} className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 active:scale-95" style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: pathname === to ? '#802918' : '#9f402d', color: '#fff' }}>{label}</Link>
            ) : (
              <Link key={to} to={to} className={`text-sm transition-colors ${pathname === to ? 'text-[#9f402d] font-bold' : 'text-[#56423e] hover:text-[#9f402d]'}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>{label}</Link>
            )
          )}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setCartOpen(true)} className="relative text-[#9f402d] hover:scale-110 transition-transform"><ShoppingCart size={18} />{cartBadge}</button>
          <button className="md:hidden text-[#1b1c19]" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden bg-[#fbf9f4]/98 rounded-b-3xl border-t border-[#ddc0ba]/20 px-6 py-6 flex flex-col gap-5">
          {links.map(({ label, to, highlight }) => (
            <Link key={to} to={to} onClick={() => setOpen(false)} className={highlight ? 'self-start text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full' : 'text-[#56423e] hover:text-[#9f402d] transition-colors text-base font-medium'} style={{ fontFamily: "'DM Sans', sans-serif", ...(highlight ? { backgroundColor: '#9f402d', color: '#fff' } : {}) }}>{label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}