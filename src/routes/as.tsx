import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Clock, Coins } from "lucide-react";
import { BOKA_URL, EMAIL, PHONE, PHONE_DISPLAY, SITE_NAME } from "@/lib/seo";
import { Breadcrumbs, CtaSection } from "./ostersund";
import heroAs from "@/assets/hero-as.jpg";

const TITLE = "Hundpark i Ås — Furuhov | Boka tid";
const DESCRIPTION =
  "Furuhov hundpark i Ås — ca 3 ha stängslad skogsmiljö längs gamla E75:an, mellan Torsta och E14. Öppet dygnet runt, halvtimmestider för 40 kr.";

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: `${SITE_NAME} Ås`,
  description: DESCRIPTION,
  url: "/as",
  telephone: PHONE,
  email: EMAIL,
  priceRange: "40 SEK / 30 min",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gamla E75:an",
    addressLocality: "Ås",
    addressRegion: "Jämtland",
    addressCountry: "SE",
  },
  areaServed: { "@type": "Place", name: "Ås, Krokoms kommun" },
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
    { "@type": "ListItem", position: 2, name: "Hundpark Ås", item: "/as" },
  ],
};

export const Route = createFileRoute("/as")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/as" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/as" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(businessJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbsJsonLd) },
    ],
  }),
  component: AsPage,
});

function AsPage() {
  return (
    <>
      <section className="relative bg-forest text-forest-foreground overflow-hidden">
        <img
          src={heroAs}
          alt="Snötäckt skogsmiljö vid Furuhov Hundpark i Ås med hund i förgrunden"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/25 via-forest/15 to-forest/45" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 pt-32 md:pt-36 pb-14 md:pb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">Ås · Krokoms kommun</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl tracking-wide max-w-3xl">
            <span className="md:hidden">Hundpark i Ås</span>
            <span className="hidden md:inline">Hundpark i Ås — Furuhov Åsparken</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-forest-foreground/85">
            <span className="md:hidden">Ca 3 ha stängslad skogsmiljö längs gamla E75:an med vindskydd och fikaplats.</span>
            <span className="hidden md:inline">Belägen längs gamla E75:an nedanför Torsta. Ca 3 ha stängslad fin skogsmiljö med vindskydd och fikaplats — perfekt för hundpromenaden i Ås och övriga Jämtland.</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={BOKA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Boka tid i Ås <ArrowRight size={18} />
            </a>
            <Link
              to="/ostersund"
              className="inline-flex items-center gap-2 rounded-md border border-forest-foreground/30 px-6 py-3 text-base font-semibold text-forest-foreground hover:bg-forest-foreground/10 transition-colors"
            >
              Se Östersundsparken istället
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
          <h2 className="font-display text-3xl md:text-4xl tracking-wide">Om Åsparken</h2>
          <div className="mt-4 space-y-4 text-card-foreground/90">
            <p>
              Åsparken är ca 3 hektar stor stängslad skogsmark längs gamla E75:an,
              mellan Torsta naturbruksgymnasium och E14. Här kan du släppa hunden
              lös i en lugn och avskärmad skogsmiljö.
            </p>
            <p>
              I parken finns vindskydd med fikaplats där du kan ta en kopp kaffe
              medan hunden leker och tränar. Bajspåsar och soptunnor finns — rasta
              gärna er hund innan ni går in.
            </p>
            <p>
              Vi erbjuder hundpark i Ås och välkomnar alla hundägare i Krokoms
              kommun och övriga Jämtland. Endast bokningsbara tider gäller — du
              betalar 40 kr per halvtimme via Swish.
            </p>
          </div>

          <h2 className="mt-10 font-display text-3xl md:text-4xl tracking-wide">Hitta hit</h2>
          <div className="mt-4 space-y-4 text-card-foreground/90">
            <p>
              Åsparken ligger mellan Torsta naturbruksgymnasium och E14. Ta av i
              Åskorset och åk mot Ås kyrka. Sväng ner Torstavägen mot E14 — efter
              ca 500 meter svänger du vänster in på gamla E75:an. Vid skogens
              början ligger parken på höger sida.
            </p>
            <p>
              <a
                href="https://goo.gl/maps/MdmpvZXQXGh7RQjg7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold inline-flex items-center gap-1"
              >
                Öppna vägbeskrivning i Google Maps <ArrowRight size={14} />
              </a>
            </p>
          </div>
        </article>

        <aside>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <iframe
              title="Karta — Furuhov hundpark Ås"
              src="https://www.google.com/maps?q=%C3%85s+Krokom+J%C3%A4mtland&output=embed"
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
            <div className="p-5">
              <p className="font-display text-xl tracking-wide">Åsparken, gamla E75:an</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Mellan Torsta naturbruksgymnasium och E14.
              </p>
              <a
                href="https://goo.gl/maps/MdmpvZXQXGh7RQjg7"
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

      <CtaSection phone={PHONE} phoneDisplay={PHONE_DISPLAY} email={EMAIL} parkName="Ås" />
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
