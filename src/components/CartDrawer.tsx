import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cart, cartCount, cartTotal, cartOpen, setCartOpen, goToCheckout } = useCart();

  if (!cartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
      <div className="relative bg-[#fbf9f4] w-full max-w-sm h-full flex flex-col shadow-2xl">
        <div className="flex items-center justify-between px-7 py-5 border-b border-[#ddc0ba]/30">
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, color: '#1b1c19' }}>
            Winkelwagen {cartCount > 0 && `(${cartCount})`}
          </h2>
          <button onClick={() => setCartOpen(false)} className="text-[#89726d] hover:text-[#1b1c19] transition-colors p-1"><X size={20} /></button>
        </div>
        <div className="flex-grow overflow-y-auto px-7 py-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-[#ddc0ba]" strokeWidth={1} />
              <p className="text-[#89726d] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Je winkelwagen is leeg.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <img src={item.img} alt={item.name} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" style={{ filter: 'contrast(1.04) saturate(0.85)' }} />
                  <div className="flex-grow min-w-0">
                    <p className="text-sm font-semibold text-[#1b1c19] leading-snug" style={{ fontFamily: "'Syne', sans-serif" }}>{item.name}</p>
                    <p className="text-xs text-[#89726d] mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>Aantal: {item.qty}</p>
                  </div>
                  <span className="text-sm font-bold text-[#9f402d] flex-shrink-0" style={{ fontFamily: "'Syne', sans-serif" }}>
                    €{(item.price * item.qty).toFixed(2).replace('.', ',')}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="px-7 py-6 border-t border-[#ddc0ba]/30 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#56423e]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Totaal</span>
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 800, color: '#9f402d' }}>
                €{cartTotal.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <button onClick={goToCheckout} className="w-full py-4 rounded-full bg-[#9f402d] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#802918] active:scale-95 transition-all duration-300" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Afrekenen
            </button>
            <p className="text-center text-xs text-[#89726d] italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>Gratis verzending bij alle bestellingen</p>
          </div>
        )}
      </div>
    </div>
  );
}