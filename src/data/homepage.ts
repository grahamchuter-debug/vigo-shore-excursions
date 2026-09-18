import type { ExperienceCard, FAQ, VisitorType } from "./types";

export const homepageTagline =
  "Gateway to Atlantic Galicia — harbour city, seafood capital, wild islands.";

export const homepageSubheading =
  "Walk historic Vigo independently, discover Galicia on a guided day, or — when schedule and season allow — look toward the Cíes Islands across the Ría.";

export const homepageDestinationLine =
  "Casco Vello · A Pedra oysters · Ría de Vigo · Cíes Islands · Santiago";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Vigo for the day on a cruise",
    shortLabel: "Port day",
    description:
      "Match your hours ashore to a city walk, a Santiago day, coastal Galicia or — carefully — island access when practical.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time in Galicia",
    shortLabel: "First visit",
    description:
      "Compare independent Vigo, organised Galicia excursions and Editor’s Choice Santiago before you choose.",
    href: "/compare/first-time-vigo-day",
    cta: "See first-time picks",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description:
      "Vigo is one of Spain’s easier Atlantic ports to enjoy on foot — waterfront, Casco Vello and seafood without a tour.",
    href: "/guides/explore-independently",
    cta: "Walk It Yourself",
  },
  {
    id: "planner",
    label: "I want help choosing my day",
    shortLabel: "Cruise planner",
    description:
      "Tell us your port times, interests, mobility and pace for a tailored Galicia plan from Vigo.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const coreSections: HomeSection[] = [
  {
    slug: "excursions",
    number: "01",
    title: "Shore excursions",
    description:
      "Carefully selected experiences across Santiago de Compostela, historic Vigo, e-bike discovery and private Old Town walks — designed around cruise timing.",
    href: "/shore-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "guides",
    number: "02",
    title: "Port & Galicia guides",
    description:
      "Honest advice on walking from the cruise terminal, Casco Vello, seafood, the Cíes Islands and when an organised tour genuinely helps.",
    href: "/guides",
    cta: "Read the guides",
  },
  {
    slug: "schedules",
    number: "03",
    title: "Cruise ship schedule",
    description:
      "Ship call data for Vigo will appear here once confirmed schedules are available for publication.",
    href: "/ship-schedules",
    cta: "View schedules",
  },
];

export const spiritOfPlace = {
  title: "Europe’s largest fishing port. Atlantic Galicia revealed.",
  body: [
    "Vigo opens onto the Ría de Vigo — a working Atlantic harbour where fishing boats still set the city’s rhythm, stone lanes climb through Casco Vello, and Galician seafood is not a tourist flourish but everyday life. Beyond the waterfront, the dramatic coastline and, on clear days, the Cíes Islands form one of Spain’s most underrated cruise horizons.",
    "Unlike many Spanish cruise ports that lean on castles and coach circuits alone, Vigo introduces visitors to Galicia’s rugged Atlantic character: oyster stalls at A Pedra, harbour light on the marina, and the possibility of Santiago de Compostela when you want the region’s spiritual capital. We write like a premium travel magazine for cruise passengers — fewer recommendations, clearer trade-offs, and always a plan that protects your return to the ship.",
  ],
};

export const honestAdvicePoints = [
  {
    title: "The city rewards walking",
    body: "Vigo is an easy city to explore independently — waterfront promenade, Praza da Compostela, Casco Vello and oysters at A Pedra make a genuinely enjoyable day without a tour.",
  },
  {
    title: "Galicia beyond the harbour needs a plan",
    body: "If your priority is Santiago de Compostela or wider regional highlights, organised excursions provide the transfer timing and context independent taxis rarely match.",
  },
  {
    title: "The Cíes Islands are spectacular — and constrained",
    body: "Ferry access is seasonal, capacity-controlled and may not fit every cruise schedule. Never risk missing the ship for an island crossing that cannot guarantee your return.",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "Can I explore Vigo without an excursion?",
      answer:
        "Yes. Vigo is an easy city to explore independently and offers an enjoyable day of walking, cafés, seafood and harbour views. Many cruise passengers walk from the terminal into Casco Vello and return with a sensible buffer. Organised excursions become especially useful when you want Santiago de Compostela or other Galicia highlights beyond comfortable walking distance.",
    },
    {
      question: "How far is the historic centre from the cruise port?",
      answer:
        "The waterfront and approaches to Casco Vello are typically a realistic walk from the cruise terminal for most guests — often around 15–30 minutes depending on berth, pace and route. Exact timing varies; follow port signage and allow extra time if mobility is limited.",
    },
    {
      question: "Should I book a tour?",
      answer:
        "Book a tour when discovering Galicia beyond the city is your priority — especially Santiago de Compostela — or when you want guided context, e-bike coverage or a private Old Town walk. Skip a tour when you prefer flexible wandering, oyster stalls and self-paced photography in Vigo itself.",
    },
    {
      question: "Can I visit the Cíes Islands on a cruise day?",
      answer:
        "Sometimes — but not always. The Cíes Islands are one of Galicia’s greatest natural attractions, yet ferry access is seasonal, capacity-controlled and tightly timed. Many cruise schedules simply do not leave a safe window. Do not attempt a last-minute crossing that risks missing all-aboard.",
    },
    {
      question: "What is your Editor's Choice excursion?",
      answer:
        "Journey to Santiago de Compostela from Vigo — the strongest overall cruise experience when you want Galicia’s historic capital with cruise-aware timing.",
    },
  ];
}

