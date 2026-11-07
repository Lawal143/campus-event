
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

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
    title: "Campus Tech Summit",
    category: "Tech",
    date: "2026-11-14",
    time: "10:00 AM",
    venue: "University Auditorium",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900",
    description:
      "A gathering of tech enthusiasts, developers and innovators. Discover new ideas, learn from industry speakers and connect with other students interested in technology.",
  },
  {
    id: 2,
    title: "Inter-Faculty Football Tournament",
    category: "Sports",
    date: "2026-11-15",
    time: "3:00 PM",
    venue: "University Sports Field",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=900",
    description:
      "Get ready for an exciting football competition as faculties go head-to-head for the campus championship.",
  },
  {
    id: 3,
    title: "MSSN Sisters' Gathering",
    category: "MSSN Activities",
    date: "2026-11-18",
    time: "2:00 PM",
    venue: "MSSN Centre",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=900",
    description:
      "An opportunity for Muslim sisters to connect, learn and grow together through meaningful conversations and activities.",
  },
  {
    id: 4,
    title: "Introduction to AI Workshop",
    category: "Tech",
    date: "2026-11-21",
    time: "11:00 AM",
    venue: "Computer Science Laboratory",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900",
    description:
      "Explore the basics of artificial intelligence, discover practical applications and learn how AI is shaping the future of technology.",
  },
  {
    id: 5,
    title: "MSSN Annual Lecture",
    category: "MSSN Activities",
    date: "2026-11-25",
    time: "10:00 AM",
    venue: "Main Lecture Theatre",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900",
    description:
      "A special gathering featuring insightful talks, reminders and discussions designed to encourage learning and personal development.",
  },
  {
    id: 6,
    title: "Basketball Showdown",
    category: "Sports",
    date: "2026-11-28",
    time: "4:00 PM",
    venue: "University Basketball Court",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=900",
    description:
      "Experience the energy of campus basketball as student teams compete in an exciting sporting event.",
  },
  {
    id: 7,
    title: "Student Developers Meetup",
    category: "Tech",
    date: "2026-12-03",
    time: "12:00 PM",
    venue: "Innovation Hub",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
    description:
      "Meet fellow student developers, share ideas, discuss projects and build connections with people passionate about technology.",
  },
  {
    id: 8,
    title: "MSSN General Gathering",
    category: "MSSN Activities",
    date: "2026-12-05",
    time: "1:00 PM",
    venue: "University Central Mosque",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=900",
    description:
      "Come together with fellow Muslim students for a gathering focused on community, learning and connection.",
  },
];

const categories = ["All", "Tech", "MSSN Activities", "Sports"];

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function EventsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("soonest");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = useMemo(() => {
    return events
      .filter((event) => {
        const matchesSearch = event.title
          .toLowerCase()
          .includes(search.toLowerCase());

        const matchesCategory =
          activeCategory === "All" || event.category === activeCategory;

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        const comparison = a.date.localeCompare(b.date);
        return sortOrder === "soonest" ? comparison : -comparison;
      });
  }, [search, activeCategory, sortOrder]);

  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#101D3A]">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-16">
        <Link href="/" className="text-2xl font-black tracking-tight">
          Uni<span className="text-[#FF6534]">Vibe.</span>
        </Link>

        <div className="flex items-center gap-5 text-sm font-semibold md:gap-8">
          <Link href="/" className="hover:text-[#FF6534]">Home</Link>
          <Link href="/events" className="text-[#FF6534]">Explore Events</Link>
          <Link href="/my-events" className="hover:text-[#FF6534]">My Events</Link>
          <Link href="/about" className="hover:text-[#FF6534]">About</Link>
        </div>
      </nav>

      {/* Page introduction */}
      <section className="px-6 pb-12 pt-12 md:px-16 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#FF6534]">
            Discover campus life
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="max-w-3xl text-5xl font-black leading-tight md:text-7xl">
                Find something worth{" "}
                <span className="text-[#FF6534]">showing up for.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                From tech experiences to sports and community activities,
                discover what's happening around campus.
              </p>
            </div>

            <div className="rounded-2xl bg-[#101D3A] px-7 py-5 text-white">
              <p className="text-3xl font-black">{events.length}</p>
              <p className="mt-1 text-sm text-slate-300">Events to explore</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and filters */}
      <section id="all-events" className="px-6 py-8 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
            <div className="flex flex-col gap-4 md:flex-row">
              <input
                type="text"
                placeholder="Search for an event..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-[#F5F7FA] px-5 py-4 outline-none transition focus:border-[#FF6534]"
              />

              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="rounded-xl border border-slate-200 bg-[#F5F7FA] px-5 py-4 outline-none focus:border-[#FF6534]"
              >
                <option value="soonest">Date: Soonest first</option>
                <option value="latest">Date: Latest first</option>
              </select>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                    activeCategory === category
                      ? "bg-[#101D3A] text-white"
                      : "bg-[#F5F7FA] text-slate-600 hover:bg-[#91DDF5]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event cards */}
      <section className="px-6 pb-24 pt-8 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-black md:text-3xl">
              {activeCategory === "All" ? "All Events" : activeCategory}
            </h2>

            <p className="text-sm font-medium text-slate-500">
              {filteredEvents.length} results
            </p>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => (
                <button
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#101D3A]">
                      {event.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="text-sm font-bold text-[#FF6534]">
                      {formatDate(event.date)} · {event.time}
                    </p>

                    <h3 className="mt-3 text-xl font-extrabold transition group-hover:text-[#FF6534]">
                      {event.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-500">
                      📍 {event.venue}
                    </p>

                    <p className="mt-5 text-sm font-bold text-[#101D3A]">
                      View event <span className="text-[#FF6534]">→</span>
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
              <div className="text-5xl">🔎</div>
              <h3 className="mt-5 text-2xl font-black">
                No events found
              </h3>
              <p className="mt-3 text-slate-500">
                Try another search or choose a different category.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-6 rounded-full bg-[#FF6534] px-6 py-3 font-bold text-white"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Event preview modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#101D3A]/70 p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="h-full w-full object-cover"
              />

              <button
                onClick={() => setSelectedEvent(null)}
                aria-label="Close preview"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold shadow"
              >
                ×
              </button>
            </div>

            <div className="p-7">
              <span className="rounded-full bg-[#91DDF5] px-4 py-2 text-xs font-bold">
                {selectedEvent.category}
              </span>

              <h2 className="mt-5 text-3xl font-black">
                {selectedEvent.title}
              </h2>

              <div className="mt-5 space-y-2 text-sm text-slate-600">
                <p>📅 {formatDate(selectedEvent.date)}</p>
                <p>🕒 {selectedEvent.time}</p>
                <p>📍 {selectedEvent.venue}</p>
              </div>

              <p className="mt-6 leading-7 text-slate-600">
                {selectedEvent.description}
              </p>

              <Link
                href={`/events/${selectedEvent.id}`}
                className="mt-7 block rounded-full bg-[#FF6534] px-6 py-4 text-center font-bold text-white transition hover:bg-[#e94e20]"
              >
                View Full Details →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#101D3A] px-6 py-8 text-center text-sm text-slate-300">
        <p>© {new Date().getFullYear()} UniVibe. Made for campus life.</p>
      </footer>
    </main>
  );
}
