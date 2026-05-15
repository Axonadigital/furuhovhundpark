import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Clock, Coins, ChevronRight } from "lucide-react";
import { BOKA_URL, EMAIL, PHONE, PHONE_DISPLAY, SITE_NAME } from "@/lib/seo";
import heroOstersund from "@/assets/hero-ostersund.jpg";

const TITLE = "Hundpark i Östersund — Furuhov | Boka tid";
const DESCRIPTION =
  "Furuhov hundpark i Östersund — ca 3 ha stängslad skogsmiljö i Furulund. Öppet dygnet runt, halvtimmes bokningsbara tider för 40 kr. Boka via Bokamera.";

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: `${SITE_NAME} Östersund`,
  description: DESCRIPTION,
  url: "/ostersund",
  telephone: PHONE,
  email: EMAIL,
  priceRange: "40 SEK / 30 min",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Furulund",
    addressLocality: "Östersund",
    addressRegion: "Jämtland",
    addressCountry: "SE",
  },
  areaServed: { "@type": "City", name: "Östersund" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
};

const breadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: "/" },
    { "@type": "ListItem", position: 2, name: "Hundpark Östersund", item: "/ostersund" },
  ],
};

export const Route = createFileRoute("/ostersund")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/ostersund" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/ostersund" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(businessJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbsJsonLd) },
    ],
  }),
  component: OstersundPage,
});

function OstersundPage() {
  return (
    <>

      <section className="relative bg-forest text-forest-foreground overflow-hidden">
        <img
          src={heroOstersund}
          alt="Skogsmiljö i Furulund, Östersund — där Furuhov Hundpark ligger"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/50 via-forest/35 to-forest/70" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 pt-32 md:pt-36 pb-14 md:pb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">Furulund · Östersund</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-wide max-w-3xl">
            Hundpark i Östersund — Furuhov Furulund
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-forest-foreground/85">
            Belägen i utkanten av Östersund i området Furulund. Ca 3 ha i en fin
            park- och skogsmiljö — tänkt som en naturlig mötesplats för alla hundar
            och hundägare i Jämtland.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={BOKA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Boka tid i Östersund <ArrowRight size={18} />
            </a>
            <Link
              to="/as"
              className="inline-flex items-center gap-2 rounded-md border border-forest-foreground/30 px-6 py-3 text-base font-semibold text-forest-foreground hover:bg-forest-foreground/10 transition-colors"
            >
              Se Åsparken istället
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard icon={<Clock size={20} />} label="Öppettider" value="Dygnet runt, året runt" />
          <InfoCard icon={<Coins size={20} />} label="Pris" value="40 kr per halvtimme" />
          <InfoCard icon={<MapPin size={20} />} label="Storlek" value="Ca 3 ha skogsmark" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 grid gap-12 lg:grid-cols-2">
        <article>
          <h2 className="font-display text-3xl md:text-4xl tracking-wide">Om parken</h2>
          <div className="mt-4 space-y-4 text-card-foreground/90">
            <p>
              Furuhovs hundpark i Östersund ligger i Furulund, i utkanten av staden.
              Parken är ca 3 hektar stor och inhägnad — du kan släppa hunden lös och
              låta den springa, leka och träna i en naturlig skogsmiljö.
            </p>
            <p>
              I parken finns en fikaplats i vindskydd, så du kan slå dig ner med en
              kopp kaffe medan hunden får utlopp för sin energi. Bajspåsar och
              soptunnor finns på plats — rasta gärna hunden innan ni går in.
            </p>
            <p>
              Vi erbjuder hundpark i Östersund och hela Jämtland, och vill att den
              ska vara en trygg mötesplats för hundägare året om. Det finns ingen
              maxgräns för antalet hundar, men varje person ansvarar för sin egen.
            </p>
          </div>

          <h2 className="mt-10 font-display text-3xl md:text-4xl tracking-wide">Hitta hit</h2>
          <div className="mt-4 space-y-4 text-card-foreground/90">
            <p>
              Ta RV 87 mot Stugun från Lillängerondellen. Sväng vänster i backens
              slut, därefter första vänster. Du hittar parkering i slutet av vägen.
              Ingången till parken ligger ca 300 meter från parkeringen.
            </p>
            <p className="text-sm text-muted-foreground">
              Tips: rasta gärna hunden innan ni går in i parken.
            </p>
          </div>
        </article>

        <aside>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <iframe
              title="Karta — Furuhov hundpark Östersund (Furulund)"
              src="https://www.google.com/maps?q=Furulund+%C3%96stersund&output=embed"
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
            <div className="p-5">
              <p className="font-display text-xl tracking-wide">Furulund, Östersund</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Hundpark i Furulund — ca 3 ha stängslad skogsmiljö.
              </p>
              <a
                href="https://www.google.com/maps?q=Furulund+%C3%96stersund"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-primary font-semibold"
              >
                Öppna i Google Maps <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </aside>
      </section>

      <CtaSection phone={PHONE} phoneDisplay={PHONE_DISPLAY} email={EMAIL} parkName="Östersund" />
    </>
  );
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 text-primary">{icon}<span className="text-xs uppercase tracking-wider font-semibold">{label}</span></div>
      <p className="mt-2 font-display text-2xl tracking-wide text-card-foreground">{value}</p>
    </div>
  );
}

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Brödsmulor" className="mx-auto max-w-6xl px-4 pt-6">
      <ol className="flex items-center gap-1 text-sm text-muted-foreground">
        <li><Link to="/" className="hover:text-primary">Start</Link></li>
        <li aria-hidden="true"><ChevronRight size={14} /></li>
        <li className="text-foreground font-medium" aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}

export function CtaSection({
  phone,
  phoneDisplay,
  email,
  parkName,
}: {
  phone: string;
  phoneDisplay: string;
  email: string;
  parkName: string;
}) {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl tracking-wide">
            Boka din halvtimme i {parkName}
          </h2>
          <p className="mt-3 text-secondary-foreground/80 max-w-md">
            40 kr per halvtimme. Bokas i appen Bokamera eller på furuhov.bokamera.se.
            Betalning sker med Swish.
          </p>
        </div>
        <div className="grid gap-3">
          <a
            href={BOKA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Boka på Bokamera
          </a>
          <div className="grid grid-cols-2 gap-3">
            <a href={`tel:${phone}`} className="rounded-md border border-border bg-card px-4 py-3 text-center text-sm font-semibold hover:border-primary transition-colors">
              {phoneDisplay}
            </a>
            <a href={`mailto:${email}`} className="rounded-md border border-border bg-card px-4 py-3 text-center text-sm font-semibold hover:border-primary transition-colors">
              E-post
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
