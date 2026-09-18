import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Can I explore Vigo without an excursion?",
    answer:
      "Yes. Vigo is an easy Atlantic cruise port for independent exploration. Many visitors walk the waterfront and Casco Vello and enjoy a flexible day on foot.",
  },
  {
    question: "How far is Casco Vello from the cruise port?",
    answer:
      "Often around 15–30 minutes on foot from the passenger area, depending on berth, pace and route.",
  },
  {
    question: "Should I book a tour?",
    answer:
      "Book when you want Santiago de Compostela, historical narrative, structured pacing, mobility support, or days beyond the city. Skip when you prefer self-paced wandering, oyster stalls and harbour light.",
  },
  {
    question: "How much walking is involved in Vigo?",
    answer:
      "Stone lanes and gentle slopes are normal in Casco Vello. Waterfront promenades are flatter. Private or transport-assisted formats reduce continuous walking.",
  },
  {
    question: "Is Vigo suitable for limited mobility?",
    answer:
      "Parts of Casco Vello are challenging because of stone and slopes. Ask about transport-assisted options and consider a taxi from the terminal.",
  },
  {
    question: "How much free time should I allow before all-aboard?",
    answer:
      "Protect 60–90 minutes after sightseeing for a city day. Santiago or any island attempt needs the larger end of that buffer — and many Cíes windows are simply not safe.",
  },
  {
    question: "Can I visit the Cíes Islands on a cruise day?",
    answer:
      "Sometimes — but not always. Ferry access is seasonal and capacity-controlled. Never risk missing the ship for a crossing that cannot guarantee your return.",
  },
  {
    question: "What is your Editor's Choice?",
    answer:
      "Journey to Santiago de Compostela from Vigo — the strongest overall cruise experience when discovering Galicia’s historic capital is the priority.",
  },
  {
    question: "What currency is used?",
    answer:
      "Spain uses the euro (EUR). We do not convert or publish placeholder prices; live booking opens once selling prices are verified.",
  },
];

export function getAllFaqs(): FAQ[] {
  const seen = new Set<string>();
  const merged: FAQ[] = [];
  for (const faq of [...getHomepageFaqs(), ...extraFaqs]) {
    if (seen.has(faq.question)) continue;
    seen.add(faq.question);
    merged.push(faq);
  }
  return merged;
}
