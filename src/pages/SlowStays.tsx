import { MapPin, Moon, Trees } from 'lucide-react';

const stays = [
  {
    name: 'Boskamer Veluwe',
    place: 'Vierhouten',
    img: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1000&q=80',
    detail: 'Houtkachel, wandelkaart, geen televisie en ontbijt in stilte.',
  },
  {
    name: 'Duinhuisje Noord',
    place: 'Terschelling',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    detail: 'Zout op de ramen, fietsen klaar en telefoonslaapzak naast de deur.',
  },
  {
    name: 'Atelier aan de Maas',
    place: 'Limburg',
    img: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=80',
    detail: 'Schrijftafel, keramiekworkshop en lange avonden zonder meldingen.',
  },
];

export default function SlowStays() {
  return (
    <main className="min-h-screen bg-[#fbf9f4] px-6 pb-20 pt-32 text-[#1b1c19] md:px-20">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#9f402d]">Slow Stays</p>
          <h1 className="mt-5 font-syne text-5xl font-extrabold leading-tight md:text-7xl">Plekken waar je vanzelf vertraagt.</h1>
          <p className="mt-6 text-lg leading-8 text-[#56423e]">
            Kleine verblijven met natuur, papier, stilte en lokale ritmes als hoofdingredient. Elke stay is gekozen op rust, aandacht en tastbare eenvoud.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stays.map((stay) => (
            <article key={stay.name} className="overflow-hidden rounded-[8px] border border-[#ddc0ba]/60 bg-[#f5f3ee]">
              <img src={stay.img} alt={stay.name} className="h-72 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#56642b]">
                  <MapPin size={16} /> {stay.place}
                </div>
                <h2 className="mt-4 font-syne text-2xl font-extrabold">{stay.name}</h2>
                <p className="mt-3 text-sm leading-7 text-[#56423e]">{stay.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 rounded-[8px] bg-[#56642b] p-6 text-white md:grid-cols-3">
          <div className="flex items-center gap-3">
            <Moon size={22} />
            <span className="text-sm font-semibold">Rustige avonden</span>
          </div>
          <div className="flex items-center gap-3">
            <Trees size={22} />
            <span className="text-sm font-semibold">Natuur op loopafstand</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={22} />
            <span className="text-sm font-semibold">Lokale adressen</span>
          </div>
        </div>
      </section>
    </main>
  );
}
