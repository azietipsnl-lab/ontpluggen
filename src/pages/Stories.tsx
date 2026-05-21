const stories = [
  {
    title: 'Een zondag zonder notificaties',
    category: 'Ritueel',
    img: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Waarom papier beter onthoudt',
    category: 'Essay',
    img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'De stad lezen met je voeten',
    category: 'Route',
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80',
  },
];

export default function Stories() {
  return (
    <main className="min-h-screen bg-[#fbf9f4] px-6 pb-20 pt-32 text-[#1b1c19] md:px-20">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#9f402d]">Stories</p>
          <h1 className="mt-5 font-syne text-5xl font-extrabold leading-tight md:text-7xl">Verhalen van mensen die weer aandacht oefenen.</h1>
          <p className="mt-6 text-lg leading-8 text-[#56423e]">
            Praktische essays, routes en interviews over offline keuzes die klein beginnen en langzaam een ander leven maken.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <article key={story.title} className="overflow-hidden rounded-[8px] border border-[#ddc0ba]/60 bg-[#f5f3ee]">
              <img src={story.img} alt={story.title} className="h-72 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#9f402d]">{story.category}</p>
                <h2 className="mt-4 font-syne text-2xl font-extrabold leading-tight">{story.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#56423e]">
                  Lees hoe simpele afspraken met jezelf ruimte maken voor contact, rust en het soort herinneringen dat niet in een feed past.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
