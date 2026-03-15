import type { Location } from "@/data/itinerary";
import { LocationCard } from "@/components/LocationCard";

interface DaySectionProps {
  day: number;
  date: string;
  title: string;
  locations: Location[];
  isToday?: boolean;
}

export function DaySection({
  day,
  date,
  title,
  locations,
  isToday = false,
}: DaySectionProps) {
  return (
    <section className="relative">
      {/* Timeline line */}
      <div className="timeline-line hidden sm:block" />

      {/* Day header */}
      <div className="relative flex items-center gap-4 mb-8 sm:pl-12">
        {/* Timeline dot */}
        <div
          className={`hidden sm:flex absolute left-3 w-5 h-5 rounded-full border-2 items-center justify-center ${
            isToday
              ? "border-amber-400 bg-amber-400/20 today-pulse"
              : "border-stone-600 bg-stone-900"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              isToday ? "bg-amber-400" : "bg-stone-600"
            }`}
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-100">
            Day {day}
          </h2>
          <span className="text-sm text-stone-500 font-medium">{date}</span>
          {isToday && (
            <span className="today-pulse inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
              TODAY
            </span>
          )}
        </div>
      </div>

      {/* Day title */}
      <p className="text-stone-500 text-sm font-medium uppercase tracking-wider mb-6 sm:pl-12">
        {title}
      </p>

      {/* Location cards */}
      <div className="grid gap-4 sm:pl-12">
        {locations.map((location) => (
          <LocationCard
            key={location.name}
            location={location}
          />
        ))}
      </div>
    </section>
  );
}
