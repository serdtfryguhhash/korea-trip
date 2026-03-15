import { busan } from "@/data/itinerary";
import { CityHero } from "@/components/CityHero";
import { HotelCard } from "@/components/HotelCard";
import { DaySection } from "@/components/DaySection";
import { Plane, CheckCircle2 } from "lucide-react";

export default function BusanPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* ── City Hero ────────────────────────────────────────── */}
      <CityHero
        city={busan.city}
        cityKr={busan.cityKr}
        dates={busan.dates}
        description="South Korea's coastal jewel. Busan pairs dramatic seaside cliffs with bustling fish markets, pastel-painted hillside villages, and golden beaches perfect for sunset chimaek: fried chicken and beer by the waves."
      />

      {/* ── Hotel ────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <HotelCard
          name={busan.hotel}
          checkIn={busan.checkIn}
          checkOut={busan.checkOut}
          rating={busan.hotelRating}
        />
      </section>

      {/* ── Day Sections ─────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6">
        {busan.days.map((day) => (
          <DaySection
            key={day.day}
            day={day.day}
            date={day.date}
            title={day.title}
            locations={day.locations}
          />
        ))}
      </section>

      {/* ── End of Trip ──────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-16 pb-24">
        <div className="glass rounded-2xl p-10 text-center gold-glow">
          <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-gold-400" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold gold-text mb-3">
            End of Trip
          </h2>
          <p className="text-stone-400 text-lg mb-8 max-w-lg mx-auto">
            Five days, two incredible cities, and a lifetime of memories across South Korea.
          </p>

          <div className="glass rounded-xl p-6 inline-flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
              <Plane className="w-5 h-5 text-gold-400" />
            </div>
            <div className="text-left">
              <p className="text-stone-500 text-xs uppercase tracking-wider">Departure</p>
              <p className="text-stone-200 font-display font-semibold">
                March 20 · Gimhae International Airport (PUS)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-stone-500 text-sm mt-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400/60" />
              Food markets explored
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400/60" />
              Palaces &amp; temples visited
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400/60" />
              Beaches walked
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400/60" />
              Coffee savored
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
