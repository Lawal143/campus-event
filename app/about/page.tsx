
import Link from "next/link";

const categories = [
  {
    name: "Tech",
    description:
      "Discover tech events, workshops, hackathons and opportunities to grow your skills.",
    icon: "⌘",
    color: "bg-[#91DDF5]",
  },
  {
    name: "MSSN Activities",
    description:
      "Stay connected with Islamic programmes, gatherings and activities within the Muslim student community.",
    icon: "☾",
    color: "bg-[#FFE0D5]",
  },
  {
    name: "Sports",
    description:
      "Find sporting events, competitions and activities that bring students together.",
    icon: "⚽",
    color: "bg-[#DCE8FF]",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#101D3A]">
      <nav className="flex items-center justify-between px-6 py-6 md:px-16">
        <Link href="/" className="text-2xl font-black tracking-tight">
          Uni<span className="text-[#FF6534]">Vibe.</span>
        </Link>

        <div className="flex items-center gap-5 text-sm font-semibold md:gap-8">
          <Link href="/" className="hover:text-[#FF6534]">Home</Link>
          <Link href="/events" className="hover:text-[#FF6534]">Explore Events</Link>
          <Link href="/my-events" className="hover:text-[#FF6534]">My Events</Link>
          <Link href="/about" className="text-[#FF6534]">About</Link>
        </div>
      </nav>

      <section className="px-6 pb-20 pt-16 md:px-16 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#FF6534]">
            Get to know us
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Campus life should be more than just{" "}
            <span className="text-[#FF6534]">lectures.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            UniVibe is a campus event discovery platform that helps students
            find out what is happening around them. From tech gatherings to
            sports competitions and community activities, there is always
            something worth showing up for.
          </p>

          <Link
            href="/events"
            className="mt-9 inline-block rounded-full bg-[#FF6534] px-8 py-4 font-bold text-white transition hover:bg-[#e94e20]"
          >
            Explore Events →
          </Link>
        </div>
      </section>

      <section className="bg-[#101D3A] px-6 py-20 text-white md:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#91DDF5]">
              Why UniVibe?
            </p>
            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Never miss out on what makes campus life exciting.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              Between lectures, assignments and deadlines, it is easy to miss
              the interesting things happening around campus.
            </p>
            <p>
              UniVibe brings campus events together in one place, making it
              easier for students to discover activities, explore their
              interests and stay involved in their community.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6534]">
              Find your interest
            </p>
            <h2 className="text-4xl font-black md:text-5xl">
              Something for everyone.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Explore different sides of campus life through our event
              categories.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.name}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`mb-7 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-bold ${category.color}`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-extrabold">{category.name}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#91DDF5] px-8 py-14 text-center md:px-16">
          <h2 className="text-4xl font-black md:text-5xl">
            Your campus. Your interests. Your vibe.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-700">
            There is always something happening. Find the events that interest
            you and be part of the experience.
          </p>
          <Link
            href="/events"
            className="mt-8 inline-block rounded-full bg-[#101D3A] px-8 py-4 font-bold text-white transition hover:bg-[#24385f]"
          >
            Find Your Vibe →
          </Link>
        </div>
      </section>

      <footer className="bg-[#101D3A] px-6 py-8 text-center text-sm text-slate-300">
        <p>
          © {new Date().getFullYear()} UniVibe. Made for campus life.
        </p>
      </footer>
    </main>
  );
}
