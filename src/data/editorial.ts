import type { EditorialCategory } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";
import { EXPLORE_INDEPENDENTLY_PATH } from "./explore-independently";

/**
 * Shared Editorial Promise — destination may override copy in this module.
 * Tone: editorial trust, never a sales pitch. Editor's Choice badge stays separate.
 */
export const editorialPromise = {
  eyebrow: "Our editorial promise",
  title: "We'll always recommend the experience we'd choose ourselves",
  lead: "We'll always recommend the experience we'd choose ourselves.",
  points: [
    "Sometimes that's one of our carefully selected Editor's Choice excursions.",
    "Sometimes it's a free self-guided experience.",
  ],
  closing: "Our goal is to help you enjoy the best possible day ashore.",
} as const;

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  {
    id: "editors-choice",
    label: "Editor's Choice",
    shortLabel: "Editor's Choice",
    description: "Our strongest overall choice for a well-timed Vigo cruise day discovering Galicia.",
  },
  {
    id: "best-historic",
    label: "Best Historic Experience",
    shortLabel: "Historic",
    description: "Casco Vello lanes, collegiate stone and Galician maritime heritage.",
  },
  {
    id: "best-independent",
    label: "Best Independent Experience",
    shortLabel: "Walk It Yourself",
    description:
      "A realistic self-guided Vigo day within easy reach of the ship — when independence is genuinely best.",
  },
  {
    id: "best-coastal",
    label: "Best Atlantic Coast",
    shortLabel: "Coast",
    description: "Ría de Vigo light, coastal Galicia and — when practical — island horizons.",
  },
  {
    id: "best-view",
    label: "Best Views",
    shortLabel: "Views",
    description: "Harbour panoramas, marina angles and estuary outlooks.",
  },
  {
    id: "best-got",
    label: "Signature Experience",
    shortLabel: "Signature",
    description: "Our future Atlantic Galicia small-group flagship, currently in preparation.",
  },
  {
    id: "best-families",
    label: "Best for Families",
    shortLabel: "Families",
    description: "Manageable harbour walks and shorter guided options with sensible pacing.",
  },
  {
    id: "best-photography",
    label: "Best Photography",
    shortLabel: "Photography",
    description: "Ría light, Casco Vello stone and Atlantic harbour silhouettes.",
  },
  {
    id: "best-food",
    label: "Best Food & Seafood",
    shortLabel: "Food & Seafood",
    description: "A Pedra oysters, Galician cuisine and harbour-side tasting culture.",
  },
  {
    id: "best-luxury",
    label: "Best Private Tour",
    shortLabel: "Private",
    description: "Dedicated pacing for your own party through historic Vigo.",
  },
  {
    id: "hidden-gem",
    label: "Hidden Gem",
    shortLabel: "Hidden Gem",
    description: "Quieter Casco Vello lanes and local pauses beyond the busiest junctions.",
  },
  {
    id: "best-value",
    label: "Best Value",
    shortLabel: "Best Value",
    description: "A rewarding port day without unnecessary transfers or expense.",
  },
  {
    id: "best-short-port",
    label: "Best Short Port Call",
    shortLabel: "Short Port",
    description: "Waterfront and Casco Vello highlights when usable hours are limited.",
  },
];

export interface EditorsCollectionItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  signature?: boolean;
  comingSoon?: boolean;
}

export const editorsCollectionItems: EditorsCollectionItem[] = [
  {
    id: "editors-choice",
    emoji: "⭐",
    label: "Editor's Choice",
    description:
      "Journey to Santiago de Compostela from Vigo — the best introduction to Galicia beyond the harbour.",
    href: "/shore-excursions/santiago-de-compostela-from-vigo",
    cta: "View our top pick",
  },
  {
    id: "first-time",
    emoji: "⛵",
    label: "Best First-Time Tour",
    description:
      "Santiago for first-time visitors who want Galicia’s historic capital with cruise-aware timing.",
    href: "/shore-excursions/santiago-de-compostela-from-vigo",
    cta: "Discover Santiago",
  },
  {
    id: "historic",
    emoji: "🏛️",
    label: "Best Historic Walk",
    description: "Galician Culture Historical Walk — Casco Vello stories at a human pace.",
    href: "/shore-excursions/galician-culture-historical-walk",
    cta: "Explore on foot",
  },
  {
    id: "food-wine",
    emoji: "🦪",
    label: "Best Seafood Experience",
    description: "A Pedra oysters and Galician cuisine — harbour flavours without leaving the walkable core.",
    href: "/guides/seafood-guide",
    cta: "Taste Vigo",
  },
  {
    id: "private",
    emoji: "🚗",
    label: "Best Beyond the City",
    description: "Santiago when your port call supports the road time — compare city versus capital honestly.",
    href: "/compare/santiago-or-vigo-city",
    cta: "Compare Santiago vs Vigo",
  },
  {
    id: "photography",
    emoji: "📸",
    label: "Best Photography",
    description: "Ría viewpoints, marina light and Atlantic harbour silhouettes.",
    href: "/guides/best-viewpoints",
    cta: "Find the views",
  },
  {
    id: "families",
    emoji: "👨‍👩‍👧",
    label: "Best for Families",
    description: "Shorter historic walks and e-bike discovery keep mixed-age parties moving without exhaustion.",
    href: "/shore-excursions/galician-heritage-ebike",
    cta: "See active options",
  },
  {
    id: "independent",
    emoji: "🚶",
    label: "Walk It Yourself",
    description: "Walking from Vigo port — waterfront, Casco Vello and oysters with a generous ship buffer.",
    href: EXPLORE_INDEPENDENTLY_PATH,
    cta: "Open the walking guide",
  },
  {
    id: "signature-experience",
    emoji: "✨",
    label: "Signature Atlantic Galicia Discovery",
    description:
      "A future maximum-eight-guest Galician day, currently in preparation and not bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
    signature: true,
    comingSoon: true,
  },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}
