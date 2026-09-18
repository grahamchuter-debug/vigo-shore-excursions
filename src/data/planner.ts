import { SIGNATURE_EXPERIENCE_PATH, signatureRivieraExperience } from "./signature-experience";

export interface PlannerInput {
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  travelStyle: "diy" | "guided";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const PLANNER_VISITOR_TYPES = [
  {
    id: "independent",
    label: "Independent Vigo explorer",
    description: "A low-risk city day using walking, oysters and your own return buffer.",
  },
  {
    id: "santiago",
    label: "First-time Santiago visitor",
    description: "A guided day for passengers with enough port time for Galicia’s historic capital.",
  },
  {
    id: "historic",
    label: "Historic Vigo traveller",
    description: "Casco Vello lanes, collegiate stone and Galician maritime context.",
  },
  {
    id: "coastal",
    label: "Atlantic coast traveller",
    description: "Ría viewpoints, coastal character and careful honesty about the Cíes Islands.",
  },
] as const;

export const INTEREST_OPTIONS = [
  { id: "casco-vello", label: "Casco Vello" },
  { id: "santiago", label: "Santiago de Compostela" },
  { id: "seafood", label: "Seafood & oysters" },
  { id: "cies", label: "Cíes Islands" },
  { id: "ria", label: "Ría de Vigo views" },
  { id: "photography", label: "Photography & scenery" },
  { id: "family", label: "Family-friendly" },
  { id: "independent", label: "Independent travel" },
];

type PlanKey = "independent" | "santiago" | "historic" | "coastal";

export const VIGO_DAY_PLANS: Record<
  PlanKey,
  { headline: string; summary: string; minimumHours: number; links: PlannerLink[]; dayPlan: PlannerResult["dayPlan"] }
> = {
  independent: {
    headline: "Independent Vigo harbour & Casco Vello",
    summary:
      "The most flexible choice: walk from the terminals along the waterfront to Praza da Compostela, Casco Vello, A Pedra oysters and the marina.",
    minimumHours: 4,
    links: [
      {
        label: "Walking from Vigo Port",
        href: "/guides/walking-from-port",
        why: "Walking route, timing and return-to-ship advice.",
      },
      {
        label: "Walk It Yourself",
        href: "/guides/explore-independently",
        why: "Full DIY harbour-to-Casco Vello plan without an organised tour.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Walk from the cruise port along the waterfront to Praza da Compostela and Porta do Sol." },
      { time: "Late morning", text: "Explore Casco Vello, Praza da Constitución and Santa María." },
      { time: "Afternoon", text: "Oysters at A Pedra when open, marina light — then return with a buffer." },
    ],
  },
  santiago: {
    headline: "Santiago de Compostela introduction",
    summary:
      "A guided journey to Galicia’s historic capital with countryside context and cruise-aware return — our favourite first-time regional format.",
    minimumHours: 7,
    links: [
      {
        label: "Journey to Santiago de Compostela from Vigo",
        href: "/shore-excursions/santiago-de-compostela-from-vigo",
        why: "Editor’s Choice introduction for cruise visitors who want Galicia beyond the harbour.",
      },
      {
        label: "Santiago or Vigo city?",
        href: "/compare/santiago-or-vigo-city",
        why: "Honest trade-offs before committing to road time.",
      },
    ],
    dayPlan: [
      { time: "Meet", text: "Join your guide near the passenger terminal area." },
      { time: "Guided day", text: "Countryside transfer and Santiago historic centre orientation." },
      { time: "Return", text: "Drive back to Vigo with a planned all-aboard buffer." },
    ],
  },
  historic: {
    headline: "Historic Vigo on foot",
    summary:
      "Casco Vello stories, collegiate façades and maritime context with less pressure than a Santiago road day.",
    minimumHours: 4,
    links: [
      {
        label: "Galician Culture Historical Walk",
        href: "/shore-excursions/galician-culture-historical-walk",
        why: "Guided old-town focus with independent time afterwards.",
      },
      {
        label: "Private Galician Old Town Walk",
        href: "/shore-excursions/private-galician-old-town-walk",
        why: "Private pacing for your own party.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Join a guided or private Casco Vello walk." },
      { time: "Midday", text: "Collegiate façades, squares and local commentary." },
      { time: "Afternoon", text: "Optional oysters or free time before the return buffer." },
    ],
  },
  coastal: {
    headline: "Atlantic light & careful island honesty",
    summary:
      "Ría viewpoints and coastal character close to the ship — with a clear warning that the Cíes Islands may not fit your call.",
    minimumHours: 5,
    links: [
      {
        label: "Best Viewpoints",
        href: "/guides/best-viewpoints",
        why: "Harbour panoramas and estuary outlooks.",
      },
      {
        label: "Cíes Islands Guide",
        href: "/guides/cies-islands",
        why: "Seasonal, capacity-controlled — never risk missing the ship.",
      },
      {
        label: "Galician Heritage E-Bike",
        href: "/shore-excursions/galician-heritage-ebike",
        why: "Wider estuary and heritage coverage without a coach day.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Waterfront and Ría viewpoints near the cruise hinterland." },
      { time: "Midday", text: "Optional e-bike or elevated outlooks if mobility allows." },
      { time: "Afternoon", text: "Only attempt the Cíes if season, tickets and buffer are confirmed — otherwise stay in Vigo." },
    ],
  },
};

function parseHour(value?: string): number | null {
  if (!value) return null;
  const m = value.match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  return Number(m[1]) + Number(m[2]) / 60;
}

function usableHours(input: PlannerInput): number {
  const arrival = parseHour(input.arrivalTime);
  const departure = parseHour(input.departureTime);
  if (arrival == null || departure == null) return 8;
  let hours = departure - arrival;
  if (hours <= 0) hours += 24;
  return Math.max(1, hours - 1.5);
}

function selectPlan(input: PlannerInput, hours: number): PlanKey {
  const interests = input.interests;
  if (
    input.travelStyle === "diy" ||
    input.mobility === "limited" ||
    interests.includes("independent") ||
    interests.includes("casco-vello") ||
    interests.includes("seafood") ||
    hours < 6
  ) {
    if (input.travelStyle === "guided" && hours >= 5 && !interests.includes("independent")) {
      if (interests.includes("santiago") && hours >= 7) return "santiago";
      return interests.includes("ria") || interests.includes("photography") || interests.includes("cies")
        ? "coastal"
        : "historic";
    }
    return "independent";
  }
  if (interests.includes("santiago") && hours >= 7) return "santiago";
  if (interests.includes("cies") || interests.includes("ria") || interests.includes("photography")) {
    return "coastal";
  }
  if (interests.includes("seafood") && hours < 7) return "independent";
  return hours >= 7 ? "santiago" : "historic";
}

export function generateVigoPlan(input: PlannerInput): PlannerResult {
  const hours = usableHours(input);
  const key = selectPlan(input, hours);
  const plan = VIGO_DAY_PLANS[key];
  const partySize = input.adults + input.children;
  const excursions = [...plan.links];

  if (input.budget === "premium") {
    excursions.push({
      label: signatureRivieraExperience.title,
      href: SIGNATURE_EXPERIENCE_PATH,
      why: "Future maximum-eight-guest Atlantic Galicia concept — in preparation and not bookable.",
    });
  }

  if (input.interests.includes("seafood") && key === "independent") {
    excursions.push({
      label: "Seafood Guide",
      href: "/guides/seafood-guide",
      why: "A Pedra oysters and harbour tasting tips without a road day.",
    });
  }

  return {
    headline: plan.headline,
    summary: `${plan.summary} Your call provides about ${hours.toFixed(1)} usable hours for ${partySize} guest${partySize === 1 ? "" : "s"}. ${hours < plan.minimumHours ? `This is shorter than the ${plan.minimumHours}-hour minimum we recommend for this style, so prefer Vigo on foot.` : ""}`.trim(),
    excursions,
    transfers: [
      {
        label: "Vigo Cruise Port Guide",
        href: "/cruise-port-guide",
        why: "Terminal walking times, taxis and city access.",
      },
    ],
    stay: [],
    logistics: [
      {
        label: "Vigo Ship Schedule",
        href: "/ship-schedules/vigo",
        why: "Recheck the published arrival and departure for your call.",
      },
      {
        label: "Compare Vigo options",
        href: "/compare",
        why: "Review honest trade-offs before booking a long road or island day.",
      },
    ],
    dayPlan: [
      ...plan.dayPlan,
      {
        time: "Return buffer",
        text: "Reach the Vigo terminal 60–90 minutes before all-aboard; Santiago days require additional road traffic contingency. Never risk an island ferry that cannot guarantee return.",
      },
    ],
  };
}

/** @deprecated Compatibility alias */
export function generateSplitPlan(input: PlannerInput): PlannerResult {
  return generateVigoPlan(input);
}
