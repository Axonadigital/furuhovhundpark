import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Coins, ArrowRight, PawPrint } from "lucide-react";
import { BOKA_URL, EMAIL, PHONE, PHONE_DISPLAY, SITE_NAME } from "@/lib/seo";
import heroImage from "@/assets/hero-as.jpg";
import parkInfoImage from "@/assets/parkinformation.png";
import cardOstersund from "@/assets/card-ostersund.png";
import cardAs from "@/assets/card-as.png";

const TITLE = "Hundpark i Östersund och Ås | Furuhov Hundpark";
const DESCRIPTION =
  "Furuhov Hundpark erbjuder två stängslade hundparker i fin skogsmiljö i Östersund och Ås. Öppet dygnet runt — boka en halvtimme för 40 kr.";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description: DESCRIPTION,
  url: "/",
  telephone: PHONE,
  email: EMAIL,
  priceRange: "40 SEK / 30 min",
  image: "/og-default.png",
  areaServed: [
    { "@type": "City", name: "Östersund" },
    { "@type": "Place", name: "Ås, Krokoms kommun" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Östersund",
    addressRegion: "Jämtland",
    addressCountry: "SE",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hur bokar jag tid i hundparken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ladda ner appen Bokamera och sök efter Furuhov, eller boka via furuhov.bokamera.se. Betalning sker med Swish.",
      },
    },
    {
      "@type": "Question",
      name: "Vad kostar det att använda parken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Varje halvtimme kostar 40 kr inklusive moms. Alla hundägare betalar för sitt besök, även gäst med hund på bokad tid.",
      },
    },
    {
      "@type": "Question",
      name: "När är parkerna öppna?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Båda parkerna är öppna dygnet runt, året runt. Halvtimmes bokningsbara tider gäller alltid.",
      },
    },
    {
      "@type": "Question",
      name: "Måste min hund vara vaccinerad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, alla hundar i parken ska vara vaccinerade. Sjuka hundar stannar hemma.",
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: HomePage,
});