/** Primary decision grid — Experience Cards (not awards). */
export const featuredExperienceCards: ExperienceCard[] = [
  {
    slug: "editors-choice-discover-galicia",
    type: "guided",
    title: "Discover Galicia",
    eyebrow: "Editor's Choice",
    description:
      "Journey to Santiago de Compostela — our strongest organised day when Galicia beyond the harbour is the priority.",
    href: "/shore-excursions/santiago-de-compostela-from-vigo",
    cta: "View Editor's Choice",
    imageKey: "santiago",
  },
  {
    slug: "explore-independently",
    type: "walk-it-yourself",
    title: "Historic Vigo",
    eyebrow: "Walk It Yourself",
    description:
      "A free self-guided route from the cruise terminal through Casco Vello, the oyster market and the marina.",
    href: "/guides/explore-independently",
    cta: "Open the walking guide",
    imageKey: "walking",
    duration: "2.5–4 hours",
    distance: "Approximately 3–5 km",
    difficulty: "Easy to moderate",
    idealFor: "Independent cruise passengers",
  },
  {
    slug: "atlantic-islands",
    type: "nature",
    title: "Cíes Islands & Ría de Vigo",
    eyebrow: "Atlantic Islands",
    description:
      "Understand Galicia’s greatest island panorama — and why ferry timing may not suit every cruise call.",
    href: "/guides/cies-islands",
    cta: "Read the Cíes guide",
    imageKey: "cies-islands",
  },
  {
    slug: "food-seafood",
    type: "food-wine",
    title: "Markets, oysters and Galician cuisine",
    eyebrow: "Food & Seafood",
    description:
      "A Pedra oysters, fish-market culture and the flavours that make Vigo Europe’s great Atlantic fishing port.",
    href: "/guides/seafood-guide",
    cta: "Explore seafood",
    imageKey: "seafood-market",
  },
  {
    slug: "coastal-galicia",
    type: "nature",
    title: "Fishing villages & Atlantic scenery",
    eyebrow: "Coastal Galicia",
    description:
      "Ría light, working harbours and coastal Galicia when you want scenery beyond the city streets.",
    href: "/guides/best-viewpoints",
    cta: "Find coastal views",
    imageKey: "atlantic-coast",
  },
];

export const experienceCards: ExperienceCard[] = [
  ...featuredExperienceCards,
  {
    slug: "history",
    type: "history",
    title: "History",
    description: "Casco Vello, collegiate stone and Galician maritime heritage.",
    href: "/guides/casco-vello",
    cta: "Explore Casco Vello",
    imageKey: "casco-vello",
  },
  {
    slug: "photography",
    type: "photography",
    title: "Photography",
    description: "Harbour panoramas, Ría viewpoints and Atlantic light.",
    href: "/guides/best-viewpoints",
    cta: "Find viewpoints",
    imageKey: "photography",
  },
  {
    slug: "families",
    type: "families",
    title: "Families",
    description: "Manageable city walks and shorter guided options with children.",
    href: "/shore-excursions/galician-culture-historical-walk",
    cta: "Family-friendly days",
    imageKey: "family",
  },
  {
    slug: "private",
    type: "private",
    title: "Private Experiences",
    description: "A private Old Town walk when your party wants tailored pacing.",
    href: "/shore-excursions/private-galician-old-town-walk",
    cta: "Browse private options",
    imageKey: "private",
  },
];

/** Homepage hero — destination copy (components stay generic). */
export const homepageHero = {
  eyebrow: "Vigo Shore Excursions",
  headline: homepageTagline,
  subheading: homepageSubheading,
  destinationLine: homepageDestinationLine,
  primaryCta: { href: "/shore-excursions", label: "Explore Shore Excursions" },
  secondaryCta: { href: "/guides/explore-independently", label: "Walk It Yourself" },
} as const;

