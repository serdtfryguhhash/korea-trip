import Link from "next/link";
import { seoul } from "@/data/itinerary";
import { CityHero } from "@/components/CityHero";
import { HotelCard } from "@/components/HotelCard";
import { DaySection } from "@/components/DaySection";
import { LocationCard } from "@/components/LocationCard";
import { Train, ArrowRight } from "lucide-react";

export default function SeoulPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* ── City Hero ────────────────────────────────────────── */}
      <CityHero
        city={seoul.city}
        cityKr={seoul.cityKr}
        dates={seoul.dates}
        description="A city where 600-year-old palaces sit beside neon-lit streets. Seoul is a masterclass in contrasts — ancient hanok villages, cutting-edge cafe culture, underground vintage markets, and some of the best street food on the planet."
      />

      {/* ── Hotel ────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <HotelCard
          name={seoul.hotel}
          checkIn={seoul.checkIn}
          checkOut={seoul.checkOut}
          rating={seoul.hotelRating}
        />
      </section>

      {/* ── Day Sections ─────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6">
        {seoul.days.map((day) => (
          <DaySection
            key={day.day}
            day={day.day}
            date={day.date}
            title={day.title}
            locations={day.locations}
            isToday={day.day === 1}
          />
        ))}
      </section>

      {/* ── Extras Sections ──────────────────────────────────── */}
      {seoul.extras?.map((section) => (
        <section key={section.title} className="max-w-5xl mx-auto px-6 py-12">
          <div className="mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-100 mb-2">
              {section.title}
            </h2>
            <div className="w-12 h-0.5 bg-gold-500/40 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.locations.map((location) => (
              <LocationCard
                key={location.name}
                location={location}
              />
            ))}
          </div>
        </section>
      ))}

      {/* ── KTX Transfer Card ────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="glass rounded-2xl p-8 gold-glow">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
              <Train className="w-6 h-6 text-gold-400" />
            </div>
            <div>
              <p className="text-stone-400 text-sm">Next Stop</p>
              <p className="text-stone-100 font-display text-xl font-semibold">
                Seoul → Busan
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-6">
            <div>
              <p className="text-stone-500 text-xs uppercase tracking-wider mb-1">Transport</p>
              <p className="text-stone-200 font-medium">KTX Bullet Train</p>
            </div>
            <div>
              <p className="text-stone-500 text-xs uppercase tracking-wider mb-1">Duration</p>
              <p className="text-stone-200 font-medium">~2.5 hours</p>
            </div>
            <div>
              <p className="text-stone-500 text-xs uppercase tracking-wider mb-1">Price</p>
              <p className="text-stone-200 font-medium">₩59,800</p>
            </div>
          </div>

          <Link
            href="/busan"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-500/10 text-gold-400 font-medium text-sm hover:bg-gold-500/20 transition-colors"
          >
            Continue to Busan
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
