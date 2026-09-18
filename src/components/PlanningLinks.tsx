import Link from "next/link";

const LINKS = [
  { href: "/cruise-port-guide", label: "Vigo Cruise Port Guide" },
  { href: "/cruise-planner", label: "Vigo Cruise Planner" },
  { href: "/ship-schedules/vigo", label: "Ship Schedules" },
  { href: "/compare", label: "Compare Galicia" },
  { href: "/wow-collection", label: "The Wow Collection" },
];

export function PlanningLinks() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {LINKS.map((link) => (
        <Link key={link.href} href={link.href} className="btn-secondary text-sm">
          {link.label}
        </Link>
      ))}
    </div>
  );
}
