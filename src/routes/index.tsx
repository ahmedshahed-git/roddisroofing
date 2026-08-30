import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import ba1Before from "@/assets/ba1-before.jpg";
import ba1After from "@/assets/ba1-after.jpg";
import ba2Before from "@/assets/ba2-before.jpg";
import ba2After from "@/assets/ba2-after.jpg";
import ba3Before from "@/assets/ba3-before.jpg";
import ba3After from "@/assets/ba3-after.jpg";
import work1 from "@/assets/work1.jpg";
import work2 from "@/assets/work2.jpg";
import work3 from "@/assets/work3.jpg";
import work4 from "@/assets/work4.jpg";
import work5 from "@/assets/work5.jpg";
import work6 from "@/assets/work6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roddis Roofing | Roofing Specialists in Nottingham & Derbyshire" },
      {
        name: "description",
        content:
          "Family run roofing specialists covering Nottingham, Nottinghamshire & Derbyshire. Roof repairs, new roofs, maintenance and expert lead work. Free quotes.",
      },
      {
        property: "og:title",
        content: "Roddis Roofing | Roofing Specialists in Nottingham & Derbyshire",
      },
      {
        property: "og:description",
        content:
          "Family run roofing specialists covering Nottingham, Nottinghamshire & Derbyshire. Experts in all aspects of roofing and lead-work.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RoofingContractor",
          name: "Roddis Roofing",
          telephone: "+441332417383",
          email: "roddisroofing@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "213 Church Street",
            addressRegion: "Derbyshire",
            postalCode: "DE5 9TF",
            addressCountry: "GB",
          },
          areaServed: ["Nottingham", "Nottinghamshire", "Derbyshire"],
          sameAs: ["https://www.instagram.com/roddisroofing"],
        }),
      },
    ],
  }),
  component: Index,
});

const PHONE = "+44 1332 417383";
const PHONE_HREF = "tel:+441332417383";
const EMAIL = "roddisroofing@gmail.com";
const INSTAGRAM = "https://www.instagram.com/roddisroofing";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Before & After", href: "#before-after" },
  { label: "Our Work", href: "#work" },
  { label: "Areas", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    title: "Roof Repairs",
    text: "Fast, reliable repairs for slipped tiles, leaks, storm damage and failed flashing.",
  },
  {
    title: "New Roofs",
    text: "Full roof replacements using quality tiles, slate and modern breathable membranes.",
  },
  {
    title: "Roof Maintenance",
    text: "Inspections, moss removal, gutter clearing and repointing to extend roof life.",
  },
  {
    title: "Lead Work",
    text: "Traditional and modern lead-work, from chimney flashings to valleys and dormers.",
  },
  {
    title: "Roof Renovation",
    text: "Restoring tired roofs with new ridges, verges, fascias, soffits and guttering.",
  },
  {
    title: "General Roofing",
    text: "Flat roofs, felt and single-ply systems, chimney work and all general roofing.",
  },
];

const REASONS = [
  {
    title: "Family Run",
    text: "A small family business where every job carries our name and reputation.",
  },
  {
    title: "Local Expertise",
    text: "Years of work on Nottinghamshire and Derbyshire property, old and new.",
  },
  {
    title: "Quality Workmanship",
    text: "Proper materials, tidy sites and roofing built to last through British weather.",
  },
  {
    title: "Free Quotes",
    text: "Honest, no-obligation quotes with clear pricing and no pressure to commit.",
  },
];

const COMPARISONS = [
  {
    title: "Tile Roof Restoration",
    before: ba1Before,
    after: ba1After,
    text: "Worn, mossy tiles replaced and the roofline brought back to a clean, weathertight finish.",
  },
  {
    title: "Chimney Lead Flashing",
    before: ba2Before,
    after: ba2After,
    text: "Failed flashing and cracked mortar renewed with fresh lead-work and repointing.",
  },
  {
    title: "Flat Roof Replacement",
    before: ba3Before,
    after: ba3After,
    text: "Blistered, ponding felt stripped out and replaced with a smooth, fully sealed system.",
  },
];

const GALLERY = [
  { src: work1, alt: "Re-tiled pitched roof on a semi-detached house" },
  { src: work2, alt: "Lead valley detail between two roof slopes" },
  { src: work3, alt: "Renovated slate roof on a period property" },
  { src: work4, alt: "New guttering and fascia being fitted" },
  { src: work5, alt: "Roof replacement in progress with new battens and membrane" },
  { src: work6, alt: "Dormer window finished with fresh lead cladding" },
];

