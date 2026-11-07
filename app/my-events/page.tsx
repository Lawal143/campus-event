
import Link from "next/link";

export default function MyEventsPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#101D3A]">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-16">
        <Link href="/" className="text-2xl font-black tracking-tight">
          Uni<span className="text-[#FF6534]">Vibe.</span>
        </Link>

        <div className="flex items-center gap-5 text-sm font-semibold md:gap-8">
          <Link href="/" className="hover:text-[#FF6534]">Home</Link>
          <Link href="/events" className="hover:text-[#FF6534]">Explore Events</Link>
          <Link href="/my-events" className="text-[#FF6534]">My Events</Link>
          <Link href="/about" className="hover:text-[#FF6534]">About</Link>
        </div>
      </nav>

      {/* Page introduction */}
      <section className="px-6 pb-12 pt-14 md:px-16 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#FF6534]">
            Your personal collection
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-tight md:text-7xl">
            Your events.
            <br />
            <span className="text-[#FF6534]">Your vibe.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Keep track of the campus events that catch your interest.
            All the events you save will be waiting for you here.
          </p>
        </div>
      </section>

      {/* Saved events area */}
      <section className="px-6 pb-28 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-black md:text-3xl">
              Saved Events
            </h2>

            <span className="rounded-full bg-[#91DDF5] px-4 py-2 text-sm font-bold">
              0 saved
            </span>
          </div>

          {/* Empty state */}
          <div className="rounded-[2rem] border border-slate-200 bg-white px-6 py-20 text-center shadow-sm md:py-28">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#FFE0D5] text-5xl">
              ♡
            </div>

            <h3 className="mt-8 text-3xl font-black">
              Nothing saved yet!
            </h3>

            <p className="mx-auto mt-4 max-w-md leading-7 text-slate-500">
              You haven't saved any events yet. Explore what's happening
              around campus and save the ones you don't want to miss.
            </p>

            <Link
              href="/events"
              className="mt-8 inline-block rounded-full bg-[#FF6534] px-8 py-4 font-bold text-white transition hover:bg-[#e94e20]"
            >
              Explore Events →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#101D3A] px-6 py-8 text-center text-sm text-slate-300">
        <p>© {new Date().getFullYear()} UniVibe. Made for campus life.</p>
      </footer>
    </main>
  );
}
