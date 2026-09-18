/**
 * World 2.0 Destination Configuration — Vigo Shore Excursions
 *
 * Domain is the single source of truth for canonicals, sitemap, OG, JSON-LD and Worker CORS.
 * Do not hard-code the hostname elsewhere.
 */

import type { DestinationCurrencyCode } from "@/lib/commerce/currency";

export type DestinationRegion =
  | "europe"
  | "caribbean"
  | "alaska"
  | "british-isles"
  | "other";

/**
 * CENTRAL — public contact is info@wowatour.com only (default until forwarding works).
 * LOCAL — display hello@ / bookings@ / privacy@ on the destination domain.
 */
export type ContactMode = "central" | "local";

export type DestinationConfig = {
  slug: string;
  name: string;
  destination: string;
  descriptor: string;
  strapline: string;
  domain: string;
  url: string;
  description: string;
  locale: string;
  region: DestinationRegion;
  currency: DestinationCurrencyCode;
  bookingRefPrefix: string;
  pagesProject: string;
  paymentsWorkerName: string;
  d1DatabaseName: string;
  /**
   * Public contact presentation. Keep `central` until destination email
   * forwarding (hello/bookings/privacy) is configured, then switch to `local`.
   */
  contactMode: ContactMode;
  /** Destination-local addresses — used only when contactMode is `local`. */
  contact: {
    hello: string;
    bookings: string;
    privacy: string;
  };
  legal: {
    tradingName: string;
    legalCompanyName: string;
    companyNumber: string;
    registeredJurisdiction: string;
    registeredOfficeLines: string[];
    registeredOfficeFormatted: string;
  };
  port: {
    scheduleSlug: string;
    meetingPointLabel: string;
    country: string;
  };
  seo: {
    defaultKeywords: string[];
  };
  nav: readonly { href: string; label: string }[];
  experienceCategories: readonly string[];
};

export const destinationConfig = {
  slug: "vigo",
  name: "Vigo Shore Excursions",
  destination: "Vigo",
  descriptor: "Shore Excursions",
  strapline: "Gateway to Atlantic Galicia",
  domain: "vigoshoreexcursions.com",
  url: "https://vigoshoreexcursions.com",
  description:
    "Independent Vigo shore excursions and honest cruise-port guidance — Ría de Vigo, Casco Vello, Galician seafood and Santiago de Compostela when your hours ashore allow.",
  locale: "en_GB",
  region: "europe",
  currency: "EUR",
  bookingRefPrefix: "VG",
  pagesProject: "vigo-shore-excursions",
  paymentsWorkerName: "vigo-payments",
  d1DatabaseName: "vigo-bookings",
  contactMode: "central",
  contact: {
    hello: "hello@vigoshoreexcursions.com",
    bookings: "bookings@vigoshoreexcursions.com",
    privacy: "privacy@vigoshoreexcursions.com",
  },
  legal: {
    tradingName: "Vigo Shore Excursions",
    legalCompanyName: "Wow A Tour Ltd",
    companyNumber: "11426960",
    registeredJurisdiction: "England and Wales",
    registeredOfficeLines: [
      "Kintyre House",
      "70 High Street",
      "Fareham",
      "Hampshire",
      "United Kingdom",
      "PO16 7BB",
    ],
    registeredOfficeFormatted:
      "Kintyre House, 70 High Street, Fareham, Hampshire, United Kingdom, PO16 7BB",
  },
  port: {
    scheduleSlug: "vigo",
    meetingPointLabel: "Vigo Cruise Port",
    country: "Spain",
  },
  seo: {
    defaultKeywords: [
      "Vigo shore excursions",
      "Vigo cruise excursions",
      "Vigo cruise port guide",
      "Cíes Islands cruise",
      "Ría de Vigo shore excursion",
      "Santiago de Compostela from Vigo",
      "Casco Vello walking tour",
      "Galician seafood Vigo",
      "Walk It Yourself Vigo",
      "Atlantic Galicia cruise day",
    ],
  },
  nav: [
    { href: "/compare", label: "Compare" },
    { href: "/shore-excursions", label: "Excursions" },
    { href: "/guides", label: "Guides" },
    { href: "/wow-collection", label: "Wow Collection" },
    { href: "/cruise-planner", label: "Planner" },
    { href: "/cruise-port-guide", label: "Port Guide" },
  ],
  experienceCategories: [
    "Walk It Yourself",
    "Editor's Choice",
    "Historic Cities",
    "Atlantic Islands",
    "Food & Seafood",
    "Coastal Galicia",
    "Families",
    "Private",
  ],
} as const satisfies DestinationConfig;

export type AppDestinationConfig = typeof destinationConfig;
