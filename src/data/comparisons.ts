import type { Comparison } from "./types";

export const comparisons: Comparison[] = [
  {
    slug: "tour-or-independent",
    title: "Tour or Independent?",
    seoTitle: "Vigo Tour or Independent? Honest Cruise Advice",
    metaDescription:
      "Should you book a Vigo shore excursion or explore Casco Vello independently? Honest comparison for cruise passengers. Cruise-aware advice for Vigo passengers.",
    kind: "versus",
    optionA: "Independent",
    optionB: "Guided tour",
    summary:
      "Vigo is one of Spain’s easier Atlantic cruise ports to explore on foot. Independence wins for flexible harbour and oyster days; a guided tour wins for historical narrative, mobility support and days toward Santiago or wider Galicia.",
    verdict:
      "Choose independence when Vigo itself is your priority and you enjoy self-paced walking. Choose a tour when you want stories, structured pacing, or Santiago de Compostela within limited hours.",
    overview: [
      "Many guests walk from the passenger facilities into the waterfront and Casco Vello without an organised excursion.",
      "Guided cultural walks add Galician context while still leaving free time afterwards.",
      "Santiago days almost always need organised transport to protect return timing.",
    ],
    comparisonTable: [
      { category: "Best for", optionA: "Flexible harbour & Casco Vello", optionB: "History narrative or Santiago reach" },
      { category: "Cost", optionA: "Lower", optionB: "Higher" },
      { category: "Walking", optionA: "Self-paced stone lanes", optionB: "Guided pace on historic surfaces" },
      { category: "Return timing", optionA: "Your responsibility", optionB: "Cruise-aware operator planning" },
      { category: "Beyond the city", optionA: "Harder without transport", optionB: "Practical with organised routing" },
    ],
    faqs: [
      {
        question: "Can I explore Vigo without an excursion?",
        answer: "Yes. Independent city days are common and often excellent.",
      },
      {
        question: "When is a tour clearly better?",
        answer:
          "When you want historical context, limited-mobility support, or Santiago de Compostela within limited hours.",
      },
    ],
    relatedSlugs: ["first-time-vigo-day", "best-shore-excursions", "santiago-or-vigo-city"],
    imageKey: "compare",
  },
  {
    slug: "best-shore-excursions",
    title: "Best Shore Excursions",
    seoTitle: "Best Vigo Shore Excursions for Cruise Passengers",
    metaDescription:
      "Best Vigo shore excursions compared: Santiago de Compostela, historic walks, e-bike discovery and private Old Town days.",
    kind: "guide",
    summary:
      "Start with Journey to Santiago de Compostela for first-timers who want Galicia beyond the harbour. Choose historic walks or e-bike formats for city depth, and keep independence as a genuine alternative.",
    verdict:
      "Editor’s Choice remains the clearest regional first-time pick. Match everything else to hours ashore and appetite for walking versus road time.",
    overview: [
      "City experiences stay close to the ship and protect timing.",
      "Santiago needs honest clock management and a fuller call.",
    ],
    guideItems: [
      {
        name: "Journey to Santiago de Compostela from Vigo",
        slug: "santiago-de-compostela-from-vigo",
        href: "/shore-excursions/santiago-de-compostela-from-vigo",
        reason: "Best introduction to Galicia’s historic capital — context plus cruise-aware return.",
        topExcursion: "Journey to Santiago de Compostela from Vigo",
        returnConfidence: "High with full-day window",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Galician Culture Historical Walk",
        slug: "galician-culture-historical-walk",
        href: "/shore-excursions/galician-culture-historical-walk",
        reason: "Guided Casco Vello circuit with independent time left.",
        topExcursion: "Galician Culture Historical Walk",
        returnConfidence: "Very high",
        walkingDifficulty: "Relaxed–moderate",
      },
      {
        name: "Galician Heritage E-Bike",
        slug: "galician-heritage-ebike",
        href: "/shore-excursions/galician-heritage-ebike",
        reason: "Wider Vigo coverage without a coach day to Santiago.",
        topExcursion: "Galician Heritage and Vigo Discovery by E-Bike",
        returnConfidence: "High",
        walkingDifficulty: "Active cycling",
      },
    ],
    faqs: [
      {
        question: "What is Editor's Choice?",
        answer:
          "Journey to Santiago de Compostela from Vigo — selected for cruise visitors who want Galicia’s most iconic inland destination with ship-aware timing.",
      },
    ],
    relatedSlugs: ["first-time-vigo-day", "tour-or-independent"],
    imageKey: "historic",
  },
  {
    slug: "first-time-vigo-day",
    title: "First-Time Vigo Day",
    seoTitle: "First Time in Vigo on a Cruise — How to Spend the Day",
    metaDescription:
      "First-time Vigo cruise day plan: Casco Vello priorities, seafood, independent vs tour, Santiago and what to skip. Cruise-aware advice for Vigo passengers.",
    kind: "guide",
    summary:
      "First-timers should anchor the day in the waterfront and Casco Vello — or deliberately choose Santiago if Galicia’s capital is the priority. Do not attempt both deeply plus the Cíes Islands.",
    verdict:
      "Do not try to see all of Galicia. See Vigo well — or Santiago well — then decide if a future call deserves the islands.",
    overview: [
      "Walk or take a short taxi from the terminals toward the waterfront and Praza da Compostela.",
      "Use Porta do Sol for orientation, then explore Casco Vello and consider oysters at A Pedra.",
      "Consider Editor’s Choice if you want Santiago rather than a city walking day.",
    ],
    guideItems: [
      {
        name: "Casco Vello",
        slug: "casco-vello",
        href: "/guides/casco-vello",
        reason: "The essential first Vigo experience on foot.",
        topExcursion: "Galician Culture Historical Walk",
        returnConfidence: "Very high on foot with buffer",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Santiago de Compostela",
        slug: "santiago-de-compostela-from-vigo",
        href: "/shore-excursions/santiago-de-compostela-from-vigo",
        reason: "Galicia’s historic capital when the region is the goal.",
        topExcursion: "Journey to Santiago de Compostela from Vigo",
        returnConfidence: "High on a full call",
        walkingDifficulty: "Moderate historic centre",
      },
      {
        name: "Independent plan",
        slug: "explore-independently",
        href: "/guides/explore-independently",
        reason: "DIY harbour-to-Casco Vello route when you prefer flexibility.",
        topExcursion: "Private Galician Old Town Walk",
        returnConfidence: "Your discipline",
        walkingDifficulty: "Self-paced",
      },
    ],
    faqs: [
      {
        question: "Should first-timers book a tour?",
        answer:
          "Optional for the city. Book for Santiago or narrative; explore independently if you prefer oysters, cafés and flexible photography time.",
      },
    ],
    relatedSlugs: ["best-shore-excursions", "tour-or-independent", "santiago-or-vigo-city"],
    imageKey: "historic",
  },
  {
    slug: "santiago-or-vigo-city",
    title: "Santiago or Vigo City?",
    seoTitle: "Santiago de Compostela or Stay in Vigo? Cruise Day Comparison",
    metaDescription:
      "Compare Santiago de Compostela and a Vigo city day for cruise passengers — walking, atmosphere, timing and which to prioritise.",
    kind: "versus",
    optionA: "Vigo city",
    optionB: "Santiago de Compostela",
    summary:
      "Vigo delivers harbour walks, Casco Vello and seafood beside the ship. Santiago delivers Galicia’s pilgrimage capital and UNESCO stone — at the cost of road time.",
    verdict:
      "Choose Vigo unless you deliberately want the regional capital and have a long, unhurried port call. Do not attempt both deeply.",
    overview: [
      "Casco Vello needs no long transfer.",
      "Santiago requires organised transport and a generous return buffer.",
    ],
    comparisonTable: [
      { category: "Travel time", optionA: "Minimal", optionB: "Significant" },
      { category: "Experience", optionA: "Harbour, oysters, old town", optionB: "Cathedral city & pilgrimage atmosphere" },
      { category: "Risk to buffer", optionA: "Lower", optionB: "Higher" },
      { category: "Best call length", optionA: "Short to full day", optionB: "Long full day" },
    ],
    faqs: [
      {
        question: "Is Santiago worth missing Vigo time?",
        answer:
          "Only if Galicia’s capital is your priority. Vigo itself is excellent — skipping it entirely is a deliberate choice, not a default.",
      },
    ],
    relatedSlugs: ["best-shore-excursions", "tour-or-independent", "first-time-vigo-day"],
    imageKey: "santiago",
  },
  {
    slug: "cies-islands-worth-it",
    title: "Are the Cíes Islands Worth It?",
    seoTitle: "Cíes Islands Worth It on a Vigo Cruise Day?",
    metaDescription:
      "Honest advice on visiting the Cíes Islands from a Vigo cruise call — beauty, season, capacity limits and ship-timing risk.",
    kind: "versus",
    optionA: "Stay in Vigo",
    optionB: "Attempt the Cíes",
    summary:
      "The Cíes Islands are spectacular when season, capacity and schedule align. They are not a default shore day. Ferry constraints and return risk make many cruise calls better spent in the city.",
    verdict:
      "Choose the Cíes only when tickets, last return ferry and all-aboard leave a conservative margin. Otherwise stay in Vigo — oysters and Casco Vello are not a consolation prize.",
    overview: [
      "Island access is seasonal and capacity-controlled.",
      "A best-case ferry time is not a return plan.",
      "Missing a ferry can mean missing the ship — never risk it.",
    ],
    comparisonTable: [
      { category: "Headline", optionA: "Harbour & Casco Vello", optionB: "Atlantic islands" },
      { category: "From port", optionA: "Often walkable", optionB: "Ferry + capacity rules" },
      { category: "Schedule fit", optionA: "Usually reliable", optionB: "Often constrained" },
      { category: "Risk to ship", optionA: "Lower with buffer", optionB: "Material if timing slips" },
      { category: "Best for", optionA: "Most cruise calls", optionB: "Long, confirmed island windows only" },
    ],
    faqs: [
      {
        question: "Should I try the Cíes if tickets look available?",
        answer:
          "Only after confirming the last return ferry against all-aboard with a generous buffer. If any part is uncertain, stay in Vigo.",
      },
      {
        question: "Is organised better than DIY for the islands?",
        answer:
          "Organised logistics can clarify bookings, but they cannot invent hours you do not have.",
      },
    ],
    relatedSlugs: ["tour-or-independent", "first-time-vigo-day", "best-shore-excursions"],
    imageKey: "cies-islands",
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getComparisonDisplayTitle(c: Comparison): string {
  if (c.kind === "versus" && c.optionA && c.optionB) {
    return `${c.optionA} or ${c.optionB}?`;
  }
  return c.title;
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}
