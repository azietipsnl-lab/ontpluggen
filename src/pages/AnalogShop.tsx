import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Offline Weekend Deck',
    desc: '52 kaarten met prompts voor wandelingen, gesprekken en avonden zonder scherm.',
    price: 24,
    img: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Ritual Notebook',
    desc: 'Een stevig dagboek met rustige weekritmes en reflectievragen.',
    price: 18,
    img: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'No Signal Candle',
    desc: 'Sage, ceder en sinaasappel voor het moment waarop je telefoon uitgaat.',
    price: 29,
    img: 'https://images.unsplash.com/photo-1602874801006-e26ddc71062f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Field Notes Set',
    desc: 'Pocket notebooks, potlood en kaartlint voor analoge dagen onderweg.',
    price: 16,
    img: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=900&q=80',
  },
];

export default function AnalogShop() {
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-[#fbf9f4] px-6 pb-20 pt-32 text-[#1b1c19] md:px-20">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#9f402d]">Analog Shop</p>
            <h1 className="mt-5 font-syne text-5xl font-extrabold leading-tight md:text-7xl">Objecten voor aandacht.</h1>
            <p className="mt-6 text-lg leading-8 text-[#56423e]">
              Geen gadgets, wel goede tools: dingen die je helpen vertragen, schrijven, wandelen, spelen en aanwezig zijn.
            </p>
          </div>
          <div className="rounded-[8px] border border-[#ddc0ba] bg-[#f5f3ee] px-5 py-4 text-sm text-[#56423e]">
            Gratis verzending vanaf EUR 40
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article key={product.id} className="group overflow-hidden rounded-[8px] border border-[#ddc0ba]/60 bg-[#f5f3ee]">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={product.img} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex min-h-[250px] flex-col p-5">
                <p className="font-syne text-xl font-extrabold">{product.name}</p>
                <p className="mt-3 flex-grow text-sm leading-7 text-[#56423e]">{product.desc}</p>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="font-syne text-xl font-extrabold text-[#9f402d]">EUR {product.price}</span>
                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#9f402d] text-white transition-all hover:bg-[#802918] active:scale-95"
                    aria-label={`${product.name} toevoegen aan winkelwagen`}
                    title="Toevoegen"
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