export interface ChooseYourDayCard {
  slug: string;
  emoji: string;
  title: string;
  tagline: string;
  highlights: readonly string[];
  cta: string;
  href: string;
  imageKey: string;
  wide?: boolean;
}

export const chooseYourDay = {
  eyebrow: "Choose Your Day",
  title: "How would you like to experience Vigo?",
  subtitle:
    "Three excellent cruise experiences — explore the city independently, discover Galicia on an organised day, or take our Editor’s Choice adventure to Santiago.",
  cards: [
    {
      slug: "explore-vigo",
      emoji: "🚶",
      title: "Explore Vigo",
      tagline:
        "Walk the waterfront, Casco Vello and A Pedra oyster stalls at your own pace — often the finest day ashore from this port.",
      highlights: [
        "Walkable historic centre from many berths",
        "Harbour promenade and Praza da Compostela",
        "Casco Vello lanes and Santa María",
        "Oysters at A Pedra when you want a local pause",
        "Honest return-to-ship buffers",
      ],
      cta: "Open Walk It Yourself",
      href: "/guides/explore-independently",
      imageKey: "walking",
      wide: true,
    },
    {
      slug: "discover-galicia",
      emoji: "🗺️",
      title: "Discover Galicia",
      tagline:
        "Leave the city for organised access to Santiago de Compostela and other regional highlights when your hours ashore support the journey.",
      highlights: [
        "Santiago de Compostela day trips",
        "Scenic Galician countryside transfers",
        "Best when discovering the region is the priority",
        "Cruise-aware timing and meeting points",
        "Clear trade-off versus a full city walking day",
      ],
      cta: "Browse Galicia excursions",
      href: "/shore-excursions",
      imageKey: "santiago",
      wide: true,
    },
    {
      slug: "editors-choice-adventure",
      emoji: "⭐",
      title: "Editor's Choice Adventure",
      tagline:
        "Journey to Santiago de Compostela — our strongest overall cruise experience from Vigo when you want Galicia’s historic capital.",
      highlights: [
        "UNESCO Santiago with guided orientation",
        "Scenic drive through Galician countryside",
        "Best introduction to Galicia beyond the harbour",
        "Designed around cruise timing",
        "Never required if the city walk is enough",
      ],
      cta: "View Editor's Choice",
      href: "/shore-excursions/santiago-de-compostela-from-vigo",
      imageKey: "historic",
      wide: false,
    },
  ] as const satisfies readonly ChooseYourDayCard[],
};

export const honestAdviceContent = {
  eyebrow: "Honest advice",
  title: "Do You Need a Shore Excursion in Vigo?",
  subtitle:
    "Vigo offers three excellent cruise experiences. Explore the city independently; discover Galicia through organised excursions; or — where practical — look toward the Atlantic coastline and the Cíes Islands. Choose what genuinely suits your interests. We never push excursions unnecessarily.",
  independent: {
    title: "You can explore Vigo independently — and many passengers should",
    body: "Vigo is an easy city to explore independently and offers an enjoyable day of walking, cafés, seafood and harbour views:",
    items: [
      "Waterfront promenade and Praza da Compostela",
      "Porta do Sol and Casco Vello lanes",
      "Santa María Collegiate Church and Praza da Constitución",
      "Oysters at A Pedra and marina light before returning",
    ],
    note: "Set a 60–90 minute return buffer and confirm your all-aboard time. The ship will not wait.",
  },
  organised: {
    title: "When a guided day is the better choice",
    body: "If your priority is discovering Galicia beyond the city, organised excursions provide access that independent wandering cannot match in a single port call:",
    items: [
      {
        label: "Santiago de Compostela",
        detail: "Galicia’s historic capital — our Editor’s Choice when the region is the goal",
      },
      {
        label: "Historic Vigo with a guide",
        detail: "Casco Vello stories and maritime context without losing the city scale",
      },
      {
        label: "E-bike discovery",
        detail: "Wider Vigo coverage — estuary views and cultural landmarks at a moderate pace",
      },
      {
        label: "Cíes Islands",
        detail:
          "Spectacular when season, capacity and schedule align — never risk missing the ship for a ferry that cannot guarantee return",
      },
    ],
  },
  links: [
    { href: "/compare/tour-or-independent", label: "Tour or independent?" },
    { href: "/guides/explore-independently", label: "Walk It Yourself" },
    { href: "/guides/cies-islands", label: "Cíes Islands Guide" },
  ],
} as const;

export const featuredSectionCopy = {
  eyebrow: "When you're ready",
  title: "Featured shore excursions",
  subtitle:
    "Curated Vigo experiences planned around your cruise day. Live booking opens once EUR selling prices and fulfilment routes are verified.",
} as const;
