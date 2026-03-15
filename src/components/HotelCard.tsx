import { Building2, MapPin } from "lucide-react";
import { getNaverMapUrl } from "@/data/itinerary";
import { StarRating } from "@/components/StarRating";

interface HotelCardProps {
  name: string;
  checkIn: string;
  checkOut: string;
  rating?: number;
}

export function HotelCard({ name, checkIn, checkOut, rating }: HotelCardProps) {
  return (
    <div className="glass rounded-xl p-5 badge-hotel border">
      <div className="flex items-start gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 shrink-0">
          <Building2 size={20} className="text-blue-400" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg font-semibold text-stone-100">
            {name}
          </h3>

          {rating !== undefined && (
            <div className="mt-1">
              <StarRating rating={rating} />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-stone-400">
            <span>
              <span className="text-stone-500">Check-in:</span> {checkIn}
            </span>
            <span>
              <span className="text-stone-500">Check-out:</span> {checkOut}
            </span>
          </div>

          <a
            href={getNaverMapUrl(name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-medium hover:bg-amber-500/20 transition-colors duration-200"
          >
            <MapPin size={13} />
            Open in Naver Map
          </a>
        </div>
      </div>
    </div>
  );
}
