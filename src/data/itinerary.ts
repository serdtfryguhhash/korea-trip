export type Category = "food" | "culture" | "thrift" | "nightlife" | "coffee" | "nature" | "hotel" | "transport";

export interface Location {
  name: string;
  nameKr?: string;
  rating?: number;
  category: Category;
  description: string;
  price?: string;
  tips?: string[];
  subLocations?: Omit<Location, "subLocations" | "category">[];
}

export interface DayItinerary {
  day: number;
  date: string;
  title: string;
  locations: Location[];
}

export interface CityData {
  city: string;
  cityKr: string;
  dates: string;
  hotel: string;
  hotelRating?: number;
  checkIn: string;
  checkOut: string;
  days: DayItinerary[];
  extras?: {
    title: string;
    locations: Location[];
  }[];
}

export function getNaverMapUrl(name: string): string {
  return `https://map.naver.com/v5/search/${encodeURIComponent(name)}`;
}

// ─── SEOUL ──────────────────────────────────────────────────────────────────

export const seoul: CityData = {
  city: "Seoul",
  cityKr: "서울",
  dates: "March 15–18",
  hotel: "Courtyard Marriott Namdaemun",
  hotelRating: 4.3,
  checkIn: "Mar 15",
  checkOut: "Mar 18",
  days: [
    {
      day: 1,
      date: "March 15",
      title: "Arrival & Namdaemun",
      locations: [
        {
          name: "Namdaemun Market",
          nameKr: "남대문시장",
          rating: 4.2,
          category: "food",
          description: "One of Korea's oldest and largest markets. Hit Food Alley for chicken skewers, sundae (blood sausage), and jokbal (pig's feet).",
          price: "₩5,000–10,000",
          tips: ["Food Alley is in the back streets", "Cash preferred at smaller stalls"],
        },
        {
          name: "Myeongdong Shopping Street",
          nameKr: "명동거리",
          rating: 4.4,
          category: "culture",
          description: "Seoul's premier shopping district. Evening street food, skincare flagship stores from Innisfree, Laneige, and Olive Young.",
          tips: ["Best visited after 5pm when food stalls open", "Great for skincare shopping"],
        },
        {
          name: "Myeongdong Night Market",
          nameKr: "명동야시장",
          rating: 4.4,
          category: "food",
          description: "Opens 5pm daily — cash only. Famous for egg bread, tornado potato, corn dogs, and lobster tails.",
          price: "₩3,000–8,000",
          tips: ["Cash only at most stalls", "Arrives early for shorter lines"],
        },
        {
          name: "Myeongdong Kyoja",
          nameKr: "명동교자",
          rating: 4.2,
          category: "food",
          description: "Michelin-recognized since 1966. Famous for kalguksu (knife-cut noodle soup) and handmade dumplings.",
          price: "~₩10,000/person",
          tips: ["Queue moves fast", "Only serves 4 menu items — all excellent"],
        },
        {
          name: "Myeongdong Joomak",
          nameKr: "명동주막",
          rating: 4.8,
          category: "food",
          description: "Great bibimbap spot with English-speaking staff. Cozy atmosphere, perfect for a first-night dinner.",
          price: "₩8,000–15,000",
        },
      ],
    },
    {
      day: 2,
      date: "March 16",
      title: "Palaces + Culture + Thrifting",
      locations: [
        {
          name: "Cafe Onion Anguk",
          nameKr: "카페 어니언 안국",
          rating: 4.5,
          category: "coffee",
          description: "Stunning hanok-style cafe in a renovated traditional Korean house. Famous for Pandoro pastry. Opens 7am weekdays.",
          price: "₩6,000–9,000",
          tips: ["Opens 7am weekdays — go early to avoid crowds", "Try the Pandoro pastry"],
        },
        {
          name: "Bukchon Hanok Village",
          nameKr: "북촌한옥마을",
          rating: 4.5,
          category: "culture",
          description: "600-year-old traditional village with beautifully preserved hanok houses. Open 10am–5pm only — this is a residential area, be respectful and quiet.",
          tips: ["Open 10am–5pm only", "Residential area — be quiet", "Best photo spots on the 8 walking paths"],
        },
        {
          name: "Gyeongbokgung Palace",
          nameKr: "경복궁",
          rating: 4.4,
          category: "culture",
          description: "Korea's grandest royal palace (1395). ₩3,000 entry, free if wearing hanbok. Don't miss the Changing of the Guard ceremony at 10am and 2pm.",
          price: "₩3,000 (free w/ hanbok)",
          tips: ["Closed Tuesdays", "Changing of Guard: 10am & 2pm", "Rent hanbok nearby for free entry"],
        },
        {
          name: "Insadong",
          nameKr: "인사동",
          rating: 4.3,
          category: "culture",
          description: "Traditional art and craft district. Visit Ssamziegil complex for indie shops, DIY craft workshops, and rooftop views.",
          tips: ["Check out Ssamziegil complex", "DIY craft workshops available"],
        },
        {
          name: "Ikseon-dong",
          nameKr: "익선동",
          rating: 4.6,
          category: "food",
          description: "Seoul's trendiest hanok village — narrow alleys filled with hidden cafes, bakeries, and restaurants in renovated traditional houses.",
          subLocations: [
            { name: "Cheongsudang Bakery", description: "Enchanted forest entrance, famous fromage cakes", price: "₩6,000–8,000" },
            { name: "Nakwon Station Cafe", description: "Old train station theme, peanut cream latte", price: "₩5,000–7,000" },
            { name: "Jayeondo Sogeumppang", description: "Famous salt bread, fresh batches 6x daily — line moves fast", price: "₩3,000" },
            { name: "Ikseon-Goro", description: "Purpleberry ice cream — Instagram-worthy", price: "₩3,000" },
            { name: "Jongsamyook", description: "Outdoor charcoal K-BBQ in a hanok courtyard", price: "₩15,000–25,000" },
          ],
        },
        {
          name: "Tongin Market",
          nameKr: "통인시장",
          rating: 4.3,
          category: "food",
          description: "Near Gyeongbokgung. Famous for the Dosirak Cafe lunchbox experience — buy tokens and fill your tray from different stalls.",
          price: "₩5,000 for 10 tokens",
          tips: ["Get the Dosirak (lunchbox) experience", "Buy tokens at the entrance"],
        },
        {
          name: "Hongdae Vintage B1",
          nameKr: "홍대빈티지B1",
          rating: 4.2,
          category: "thrift",
          description: "Underground vintage paradise. Polo pullovers from ₩9,000, Burberry scarves from ₩15,000.",
          price: "₩5,000–20,000",
        },
        {
          name: "Root Hongdae",
          nameKr: "루트홍대",
          rating: 4.0,
          category: "thrift",
          description: "Underground vintage store. Great for denim and jackets starting from ₩5,000.",
          price: "From ₩5,000",
        },
        {
          name: "Wow! Vintage",
          rating: 4.1,
          category: "thrift",
          description: "Carhartt, varsity jackets, and workwear finds. Check the ₩5,000 discount rack near the back.",
          price: "From ₩5,000",
          tips: ["₩5,000 discount rack in the back"],
        },
      ],
    },
    {
      day: 3,
      date: "March 17",
      title: "Markets + Dongmyo + Nightlife",
      locations: [
        {
          name: "Gwangjang Market",
          nameKr: "광장시장",
          rating: 4.3,
          category: "food",
          description: "Featured on Netflix 'Street Food.' Korea's first permanent market. Famous for bindaetteok (mung bean pancakes) and mayak kimbap (addictive mini rolls).",
          price: "₩6,000–8,000 meals",
          subLocations: [
            { name: "Buchon Yukhoe", description: "Michelin Guide listed. Yukhoe bibimbap (raw beef) since 1965 — a must-try.", price: "₩12,000–15,000" },
          ],
          tips: ["Featured on Netflix 'Street Food'", "Must try: bindaetteok, mayak kimbap"],
        },
        {
          name: "Dongmyo Flea Market",
          nameKr: "동묘벼룩시장",
          rating: 4.0,
          category: "thrift",
          description: "The real deal — dig through piles of vintage clothing from ₩1,000. Not curated, raw thrift energy.",
          price: "From ₩1,000",
          tips: ["Clothes from ₩1,000", "Dig-through-piles thrifting — bring patience"],
        },
        {
          name: "Seongsu-dong",
          nameKr: "성수동",
          rating: 4.4,
          category: "culture",
          description: "The 'Brooklyn of Seoul.' Converted warehouses, pop-up shops, Olive Young N flagship, Daelim Changgo warehouse cafe, Standard Bread (French toast).",
          subLocations: [
            { name: "Daelim Changgo", description: "Warehouse-converted cafe, industrial aesthetic" },
            { name: "Standard Bread", description: "Famous for French toast — worth the wait" },
            { name: "Olive Young N Flagship", description: "K-beauty mega store, exclusive products" },
          ],
        },
        {
          name: "Itaewon Nightlife",
          nameKr: "이태원",
          category: "nightlife",
          description: "International district with the best bar scene in Seoul.",
          subLocations: [
            { name: "The Booth", rating: 4.5, description: "Best craft beer bar in Seoul" },
            { name: "Jack's Bar", description: "Arcade games + beers from ₩5,000", price: "₩5,000+" },
            { name: "Fountain", description: "Biggest club in the area — weekend energy" },
          ],
        },
        {
          name: "Hongdae Nightlife",
          nameKr: "홍대",
          category: "nightlife",
          description: "University district with the most vibrant nightlife in Seoul. Street performers, live music, clubs.",
          subLocations: [
            { name: "Thursday Party", description: "Famous club night — big international crowd" },
            { name: "Corner Pub", description: "Chill vibes, good for starting the night" },
            { name: "Mike's Cabin", description: "Latin music, dancing, late night" },
          ],
        },
      ],
    },
  ],
  extras: [
    {
      title: "Coffee Shops Near Hotel",
      locations: [
        {
          name: "Koffee Sniffer",
          rating: 4.5,
          category: "coffee",
          description: "Third-wave coffee with vinyl records and jazz. Best atmosphere near Namdaemun. Try the custard latte.",
          tips: ["245 reviews", "Try the custard latte"],
        },
        {
          name: "Downt Espresso",
          rating: 4.8,
          category: "coffee",
          description: "Best flat white in the area. Basque cheesecake is incredible. English-speaking owner.",
          tips: ["83 reviews", "English-speaking owner"],
        },
        {
          name: "VON COFFEE",
          rating: 4.9,
          category: "coffee",
          description: "Hidden inside Namdaemun Market, 2-min walk from hotel. Free snack with every drink.",
          tips: ["74 reviews", "Free snack included", "2-min walk from hotel"],
        },
        {
          name: "Draw Espresso Bar",
          rating: 4.6,
          category: "coffee",
          description: "Unique soave & pieno espresso styles. Coffee nerd paradise.",
          tips: ["88 reviews", "Try the unique espresso styles"],
        },
        {
          name: "Coffee Libre",
          rating: 4.5,
          category: "coffee",
          description: "Under Myeongdong Cathedral. One of Korea's best specialty roasters.",
          tips: ["391 reviews", "Specialty roaster"],
        },
        {
          name: "BRICKSAND SEOUL",
          rating: 4.9,
          category: "coffee",
          description: "Famous financier pastries. Near Seoul Station — great for grab-and-go.",
          tips: ["1,439 reviews", "Must try the financier pastries"],
        },
      ],
    },
    {
      title: "Other Seoul Must-Sees",
      locations: [
        {
          name: "N Seoul Tower / Namsan Park",
          nameKr: "남산서울타워",
          rating: 4.3,
          category: "nature",
          description: "Iconic tower with panoramic city views. Cable car ₩15,000 round trip, observatory ₩26,000.",
          price: "₩15,000 cable car / ₩26,000 observatory",
        },
        {
          name: "Cheonggyecheon Stream",
          nameKr: "청계천",
          rating: 4.4,
          category: "nature",
          description: "Free evening walk along the illuminated urban stream. Beautiful at night.",
          price: "Free",
        },
        {
          name: "Seoul Forest Park",
          nameKr: "서울숲",
          rating: 4.5,
          category: "nature",
          description: "Cherry blossoms in spring, ginkgo trees in autumn. Has a deer feeding area.",
          price: "Free",
        },
        {
          name: "Yeouido Hangang Park",
          nameKr: "여의도한강공원",
          rating: 4.4,
          category: "nature",
          description: "Han River picnic spot. Famous 7-Eleven ramen vending machines where you cook instant noodles riverside.",
          price: "Free (+ ramen ₩2,000)",
        },
        {
          name: "COEX Mall / Starfield Library",
          nameKr: "코엑스몰",
          rating: 4.3,
          category: "culture",
          description: "Giant underground mall at Samseong Station. The Starfield Library with floor-to-ceiling bookshelves is stunning.",
          price: "Free entry",
        },
        {
          name: "Eunpyeong Hanok Village",
          nameKr: "은평한옥마을",
          rating: 4.2,
          category: "culture",
          description: "Hidden gem with mountain backdrop. Much less crowded than Bukchon. Visit Cafe 1 In 1 Jan.",
        },
      ],
    },
  ],
};

