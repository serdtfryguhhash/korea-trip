import Link from "next/link";
import { tripInfo, seoul, busan } from "@/data/itinerary";
import {
  Plane,
  Calendar,
  MapPin,
  Navigation,
  CreditCard,
  Banknote,
  Receipt,
  Train,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const cities = [
    {
      data: seoul,
      href: "/seoul",
      description:
        "Ancient palaces, street food markets, vintage thrifting, and electric nightlife in South Korea's capital.",
      emoji: "🏯",
    },
    {
      data: busan,
      href: "/busan",
      description:
        "Coastal temples, colorful villages, world-class seafood, and golden beaches on the southeastern shore.",
      emoji: "🌊",
    },
  ];

  const budgetTips = [
    {
      icon: CreditCard,
      title: "T-money Card",
      description:
        "Load a T-money card at any convenience store for seamless transit across subway, bus, and taxis.",
    },
    {
      icon: Banknote,
      title: "Cash for Markets",
      description:
        "Most street markets and small vendors are cash-only. Withdraw from ATMs at convenience stores.",
    },
    {
      icon: Receipt,
      title: "Tax Refund",
      description:
        "Purchases over ₩30,000 at participating stores qualify for tax refund at the airport.",
    },
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* ── Hero Section ─────────────────────────────────────── */}
      <section className="hero-mesh noise-overlay relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Floating Orbs */}
        <div className="orb orb-gold w-72 h-72 top-1/4 left-[10%] animate-float" />
        <div className="orb orb-amber w-96 h-96 top-[15%] right-[5%] animate-float-delayed" />
        <div className="orb orb-warm w-64 h-64 bottom-[20%] left-[30%] animate-float" />
        <div className="orb orb-gold w-48 h-48 bottom-[10%] right-[25%] animate-float-delayed" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 sm:py-32 text-center">
          {/* Korean text decoration */}
          <p className="text-stone-700 font-display text-6xl sm:text-8xl font-bold mb-4 select-none opacity-30">
            한국
          </p>

          {/* Overline */}
          <p className="text-gold-500 font-body text-sm tracking-[0.3em] uppercase mb-6">
            <Sparkles className="w-4 h-4 inline mr-2 -mt-0.5" />
            Travel Itinerary
            <Sparkles className="w-4 h-4 inline ml-2 -mt-0.5" />
          </p>

          {/* Main heading */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold gold-text mb-4 leading-tight">
            South Korea
          </h1>

          {/* Subtitle */}
          <p className="font-display text-2xl sm:text-3xl text-stone-300 mb-2">
            Seoul &amp; Busan
          </p>

          {/* Date */}
          <p className="text-stone-500 font-body text-lg mb-12">
            {tripInfo.dates}
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-8 sm:gap-16 mb-8">
            {[
              { value: `${tripInfo.totalDays}`, label: "Days" },
              { value: `${tripInfo.cities.length}`, label: "Cities" },
              { value: `${tripInfo.totalLocations}+`, label: "Locations" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl sm:text-5xl font-bold text-gold-400">
                  {stat.value}
                </p>
                <p className="text-stone-500 text-xs mt-1 uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Today indicator */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-gold-500/20">
            <span className="w-2 h-2 rounded-full bg-gold-400 today-pulse" />
            <span className="text-gold-400 text-sm font-medium">
              Today is March 15 — Day 1 in Seoul
            </span>
          </div>
        </div>
      </section>

      {/* ── Section Divider ─────────────────────────────────── */}
      <div className="section-divider my-4" />

      {/* ── Flight Info ──────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="glass gradient-border rounded-2xl p-6 flex items-center gap-4 gold-glow">
          <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
            <Plane className="w-6 h-6 text-gold-400" />
          </div>
          <div>
            <p className="text-stone-400 text-sm">Arrival</p>
            <p className="text-stone-100 font-display text-lg font-semibold">
              March 15 — ICN Incheon International Airport
            </p>
          </div>
        </div>
      </section>

      {/* ── City Cards ───────────────────────────────────────── */}
      <section className="relative max-w-5xl mx-auto px-6 py-12">
        {/* Background orb for section */}
        <div className="orb orb-gold w-80 h-80 -top-20 -right-20 opacity-50" />

        <h2 className="font-display text-3xl font-bold text-stone-100 mb-2 relative z-10">
          Your Cities
        </h2>
        <p className="text-stone-500 mb-10 relative z-10">
          Two cities, five days, one unforgettable trip.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 relative z-10">
          {cities.map(({ data, href, description, emoji }) => (
            <Link
              key={data.city}
              href={href}
              className="group glass glass-hover gradient-border rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Background emoji */}
              <span className="absolute -right-4 -top-4 text-8xl opacity-[0.04] select-none transition-transform duration-500 group-hover:scale-110 group-hover:opacity-[0.08]">
                {emoji}
              </span>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-gold-500 text-sm font-medium mb-1">
                      {data.dates}
                    </p>
                    <h3 className="font-display text-3xl font-bold text-stone-100 group-hover:text-gold-400 transition-colors">
                      {data.city}
                    </h3>
                    <p className="text-stone-700 font-display text-5xl font-bold -mt-1">
                      {data.cityKr}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center mt-1 group-hover:bg-gold-500/20 transition-colors">
                    <ArrowRight className="w-5 h-5 text-gold-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <p className="text-stone-400 text-sm leading-relaxed mb-6">
                  {description}
                </p>

                <div className="flex items-center gap-4 text-stone-500 text-xs">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {data.days.length} days
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {data.days.reduce((acc, d) => acc + d.locations.length, 0)}{" "}
                    locations
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5" />
                    {data.hotel}
                  </span>
                </div>

                {data.city === "Seoul" && (
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/15">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 today-pulse" />
                    Today
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Section Divider ─────────────────────────────────── */}
      <div className="section-divider my-4" />

      {/* ── Budget Tips ──────────────────────────────────────── */}
      <section className="relative max-w-5xl mx-auto px-6 py-12">
        <div className="orb orb-amber w-64 h-64 -bottom-10 -left-20 opacity-40" />

        <h2 className="font-display text-3xl font-bold text-stone-100 mb-2 relative z-10">
          Budget Tips
        </h2>
        <p className="text-stone-500 mb-10 relative z-10">
          Save money and travel smarter.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 relative z-10">
          {budgetTips.map((tip) => (
            <div
              key={tip.title}
              className="glass gradient-border rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4">
                <tip.icon className="w-5 h-5 text-gold-400" />
              </div>
              <h3 className="font-display text-lg font-semibold text-stone-100 mb-2">
                {tip.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── KTX Transfer Card ────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-12 pb-24">
        <div className="glass gradient-border rounded-2xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
            <Train className="w-6 h-6 text-gold-400" />
          </div>
          <div className="flex-1">
            <p className="text-stone-400 text-sm">Inter-city Transfer</p>
            <p className="text-stone-100 font-display text-lg font-semibold">
              Seoul → Busan via KTX
            </p>
            <p className="text-stone-500 text-sm">
              ~2.5 hours &middot; ₩59,800 &middot; Korea&apos;s bullet train
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t border-stone-800/50 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-stone-600 text-sm">
            Built for an unforgettable trip &middot; March 2026
          </p>
        </div>
      </footer>
    </main>
  );
}
