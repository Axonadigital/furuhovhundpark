import { Link } from "@tanstack/react-router";
import { Mail, Phone, Facebook } from "lucide-react";
import logo from "@/assets/furuhov-logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-[oklch(0.12_0.02_155)] text-forest-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img
            src={logo}
            alt="Furuhov Hundpark logotyp"
            width={400}
            height={100}
            className="h-24 w-auto -ml-2"
          />
          <p className="mt-3 text-sm text-forest-foreground/80 max-w-md">
            Två stängslade hundparker i fin skogsmiljö nära Östersund. Öppet dygnet
            runt, året runt — boka en halvtimme och släpp hunden lös.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl tracking-wide">Sidor</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Startsida</Link></li>
            <li><Link to="/ostersund" className="hover:text-primary">Hundpark Östersund</Link></li>
            <li><Link to="/as" className="hover:text-primary">Hundpark Ås</Link></li>
            <li><Link to="/kontakt" className="hover:text-primary">Kontakt</Link></li>
            <li><Link to="/integritetspolicy" className="hover:text-primary">Integritetspolicy</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl tracking-wide">Kontakt</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} aria-hidden="true" />
              <a href="tel:+46703764278" className="hover:text-primary">070-376 42 78</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} aria-hidden="true" />
              <a href="mailto:markus@furuhov.se" className="hover:text-primary">markus@furuhov.se</a>
            </li>
            <li className="flex items-center gap-2">
              <Facebook size={16} aria-hidden="true" />
              <a
                href="https://www.facebook.com/Furuhov/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Facebook
              </a>
            </li>
            <li className="pt-2 text-forest-foreground/70">Swish: <span className="font-semibold text-forest-foreground">123 164 0556</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-forest-foreground/15">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-forest-foreground/70 flex flex-col sm:flex-row gap-2 justify-between">
          <p>&copy; {new Date().getFullYear()} Furuhov Hundpark. Alla rättigheter förbehållna.</p>
          <p>Östersund · Ås · Jämtland</p>
        </div>
      </div>
    </footer>
  );
}
