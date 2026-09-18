/**
 * Featured-tour helpers — Santiago Editor's Choice used for homepage cards / schema.
 */
import { getBookableProduct } from "@/data/bookable-products";

const flagship = getBookableProduct("santiago-de-compostela-from-vigo");

export const featuredTour = flagship
  ? {
      slug: flagship.slug,
      path: flagship.path,
      bookingPath: flagship.bookingPath,
      cardName: flagship.name,
      fullName: flagship.experienceName,
    }
  : {
      slug: "santiago-de-compostela-from-vigo",
      path: "/shore-excursions/santiago-de-compostela-from-vigo",
      bookingPath: "/book/santiago-de-compostela-from-vigo",
      cardName: "Journey to Santiago de Compostela from Vigo",
      fullName: "Journey to Santiago de Compostela from Vigo",
    };
