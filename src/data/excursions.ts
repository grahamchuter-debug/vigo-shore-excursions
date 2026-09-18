import type { ExcursionPage } from "./types";

const PORT_LOGISTICS =
  "Cruise ships berth at Vigo’s passenger facilities on the Ría de Vigo waterfront. The approaches to Praza da Compostela, Porta do Sol and Casco Vello are typically a realistic walk for most guests — often around 15–30 minutes depending on berth, pace and route. Follow terminal signage toward the city centre rather than wandering working-port areas. For Santiago de Compostela and other Galicia days, confirm meeting instructions and plan from your ship’s all-aboard time, not merely the published departure. Aim to be back at the terminal 60–90 minutes early; longer countryside days need the larger end of that buffer.";

const SEG_SUPPLIER = {
  kind: "shore-excursions-group" as const,
  name: "Shore Excursions Group",
  notes: "Partner network — confirm availability for your sailing. Catalogue imported from shoreexcursionsgroup.com/port/vigo-shore-excursions.",
};

const RETURN_GUARANTEE =
  "Return to ship guarantee: itineraries are planned around your Vigo cruise call so you are back at the terminal with time before all-aboard. If an operational delay on our side causes you to miss the ship, we work with the local provider under the published return-to-ship assurance for that booking.";

export const excursions: ExcursionPage[] = [
  {
    slug: "santiago-de-compostela-from-vigo",
    title: "Journey to Santiago de Compostela from Vigo",
    seoTitle: "Santiago de Compostela from Vigo | Editor's Choice Shore Excursion",
    metaDescription:
      "Editor's Choice Vigo shore excursion to Santiago de Compostela — scenic Galician countryside and UNESCO cathedral city, paced for cruise passengers.",
    category: "Editor's Choice",
    tagline:
      "Galicia’s historic capital — the strongest overall cruise experience when discovering the region beyond Vigo’s harbour is the priority.",
    duration: "Approximately 7 hours",
    pace: "Moderate",
    bestFor:
      "Cruise visitors who want Santiago de Compostela and Galician countryside context in a single, well-timed day from Vigo",
    overview:
      "Santiago de Compostela is Galicia’s spiritual and architectural capital — a UNESCO-listed city of stone squares, pilgrim energy and one of Europe’s great cathedrals. This Editor’s Choice journey pairs a scenic countryside transfer with guided time in the historic centre, then protects the return to your Vigo berth.",
    body: [
      "We chose this excursion because it delivers the strongest overall cruise experience from Vigo: access to Santiago that independent planning rarely matches within a single port call, without pretending every guest needs to leave the city.",
      "It particularly suits first-time visitors to Galicia who want the region’s iconic destination rather than only harbour and Casco Vello time.",
      "Guests who prefer cafés, oysters and a self-guided Vigo walk may be happier exploring independently — and that is a genuinely excellent choice from this port.",
      "Expect coach time through Galician countryside, walking on historic surfaces in Santiago, and a day that needs a solid usable window ashore. Exact sequencing flexes with group pace and ship timing.",
    ],
    highlights: [
      "Scenic drive through Galician countryside",
      "Guided orientation in Santiago de Compostela",
      "Cathedral and historic centre highlights as timing allows",
      "Cruise-timed meeting from Vigo",
      "Return planned around all-aboard",
    ],
    itinerary: [
      {
        title: "Meet near the Vigo cruise port",
        detail:
          "Join your guide or coach near the passenger area and confirm timing against your ship’s all-aboard.",
      },
      {
        title: "Galician countryside transfer",
        detail:
          "Travel inland through Galicia’s green landscapes toward Santiago — part of the day’s regional character, not merely dead time.",
      },
      {
        title: "Santiago historic centre",
        detail:
          "Explore key squares and cathedral approaches with commentary on pilgrimage history and Galician identity.",
      },
      {
        title: "Return to Vigo",
        detail:
          "Retrace to the cruise port with a planned buffer before all-aboard.",
      },
    ],
    included: [
      "Port meeting and return planning in Vigo",
      "Round-trip transport to Santiago de Compostela",
      "English-speaking guide commentary",
      "Return planned around the ship’s all-aboard",
    ],
    notIncluded: [
      "Entrance fees for cathedral interiors or museums unless stated on your voucher",
      "Lunch and personal purchases",
      "Gratuities",
      "Hotel or airport transfers",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear comfortable shoes — Santiago’s historic centre is cobbled",
      "Bring a light layer; Galician weather can shift quickly",
      "If you want maximum unstructured city time in Vigo, consider Walk It Yourself instead",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Why is this Editor's Choice?",
        answer:
          "Among Vigo’s organised options, Santiago delivers the strongest overall cruise experience: Galicia’s most iconic destination, scenic regional context, and a format designed around ship timing. City walks and e-bike tours are excellent — this is the day we choose when discovering Galicia beyond the harbour matters most.",
      },
      {
        question: "Can I realistically visit Santiago from Vigo in one day?",
        answer:
          "Yes, when your usable hours ashore support a roughly seven-hour excursion plus a proper return buffer. Booking a guided option helps keep timing smooth so you can focus on the historic centre rather than transfer logistics.",
      },
      {
        question: "Do I need this tour, or can I stay in Vigo?",
        answer:
          "You can — and many should — stay in Vigo. Choose Santiago when the region’s capital is your priority; choose independence when harbour walks, Casco Vello and seafood are enough.",
      },
    ],
    relatedExcursionSlugs: [
      "galician-culture-historical-walk",
      "galician-heritage-ebike",
      "private-galician-old-town-walk",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — coach travel plus historic-centre walking",
    cruiseSuitability: "Best with a fuller, unhurried port call and solid usable time ashore",
    editorChoice: true,
    whyWeChose: {
      lead: "Santiago de Compostela is Galicia’s defining inland destination — and from Vigo it is the organised day that most completely rewards a cruise call.",
      whyRecommended:
        "Independent Vigo is superb for harbour, seafood and Casco Vello. When guests want Galicia beyond the city, Santiago delivers iconic architecture, pilgrimage atmosphere and countryside context in one coherent journey.",
      whoItSuits:
        "First-time visitors to Galicia, culture travellers and anyone who prefers a landmark regional day over a purely local city stroll.",
      whatMakesItSpecial:
        "You leave understanding why Santiago anchors Galician identity — not only photographing Vigo’s waterfront — while still returning under cruise-aware timing.",
      cruiseFit:
        "A full-day format that needs honest hours ashore, but stays within a realistic Vigo-based circuit when buffers are respected.",
      theExperience:
        "You discover why Vigo is a gateway to Atlantic Galicia — and you still walk back to the ship with composure.",
    },
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "galician-heritage-ebike",
    title: "Galician Heritage and Vigo Discovery by E-Bike",
    seoTitle: "Vigo E-Bike Shore Excursion — Galician Heritage Discovery",
    metaDescription:
      "Cruise-friendly Vigo e-bike excursion through Casco Vello, maritime landmarks and estuary viewpoints — Galician heritage at a moderate pace.",
    category: "Active",
    tagline:
      "Cover more of Vigo’s story on an e-bike — Casco Vello, maritime landmarks and estuary views without a coach day.",
    duration: "Approximately 3 hours",
    pace: "Active",
    bestFor:
      "Active guests who want wider Vigo coverage than a walking circuit, with cultural context and harbour scenery",
    overview:
      "This e-bike discovery combines Galician emigration stories, Roman relics, Casco Vello charm and estuary viewpoints — a compact active format close to the cruise hinterland.",
    body: [
      "Ideal when you want more ground than a stroll but still prefer to stay in Vigo rather than commit to Santiago.",
      "E-bikes ease gentle hills and longer urban routes; they suit guests who are comfortable cycling at a moderate pace.",
      "If you prefer complete independence on foot, our Walk It Yourself guide covers a classic historic loop honestly.",
    ],
    highlights: [
      "Electric-bike coverage of key Vigo landmarks",
      "Casco Vello and maritime heritage stops",
      "Estuary viewpoints as routing allows",
      "Small-group active format",
      "Time still left for independent exploring afterwards",
    ],
    itinerary: [
      {
        title: "Meet and bike briefing",
        detail: "Join near a practical cruise meeting point, fit helmets and confirm the route against all-aboard.",
      },
      {
        title: "Heritage and harbour circuit",
        detail:
          "Ride past cultural landmarks, historic districts and viewpoints such as El Castro Park outlooks as timing allows.",
      },
      {
        title: "Return toward the port",
        detail: "Finish near a practical point for independent time or the walk back to the ship.",
      },
    ],
    included: [
      "E-bike and helmet",
      "English-speaking guide",
      "Cruise-aware pacing",
    ],
    notIncluded: [
      "Food and drinks",
      "Gratuities",
      "Personal purchases",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear closed, comfortable shoes suitable for cycling",
      "Not ideal in heavy rain — check conditions on the day",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Do I need to be an avid cyclist?",
        answer:
          "E-bikes are designed to make riding easier on gentle hills and longer routes. They suit guests comfortable on a bicycle at a moderate pace — not a high-intensity sport ride.",
      },
    ],
    relatedExcursionSlugs: [
      "santiago-de-compostela-from-vigo",
      "galician-culture-historical-walk",
      "private-galician-old-town-walk",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Active — e-bike riding with brief walking stops",
    cruiseSuitability: "Works well on a half day or longer flexible call",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "galician-culture-historical-walk",
    title: "Galician Culture and Historical Walk in Vigo",
    seoTitle: "Vigo Walking Tour — Galician Culture Shore Excursion",
    metaDescription:
      "Two-hour guided walking tour of historic Vigo for cruise passengers — squares, churches and maritime heritage near the port.",
    category: "Walking",
    tagline:
      "A compact guided introduction to Vigo’s squares, churches and maritime character.",
    duration: "Approximately 2 hours",
    pace: "Moderate",
    bestFor:
      "Guests who want local narrative in the historic centre while still keeping free time for oysters, cafés or viewpoints",
    overview:
      "A knowledgeable local guide leads a two-hour walk through iconic landmarks — from lively squares to historic churches — balancing historical insight with scenic harbour-city atmosphere.",
    body: [
      "Choose this when you want stories behind Casco Vello façades without committing to a full Santiago day.",
      "Pairs naturally with independent oyster time at A Pedra afterwards.",
      "Guests seeking complete flexibility may prefer Walk It Yourself alone.",
    ],
    highlights: [
      "Guided historic walking circuit",
      "Squares, churches and maritime context",
      "Compact two-hour format",
      "Near the cruise waterfront",
      "Time left for independent seafood or café stops",
    ],
    itinerary: [
      {
        title: "Meet near the historic approach",
        detail: "Join your guide and set a comfortable walking pace from the port side of the centre.",
      },
      {
        title: "Squares and sacred landmarks",
        detail: "Explore key plazas and church approaches with Galician cultural commentary.",
      },
      {
        title: "Free time",
        detail: "Finish near a practical point for A Pedra, the marina or the return walk.",
      },
    ],
    included: [
      "English-speaking local guide",
      "Historic centre orientation",
      "Cruise-aware pacing",
    ],
    notIncluded: [
      "Entrance fees unless stated on your voucher",
      "Food and drinks",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Comfortable shoes for cobbles and gentle slopes",
      "Excellent before or after an oyster pause at A Pedra",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is this different from Editor's Choice?",
        answer:
          "Yes. Editor’s Choice is the Santiago de Compostela day. This is a shorter Vigo city walking focus for guests staying in the harbour city.",
      },
    ],
    relatedExcursionSlugs: [
      "santiago-de-compostela-from-vigo",
      "private-galician-old-town-walk",
      "galician-heritage-ebike",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — historic streets and gentle slopes",
    cruiseSuitability: "Excellent on shorter or flexible port calls",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-galician-old-town-walk",
    title: "Private Galician Old Town Walk in Vigo",
    seoTitle: "Private Vigo Old Town Walking Tour — Shore Excursion",
    metaDescription:
      "Private two-hour walking tour of Vigo’s Casco Vello for cruise passengers — Santa María, Praza da Constitución and fishermen’s quarter stories.",
    category: "Private",
    tagline:
      "An intimate private walk through Casco Vello — tailored pacing for your own party.",
    duration: "Approximately 2 hours",
    pace: "Moderate",
    bestFor:
      "Couples, families and small parties who want private commentary and flexible stops in the Old Town",
    overview:
      "Uncover Vigo’s rich history on a private two-hour walk — Colegiata de Santa María, Praza da Constitución and the fishermen’s quarter atmosphere of Barrio del Berbés — shaped around your group rather than a fixed coach roster.",
    body: [
      "Best when privacy and pacing matter more than a shared group dynamic.",
      "Still leaves room for independent oyster or marina time afterwards.",
      "Not required for a successful independent day — Walk It Yourself remains an excellent free alternative.",
    ],
    highlights: [
      "Private local guide for your party",
      "Casco Vello and sacred landmarks",
      "Fishermen’s quarter stories",
      "Flexible two-hour pacing",
      "Cruise-aware meeting and return planning",
    ],
    itinerary: [
      {
        title: "Private meet near the Old Town approach",
        detail: "Join your guide and confirm interests, mobility and all-aboard timing.",
      },
      {
        title: "Casco Vello circuit",
        detail:
          "Explore plazas, Santa María approaches and historic lanes at a pace suited to your group.",
      },
      {
        title: "Berbés and free time",
        detail: "Finish toward the fishermen’s quarter or a practical return point for independent exploring.",
      },
    ],
    included: [
      "Private English-speaking guide",
      "Customisable Old Town orientation",
      "Cruise-aware pacing",
    ],
    notIncluded: [
      "Entrance fees unless stated on your voucher",
      "Food and drinks",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Share mobility needs when booking so the route can flex",
      "Combine with A Pedra oysters for a classic Vigo finish",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is a private walk necessary?",
        answer:
          "No. Many visitors explore Casco Vello independently. Choose private when you want tailored commentary, flexible stops or a quieter group dynamic.",
      },
    ],
    relatedExcursionSlugs: [
      "galician-culture-historical-walk",
      "santiago-de-compostela-from-vigo",
      "galician-heritage-ebike",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — historic lanes and gentle slopes",
    cruiseSuitability: "Works well on shorter or flexible port calls",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
];

export function getExcursionBySlug(slug: string): ExcursionPage | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getFeaturedExcursions(): ExcursionPage[] {
  return excursions.filter((e) => e.featured);
}

export function getEditorChoiceExcursion(): ExcursionPage | undefined {
  return excursions.find((e) => e.editorChoice);
}

export function getAllExcursionSlugs(): string[] {
  return excursions.map((e) => e.slug);
}
