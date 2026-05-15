import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Mail, Phone, Facebook, ExternalLink } from "lucide-react";
import { BOKA_URL, EMAIL, FACEBOOK_URL, PHONE, PHONE_DISPLAY, SITE_NAME } from "@/lib/seo";

const TITLE = "Kontakt | Furuhov Hundpark Östersund & Ås";
const DESCRIPTION =
  "Kontakta Furuhov Hundpark — Markus svarar på frågor om bokning, parkerna i Östersund och Ås, samt betalning. Telefon, e-post och Swish.";

const breadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: "/" },
    { "@type": "ListItem", position: 2, name: "Kontakt", item: "/kontakt" },
  ],
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Kontakt — ${SITE_NAME}`,
  url: "/kontakt",
};

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/kontakt" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbsJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(contactJsonLd) },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <>
      <nav aria-label="Brödsmulor" className="mx-auto max-w-6xl px-4 pt-6">
        <ol className="flex items-center gap-1 text-sm text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Start</Link></li>
          <li aria-hidden="true"><ChevronRight size={14} /></li>
          <li className="text-foreground font-medium" aria-current="page">Kontakt</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-6xl px-4 pt-32 md:pt-36 pb-12 md:pb-16">
        <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">Hör av dig</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-wide">
          Kontakta Furuhov Hundpark
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Har du frågor om bokning, parkerna i Östersund eller Ås, eller vill du
          veta mer? Markus svarar — ring, mejla eller boka direkt på Bokamera.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <ContactCard
            icon={<Phone size={22} />}
            label="Telefon"
            value={PHONE_DISPLAY}
            href={`tel:${PHONE}`}
          />
          <ContactCard
            icon={<Mail size={22} />}
            label="E-post"
            value={EMAIL}
            href={`mailto:${EMAIL}`}
          />
          <ContactCard
            icon={<Facebook size={22} />}
            label="Facebook"
            value="facebook.com/Furuhov"
            href={FACEBOOK_URL}
            external
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-forest text-forest-foreground p-8">
            <h2 className="font-display text-3xl tracking-wide">Boka tid</h2>
            <p className="mt-3 text-forest-foreground/85">
              Båda parkerna bokas via appen Bokamera eller direkt på webben.
              Halvtimme kostar 40 kr inklusive moms.
            </p>
            <a
              href={BOKA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              furuhov.bokamera.se <ExternalLink size={16} />
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-3xl tracking-wide text-card-foreground">Betalning</h2>
            <p className="mt-3 text-card-foreground/80">
              Betalning sker med Swish — antingen förskottsbetalning enligt info i
              bekräftelsemailet, eller QR-kod i entrén.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Swishnummer</p>
            <p className="font-display text-3xl tracking-wide text-primary">123 164 0556</p>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block rounded-xl border border-border bg-card p-6 hover:border-primary hover:shadow-md transition-all"
    >
      <div className="text-primary">{icon}</div>
      <p className="mt-3 text-xs uppercase tracking-wider font-semibold text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-2xl tracking-wide text-card-foreground">{value}</p>
    </a>
  );
}
