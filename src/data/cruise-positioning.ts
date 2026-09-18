/**
 * Central cruise-positioning + Your Day Ashore experience categories.
 * Reusable World 2.0 pattern — destination copy lives here; component stays generic.
 */
export const cruisePositioning = {
  enabled: true,
  eyebrow: "Designed for Cruise Passengers",
  message: "Helping cruise passengers make every hour ashore count.",
  variantBMessage: "Everything here is built around your time in port.",
  activeVariant: "A" as "A" | "B",
  showDayAshoreSection: true,
} as const;

export function getCruiseTrustMessage(): string {
  if (cruisePositioning.activeVariant === "B") {
    return cruisePositioning.variantBMessage;
  }
  return cruisePositioning.message;
}

export interface DayAshoreItem {
  id: string;
  title: string;
  body: string;
  href?: string;
  icon: "clock" | "route" | "walk" | "sunrise" | "viewpoint" | "food" | "family" | "luxury";
}

export const dayAshoreIntro =
  "Where will your day in Vigo take you? Choose the experience that fits your hours ashore — then build everything around your ship’s schedule.";

export const dayAshoreItems: DayAshoreItem[] = [
  {
    id: "walk-it-yourself",
    title: "Walk It Yourself",
    body: "A self-guided historic Vigo loop — waterfront, Casco Vello and the oyster market at your own pace.",
    href: "/guides/explore-independently",
    icon: "walk",
  },
  {
    id: "editors-choice",
    title: "Editor's Choice",
    body: "Journey to Santiago de Compostela — Galicia’s most rewarding full-day cruise experience from Vigo.",
    href: "/shore-excursions/santiago-de-compostela-from-vigo",
    icon: "luxury",
  },
  {
    id: "history",
    title: "History",
    body: "Casco Vello lanes, collegiate stone and the maritime stories of Atlantic Galicia.",
    href: "/guides/casco-vello",
    icon: "route",
  },
  {
    id: "seafood",
    title: "Seafood",
    body: "Oysters at A Pedra, fish markets and the flavours that make Vigo famous.",
    href: "/guides/seafood-guide",
    icon: "food",
  },
  {
    id: "photography",
    title: "Photography",
    body: "Harbour light, Ría views and viewpoints above the fishing port.",
    href: "/guides/best-viewpoints",
    icon: "viewpoint",
  },
  {
    id: "families",
    title: "Families",
    body: "Manageable city walks, harbour pauses and shorter guided options when travelling with children.",
    href: "/shore-excursions/galician-culture-historical-walk",
    icon: "family",
  },
  {
    id: "atlantic-coast",
    title: "Atlantic Coast",
    body: "Fishing villages, Ría de Vigo scenery and — when schedule and season allow — the Cíes Islands.",
    href: "/guides/cies-islands",
    icon: "sunrise",
  },
];
