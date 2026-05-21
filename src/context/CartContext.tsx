import { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

export interface CartItem {
  id: number;
  name: string;
  desc: string;
  price: number;
  img: string;
  qty: number;
}

interface CartContextValue {
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (item: Omit<CartItem, 'qty'>) => void;
  goToCheckout: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  function addToCart(item: Omit<CartItem, 'qty'>) {
    setCart((c) => {
      const existing = c.find((i) => i.id === item.id);
      if (existing) {
        return c.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...c, { ...item, qty: 1 }];
    });
  }

  function goToCheckout() {
    setCartOpen(false);
    navigate('/checkout', { state: { items: cart } });
  }

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);
  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ cart, cartCount, cartTotal, cartOpen, setCartOpen, addToCart, goToCheckout }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}