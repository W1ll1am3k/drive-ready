import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  CalendarClock,
  Check,
  Clock3,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  CarFront,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImage from "@/assets/driving-hero.jpg";
import manualImage from "@/assets/course-manual.jpg";
import automaticImage from "@/assets/course-automatic.jpg";
import instructorImage from "@/assets/course-intensive.jpg";
import motorcycleImage from "@/assets/course-motorcycle.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Autoškola Šťastný | Řidičák s jistotou" },
      { name: "description", content: "Moderní autoškola v Humpolci. Individuální výuka, zkušený instruktor a kurzy skupiny B bez zbytečného stresu." },
      { property: "og:title", content: "Autoškola Šťastný | Řidičák s jistotou" },
      { property: "og:description", content: "Moderní autoškola v Humpolci s individuálním přístupem a flexibilními termíny." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DrivingSchoolPage,
});

const courses = [
  {
    image: manualImage,
    alt: "Výukové auto na cvičišti autoškoly",
    label: "Skupina B",
    title: "Automobil Standard",
    text: "Klasický kurz pro osobní vůz. Od prvního rozjezdu až po bezpečnou samostatnou jízdu.",
    facts: ["28 hodin praktických jízd", "Teorie prezenčně i online", "Podpora až do zkoušky"],
    tone: "bg-card/65",
  },
  {
    image: instructorImage,
    alt: "Instruktor autoškoly stojící u výukového vozu",
    label: "Skupina B",
    title: "Automobil Expres",
    text: "Souvislý harmonogram pro ty, kteří chtějí řidičák zvládnout rychle a důkladně.",
    facts: ["Kurz přibližně do 4 týdnů", "Prioritní plánování jízd", "Individuální příprava"],
    tone: "bg-cream/70",
  },
  {
    image: motorcycleImage,
    alt: "Lehký motocykl na cvičišti autoškoly",
    label: "Skupina A1",
    title: "Motorka A1",
    text: "Výcvik na lehkém motocyklu. Od základů ovládání po bezpečnou jízdu v provozu.",
    facts: ["Teorie a technika jízdy", "Výcvik na cvičišti i v provozu", "Příprava ke zkoušce"],
    tone: "bg-mint/55",
  },
  {
    image: motorcycleImage,
    alt: "Střední motocykl na cvičišti autoškoly",
    label: "Skupina A2",
    title: "Motorka A2",
    text: "Rozšíření pro střední výkon. Naučíš se ovládat silnější stroj s jistotou.",
    facts: ["Nadstavbový výcvik A2", "Jízda v reálném provozu", "Příprava ke zkoušce"],
    tone: "bg-peach/50",
  },
  {
    image: automaticImage,
    alt: "Osobní vůz s přívěsem na cvičišti",
    label: "Rozšíření B + E",
    title: "Automobil + přívěs",
    text: "Rozšíření o jízdu s přívěsem. Zvládneš manévry i bezpečné couvání s soupravou.",
    facts: ["Teoretická příprava", "Praktický výcvik", "Příprava ke zkoušce"],
    tone: "bg-card/65",
  },
];

const prices = [
  { name: "Automobil Standard", price: "21 490 Kč", subtitle: "Skupina B · přibližně 3 měsíce", features: ["Výuka teorie", "28 hodin jízd", "Příprava ke zkoušce"] },
  { name: "Automobil Expres", price: "24 900 Kč", subtitle: "Skupina B · přibližně 1 měsíc", features: ["Intenzivní harmonogram", "Prioritní termíny", "Online studijní materiály"], featured: true },
  { name: "Motorka A1", price: "18 500 Kč", subtitle: "Skupina A1 · lehký motocykl", features: ["Teorie a technika jízdy", "Výcvik na cvičišti i v provozu", "Příprava ke zkoušce"] },
  { name: "Motorka A2", price: "21 900 Kč", subtitle: "Skupina A2 · střední motocykl", features: ["Nadstavbový výcvik A2", "Jízda v reálném provozu", "Příprava ke zkoušce"] },
  { name: "Automobil + přívěs", price: "8 900 Kč", subtitle: "Rozšíření B + E", features: ["Teoretická příprava", "Praktický výcvik", "Příprava ke zkoušce"] },
];

