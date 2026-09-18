import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Vigo Cruise Port Guide",
  subtitle:
    "Terminal access, walking times to Casco Vello, seafood, transport toward Santiago, honest Cíes Islands caution, and sensible return-to-ship planning.",
  terminals: [
    {
      name: "Vigo passenger cruise facilities",
      quay: "Cruise berths on the Ría de Vigo waterfront passenger area",
      usedBy: "Most cruise ships calling at Vigo on Atlantic Iberian itineraries",
      cityAccess:
        "Often around 15–30 minutes on foot to waterfront, Praza da Compostela and Casco Vello approaches depending on berth and pace; taxis available at peak turnaround",
    },
    {
      name: "Alternative harbour positions",
      quay: "Occasional alternative berths within the wider port complex",
      usedBy: "Selected calls when specific berths are assigned",
      cityAccess:
        "Walking times vary — follow terminal signage and allow a conservative buffer",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Vigo",
      paragraphs: [
        "Cruise ships use Vigo’s passenger facilities on the Ría de Vigo waterfront. Unlike sprawling mega-ports that strand guests far from sightseeing, Vigo places harbour promenade, Praza da Compostela and Casco Vello within a realistic walk for many passengers.",
        "Check the ship’s daily programme and terminal signage on arrival. Shuttle arrangements vary by line and berth; many guests walk directly toward the city centre along the waterfront.",
        "Vigo is an excellent base for a city day on foot. Santiago de Compostela and the Cíes Islands are separate journeys requiring different timing — and different honesty about risk.",
      ],
    },
    {
      heading: "Walking from the port",
      paragraphs: [
        "From the main passenger facilities, follow signs toward the city centre and waterfront promenade rather than wandering the working port.",
        "Allow roughly 15–30 minutes to reach Praza da Compostela and Casco Vello approaches in normal conditions. Routes include urban pavements before stone lanes begin.",
        "If mobility, weather or luggage are factors, take a short taxi instead of proving a point.",
      ],
    },
    {
      heading: "Casco Vello and harbour highlights",
      paragraphs: [
        "Praza da Compostela and Porta do Sol orient most first visits — allow time to absorb the atmosphere rather than a single exterior photograph.",
        "Casco Vello offers stone lanes, Praza da Constitución and Santa María Collegiate Church.",
        "A Pedra oyster stalls and the marina deliver Vigo’s maritime character when you want a local pause.",
      ],
    },
    {
      heading: "Food and Galician flavour",
      paragraphs: [
        "Oyster culture and Galician seafood sit inside a walkable historic hinterland — you do not need a long transfer to eat well.",
        "Build lunch or a tasting into your Casco Vello loop so you stay oriented toward the ship.",
        "A guided food experience helps if you want curated tastings; otherwise independent stall and café hopping works well.",
      ],
    },
    {
      heading: "Transport beyond the city",
      paragraphs: [
        "Taxis wait at or near the terminal when ships are in port. Show the driver the cruise terminal or your ship name for the return.",
        "Santiago days need operators who plan backwards from all-aboard — a best-case journey time is not an adequate return plan.",
        "Cíes Islands ferries are seasonal and capacity-controlled. Many cruise schedules do not leave a safe window. Never risk missing the ship for an island crossing.",
      ],
    },
    {
      heading: "A realistic independent city day",
      paragraphs: [
        "Start along the waterfront before coach groups concentrate at Porta do Sol.",
        "Explore Casco Vello, then spend the afternoon with oysters, marina light or cafés without another long transfer.",
        "Keep the final hour ashore oriented toward the terminal so an unexpected queue does not threaten all-aboard.",
      ],
    },
    {
      heading: "Return-to-ship planning",
      paragraphs: [
        "Confirm all-aboard time — earlier than published departure. For a Vigo city day, reach the terminal 60–90 minutes before all-aboard.",
        "For Santiago drives, the operator should plan with road traffic contingency.",
        "Independent travellers are responsible for reaching the ship. If a long road trip or island ferry does not leave a conservative margin, choose the city instead.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "Can I walk into Vigo from the cruise terminal?",
      answer:
        "Yes. Many passengers reach the waterfront and Casco Vello approaches within roughly 15–30 minutes on foot from the main passenger area.",
    },
    {
      question: "What can I see close to Vigo port?",
      answer:
        "The waterfront promenade, Praza da Compostela, Porta do Sol, Casco Vello, Santa María, A Pedra oysters and the marina are all within a compact walking area for most guests.",
    },
    {
      question: "Do I need transport for Casco Vello?",
      answer:
        "Usually not. It is walkable from many berths, though stone and gentle slopes may suit comfortable footwear.",
    },
    {
      question: "Are the Cíes Islands an easy independent trip from the port?",
      answer:
        "Rarely on a cruise day. Season, capacity controls and ferry timing make many calls unsafe for an island attempt. Never risk missing the ship.",
    },
    {
      question: "How early should I be back?",
      answer:
        "Reach the terminal 60–90 minutes before all-aboard for a city day, with a larger road contingency for Santiago.",
    },
  ] as FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;
