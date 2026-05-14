import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import hero from "@/assets/hero-chamber.jpg";
import grassroots from "@/assets/grassroots.jpg";
import dataImg from "@/assets/data.jpg";
import podium from "@/assets/nigeria-rally.jpg";
import leaderPortrait from "@/assets/leader-portrait.jpg";
import voter from "@/assets/voter.jpg";
import lagos from "@/assets/lagos-skyline.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Statecraft — Political Strategy for the 2027 Elections" },
      {
        name: "description",
        content:
          "Statecraft is a political strategy and communication platform helping candidates, parties and institutions build trust, shape narratives and win with data.",
      },
      { property: "og:title", content: "Statecraft — Political Strategy. Public Engagement. Data-Driven Victory." },
      { property: "og:description", content: "Strategy, communication, grassroots intelligence and digital influence for the 2027 cycle." },
    ],
  }),
});

const pillars = [
  { n: "01", t: "Political Brand Strategy", d: "Persona, positioning, message architecture and the visual language of a campaign that voters remember." },
  { n: "02", t: "Strategic Communication", d: "Press, speeches, debate prep, crisis response — every word lands with force, clarity and purpose." },
  { n: "03", t: "Grassroots Mobilisation", d: "Wards, town halls, markets and door-to-door. We organise where elections are actually won." },
  { n: "04", t: "Digital Engagement", d: "Content systems, sentiment tracking, creator partnerships and disciplined online persuasion." },
  { n: "05", t: "Data & Voter Intelligence", d: "Mapping, polling, message testing and field reports that turn instinct into decision." },
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-ink text-bone">
        <img
          src={hero}
          alt="Empty parliamentary chamber at dusk"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 pb-16 lg:pb-24 pt-32 w-full">
          <div className="eyebrow text-gold mb-8">A Cerebral Hub Platform · Est. for 2027</div>
          <h1 className="display text-[clamp(3rem,10vw,9rem)] max-w-[14ch]">
            Visibility wins
            <br />
            attention.
            <br />
            <em className="text-gold not-italic font-normal">Strategy</em> wins
            <br />
            elections.
          </h1>
          <div className="mt-12 grid lg:grid-cols-12 gap-8 items-end">
            <p className="lg:col-span-6 lg:col-start-7 text-bone/80 text-lg leading-relaxed max-w-xl">
              Statecraft is the political strategy and communication platform built for
              candidates, parties and institutions who refuse to leave the next election
              to noise and chance.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 bg-gold text-ink px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-semibold hover:bg-bone transition-colors"
            >
              Our Services <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-bone/40 text-bone px-7 py-4 text-[12px] tracking-[0.22em] uppercase hover:border-gold hover:text-gold transition-colors"
            >
              Start the Conversation
            </Link>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 lg:right-12 text-[10px] tracking-[0.3em] uppercase text-bone/40 [writing-mode:vertical-rl] hidden md:block">
          Statecraft · 001
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="eyebrow text-emerald-deep">§ I — Who We Are</div>
            <div className="rule-gold mt-4 w-24" />
          </div>
          <div className="lg:col-span-8">
            <p className="display text-[clamp(2rem,4.5vw,3.75rem)] text-foreground">
              Politics is not just about ambition. It is about{" "}
              <em className="text-emerald-deep">perception, trust, access, timing,</em>{" "}
              message discipline and public confidence.
            </p>
            <div className="mt-12 grid md:grid-cols-2 gap-10 text-foreground/75 leading-relaxed">
              <p>
                From grassroots campaigns to digital voter engagement, from candidate
                positioning to issue-based advocacy, we provide the strategic machinery
                required to help political brands connect meaningfully with the people
                they seek to serve.
              </p>
              <p>
                Our work helps political leaders and organisations move from simple
                visibility to <strong className="text-foreground">strategic influence</strong> —
                deliberate political architecture, not random campaign activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-ink text-bone py-28 lg:py-40 relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <div className="eyebrow text-gold">§ II — What We Do</div>
              <h2 className="display text-[clamp(2.5rem,6vw,5rem)] mt-6 text-bone">
                Five disciplines.
                <br />
                <em className="text-gold">One campaign.</em>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 self-end">
              <p className="text-bone/70 text-lg leading-relaxed">
                Brand, communication, ground game, digital and intelligence — designed
                to operate as a single instrument so every appearance, post and ward
                visit compounds toward the same outcome.
              </p>
            </div>
          </div>

          <div className="border-t border-bone/15">
            {pillars.map((p) => (
              <div
                key={p.n}
                className="group grid lg:grid-cols-12 gap-6 py-10 border-b border-bone/15 transition-colors hover:bg-emerald-deep/20"
              >
                <div className="lg:col-span-2 text-gold font-serif text-3xl">{p.n}</div>
                <h3 className="lg:col-span-4 display text-3xl lg:text-4xl text-bone">{p.t}</h3>
                <p className="lg:col-span-5 lg:col-start-8 text-bone/70 leading-relaxed">{p.d}</p>
                <div className="lg:col-span-1 flex justify-end items-start">
                  <span aria-hidden className="text-gold text-xl transition-transform group-hover:translate-x-2">→</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 text-gold border-b border-gold pb-1 text-[12px] tracking-[0.22em] uppercase"
            >
              Read every service in detail →
            </Link>
          </div>
        </div>
      </section>

      {/* GRASSROOTS SPLIT */}
      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative">
            <img
              src={grassroots}
              alt="Crowd at a Nigerian political rally"
              loading="lazy"
              className="w-full h-[60vh] object-cover grayscale"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold text-ink p-6 max-w-xs hidden md:block">
              <div className="eyebrow">Field Report</div>
              <p className="font-serif text-2xl mt-2 leading-tight">
                Elections are won in wards, markets and town halls — long before they reach the screen.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="eyebrow text-emerald-deep">§ III — Ground Truth</div>
            <h2 className="display text-[clamp(2.25rem,5vw,4rem)] mt-6">
              From posters and slogans to <em className="text-emerald-deep">deliberate political architecture.</em>
            </h2>
            <p className="mt-8 text-foreground/75 leading-relaxed">
              The 2027 cycle will demand more than rallies and social media noise.
              It will require a sophisticated blend of storytelling, public relations,
              grassroots mobilisation, digital influence, voter intelligence and
              real-time feedback from the field.
            </p>
            <ul className="mt-8 space-y-3 text-foreground/80">
              {[
                "Ward-level communication planning",
                "Town halls & door-to-door messaging",
                "Local influencer & community leader engagement",
                "Field activation & feedback systems",
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-gold mt-1.5 h-1.5 w-1.5 rotate-45 bg-gold" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DATA */}
      <section className="relative bg-ink text-bone overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="p-12 lg:p-24 flex flex-col justify-center min-h-[70vh]">
            <div className="eyebrow text-gold">§ IV — Intelligence</div>
            <h2 className="display text-[clamp(2.5rem,6vw,5rem)] mt-6 text-bone">
              Strong campaigns are not built on <em className="text-gold">guesswork.</em>
            </h2>
            <p className="mt-8 text-bone/70 leading-relaxed max-w-md">
              Voter mapping, constituency analysis, perception research, polling support,
              message testing and political risk analysis — translated into decisions a
              campaign manager can act on by morning.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { k: "36", l: "States covered" },
                { k: "774", l: "LGA scope" },
                { k: "2027", l: "Built for" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-5xl text-gold">{s.k}</div>
                  <div className="eyebrow text-bone/50 mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[70vh]">
            <img src={dataImg} alt="Voter intelligence map" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* APPROACH PREVIEW */}
      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <div className="eyebrow text-emerald-deep">§ V — Method</div>
              <h2 className="display text-[clamp(2.5rem,6vw,5rem)] mt-6 max-w-[14ch]">
                The Statecraft <em className="text-emerald-deep">approach.</em>
              </h2>
            </div>
            <Link to="/approach" className="text-[12px] tracking-[0.22em] uppercase border-b border-foreground pb-1">
              Read the method →
            </Link>
          </div>
          <div className="grid md:grid-cols-5 gap-px bg-border">
            {[
              ["Listen", "Understand goals, audience, constituency and perception."],
              ["Research", "Study landscape, behaviour, opposition and conversations."],
              ["Strategise", "Build the roadmap for engagement and positioning."],
              ["Execute", "Ship content, PR, digital and grassroots in concert."],
              ["Measure", "Track, analyse and refine — campaign as living system."],
            ].map(([t, d], i) => (
              <div key={t} className="bg-background p-8 hover:bg-secondary transition-colors">
                <div className="font-serif text-gold text-2xl">0{i + 1}</div>
                <h3 className="mt-6 font-serif text-2xl text-foreground">{t}</h3>
                <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-emerald-deep text-bone">
        <img src={podium} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-emerald-deep/70 to-transparent" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 py-32 lg:py-48 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="eyebrow text-gold">The Road to 2027</div>
            <h2 className="display text-[clamp(3rem,7vw,6rem)] mt-6 text-bone">
              From being seen
              <br />
              to being <em className="text-gold">trusted.</em>
            </h2>
            <p className="mt-8 text-bone/80 max-w-xl leading-relaxed text-lg">
              Whether you are preparing to run, planning a campaign, strengthening your
              public profile or building a movement — Statecraft is ready to work with you.
            </p>
            <Link
              to="/contact"
              className="mt-12 inline-flex items-center gap-3 bg-gold text-ink px-8 py-5 text-[12px] tracking-[0.22em] uppercase font-semibold hover:bg-bone transition-colors"
            >
              Begin the Engagement <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