const RULES = [
  "Det är allas ansvar att medverka till trivseln i parkerna.",
  "Alla hundägare betalar för sitt besök, även gäst med hund på bokad tid.",
  "Plocka upp efter er hund.",
  "Alla hundar i parken ska vara vaccinerade.",
  "Ni släpper er hund på eget ansvar.",
  "Ta av halsband och selar.",
  "All kampträning är strikt förbjuden.",
  "Det är inte tillåtet att använda parkerna för organiserad kursverksamhet.",
  "Sjuka hundar stannar hemma (smittsam sjukdom).",
  "Se parken som ett område för lek och träning, ej som toalett. Rasta innan ert besök.",
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-forest text-forest-foreground overflow-hidden">
        <img
          src={heroImage}
          alt="Hundägare med hund vid Furuhov Hundparks grind i jämtländsk skogsmiljö"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/20 via-forest/10 to-forest/40" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 pt-28 md:pt-40 pb-20 md:pb-28">
          <p className="font-sans text-sm uppercase tracking-[0.2em] text-primary font-semibold">
            Östersund · Ås
          </p>
          <h1 className="mt-3 font-display text-5xl md:text-7xl tracking-wide max-w-3xl">
            Furuhov Hundparker
          </h1>
          <p className="mt-5 max-w-xl text-lg text-forest-foreground/85">
            Släpp hunden lös i lugn skogsmiljö — Östersund & Ås, dygnet runt.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={BOKA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Boka tid på Bokamera <ArrowRight size={18} />
            </a>
            <Link
              to="/ostersund"
              className="inline-flex items-center gap-2 rounded-md border border-forest-foreground/30 px-6 py-3 text-base font-semibold text-forest-foreground hover:bg-forest-foreground/10 transition-colors"
            >
              Se parkerna
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            <Stat icon={<Clock size={18} />} label="Öppet" value="Dygnet runt" />
            <Stat icon={<Coins size={18} />} label="Pris" value="40 kr / 30 min" />
            <Stat icon={<PawPrint size={18} />} label="Storlek" value="Ca 3 ha / park" />
            <Stat icon={<MapPin size={18} />} label="Platser" value="Östersund · Ås" />
          </dl>
        </div>
      </section>

      {/* PARK CARDS */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl tracking-wide">Våra två parker</h2>
          <p className="mt-3 text-muted-foreground">
            Båda parkerna är ca 3 ha stängslad skogsmark med fikaplats i vindskydd.
            Välj den park som passar dig bäst — eller varför inte testa båda?
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ParkCard
            to="/ostersund"
            title="Furuhov Östersund"
            location="Furulund, Östersund"
            description="Belägen i utkanten av Östersund i Furulund. Ca 3 ha i fin park- och skogsmiljö — en naturlig mötesplats för hundar och hundägare."
            image={cardOstersund}
            imageAlt="Furuhov Hundparks stuga med skylt i Furulund, Östersund"
          />
          <ParkCard
            to="/as"
            title="Furuhov Ås"
            location="Längs gamla E75:an, Ås"
            description="Längs gamla E75:an nedanför Torsta. Ca 3 ha stängslad skogsmiljö med vindskydd och fikaplats — perfekt för dagens hundpromenad."
            image={cardAs}
            imageAlt="Skogsstig som leder fram till vindskydd vid Furuhov Hundpark i Ås"
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="font-display text-4xl md:text-5xl tracking-wide max-w-2xl">
            Så funkar det
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Du betalar bara när du använder parken. Tre enkla steg så är du igång.
          </p>

          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            <Step
              n={1}
              title="Ladda ner Bokamera"
              text="Hämta appen Bokamera och sök efter Furuhov. Skapa ett konto — det går snabbt."
            />
            <Step
              n={2}
              title="Boka en halvtimme"
              text="Välj park och tid som passar. Endast bokningsbara tider gäller — parken är din under bokad halvtimme."
            />
            <Step
              n={3}
              title="Betala med Swish"
              text="40 kr per halvtimme. Förskottsbetalning via mail eller QR-kod i entrén. Swishnummer: 123 164 0556."
            />
          </ol>

          <div className="mt-8">
            <a
              href={BOKA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Boka direkt <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* PARK INFO */}
      <section id="parkinformation" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-muted h-full min-h-[420px] lg:min-h-[640px]">
            <img
              src={parkInfoImage}
              alt="Furuhov Hundpark — stängslad skogsmiljö med vindskydd och fikaplats"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide">Parkinformation</h2>
            <p className="mt-3 text-muted-foreground">
              Bra att veta innan ditt besök i någon av våra parker.
            </p>
            <ul className="mt-6 space-y-4 text-card-foreground">
              <InfoItem title="Plocka upp efter hunden">
                All hundbajs plockas upp. Rasta gärna innan ni går in i parken — bajspåsar
                och soptunnor finns på plats.
              </InfoItem>
              <InfoItem title="Ingen kamphundsträning">
                All kamphundsträning är strikt förbjuden i parkerna.
              </InfoItem>
              <InfoItem title="Naturlig miljö — på egen risk">
                I parken finns kvist, stubbar, sten m.m. som kan skada både människa och hund.
                Vid skada orsakad av naturen tar Furuhov inget ansvar.
              </InfoItem>
              <InfoItem title="Antal hundar">
                Det finns ingen maxgräns för antalet hundar, men varje person ansvarar själv för
                sin eller sina hundar.
              </InfoItem>
              <InfoItem title="Försäkrad, vaccinerad, avmaskad">
                Vi ser gärna att era hundar är försäkrade, vaccinerade och avmaskade.
              </InfoItem>
              <InfoItem title="Pris">
                Alla halvtimmar kostar 40 kr inkl. moms.
              </InfoItem>
              <InfoItem title="Koppla i god tid">
                Koppla hunden i god tid innan din halvtimme är slut, så nästa besökare kan
                släppa in lugnt.
              </InfoItem>
            </ul>
          </div>
        </div>
      </section>

      {/* RULES */}
      <section id="regler" className="bg-secondary">
       <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide">Parkens 10 budord</h2>
            <p className="mt-3 text-muted-foreground">
              Enkla regler som gör att alla — både två- och fyrbenta — trivs i parken.
            </p>
          </div>
          <ol className="lg:col-span-2 grid gap-3 sm:grid-cols-2">
            {RULES.map((rule, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-lg border border-border bg-card p-4 text-sm"
              >
                <span className="font-display text-2xl text-primary leading-none">{i + 1}</span>
                <span className="pt-1 text-card-foreground">{rule}</span>
              </li>
            ))}
          </ol>
        </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide">Frågor? Hör av dig.</h2>
            <p className="mt-3 text-forest-foreground/80 max-w-md">
              Markus svarar på frågor om bokning, parkerna och allt annat. Ring,
              mejla eller boka direkt på Bokamera.
            </p>
          </div>
          <div className="grid gap-3">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-between rounded-lg border border-forest-foreground/20 px-5 py-4 hover:bg-forest-foreground/10 transition-colors"
            >
              <span className="text-sm text-forest-foreground/70">Telefon</span>
              <span className="font-semibold">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center justify-between rounded-lg border border-forest-foreground/20 px-5 py-4 hover:bg-forest-foreground/10 transition-colors"
            >
              <span className="text-sm text-forest-foreground/70">E-post</span>
              <span className="font-semibold">{EMAIL}</span>
            </a>
            <a
              href={BOKA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg bg-primary px-5 py-4 text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <span className="text-sm opacity-80">Boka tid</span>
              <span className="font-semibold inline-flex items-center gap-2">
                furuhov.bokamera.se <ArrowRight size={16} />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div>
      <dt className="flex items-center gap-2 text-sm text-forest-foreground/70">
        {icon} {label}
      </dt>
      <dd className="mt-1 font-display text-2xl tracking-wide">{value}</dd>
    </div>
  );
}

function ParkCard({
  to,
  title,
  location,
  description,
  image,
  imageAlt,
}: {
  to: string;
  title: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <Link
      to={to}
      className="group relative block overflow-hidden rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all min-h-[360px]"
    >
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/30 to-transparent" aria-hidden="true" />
      <div className="relative flex h-full flex-col justify-end p-8 text-forest-foreground">
        <div className="flex items-center gap-2 text-sm text-forest-foreground/80">
          <MapPin size={16} /> {location}
        </div>
        <h3 className="mt-3 font-display text-3xl tracking-wide">{title}</h3>
        <p className="mt-3 text-forest-foreground/85">{description}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-primary font-semibold">
          Hitta hit & boka <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}

function InfoItem({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li className="border-l-2 border-primary pl-4">
      <h3 className="font-display text-xl tracking-wide">{title}</h3>
      <p className="mt-1 text-sm text-card-foreground/80">{children}</p>
    </li>
  );
}

function Step({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <li className="rounded-xl bg-card border border-border p-6">
      <span className="font-display text-5xl text-primary">{String(n).padStart(2, "0")}</span>
      <h3 className="mt-2 font-display text-2xl tracking-wide text-card-foreground">{title}</h3>
      <p className="mt-2 text-sm text-card-foreground/80">{text}</p>
    </li>
  );
}

function ForestSilhouette() {
  return (
    <svg
      aria-hidden="true"
      className="absolute bottom-0 left-0 right-0 w-full h-24 md:h-32 text-primary/20"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      fill="currentColor"
    >
      <path d="M0,120 L0,80 L40,40 L60,70 L90,30 L110,65 L140,20 L170,60 L200,35 L230,70 L260,25 L290,60 L320,40 L350,15 L380,55 L420,30 L450,70 L480,25 L510,60 L540,35 L580,15 L610,55 L640,30 L670,70 L700,25 L730,60 L760,40 L800,15 L830,55 L860,30 L890,70 L920,25 L950,60 L980,35 L1020,15 L1050,55 L1080,30 L1110,70 L1140,40 L1170,55 L1200,30 L1200,120 Z" />
    </svg>
  );
}
