import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
}

export function StarRating({ rating }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            size={14}
            className="text-amber-400 fill-amber-400"
          />
        ))}

        {/* Half star */}
        {hasHalf && (
          <div className="relative">
            <Star size={14} className="text-stone-600" />
            <div className="absolute inset-0 overflow-hidden w-[7px]">
              <Star size={14} className="text-amber-400 fill-amber-400" />
            </div>
          </div>
        )}

        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star key={`empty-${i}`} size={14} className="text-stone-600" />
        ))}
      </div>

      <span className="text-xs font-medium text-stone-400">{rating}</span>
    </div>
  );
}
