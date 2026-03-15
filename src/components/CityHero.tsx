"use client";

import { motion } from "framer-motion";

interface CityHeroProps {
  city: string;
  cityKr: string;
  dates: string;
  description: string;
}

export function CityHero({ city, cityKr, dates, description }: CityHeroProps) {
  return (
    <section className="relative hero-mesh pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold gold-text">
            {city}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="text-stone-500 text-lg sm:text-xl mt-2 font-medium"
        >
          {cityKr}
        </motion.p>

        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className="inline-block mt-4 px-4 py-1.5 rounded-full text-sm font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20"
        >
          {dates}
        </motion.span>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-stone-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mt-6"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
