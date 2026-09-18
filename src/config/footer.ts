/**
 * Destination-specific footer link columns.
 * Clone procedure: replace labels/hrefs for the new port only.
 */

export type FooterLink = { href: string; label: string };

export type FooterColumns = {
  blurb: string;
  chooseTitle: string;
  choose: FooterLink[];
  planTitle: string;
  plan: FooterLink[];
  bookTitle: string;
  book: FooterLink[];
  independenceClause: string;
};

export const footerColumns: FooterColumns = {
  blurb:
    "Helping cruise passengers plan a confident day ashore in Vigo — honest advice on walking Casco Vello, Galician seafood, the Ría de Vigo and Santiago when your hours allow.",
  chooseTitle: "Choose your day",
  choose: [
    { href: "/compare/best-shore-excursions", label: "Best excursions" },
    { href: "/compare/tour-or-independent", label: "Tour or independent?" },
    { href: "/compare/first-time-vigo-day", label: "First-time Vigo" },
    { href: "/shore-excursions/santiago-de-compostela-from-vigo", label: "Editor's Choice" },
    { href: "/guides/explore-independently", label: "Walk It Yourself" },
    { href: "/wow-collection", label: "The Wow Collection" },
  ],
  planTitle: "Plan your port day",
  plan: [
    { href: "/cruise-planner", label: "Cruise Planner" },
    { href: "/guides/explore-independently", label: "Walk It Yourself" },
    { href: "/shore-excursions", label: "Shore Excursions" },
    { href: "/cruise-port-guide", label: "Port Guide" },
    { href: "/guides/one-day-in-vigo", label: "One Day in Vigo" },
  ],
  bookTitle: "Book & contact",
  book: [
    { href: "/ship-schedules", label: "Cruise Ship Schedule" },
    { href: "/enquire", label: "Contact concierge" },
  ],
  independenceClause: "not affiliated with any cruise line or the local port authority.",
};
