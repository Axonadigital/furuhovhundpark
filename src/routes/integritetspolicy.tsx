import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { EMAIL, SITE_NAME, SITE_URL } from "@/lib/seo";

const TITLE = "Integritetspolicy | Furuhov Hundpark";
const DESCRIPTION =
  "Integritetspolicy för Furuhov Hundpark — så hanterar vi personuppgifter när du bokar tid eller kontaktar oss.";

export const Route = createFileRoute("/integritetspolicy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/integritetspolicy` },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/integritetspolicy` }],
  }),
  component: PolicyPage,
});

function PolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pt-32 md:pt-36 pb-12 md:pb-16">
      <nav aria-label="Brödsmulor">
        <ol className="flex items-center gap-1 text-sm text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Start</Link></li>
          <li aria-hidden="true"><ChevronRight size={14} /></li>
          <li className="text-foreground font-medium" aria-current="page">Integritetspolicy</li>
        </ol>
      </nav>

      <h1 className="mt-6 font-display text-5xl tracking-wide">Integritetspolicy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Senast uppdaterad: {new Date().toLocaleDateString("sv-SE")}</p>

      <div className="mt-8 space-y-6 text-foreground/90 leading-relaxed">
        <section>
          <h2 className="font-display text-2xl tracking-wide">Personuppgiftsansvarig</h2>
          <p className="mt-2">
            {SITE_NAME} är personuppgiftsansvarig för behandlingen av dina personuppgifter
            i enlighet med GDPR. Kontakta oss på <a className="text-primary font-semibold" href={`mailto:${EMAIL}`}>{EMAIL}</a> vid frågor.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wide">Vilka uppgifter vi samlar in</h2>
          <p className="mt-2">
            När du bokar tid via vår bokningstjänst (Bokamera) lämnar du namn,
            telefonnummer, e-postadress och betalningsuppgifter (Swish). Vi sparar
            även eventuell kommunikation som du skickar till oss.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wide">Hur vi använder uppgifterna</h2>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>För att hantera din bokning och betalning.</li>
            <li>För att kontakta dig vid frågor om din bokning.</li>
            <li>För att uppfylla bokföringsskyldighet enligt svensk lag.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wide">Lagringstid</h2>
          <p className="mt-2">
            Bokningsuppgifter sparas så länge det är nödvändigt för att fullgöra
            bokningen och så länge bokföringslagen kräver (sju år för
            transaktionsdata).
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wide">Dina rättigheter</h2>
          <p className="mt-2">
            Du har rätt att begära ut, rätta eller radera dina personuppgifter.
            Kontakta oss på <a className="text-primary font-semibold" href={`mailto:${EMAIL}`}>{EMAIL}</a> så hjälper vi dig.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wide">Cookies</h2>
          <p className="mt-2">
            Webbplatsen använder endast tekniskt nödvändiga cookies. Inbäddade
            kartor från Google Maps kan sätta egna cookies enligt Googles policy.
          </p>
        </section>
      </div>
    </article>
  );
}
