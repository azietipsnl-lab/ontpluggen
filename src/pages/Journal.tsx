import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, PenLine } from 'lucide-react';

const chapters = ['Reset je ochtend', 'De telefoonparkeerplek', 'Wandelen als aandacht', 'Offline tafelen', 'Reizen op langzaam tempo'];

export default function Journal() {
  return (
    <main className="min-h-screen bg-[#fbf9f4] text-[#1b1c19]">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-32 md:grid-cols-[1fr_0.9fr] md:px-20">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#9f402d]">Ontpluggen Boek</p>
          <h1 className="mt-5 font-syne text-5xl font-extrabold leading-tight md:text-7xl">Een gids voor het leven dat al voor je ligt.</h1>
          <p className="mt-6 text-lg leading-8 text-[#56423e]">
            Het Ontpluggen Boek verzamelt praktische rituelen, essays en opdrachten voor iedereen die minder wil scrollen en meer wil meemaken.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-[#9f402d] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#802918] active:scale-95"
            >
              Naar de shop <ArrowRight size={16} />
            </Link>
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 rounded-full border border-[#9f402d]/30 px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#9f402d] transition-all hover:bg-[#f5f3ee] active:scale-95"
            >
              Lees verhalen
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-8 h-full w-full rounded-[8px] bg-[#ddc0ba]/45" />
          <div className="relative rounded-[8px] bg-[#56642b] p-8 text-white shadow-2xl">
            <BookOpen size={34} />
            <p className="mt-16 text-sm uppercase tracking-widest text-white/70">Hardcover gids</p>
            <h2 className="mt-4 font-syne text-5xl font-extrabold leading-none">Offline is geen luxe.</h2>
            <p className="mt-8 leading-8 text-white/80">
              Het is een ontwerpkeuze. Voor je dag, je huis, je reis en je aandacht.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#ddc0ba]/40 bg-[#f0eee9]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-20">
          <div className="flex items-center gap-3 text-[#56642b]">
            <PenLine size={22} />
            <p className="text-xs font-bold uppercase tracking-widest">In het boek</p>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-5">
            {chapters.map((chapter) => (
              <div key={chapter} className="rounded-[8px] bg-[#fbf9f4] p-5 font-semibold text-[#56423e]">
                {chapter}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
