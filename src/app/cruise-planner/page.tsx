import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { CruisePlanner } from "@/components/CruisePlanner";

const path = "/cruise-planner";
const description =
  "Build a personalised Vigo cruise plan. Enter your port times, party size, interests, mobility, budget and travel style for tailored Atlantic Galicia recommendations.";

export const metadata = buildMetadata({
  title: "Vigo Cruise Planner — Atlantic Galicia Port Day Itinerary",
  description,
  path,
  keywords: ["Vigo cruise planner", "Atlantic Galicia cruise day plan", "Vigo port day itinerary", "Santiago from Vigo planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Vigo Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Vigo Cruise Planner", description, path })]} />
      <PageHero
        title="Vigo Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial recommendations for Casco Vello, Santiago, the Cíes Islands and independent days."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <CruisePlanner />
        </div>
      </section>
    </>
  );
}
