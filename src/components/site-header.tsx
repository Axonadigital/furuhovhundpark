import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/furuhov-logo.png";

const BOKA_URL = "https://furuhov.bokamera.se";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-forest text-forest-foreground border-b border-forest/40 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2" aria-label="Furuhov Hundpark — startsida">
          <img
            src={logo}
            alt="Furuhov Hundpark logotyp"
            width={180}
            height={40}
            className="h-9 w-auto"
          />
        </Link>

        <nav aria-label="Huvudmeny" className="hidden md:flex items-center gap-1">
          <NavLink to="/">Start</NavLink>
          <NavLink to="/ostersund">Östersund</NavLink>
          <NavLink to="/as">Ås</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
          <a
            href={BOKA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Boka tid
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-forest-foreground hover:bg-forest-foreground/10"
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobilmeny" className="md:hidden border-t border-forest-foreground/10 bg-forest">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1">
            <MobileLink to="/" onClick={() => setOpen(false)}>Start</MobileLink>
            <MobileLink to="/ostersund" onClick={() => setOpen(false)}>Hundpark Östersund</MobileLink>
            <MobileLink to="/as" onClick={() => setOpen(false)}>Hundpark Ås</MobileLink>
            <MobileLink to="/kontakt" onClick={() => setOpen(false)}>Kontakt</MobileLink>
            <a
              href={BOKA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-base font-semibold text-primary-foreground"
            >
              Boka tid
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: to === "/" }}
      activeProps={{ className: "px-3 py-2 text-sm font-semibold rounded-md bg-forest-foreground/10 text-forest-foreground" }}
      inactiveProps={{ className: "px-3 py-2 text-sm font-medium rounded-md text-forest-foreground/80 hover:text-forest-foreground hover:bg-forest-foreground/10 transition-colors" }}
    >
      {children}
    </Link>
  );
}

function MobileLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      activeOptions={{ exact: to === "/" }}
      activeProps={{ className: "px-3 py-3 text-base font-semibold rounded-md bg-forest-foreground/10" }}
      inactiveProps={{ className: "px-3 py-3 text-base font-medium rounded-md hover:bg-forest-foreground/10" }}
    >
      {children}
    </Link>
  );
}
