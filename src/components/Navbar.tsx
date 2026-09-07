import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  ["Kurzy", "#kurzy"],
  ["Ceník", "#cenik"],
  ["Recenze", "#recenze"],
  ["Ke stažení", "#dokumenty"],
  ["Kontakt", "#kontakt"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border bg-off/80 shadow-sm backdrop-blur-xl" : "bg-transparent"}`}>
      <div className={`mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 transition-all sm:px-8 lg:flex lg:justify-between ${scrolled ? "py-3" : "py-5"}`}>
        <a href="#top" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-ink font-display text-sm font-bold text-off">AŠ</span>
          <span className="truncate font-display text-lg font-semibold text-ink">Autoškola Šťastný</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hlavní navigace">
          {links.map(([label, href]) => <a key={href} href={href} className="text-sm font-medium text-ink/65 transition-colors hover:text-coral">{label}</a>)}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Button asChild variant="dark" className="hidden sm:inline-flex"><a href="#kontakt">Začít kurz</a></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Zavřít nabídku" : "Otevřít nabídku"} onClick={() => setOpen((value) => !value)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      <div className={`overflow-hidden border-t border-border bg-off/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4" aria-label="Mobilní navigace">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-border py-3 text-base font-medium text-ink last:border-0">{label}</a>)}
          <Button asChild variant="hero" size="lg" className="mt-4 sm:hidden"><a href="#kontakt" onClick={() => setOpen(false)}>Začít kurz</a></Button>
        </nav>
      </div>
    </header>
  );
}