const VIDEOS = [
  "https://www.facebook.com/reel/1741203313747559/",
  "https://www.facebook.com/reel/2549127135538433/",
  "https://www.facebook.com/reel/1217110604824020/",
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Service: ${data.get("service")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      "Free quote request - Roddis Roofing",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-charcoal text-charcoal-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#top" className="font-display text-xl font-bold tracking-widest uppercase">
            Roddis <span className="text-accent">Roofing</span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-charcoal-foreground/80 transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:inline-block"
            >
              Get a Free Quote
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="border border-charcoal-foreground/30 px-3 py-2 text-sm lg:hidden"
            >
              Menu
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-charcoal-foreground/10 lg:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-charcoal-foreground/10 py-3 text-sm text-charcoal-foreground/85"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 mb-3 bg-accent px-4 py-2 text-center text-sm font-semibold text-accent-foreground"
              >
                Get a Free Quote
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative bg-charcoal text-charcoal-foreground">
        <img
          src={hero}
          alt="Slate roof on a British stone house during roofing work"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
          <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            Nottingham · Nottinghamshire · Derbyshire
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-bold uppercase md:text-6xl">
            Roofing Specialists You Can Trust
          </h1>
          <p className="mt-6 max-w-2xl text-base text-charcoal-foreground/85 md:text-lg">
            Family run roofing specialists covering Nottingham, Nottinghamshire & Derbyshire.
            Experts in all aspects of roofing and lead-work.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="bg-accent px-6 py-3 text-center text-sm font-semibold tracking-wide text-accent-foreground uppercase transition-opacity hover:opacity-90"
            >
              Get Your Free Quote
            </a>
            <a
              href="#work"
              className="border border-charcoal-foreground/40 px-6 py-3 text-center text-sm font-semibold tracking-wide uppercase transition-colors hover:bg-charcoal-foreground/10"
            >
              View Our Work
            </a>
          </div>
          <p className="mt-8 text-sm text-charcoal-foreground/70">
            Call us today:{" "}
            <a href={PHONE_HREF} className="font-semibold text-accent">
              {PHONE}
            </a>
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">About Us</p>
            <h2 className="mt-3 text-3xl font-bold uppercase md:text-4xl">
              A Roofing Team You Can Rely On
            </h2>
            <p className="mt-5 text-muted-foreground">
              Roddis Roofing is a family run roofing business built on straightforward advice,
              careful workmanship and a reputation earned locally, one roof at a time. We work
              across Nottingham, Nottinghamshire and Derbyshire on everything from small repairs to
              complete roof replacements.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our team are experienced in all aspects of pitched and flat roofing, and we
              specialise in lead-work — chimney flashings, valleys, dormers and traditional
              detailing done properly. Every job is quoted honestly, kept tidy and finished to a
              standard we're happy to put our name to.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6">
              <div>
                <dt className="text-sm text-muted-foreground">Specialism</dt>
                <dd className="font-display text-xl font-semibold">Roofing & Lead-work</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Business</dt>
                <dd className="font-display text-xl font-semibold">Family Run</dd>
              </div>
            </dl>
          </div>
          <img
            src={about}
            alt="Roofers fitting lead flashing around a chimney"
            width={1200}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold uppercase md:text-4xl">Our Roofing Services</h2>
          <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-card p-7">
                <h3 className="text-xl font-semibold uppercase">{s.title}</h3>
                <div className="mt-3 h-0.5 w-10 bg-accent" />
                <p className="mt-4 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold uppercase md:text-4xl">Why Choose Us</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r) => (
            <div key={r.title} className="border-t-2 border-accent pt-5">
              <h3 className="text-lg font-semibold uppercase">{r.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Before & After */}
      <section id="before-after" className="bg-charcoal py-20 text-charcoal-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            The Difference
          </p>
          <h2 className="mt-3 text-3xl font-bold uppercase md:text-4xl">Before & After</h2>
          <p className="mt-4 max-w-2xl text-sm text-charcoal-foreground/70">
            Illustrative examples of the type of roofing work we carry out. These images are stock
            photography, not photographs of Roddis Roofing projects.
          </p>
          <div className="mt-10 space-y-10">
            {COMPARISONS.map((c) => (
              <div key={c.title}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {(
                    [
                      ["Before", c.before],
                      ["After", c.after],
                    ] as const
                  ).map(([label, src]) => (
                    <figure key={label} className="relative">
                      <img
                        src={src}
                        alt={`${c.title} — ${label.toLowerCase()}`}
                        width={1000}
                        height={750}
                        loading="lazy"
                        className="aspect-4/3 w-full object-cover"
                      />
                      <figcaption className="absolute top-0 left-0 bg-charcoal/85 px-3 py-1 text-xs font-semibold tracking-widest uppercase">
                        {label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <h3 className="mt-4 text-xl font-semibold uppercase">{c.title}</h3>
                <p className="mt-1 text-sm text-charcoal-foreground/75">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold uppercase md:text-4xl">Our Work</h2>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          A look at the standard of roofing and lead-work we deliver. Images shown are
          representative examples of this type of work.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g) => (
            <img
              key={g.alt}
              src={g.src}
              alt={g.alt}
              width={900}
              height={700}
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          ))}
        </div>
      </section>

      {/* Facebook videos */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold uppercase md:text-4xl">See Our Work In Action</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {VIDEOS.map((url) => (
              <div key={url} className="aspect-9/16 w-full bg-charcoal">
                <iframe
                  src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                    url,
                  )}&show_text=false&width=340`}
                  title="Roddis Roofing video"
                  className="h-full w-full border-0"
                  scrolling="no"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block border border-foreground/20 px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-colors hover:bg-foreground/5"
          >
            Follow us on Instagram
          </a>
        </div>
      </section>

      {/* Service area */}
      <section id="areas" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold uppercase md:text-4xl">
          Proudly Serving Nottingham & Derbyshire
        </h2>
        <p className="mt-5 max-w-3xl text-muted-foreground">
          We work throughout Nottingham, Nottinghamshire and Derbyshire, along with the surrounding
          towns and villages. From city terraces and period stone properties to modern housing and
          extensions, we're never far away and happy to come out and take a look.
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {[
            "Nottingham",
            "Nottinghamshire",
            "Derbyshire",
            "Ripley",
            "Belper",
            "Ilkeston",
            "Heanor",
            "Alfreton",
            "Surrounding areas",
          ].map((a) => (
            <li
              key={a}
              className="border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground"
            >
              {a}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-charcoal py-20 text-charcoal-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold uppercase md:text-4xl">
              Need Roofing Work? Let's Talk.
            </h2>
            <p className="mt-5 text-charcoal-foreground/80">
              Tell us about the job and we'll arrange a visit and a free, no-obligation quote.
            </p>
            <div className="mt-8 space-y-5 border-t border-charcoal-foreground/15 pt-8">
              <div>
                <p className="text-xs tracking-widest text-charcoal-foreground/60 uppercase">
                  Phone
                </p>
                <a href={PHONE_HREF} className="font-display text-2xl font-semibold text-accent">
                  {PHONE}
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest text-charcoal-foreground/60 uppercase">
                  Email
                </p>
                <a href={`mailto:${EMAIL}`} className="text-lg break-all hover:text-accent">
                  {EMAIL}
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest text-charcoal-foreground/60 uppercase">
                  Address
                </p>
                <p className="text-lg">213 Church Street, Derbyshire, UK, DE5 9TF</p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-charcoal-foreground/60 uppercase">
                  Instagram
                </p>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg hover:text-accent"
                >
                  @roddisroofing
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-6 text-card-foreground md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium">
                Name
                <input
                  name="name"
                  required
                  className="mt-2 w-full border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent"
                />
              </label>
              <label className="block text-sm font-medium">
                Phone
                <input
                  name="phone"
                  type="tel"
                  required
                  className="mt-2 w-full border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm font-medium">
              Email
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent"
              />
            </label>
            <label className="mt-4 block text-sm font-medium">
              Service
              <select
                name="service"
                required
                defaultValue=""
                className="mt-2 w-full border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICES.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="mt-4 block text-sm font-medium">
              Message
              <textarea
                name="message"
                rows={5}
                required
                className="mt-2 w-full border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent"
              />
            </label>
            <button
              type="submit"
              className="mt-6 w-full bg-accent px-6 py-3 text-sm font-semibold tracking-wide text-accent-foreground uppercase transition-opacity hover:opacity-90"
            >
              Request A Free Quote
            </button>
            {sent && (
              <p className="mt-4 text-sm text-muted-foreground">
                Thanks — your email app should now be open with your enquiry ready to send.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold tracking-widest uppercase">
              Roddis Roofing
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Family run roofing specialist you can trust. Covering Nottingham, Nottinghamshire &
              Derbyshire.
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p className="font-semibold text-foreground uppercase">Contact</p>
            <p className="mt-3">
              <a href={PHONE_HREF} className="hover:text-accent">
                {PHONE}
              </a>
            </p>
            <p className="mt-1">
              <a href={`mailto:${EMAIL}`} className="break-all hover:text-accent">
                {EMAIL}
              </a>
            </p>
            <p className="mt-1">213 Church Street, Derbyshire, UK, DE5 9TF</p>
            <p className="mt-1">
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-accent">
                Instagram
              </a>
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p className="font-semibold text-foreground uppercase">Navigation</p>
            <ul className="mt-3 space-y-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-accent">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-border px-4 pt-6 text-xs text-muted-foreground">
          © 2026 Roddis Roofing. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
