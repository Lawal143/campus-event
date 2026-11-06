
"use client";

import { useMemo, useState } from "react";

type Category = "Tech" | "MSSN Activities" | "Sports";

type Event = {
  id: number;
  title: string;
  category: Category;
  date: string;
  time: string;
  venue: string;
  image: string;
  description: string;
};

const events: Event[] = [
  {
    id: 1,
    title: "Campus Tech Summit 2026",
    category: "Tech",
    date: "2026-12-12",
    time: "10:00 AM",
    venue: "University Auditorium",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000",
    description:
      "A gathering of tech enthusiasts, developers and innovators. Expect inspiring talks, practical sessions and opportunities to connect with people building the future of technology.",
  },
  {
    id: 2,
    title: "MSSN Annual Convention",
    category: "MSSN Activities",
    date: "2026-12-18",
    time: "9:00 AM",
    venue: "Main Campus Mosque",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=1000",
    description:
      "Join fellow Muslim students for a day of beneficial reminders, discussions, brotherhood and sisterhood, and activities centred around strengthening our faith.",
  },
  {
    id: 3,
    title: "Interfaculty Football Tournament",
    category: "Sports",
    date: "2026-12-20",
    time: "3:00 PM",
    venue: "University Sports Complex",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1000",
    description:
      "The faculties go head-to-head in an exciting football tournament. Come support your faculty, enjoy the atmosphere and cheer your team to victory.",
  },
  {
    id: 4,
    title: "Women in Technology Meetup",
    category: "Tech",
    date: "2027-01-08",
    time: "11:00 AM",
    venue: "ICT Centre",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1000",
    description:
      "An opportunity for female students interested in technology to learn, share experiences, meet mentors and discover different career paths in tech.",
  },
  {
    id: 5,
    title: "Qur'an Recitation Competition",
    category: "MSSN Activities",
    date: "2027-01-15",
    time: "10:00 AM",
    venue: "Faculty Lecture Theatre",
    image:
      "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=1000",
    description:
      "A gathering celebrating the beauty of Qur'an recitation, with students showcasing their recitation and competing in a welcoming environment.",
  },
  {
    id: 6,
    title: "Campus Basketball Showdown",
    category: "Sports",
    date: "2027-01-20",
    time: "2:00 PM",
    venue: "Outdoor Basketball Court",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1000",
    description:
      "Get ready for an energetic basketball showdown. Bring your friends, support your favourite team and enjoy an afternoon of campus sports.",
  },
  {
    id: 7,
    title: "Build with AI Workshop",
    category: "Tech",
    date: "2027-02-05",
    time: "12:00 PM",
    venue: "Computer Science Laboratory",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000",
    description:
      "Explore how artificial intelligence is changing the way we work and build. This hands-on workshop introduces students to practical AI tools and ideas.",
  },
  {
    id: 8,
    title: "MSSN Sisters' Hangout",
    category: "MSSN Activities",
    date: "2027-02-12",
    time: "1:00 PM",
    venue: "Students' Centre",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000",
    description:
      "A relaxed gathering for Muslim sisters to connect, share experiences, learn and enjoy meaningful conversations in a welcoming atmosphere.",
  },
];

const categories: {
  name: Category;
  number: string;
  description: string;
  colour: string;
  icon: "tech" | "mssn" | "sports";
}[] = [
  {
    name: "Tech",
    number: "01",
    description: "Ideas, innovation and everything tech.",
    colour: "bg-[#DDF5FC]",
    icon: "tech",
  },
  {
    name: "MSSN Activities",
    number: "02",
    description: "Faith, connection and community.",
    colour: "bg-[#FFE4D9]",
    icon: "mssn",
  },
  {
    name: "Sports",
    number: "03",
    description: "Competition, energy and campus action.",
    colour: "bg-[#E7EAF7]",
    icon: "sports",
  },
];

