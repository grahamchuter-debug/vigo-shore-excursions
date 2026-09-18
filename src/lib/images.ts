export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img(
    "hero",
    "Ría de Vigo and Atlantic harbour light — gateway to Galicia from the cruise port",
  ),
  ogDefault: img(
    "og-default",
    "Vigo shore excursions — Casco Vello, seafood and Atlantic Galicia",
  ),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Vigo Shore Excursions",
  },
  port: img("cruise-port", "Vigo cruise port waterfront on the Ría de Vigo"),
} as const;

export const subjectImages: Record<string, SiteImage> = {
  historic: img("historic", "Historic Casco Vello lanes in Vigo, Galicia"),
  coast: img("coast", "Atlantic coastline near Vigo and the Rías Baixas"),
  coastal: img("coastal", "Coastal Galicia scenery from Vigo"),
  walking: img("walking", "Walking historic Vigo from the cruise terminal"),
  food: img("food", "Galician seafood and market flavours in Vigo"),
  "food-and-wine": img("food-and-wine", "Galician cuisine and Atlantic seafood culture"),
  private: img("private", "Private Galician Old Town walk in Vigo"),
  photography: img("photography", "Photography viewpoints over Vigo harbour"),
  wine: img("wine", "Galician dining and Albariño culture"),
  compare: img("compare", "Comparing Vigo shore excursion options"),
  port: img("cruise-port", "Vigo cruise port terminal"),
  nature: img("nature", "Atlantic nature around the Ría de Vigo"),
  family: img("family", "Family-friendly day ashore in Vigo"),
  highlights: img("hero", "Vigo harbour and Atlantic Galicia highlights"),
  city: img("casco-vello", "Casco Vello historic centre in Vigo"),
  "hero-home": img("hero-home", "Atlantic Galicia gateway hero — Vigo cruise port"),
  "cies-islands": img("cies-islands", "Cíes Islands across the Ría de Vigo"),
  "casco-vello": img("casco-vello", "Casco Vello old town streets in Vigo"),
  "ria-de-vigo": img("ria-de-vigo", "Ría de Vigo estuary and harbour views"),
  santiago: img("santiago", "Santiago de Compostela day trip from Vigo"),
  "seafood-market": img("seafood-market", "Seafood market culture in Vigo"),
  "atlantic-coast": img("atlantic-coast", "Atlantic coastline and fishing villages near Vigo"),
  "oyster-market": img("oyster-market", "A Pedra oyster market in Vigo"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "santiago-de-compostela-from-vigo": "santiago",
  "galician-heritage-ebike": "ria-de-vigo",
  "galician-culture-historical-walk": "casco-vello",
  "private-galician-old-town-walk": "walking",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "highlights");
}

export const excursionsHubImage = pick("ria-de-vigo");

const highlightImageKeys: Record<string, string> = {
  "casco-vello": "casco-vello",
  "ria-de-vigo": "ria-de-vigo",
  "cies-islands": "cies-islands",
  "a-pedra-oysters": "oyster-market",
  "atlantic-galicia": "atlantic-coast",
};

const comparisonImageKeys: Record<string, string> = {
  "tour-or-independent": "compare",
  "santiago-or-vigo-city": "santiago",
  "private-tour-vs-small-group": "private",
  "one-day-in-vigo": "walking",
  "best-shore-excursions": "highlights",
  "first-time-vigo-day": "casco-vello",
  "cies-islands-worth-it": "cies-islands",
};

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "highlights");
}

export function getExperienceImage(slug: string): SiteImage {
  return pick(slug);
}

export const guidesHubImage = pick("highlights");

const guideImageKeys: Record<string, string> = {
  historic: "historic",
  walking: "walking",
  compare: "compare",
  port: "port",
  "cruise-port": "port",
  food: "food",
  "food-and-wine": "food-and-wine",
  private: "private",
  coast: "coast",
  coastal: "coastal",
  nature: "nature",
  photography: "photography",
  "cies-islands": "cies-islands",
  "casco-vello": "casco-vello",
  "seafood-market": "seafood-market",
  "oyster-market": "oyster-market",
  "atlantic-coast": "atlantic-coast",
  "ria-de-vigo": "ria-de-vigo",
  santiago: "santiago",
};

export function getGuideImage(imageKey: string): SiteImage {
  return pick(guideImageKeys[imageKey] ?? imageKey);
}

export function getHotelImage(_slug?: string): SiteImage {
  return pick("city");
}

export function getTransferImage(_slug?: string): SiteImage {
  return pick("private");
}
