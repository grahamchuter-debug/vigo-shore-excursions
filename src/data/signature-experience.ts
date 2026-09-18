import type { FAQ } from "./types";

/** Keep path aligned with `src/app/signature-riviera-experience/` to avoid broken builds. */
export const SIGNATURE_EXPERIENCE_PATH = "/signature-riviera-experience";

export interface SignatureBenefit {
  emoji: string;
  title: string;
  description: string;
}

export const signatureVigoExperience = {
  slug: "signature-riviera-experience",
  title: "Signature Atlantic Galicia Discovery",
  seoTitle: "Signature Atlantic Galicia Discovery — Future Private Day from Vigo",
  metaDescription:
    "Preview a future small-group Vigo shore experience — maximum eight guests, harbour highlights, Casco Vello and flexible Galician discovery. Not currently boo…",
  tagline:
    "A future small-group journey through Atlantic Vigo and Galicia — designed around your ship, not a generic day tour.",
  overview:
    "Signature Atlantic Galicia Discovery is a product concept in preparation. The proposed experience would take no more than eight guests from Vigo through harbour light, Casco Vello and carefully chosen Galician stops in a paced format, with optional Santiago emphasis when hours allow, a local lunch and enough flexibility to respond to the group, weather and port timings. It does not currently exist as a bookable excursion.",
  comingSoon: true,
  benefits: [
    {
      emoji: "👥",
      title: "Maximum 8 guests",
      description: "A proposed small-group format intended to avoid coach-tour delays and support personal attention.",
    },
    {
      emoji: "⚓",
      title: "Atlantic Vigo focus",
      description: "Harbour promenade, Casco Vello lanes and seafood culture at the heart of the concept.",
    },
    {
      emoji: "📸",
      title: "Photography stops",
      description: "Time for Ría panoramas and historic façades rather than images through a coach window.",
    },
    {
      emoji: "🍽️",
      title: "Local lunch",
      description: "A relaxed Galician lunch proposed as part of the experience, subject to final partner arrangements.",
    },
    {
      emoji: "🧭",
      title: "Flexible itinerary",
      description: "Room to adjust for weather, crowds and the interests of a small group — including Santiago when the call supports it.",
    },
    {
      emoji: "🚢",
      title: "Ship-first timing",
      description: "Planned backwards from all-aboard with a conservative Vigo return buffer.",
    },
  ] as SignatureBenefit[],
  faqs: [
    {
      question: "Can I book Signature Atlantic Galicia Discovery now?",
      answer:
        "No. It is a future concept in preparation and is not bookable. Explore current Vigo shore excursions or enquire for updates.",
    },
    {
      question: "How is this different from Editor's Choice?",
      answer:
        "Editor’s Choice is our current recommended Santiago introduction. Signature is a future small-group flagship concept with a stricter guest limit and more flexible pacing across harbour and Galicia.",
    },
  ] as FAQ[],
};

/** Primary export name expected by existing Signature Experience components and route. */
export const signatureRivieraExperience = signatureVigoExperience;

export function getSignatureEditorialRecommendation() {
  return {
    category: "best-got" as const,
    title: signatureRivieraExperience.title,
    description:
      "A future maximum-eight-guest Atlantic Galicia experience. In preparation and not currently bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    signature: true,
    comingSoon: true,
  };
}