function CategoryIcon({ type }: { type: "tech" | "mssn" | "sports" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10"
      aria-hidden="true"
    >
      {type === "tech" && (
        <>
          <rect x="7" y="9" width="34" height="25" rx="3" />
          <path d="M17 40h14M24 34v6M19 18l-4 4 4 4M29 18l4 4-4 4" />
        </>
      )}
      {type === "mssn" && (
        <>
          <path d="M24 5 27.5 16.5 39 20l-11.5 3.5L24 35l-3.5-11.5L9 20l11.5-3.5L24 5Z" />
          <path d="M37 31v10M32 36h10M9 5v8M5 9h8" />
        </>
      )}
      {type === "sports" && (
        <>
          <circle cx="24" cy="24" r="18" />
          <path d="m24 13 7 5-3 9h-8l-3-9 7-5ZM16 18l-8 3M17 27l-5 10M28 27l6 10M31 18l9 3" />
        </>
      )}
    </svg>
  );
}

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("earliest");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = useMemo(() => {
    let result = events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(search.toLowerCase()) ||
        event.venue.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || event.category === activeCategory;

      return matchesSearch && matchesCategory;
    });

    result = [...result].sort((a, b) => {
      if (sortOrder === "latest") {
        return b.date.localeCompare(a.date);
      }
      return a.date.localeCompare(b.date);
    });

    return result;
  }, [search, activeCategory, sortOrder]);

  const trendingEvents = events.slice(0, 3);

  const upcomingEvents = [...events]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(3, 7);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F7FA] text-[#101D3A]">
      {/* NAVIGATION */}
      <header className="relative z-20 border-b border-[#101D3A]/10 bg-[#F5F7FA]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <a href="/" className="text-3xl font-black tracking-tight">
            UniVibe<span className="text-[#FF6534]">.</span>
          </a>

          <div className="hidden items-center gap-9 text-sm font-semibold md:flex">
            <a href="/" className="text-[#FF6534]">
              Home
            </a>
            <a
              href="#explore"
              className="transition hover:text-[#FF6534]"
            >
              Explore Events
            </a>
            <a
              href="/my-events"
              className="transition hover:text-[#FF6534]"
            >
              My Events
            </a>
            <a
              href="#about"
              className="transition hover:text-[#FF6534]"
            >
              About
            </a>
          </div>

          <a
            href="#explore"
            className="hidden rounded-full bg-[#101D3A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#FF6534] md:inline-block"
          >
            Find Your Vibe
          </a>

          <a
            href="#explore"
            className="rounded-full bg-[#101D3A] px-4 py-2.5 text-xs font-bold text-white md:hidden"
          >
            Explore
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24">
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#101D3A]/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-[#FF6534]" />
            Campus life starts here
          </div>

          <h1 className="max-w-xl text-5xl font-black leading-[1.08] tracking-tight md:text-7xl">
            There&apos;s More to Campus Than{" "}
            <span className="relative inline-block text-[#FF6534]">
              Lectures.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-[#101D3A]/65 md:text-lg">
            From tech meetups to sports and community activities, discover
            what&apos;s happening around your campus. Your next experience is
            waiting.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#explore"
              className="rounded-full bg-[#FF6534] px-8 py-4 text-sm font-extrabold text-white shadow-lg shadow-[#FF6534]/20 transition hover:-translate-y-1 hover:bg-[#e94f20]"
            >
              Find Your Vibe <span className="ml-2">↗</span>
            </a>
            <a
              href="#categories"
              className="rounded-full border border-[#101D3A]/20 px-7 py-4 text-sm font-bold transition hover:bg-[#101D3A] hover:text-white"
            >
              Explore Categories
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#F5F7FA] bg-[#91DDF5] text-xs font-black">
                T
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#F5F7FA] bg-[#FF6534] text-xs font-black text-white">
                M
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#F5F7FA] bg-[#101D3A] text-xs font-black text-white">
                S
              </div>
            </div>
            <p className="text-xs font-medium text-[#101D3A]/60">
              Tech, community, sports and more.
            </p>
          </div>
        </div>

        {/* HERO IMAGE COLLAGE */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -right-5 -top-6 h-32 w-32 rounded-full bg-[#91DDF5]" />
          <div className="absolute -bottom-8 -left-7 h-36 w-36 rounded-full bg-[#FF6534]" />

          <div className="relative grid grid-cols-5 gap-3">
            <div className="col-span-3 overflow-hidden rounded-[2rem] rounded-br-[5rem]">
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900"
                alt="Students gathered at a campus event"
                className="h-72 w-full object-cover md:h-96"
              />
            </div>

            <div className="col-span-2 flex flex-col gap-3">
              <div className="overflow-hidden rounded-[2rem] rounded-bl-[4rem]">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700"
                  alt="Students collaborating"
                  className="h-40 w-full object-cover md:h-52"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between rounded-[2rem] bg-[#101D3A] p-4 text-white md:p-6">
                <span className="text-3xl text-[#91DDF5]">✳</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#91DDF5]">
                    Your campus
                  </p>
                  <p className="mt-2 text-xl font-black leading-tight md:text-2xl">
                    Your next big experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 rounded-full bg-white px-5 py-3 text-xs font-extrabold shadow-xl md:left-8">
            Discover. Connect. Experience.
          </div>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section
        id="categories"
        className="bg-white px-5 py-16 md:px-10 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#FF6534]">
                Find your interest
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Explore by category<span className="text-[#FF6534]">.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#101D3A]/60">
              Whatever you&apos;re into, there&apos;s something happening for
              you.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => {
                  setActiveCategory(category.name);
                  document
                    .getElementById("explore")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`${category.colour} group rounded-[1.7rem] p-6 text-left transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-8`}
              >
                <div className="flex items-start justify-between">
                  <div className="text-[#101D3A]">
                    <CategoryIcon type={category.icon} />
                  </div>
                  <span className="text-sm font-black text-[#101D3A]/40">
                    {category.number}
                  </span>
                </div>
                <h3 className="mt-10 text-2xl font-black">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-[#101D3A]/65">
                  {category.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-bold">Explore category</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg transition group-hover:bg-[#101D3A] group-hover:text-white">
                    ↗
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING EVENTS */}
      <section className="bg-[#101D3A] px-5 py-16 text-white md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#91DDF5]">
                The campus buzz
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Trending events<span className="text-[#FF6534]">.</span>
              </h2>
            </div>
            <a
              href="#explore"
              className="text-sm font-bold text-[#91DDF5] transition hover:text-[#FF6534]"
            >
              Explore all events ↗
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {trendingEvents.map((event, index) => (
              <button
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="group overflow-hidden rounded-[1.5rem] bg-white text-left text-[#101D3A] transition hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#FF6534] px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white">
                    Trending 0{index + 1}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF6534]">
                    {event.category}
                  </span>
                  <h3 className="mt-2 text-xl font-black leading-snug">
                    {event.title}
                  </h3>
                  <div className="mt-5 flex items-center justify-between border-t border-[#101D3A]/10 pt-4 text-xs font-semibold text-[#101D3A]/60">
                    <span>{formatDate(event.date)}</span>
                    <span className="text-[#101D3A]">View event ↗</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE ALL EVENTS */}
      <section id="explore" className="px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#FF6534]">
              Make your plans
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Explore all events<span className="text-[#FF6534]">.</span>
            </h2>
            <p className="mt-3 text-sm text-[#101D3A]/60">
              Find something interesting and make it part of your campus story.
            </p>
          </div>

          {/* SEARCH AND FILTERS */}
          <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 items-center gap-3 rounded-xl bg-[#F5F7FA] px-4 py-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5 text-[#101D3A]/50"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search events or venues..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#101D3A]/40"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {["All", "Tech", "MSSN Activities", "Sports"].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2.5 text-xs font-bold transition ${
                    activeCategory === category
                      ? "bg-[#101D3A] text-white"
                      : "bg-[#F5F7FA] text-[#101D3A] hover:bg-[#91DDF5]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="rounded-xl border border-[#101D3A]/10 bg-white px-4 py-3 text-xs font-semibold outline-none"
              aria-label="Sort events"
            >
              <option value="earliest">Earliest first</option>
              <option value="latest">Latest first</option>
            </select>
          </div>

          <p className="mb-5 text-xs font-semibold text-[#101D3A]/50">
            Showing {filteredEvents.length}{" "}
            {filteredEvents.length === 1 ? "event" : "events"}
          </p>

          {/* EVENT GRID */}
          {filteredEvents.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => (
                <button
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className="group overflow-hidden rounded-[1.5rem] border border-[#101D3A]/5 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#101D3A]">
                      {event.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black leading-snug transition group-hover:text-[#FF6534]">
                      {event.title}
                    </h3>
                    <div className="mt-5 space-y-3 text-xs font-medium text-[#101D3A]/60">
                      <p className="flex items-center gap-2">
                        <span className="text-[#FF6534]">◷</span>
                        {formatDate(event.date)} · {event.time}
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-[#FF6534]">⌖</span>
                        {event.venue}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-[#101D3A]/10 pt-4">
                      <span className="text-xs font-bold">
                        View event details
                      </span>
                      <span className="text-lg text-[#FF6534] transition group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DDF5FC] text-3xl">
                ?
              </div>
              <h3 className="mt-5 text-2xl font-black">No events found</h3>
              <p className="mt-2 text-sm text-[#101D3A]/60">
                Try another search or choose a different category.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-6 rounded-full bg-[#101D3A] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#FF6534]"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="bg-[#DDF5FC] px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#FF6534]">
              Save the date
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Coming up next<span className="text-[#FF6534]">.</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <button
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="flex items-center gap-4 rounded-2xl bg-white p-4 text-left transition hover:-translate-y-1 hover:shadow-lg md:gap-6 md:p-5"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-24 w-24 rounded-xl object-cover md:h-28 md:w-32"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF6534]">
                    {event.category}
                  </p>
                  <h3 className="mt-2 text-base font-black leading-snug md:text-lg">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#101D3A]/60">
                    {formatDate(event.date)} · {event.time}
                  </p>
                  <p className="mt-1 text-xs text-[#101D3A]/60">
                    {event.venue}
                  </p>
                </div>
                <span className="text-xl font-bold text-[#FF6534]">↗</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / FOOTER */}
      <footer id="about" className="bg-[#101D3A] px-5 py-14 text-white md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-md">
            <a href="/" className="text-3xl font-black tracking-tight">
              UniVibe<span className="text-[#FF6534]">.</span>
            </a>
            <p className="mt-4 text-sm leading-7 text-white/60">
              More than lectures. More connections, more experiences and more
              reasons to love campus life.
            </p>
          </div>

          <div>
            <h3 className="font-extrabold">Explore UniVibe</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
              <a href="/" className="transition hover:text-[#FF6534]">
                Home
              </a>
              <a href="#explore" className="transition hover:text-[#FF6534]">
                Explore Events
              </a>
              <a
                href="/my-events"
                className="transition hover:text-[#FF6534]"
              >
                My Events
              </a>
              <a href="#about" className="transition hover:text-[#FF6534]">
                About
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/40">
          © 2026 UniVibe. Made for campus life.
        </div>
      </footer>

      {/* EVENT PREVIEW MODAL */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#101D3A]/75 p-4 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative my-auto w-full max-w-xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-[#101D3A] shadow-lg transition hover:bg-[#FF6534] hover:text-white"
              aria-label="Close event preview"
            >
              ×
            </button>

            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-7 md:p-9">
              <span className="rounded-full bg-[#FFE4D9] px-4 py-2 text-[10px] font-extrabold uppercase tracking-wider text-[#FF6534]">
                {selectedEvent.category}
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight">
                {selectedEvent.title}
              </h2>

              <div className="mt-5 space-y-3 text-sm font-medium text-[#101D3A]/65">
                <p>📅 {formatDate(selectedEvent.date)}</p>
                <p>◷ {selectedEvent.time}</p>
                <p>⌖ {selectedEvent.venue}</p>
              </div>

              <div className="my-6 border-t border-[#101D3A]/10" />

              <h3 className="font-extrabold">About this event</h3>
              <p className="mt-3 text-sm leading-7 text-[#101D3A]/65">
                {selectedEvent.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`/events/${selectedEvent.id}`}
                  className="flex-1 rounded-full bg-[#FF6534] px-6 py-4 text-center text-sm font-extrabold text-white transition hover:bg-[#e94f20]"
                >
                  View full details ↗
                </a>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="rounded-full border border-[#101D3A]/15 px-6 py-4 text-sm font-bold transition hover:bg-[#F5F7FA]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
