import vigoSchedule from "./imported-schedules/vigo.json";
import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";

/**
 * Schedule framework is ready for Vigo.
 * Do not publish sample or fictitious ship calls as live data.
 * Keep entries empty until confirmed schedules are available.
 */
const SCHEDULE_FAQS = [
  {
    question: "How accurate are Vigo cruise ship schedules?",
    answer: "Schedules are compiled from published cruise timetables and updated periodically. Always confirm arrival, departure and all-aboard times with your cruise line.",
  },
  {
    question: "Where do cruise ships berth in Vigo?",
    answer:
      "Cruise ships use Vigo’s passenger facilities on the Ría de Vigo waterfront. Walking time into the waterfront and Casco Vello is typically realistic for many guests; follow terminal signage on the day.",
  },
  {
    question: "Is a Vigo call long enough for Santiago or the Cíes Islands?",
    answer:
      "A full day in port can support a cruise-timed Santiago excursion, but road time is longer than a city half day. The Cíes Islands are seasonal and capacity-controlled — many calls simply do not leave a safe window. Shorter calls are better suited to harbour walking and Casco Vello.",
  },
];

const SCHEDULE_TIPS = [
  "Confirm all-aboard time rather than relying only on the published departure",
  "Allow a generous buffer when returning from Santiago",
  "Keep a lighter Plan B (Vigo on foot) if your call is shortened or island tickets fail",
  "The historic centre is close — independent exploration works well on shorter windows",
  "Never risk missing the ship for a Cíes ferry that cannot guarantee return",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "vigo",
    name: "Vigo",
    country: "Spain",
    seoTitle: "Vigo Cruise Ship Schedule — Atlantic Galicia Port Calls",
    metaDescription:
      "Vigo cruise ship schedule framework for planning Casco Vello, seafood, Santiago and careful Cíes Islands decisions. Confirmed calls publish when verified.",
    intro:
      "Vigo is an Atlantic harbour city beside a walkable cruise waterfront — and a gateway to Galicia when your hours ashore allow.",
    description:
      "Ría de Vigo harbour city with access to Casco Vello, Galician seafood and inland Santiago, plus constrained seasonal access toward the Cíes Islands.",
    scheduleOverview:
      "Verified published calls for this planning window. Always confirm arrival, departure and all-aboard times with your cruise line.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  vigo: vigoSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((port) => port.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((port) => port.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getScheduleMonths(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function getScheduleYears(slug: string): ScheduleYear[] {
  const years = new Set<ScheduleYear>();
  for (const entry of getScheduleEntries(slug)) {
    const y = Number(entry.date.slice(0, 4)) as ScheduleYear;
    if (y) years.add(y);
  }
  return [...years].sort();
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const normalised = query.toLowerCase().trim();
  if (!normalised) return [];

  return schedulePorts
    .map((port) => ({
      portSlug: port.slug,
      entries: getScheduleEntries(port.slug).filter(
        (entry) =>
          entry.ship.toLowerCase().includes(normalised) ||
          entry.cruiseLine.toLowerCase().includes(normalised),
      ),
    }))
    .filter((result) => result.entries.length > 0);
}

export function getTodayTomorrowEntries(slug: string): {
  today: ScheduleEntry[];
  tomorrow: ScheduleEntry[];
} {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateKey = (date: Date) => date.toISOString().slice(0, 10);

  return {
    today: entries.filter((entry) => entry.date === dateKey(today)),
    tomorrow: entries.filter((entry) => entry.date === dateKey(tomorrow)),
  };
}
