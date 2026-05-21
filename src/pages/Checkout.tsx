import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Logo from '../components/Logo';

export default function Checkout() {
  const { cart, cartTotal } = useCart();

  return (
    <main className="min-h-screen bg-[#fbf9f4] px-6 py-8 text-[#1b1c19] md:px-20">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between gap-6">
          <Link to="/" aria-label="Terug naar home">
            <Logo color="#9f402d" size="sm" />
          </Link>
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-[#9f402d]">
            <ArrowLeft size={16} /> Verder winkelen
          </Link>
        </header>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_380px]">
          <form className="rounded-[8px] border border-[#ddc0ba]/60 bg-[#f5f3ee] p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#9f402d]">Checkout</p>
            <h1 className="mt-4 font-syne text-4xl font-extrabold md:text-5xl">Bijna offline.</h1>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <label className="text-sm font-semibold text-[#56423e]">
                Voornaam
                <input className="mt-2 w-full rounded-[8px] border border-[#ddc0ba] bg-[#fbf9f4] px-4 py-3 outline-none focus:border-[#9f402d]" />
              </label>
              <label className="text-sm font-semibold text-[#56423e]">
                Achternaam
                <input className="mt-2 w-full rounded-[8px] border border-[#ddc0ba] bg-[#fbf9f4] px-4 py-3 outline-none focus:border-[#9f402d]" />
              </label>
              <label className="text-sm font-semibold text-[#56423e] md:col-span-2">
                E-mail
                <input type="email" className="mt-2 w-full rounded-[8px] border border-[#ddc0ba] bg-[#fbf9f4] px-4 py-3 outline-none focus:border-[#9f402d]" />
              </label>
              <label className="text-sm font-semibold text-[#56423e] md:col-span-2">
                Adres
                <input className="mt-2 w-full rounded-[8px] border border-[#ddc0ba] bg-[#fbf9f4] px-4 py-3 outline-none focus:border-[#9f402d]" />
              </label>
            </div>
            <button
              type="button"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#9f402d] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#802918] active:scale-95"
            >
              <CheckCircle2 size={18} /> Bestelling plaatsen
            </button>
          </form>

          <aside className="rounded-[8px] border border-[#ddc0ba]/60 bg-[#1b1c19] p-6 text-white">
            <h2 className="font-syne text-2xl font-extrabold">Overzicht</h2>
            <div className="mt-6 space-y-5">
              {cart.length === 0 ? (
                <p className="text-sm leading-7 text-white/70">Je winkelwagen is leeg. Voeg iets toe uit de shop om hier je bestelling te zien.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img src={item.img} alt={item.name} className="h-16 w-16 rounded-[8px] object-cover" />
                    <div className="min-w-0 flex-grow">
                      <p className="font-semibold leading-snug">{item.name}</p>
                      <p className="mt-1 text-sm text-white/60">Aantal: {item.qty}</p>
                    </div>
                    <span className="font-semibold">EUR {(item.price * item.qty).toFixed(2)}</span>
                  </div>
                ))
              )}
            </div>
            <div className="mt-8 border-t border-white/15 pt-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70">Totaal</span>
                <span className="font-syne text-3xl font-extrabold">EUR {cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