const reviews = [
  { name: "Ondřej Boháč", text: "Výborná autoškola. Individuální přístup, trpělivost a skvělá příprava na závěrečnou zkoušku.", initials: "OB", tone: "bg-peach" },
  { name: "Lucie Černá", text: "Na jízdy jsem chodila ráda. Žádný zbytečný stres, všechno mi bylo klidně a srozumitelně vysvětleno.", initials: "LČ", tone: "bg-lemon" },
  { name: "Dominik Tesař", text: "Kurz proběhl bez komplikací a v přátelské atmosféře. Autoškolu mohu s klidem doporučit.", initials: "DT", tone: "bg-mint" },
];

function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return (
    <Reveal className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
      <div className="min-w-0">
        <p className={`text-xs font-bold uppercase tracking-[0.18em] ${light ? "text-signal" : "text-coral"}`}>{eyebrow}</p>
        <h2 className={`mt-3 max-w-3xl font-display text-4xl font-semibold leading-[1.08] md:text-5xl ${light ? "text-off" : "text-ink"}`}>{title}</h2>
      </div>
      {description ? <p className={`max-w-md text-base leading-relaxed ${light ? "text-off/60" : "text-ink/60"}`}>{description}</p> : null}
    </Reveal>
  );
}

function DrivingSchoolPage() {
  const [sent, setSent] = useState(false);

  return (
    <main id="top" className="min-h-screen bg-off text-ink antialiased">
      <Navbar />

      <section className="relative overflow-hidden pt-28 md:pt-32">
        <div className="absolute -left-32 -top-32 size-[28rem] rounded-full bg-lime/35 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-36 right-0 size-[30rem] rounded-full bg-peach/55 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:pb-24">
          <Reveal className="lg:col-span-7" direction="left">
            <div className="inline-flex items-center gap-2 rounded-full bg-mint/75 px-3 py-1.5 text-xs font-bold text-ink/70">
              <span className="size-1.5 rounded-full bg-coral" /> Místo · individuální výuka
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">Řidičák, který se vyplatí už při prvním zatočení.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65 md:text-xl">Moderní auta, trpělivý instruktor a kurz přizpůsobený tvému tempu. Získáš jistotu, ne jen razítko.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="lg"><a href="#kontakt">Začít kurz <ArrowRight /></a></Button>
              <Button asChild variant="soft" size="lg"><a href="#cenik">Prohlédnout ceník</a></Button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 border-t border-ink/10 pt-6">
              <div><strong className="block font-display text-xl sm:text-2xl">92 %</strong><span className="text-xs text-ink/55 sm:text-sm">úspěšnost napoprvé</span></div>
              <div><strong className="block font-display text-xl sm:text-2xl">1 400+</strong><span className="text-xs text-ink/55 sm:text-sm">absolventů</span></div>
              <div><strong className="block font-display text-xl sm:text-2xl">4,9 / 5</strong><span className="text-xs text-ink/55 sm:text-sm">hodnocení</span></div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" direction="right" delay={120}>
            <div className="overflow-hidden rounded-[2rem] lg:-mr-6 lg:scale-[1.06]">
              <img src={heroImage} alt="Pohled řidiče z moderního auta za soumraku" width={1408} height={1056} fetchPriority="high" className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-card/50">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-6 sm:grid-cols-3 sm:px-8">
          {[[ShieldCheck, "Bezpečí na prvním místě", "Klidné tempo a jasná zpětná vazba."], [CalendarClock, "Termíny podle tebe", "Jízdy plánujeme tak, aby dávaly smysl."], [CarFront, "Moderní vozový park", "Čisté, komfortní a spolehlivé vozy."]].map(([Icon, title, text], index) => {
            const IconComponent = Icon as typeof ShieldCheck;
            return <Reveal key={title as string} delay={index * 100} className="flex items-center gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-mint"><IconComponent className="size-5" /></span><div className="min-w-0"><h3 className="font-display font-semibold">{title as string}</h3><p className="text-sm text-ink/55">{text as string}</p></div></Reveal>;
          })}
        </div>
      </section>

      <section id="kurzy" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Kurzy a vozidla" title="Vyber si, jak se chceš učit." description="Každý kurz stojí na individuálním přístupu, moderním vozovém parku a termínech, které lze skloubit s tvým životem." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {courses.map((course, index) => (
              <Reveal key={course.title} delay={index * 100} className={`group rounded-[1.5rem] p-5 ring-1 ring-card/80 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-xl ${course.tone}`}>
                <div className="overflow-hidden rounded-[1rem]"><img src={course.image} alt={course.alt} width={1024} height={640} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-coral">{course.label}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{course.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{course.text}</p>
                <ul className="mt-5 space-y-2.5 text-sm text-ink/70">{course.facts.map((fact) => <li key={fact} className="flex gap-2"><ArrowRight className="mt-0.5 size-4 shrink-0 text-coral" />{fact}</li>)}</ul>
                <a href="#kontakt" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink transition-colors hover:text-coral">Vybrat kurz <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card/45 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Jak to probíhá" title="Od přihlášky k vlastní jízdě." description="Jasný postup, žádné překvapení. V každé fázi víš, co tě čeká a na čem pracujeme." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Vyplníš přihlášku", text: "Krátce se domluvíme na cíli, tempu a nejbližším termínu." },
              { title: "Zvládneš teorii", text: "Srozumitelně, prakticky a s online materiály kdykoliv po ruce." },
              { title: "Najezdíš praxi", text: "Od základů po reálný provoz, vždy s klidnou zpětnou vazbou." },
              { title: "Uděláš zkoušku", text: "Připravíme tě tak, abys šel ke zkoušce s jistotou." },
            ].map((step, index) => (
              <Reveal key={step.title} delay={index * 100} className="relative border-t border-ink/15 pt-6">
                <span className="font-display text-sm font-bold text-coral">0{index + 1}</span>
                <h3 className="mt-5 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="cenik" className="relative scroll-mt-20 overflow-hidden bg-night py-20 text-off md:py-28">
        <div className="absolute -right-24 -top-20 size-96 rounded-full bg-signal/10 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-20 size-96 rounded-full bg-coral/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading light eyebrow="Ceník autoškoly" title="Transparentní ceny. Žádné hvězdičky." description="Cena zahrnuje teorii, praktickou výuku i průběžnou podporu. Kurz lze po dohodě hradit ve splátkách." />
          {(() => {
            const trackRef = useRef<HTMLDivElement>(null);
            const dragState = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
            const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
              const el = trackRef.current;
              if (!el) return;
              dragState.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
              el.setPointerCapture(e.pointerId);
            };
            const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
              if (!dragState.current.active || !trackRef.current) return;
              const dx = e.clientX - dragState.current.startX;
              if (Math.abs(dx) > 4) dragState.current.moved = true;
              trackRef.current.scrollLeft = dragState.current.startScroll - dx;
            };
            const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
              dragState.current.active = false;
              trackRef.current?.releasePointerCapture(e.pointerId);
              window.setTimeout(() => { dragState.current.moved = false; }, 50);
            };
            const preventDragClick = (e: React.MouseEvent) => {
              if (dragState.current.moved) e.preventDefault();
            };
            return (
              <div
                ref={trackRef}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                className="-mx-5 mt-12 flex cursor-grab gap-5 overflow-x-auto px-5 pb-4 active:cursor-grabbing sm:-mx-8 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {prices.map((item, index) => (
                  <Reveal key={item.name} delay={index * 100} className={`w-[80%] shrink-0 rounded-[1.5rem] p-7 sm:w-[52%] lg:w-[28.5%] ${item.featured ? "bg-signal text-ink shadow-2xl shadow-signal/15" : "border border-off/10 bg-off/5 text-off backdrop-blur-xl"}`}>
                    {item.featured ? <span className="rounded-full bg-ink/10 px-3 py-1 text-xs font-bold">Nejoblíbenější</span> : null}
                    <h3 className={`${item.featured ? "mt-5" : ""} font-display text-xl font-semibold`}>{item.name}</h3>
                    <p className="mt-4 font-display text-4xl font-semibold">{item.price}</p>
                    <p className={`mt-2 text-sm ${item.featured ? "text-ink/60" : "text-off/50"}`}>{item.subtitle}</p>
                    <ul className={`mt-6 space-y-3 text-sm ${item.featured ? "text-ink/80" : "text-off/75"}`}>{item.features.map((feature) => <li key={feature} className="flex items-center gap-2"><Check className="size-4 shrink-0" />{feature}</li>)}</ul>
                    <span onClickCapture={preventDragClick}>
                      <Button asChild variant={item.featured ? "dark" : "outline"} size="lg" className={`mt-7 w-full ${item.featured ? "" : "border-off/15 bg-off/5 text-off hover:bg-off/10 hover:text-off"}`}><a href="#kontakt">Mám zájem</a></Button>
                    </span>
                  </Reveal>
                ))}
              </div>
            );
          })()}
          <p className="mt-3 text-xs text-off/45">Chyť a potáhni do strany, aby se ukázaly všechny balíčky.</p>
          <Reveal className="mt-8 grid gap-6 border-t border-off/10 pt-8 lg:grid-cols-[1fr_1.6fr]">
            <div><h3 className="font-display text-lg font-semibold text-signal">Další poplatky</h3><p className="mt-2 text-sm text-off/50">Přehledně předem, bez překvapení.</p></div>
            <dl className="grid gap-3 text-sm sm:grid-cols-2">{[["Kondiční jízda · 45 min", "800 Kč"], ["Storno výuky", "2 000 Kč"], ["Vrácení řidičského průkazu", "3 900 Kč"], ["Doplňovací výuka A2 → A", "4 900 Kč"]].map(([name, price]) => <div key={name} className="flex justify-between gap-4 border-b border-off/10 pb-3"><dt className="text-off/65">{name}</dt><dd className="shrink-0 font-bold text-coral">{price}</dd></div>)}</dl>
          </Reveal>
        </div>
      </section>

      <section id="recenze" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Hodnocení" title="Co říkají naši absolventi?" description="Nejlepší vizitkou jsou řidiči, kteří se po kurzu cítí klidně a jistě i v běžném provozu." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.map((review, index) => <Reveal key={review.name} delay={index * 100} className="rounded-[1.5rem] bg-card/65 p-6 ring-1 ring-card backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
              <div className="flex gap-1 text-signal" aria-label="5 z 5 hvězdiček">{Array.from({ length: 5 }).map((_, star) => <Star key={star} className="size-4 fill-current" />)}</div>
              <blockquote className="mt-5 text-base leading-relaxed text-ink/75">„{review.text}“</blockquote>
              <div className="mt-6 flex items-center gap-3"><span className={`grid size-11 place-items-center rounded-full font-display text-sm font-bold ${review.tone}`}>{review.initials}</span><div><p className="font-semibold">{review.name}</p><p className="text-xs text-ink/50">Absolvent</p></div></div>
            </Reveal>)}
          </div>
        </div>
      </section>

      <section id="dokumenty" className="scroll-mt-24 bg-card/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Ke stažení" title="Vše potřebné před kurzem." description="Formuláře k přihlášce a oficiální materiály k přípravě na teorii na jednom místě." />
          <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {[["Žádost o řidičské oprávnění", "Formulář k vyplnění před zahájením kurzu"], ["Lékařský posudek", "Povinná součást přihlášky ke kurzu"], ["eTesty — příprava na teorii", "Oficiální testové otázky Ministerstva dopravy ČR"]].map(([title, text], index) => <Reveal key={title} delay={index * 80}><a href="https://etesty.md.gov.cz/" target="_blank" rel="noreferrer" className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-7 sm:gap-6"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-cream text-coral"><ArrowDownToLine className="size-5" /></span><span className="min-w-0"><strong className="block font-display text-lg">{title}</strong><span className="mt-1 block text-sm text-ink/55">{text}</span></span><ExternalLink className="size-4 shrink-0 text-ink/35 transition group-hover:text-coral" /></a></Reveal>)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal direction="left"><p className="text-xs font-bold uppercase tracking-[0.18em] text-coral">Časté otázky</p><h2 className="mt-3 max-w-xl font-display text-4xl font-semibold leading-[1.08] md:text-5xl">Než poprvé otočíš klíčkem.</h2><p className="mt-5 max-w-lg text-ink/60">Krátké odpovědi na to, co zájemce o kurz nejčastěji zajímá.</p></Reveal>
          <Reveal direction="right"><Accordion type="single" collapsible className="border-t border-ink/10">{[
            { question: "Jak dlouho kurz obvykle trvá?", answer: "Standardní kurz trvá přibližně tři měsíce. Intenzivní variantu lze po dohodě zvládnout zhruba za čtyři týdny." },
            { question: "Co je zahrnuto v ceně?", answer: "Teoretická výuka, zákonný počet praktických jízd, studijní podklady a průběžná příprava na závěrečnou zkoušku." },
            { question: "Mohu kurz platit postupně?", answer: "Ano, po individuální dohodě je možné cenu rozdělit do splátek v průběhu výcviku." },
            { question: "Kdy mohu začít?", answer: "Nové kurzy otevíráme průběžně. Napiš nám a nabídneme ti nejbližší volný termín." },
            { question: "Co když zkoušku napoprvé neudělám?", answer: "Společně projdeme slabá místa a domluvíme cílené doplňovací jízdy nebo přípravu na opravný termín." },
          ].map((item) => <AccordionItem key={item.question} value={item.question}><AccordionTrigger className="py-5 font-display text-base hover:no-underline">{item.question}</AccordionTrigger><AccordionContent className="max-w-xl pb-5 leading-relaxed text-ink/60">{item.answer}</AccordionContent></AccordionItem>)}</Accordion></Reveal>
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-20 bg-night py-20 text-off md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-5" direction="left">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-signal">Kontakt</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold leading-[1.08] md:text-5xl">Pojďme tě dostat za volant.</h2>
            <p className="mt-5 max-w-md leading-relaxed text-off/60">Napiš nám, o jaký kurz máš zájem. Ozveme se a společně vybereme termín, který ti sedne.</p>
            <div className="mt-8 space-y-4 text-sm"><a href="tel:+420777777777" className="flex items-center gap-3 text-off/80 hover:text-signal"><Phone className="size-5 text-coral" />+420 777 777 777</a><a href="mailto:info@autoskola-jm.cz" className="flex items-center gap-3 text-off/80 hover:text-signal"><Mail className="size-5 text-coral" />info@autoskola-jm.cz</a><p className="flex items-start gap-3 text-off/80"><MapPin className="mt-0.5 size-5 shrink-0 text-coral" />Ulice 123, 123 45 Město</p></div>
            <div className="mt-8 grid grid-cols-2 gap-3"><div className="rounded-[1rem] border border-off/10 bg-off/5 p-4"><Clock3 className="size-5 text-signal" /><p className="mt-3 font-semibold">Po–Pá</p><p className="text-sm text-off/55">dle domluvy</p></div><div className="rounded-[1rem] border border-off/10 bg-off/5 p-4"><Sparkles className="size-5 text-signal" /><p className="mt-3 font-semibold">Odpovíme rychle</p><p className="text-sm text-off/55">obvykle tentýž den</p></div></div>
          </Reveal>
          <Reveal className="lg:col-span-7" direction="right" delay={100}>
            <form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="rounded-[1.5rem] bg-off p-6 text-ink shadow-2xl md:p-8">
              <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-medium">Jméno<input required name="name" className="mt-2 h-12 w-full rounded-xl border border-input bg-card/60 px-4 outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/20" /></label><label className="text-sm font-medium">Telefon<input required name="phone" type="tel" className="mt-2 h-12 w-full rounded-xl border border-input bg-card/60 px-4 outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/20" /></label></div>
              <label className="mt-5 block text-sm font-medium">E-mail<input required name="email" type="email" className="mt-2 h-12 w-full rounded-xl border border-input bg-card/60 px-4 outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/20" /></label>
              <fieldset className="mt-5">
                <legend className="text-sm font-medium">O jaký kurz máš zájem?</legend>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {prices.map((item) => (
                    <label key={item.name} className="flex cursor-pointer items-center gap-3 rounded-xl border border-input bg-card/60 px-4 py-3 text-sm transition hover:border-coral">
                      <input type="checkbox" name="courses" value={item.name} className="size-4 shrink-0 accent-coral" />
                      <span className="min-w-0">{item.name}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <Button type="submit" variant="hero" size="lg" className="mt-6 w-full sm:w-auto">Odeslat poptávku <ArrowRight /></Button>
              {sent ? <p role="status" className="mt-4 rounded-xl bg-mint px-4 py-3 text-sm font-medium text-ink">Děkujeme. Poptávka je připravená — brzy se ozveme.</p> : <p className="mt-4 text-xs text-ink/45">Odesláním souhlasíš se zpracováním údajů pro vyřízení poptávky.</p>}
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-ink/10 bg-off">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-8 text-sm text-ink/55 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div><p className="font-display text-lg font-semibold text-ink">Autoškola Šťastný</p><p className="mt-1">Klidná cesta k samostatné jízdě.</p></div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end"><a href="#kurzy" className="hover:text-coral">Kurzy</a><a href="#cenik" className="hover:text-coral">Ceník</a><a href="#kontakt" className="hover:text-coral">Kontakt</a><span>© 2026</span></div>
        </div>
      </footer>
    </main>
  );
}