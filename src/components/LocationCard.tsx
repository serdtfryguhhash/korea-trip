import { MapPin } from "lucide-react";
import type { Location } from "@/data/itinerary";
import { getNaverMapUrl } from "@/data/itinerary";
import { StarRating } from "@/components/StarRating";

const categoryLabels: Record<Location["category"], string> = {
  food: "Food",
  culture: "Culture",
  thrift: "Thrift",
  nightlife: "Nightlife",
  coffee: "Coffee",
  nature: "Nature",
  hotel: "Hotel",
  transport: "Transport",
};

interface LocationCardProps {
  location: Location;
}

export function LocationCard({ location }: LocationCardProps) {
  const {
    name,
    nameKr,
    rating,
    category,
    description,
    price,
    tips,
    subLocations,
  } = location;

  return (
    <div
      className="glass glass-hover rounded-xl p-5 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg font-semibold text-stone-100">
            {name}
          </h3>
          {nameKr && (
            <p className="text-sm text-stone-500 mt-0.5">{nameKr}</p>
          )}
        </div>

        <span
          className={`badge-${category} inline-flex items-center self-start px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap`}
        >
          {categoryLabels[category]}
        </span>
      </div>

      {/* Rating */}
      {rating !== undefined && (
        <div className="mt-2">
          <StarRating rating={rating} />
        </div>
      )}

      {/* Description */}
      <p className="text-sm text-stone-400 leading-relaxed mt-3">
        {description}
      </p>

      {/* Price */}
      {price && (
        <p className="text-sm text-amber-400/80 font-medium mt-2">{price}</p>
      )}

      {/* Tips */}
      {tips && tips.length > 0 && (
        <ul className="mt-3 space-y-1">
          {tips.map((tip, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs text-stone-500"
            >
              <span className="text-amber-500/60 mt-0.5 shrink-0">&#x2022;</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Sub-locations */}
      {subLocations && subLocations.length > 0 && (
        <div className="mt-4 border-t border-stone-800 pt-3">
          <p className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-2">
            Spots to hit
          </p>
          <div className="space-y-2.5">
            {subLocations.map((sub, i) => (
              <div
                key={i}
                className="pl-3 border-l-2 border-amber-500/20"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-stone-300">
                      {sub.name}
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">
                      {sub.description}
                    </p>
                  </div>
                  {sub.price && (
                    <span className="text-xs text-amber-400/70 whitespace-nowrap shrink-0">
                      {sub.price}
                    </span>
                  )}
                </div>
                {sub.rating !== undefined && (
                  <div className="mt-1">
                    <StarRating rating={sub.rating} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Naver Map button */}
      <a
        href={getNaverMapUrl(name)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-medium hover:bg-amber-500/20 transition-colors duration-200"
      >
        <MapPin size={13} />
        Open in Naver Map
      </a>
    </div>
  );
}
