import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Home as HomeIcon, Leaf } from 'lucide-react';
import Logo from '../components/Logo';

const features = [
  {
    icon: BookOpen,
    title: 'Ontpluggen Boek',
    text: 'Een tastbare gids vol rituelen, routes en zachte reminders voor minder scherm en meer aandacht.',
    to: '/journal',
  },
  {
    icon: Leaf,
    title: 'Analog Shop',
    text: 'Tools die offline leven makkelijker maken: notebooks, kaarten, geur, spel en rustige objecten.',
    to: '/shop',
  },
  {
    icon: HomeIcon,
    title: 'Slow Stays',
    text: 'Plekken waar de wifi niet het middelpunt is en de dag weer op menselijk tempo mag lopen.',
    to: '/slow-stays',
  },
];

const rituals = ['Ochtend zonder telefoon', 'Een wandeling met kaart', 'Diner op vliegtuigstand', 'Schrijven voor slapen'];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf9f4] text-[#1b1c19]">
      <section className="relative min-h-[88vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85"
          alt="Rustige cabin tussen bomen"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#fbf9f4]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbf9f4]/55 via-transparent to-[#fbf9f4]" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 pb-16 pt-28 md:px-20">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center rounded-full bg-[#fbf9f4]/80 px-4 py-2 shadow-sm backdrop-blur-md">
              <Logo color="#9f402d" size="xs" />
            </div>
            <h1 className="font-syne text-5xl font-extrabold leading-[0.95] text-[#1b1c19] sm:text-7xl lg:text-8xl">
              ONT/PLUGGEN
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#56423e] md:text-xl">
              Het leven gebeurt offline. Maak ruimte voor aandacht, papier, stilte, tafels vol mensen en plekken waar je tijd weer voelt.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/journal"
                className="inline-flex items-center gap-2 rounded-full bg-[#9f402d] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#802918] active:scale-95"
              >
                Ontdek het boek <ArrowRight size={16} />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full border border-[#9f402d]/30 bg-[#fbf9f4]/80 px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#9f402d] backdrop-blur-md transition-all hover:bg-white active:scale-95"
              >
                Shop analog tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 py-14 md:grid-cols-3 md:px-20">
        {features.map(({ icon: Icon, title, text, to }) => (
          <Link key={title} to={to} className="clay-card group rounded-[8px] p-7 transition-transform hover:-translate-y-1">
            <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-[#56642b] text-white">
              <Icon size={20} />
            </div>
            <h2 className="font-syne text-2xl font-extrabold text-[#1b1c19]">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-[#56423e]">{text}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9f402d]">
              Bekijk <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </section>

      <section className="border-y border-[#ddc0ba]/40 bg-[#f0eee9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#9f402d]">Rituelen</p>
            <h2 className="mt-4 font-syne text-4xl font-extrabold text-[#1b1c19] md:text-5xl">Kleine gewoontes, groot effect.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {rituals.map((ritual) => (
              <div key={ritual} className="rounded-[8px] border border-[#ddc0ba]/60 bg-[#fbf9f4] px-5 py-4 text-sm font-semibold text-[#56423e]">
                {ritual}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