// ─── BUSAN ──────────────────────────────────────────────────────────────────

export const busan: CityData = {
  city: "Busan",
  cityKr: "부산",
  dates: "March 18–20",
  hotel: "Lotte Hotel Busan",
  hotelRating: 4.5,
  checkIn: "Mar 18",
  checkOut: "Mar 20",
  days: [
    {
      day: 4,
      date: "March 18",
      title: "Nampo-dong Food Crawl",
      locations: [
        {
          name: "Jagalchi Market",
          nameKr: "자갈치시장",
          rating: 4.3,
          category: "food",
          description: "Korea's largest seafood market. Pick your fish on the ground floor, take it upstairs to be cooked on the spot. The freshest sashimi you'll ever have.",
          price: "₩15,000–30,000",
          tips: ["Pick fish downstairs, cook upstairs", "Negotiate prices", "Best for lunch"],
        },
        {
          name: "BIFF Square",
          nameKr: "BIFF광장",
          rating: 4.2,
          category: "food",
          description: "Named after the Busan International Film Festival. Famous for ssiat hotteok — seed-filled sweet pancakes with a crunchy, gooey center.",
          price: "₩2,000–3,000",
          tips: ["Must try ssiat hotteok (seed-filled pancakes)", "Lines can be long — worth it"],
        },
        {
          name: "Gukje Market",
          nameKr: "국제시장",
          rating: 4.2,
          category: "food",
          description: "Traditional market with cheap noodles, street food, and souvenirs. Less touristy than Jagalchi.",
          price: "₩5,000–10,000",
        },
        {
          name: "Bupyeong Kkangtong Market",
          nameKr: "부평깡통시장",
          rating: 4.1,
          category: "food",
          description: "Busan's best night food market. Fried chicken bites, spicy rice cake skewers, and tteokbokki in every form imaginable.",
          price: "₩3,000–8,000",
          tips: ["Best at night", "Try the fried chicken bites"],
        },
      ],
    },
    {
      day: 5,
      date: "March 19",
      title: "Beaches + Culture",
      locations: [
        {
          name: "Gamcheon Culture Village",
          nameKr: "감천문화마을",
          rating: 4.4,
          category: "culture",
          description: "Colorful hillside village known as the 'Korean Santorini.' Pastel-painted houses stacked up a mountainside with murals, sculptures, and tiny galleries.",
          price: "Free",
          tips: ["Go in the morning for best light", "Wear comfortable shoes — lots of stairs"],
        },
        {
          name: "Haeundae Beach",
          nameKr: "해운대해수욕장",
          rating: 4.5,
          category: "nature",
          description: "Busan's most iconic beach. Beautiful coastline walk, seafood restaurants lining the strip, and the Haeundae Blueline Park sky capsule nearby.",
          price: "Free",
        },
        {
          name: "Haedong Yonggungsa Temple",
          nameKr: "해동용궁사",
          rating: 4.6,
          category: "culture",
          description: "Spectacular seaside cliff temple built in 1376. One of the only temples in Korea perched right on the ocean. Breathtaking at sunrise.",
          price: "Free",
          tips: ["Go early morning for fewer crowds", "Built on the cliff edge — incredible views"],
        },
        {
          name: "Gwangalli Beach",
          nameKr: "광안리해수욕장",
          rating: 4.4,
          category: "nature",
          description: "Best night views in Busan — the illuminated Gwangan Bridge glowing across the water. Perfect for chimaek: fried chicken + beer on the beach.",
          price: "Free (+ chimaek ₩15,000–20,000)",
          tips: ["Best at night for bridge lights", "Order chimaek (chicken + beer) on the beach"],
        },
      ],
    },
  ],
};

export const allCities: CityData[] = [seoul, busan];

export const tripInfo = {
  title: "South Korea",
  subtitle: "Seoul & Busan",
  dates: "March 15–20, 2026",
  totalDays: 5,
  totalLocations: 42,
  cities: ["Seoul", "Busan"],
};
