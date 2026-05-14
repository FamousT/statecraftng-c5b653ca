import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/approach")({
  component: Approach,
  head: () => ({
    meta: [
      { title: "Approach — Statecraft" },
      { name: "description", content: "Listen. Research. Strategise. Execute. Measure. The Statecraft method for political communication and engagement." },
    ],
  }),
});

const steps = [
  { n: "I", t: "We Listen", d: "We begin by understanding your political goals, target audience, constituency realities, strengths, weaknesses and public perception." },
  { n: "II", t: "We Research", d: "We study the political landscape, voter behaviour, media environment, opposition narratives, community concerns and digital conversations." },
  { n: "III", t: "We Strategise", d: "We develop a clear roadmap for political communication, public engagement, brand positioning and campaign visibility." },
  { n: "IV", t: "We Execute", d: "We create the content, messaging, public relations structures, digital campaigns and grassroots engagement tools needed to connect with voters." },
  { n: "V", t: "We Measure", d: "We track feedback, monitor perception, analyse engagement and refine strategy based on what the data is saying." },
];

const audiences = [
  "Political candidates",
  "Public office holders",
  "Political parties",
  "Campaign organisations",
  "Government institutions",
  "Advocacy groups",
  "Policy-focused organisations",
  "Political consultants",
  "Civic engagement platforms",
  "Issue-based movements",
];

function Approach() {
  return (
    <Layout>
      <section className="pt-40 pb-20 bg-ink text-bone">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="eyebrow text-gold">The Method</div>
          <h1 className="display text-[clamp(3rem,9vw,8rem)] mt-6 max-w-[16ch] text-bone">
            Deliberate political <em className="text-gold">architecture.</em>
          </h1>
          <p className="mt-10 max-w-2xl text-bone/70 text-lg leading-relaxed">
            Every message must serve a purpose. Every appearance must strengthen perception.
            Every engagement must move the campaign closer to the people. Every piece of data
            must guide a smarter decision.
          </p>
        </div>
      </section>

      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="space-y-px">
            {steps.map((s) => (
              <div
                key={s.n}
                className="group grid lg:grid-cols-12 gap-8 items-baseline py-10 border-b border-border hover:bg-secondary transition-colors px-2"
              >
                <div className="lg:col-span-2 font-serif text-emerald-deep text-5xl">{s.n}</div>
                <h2 className="lg:col-span-4 display text-4xl lg:text-5xl">{s.t}</h2>
                <p className="lg:col-span-6 text-foreground/75 leading-relaxed text-lg">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-secondary border-y border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow text-emerald-deep">Who We Work With</div>
            <h2 className="display text-[clamp(2.25rem,5vw,4rem)] mt-6">
              Built for those willing to <em className="text-emerald-deep">build something real.</em>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-x-8">
              {audiences.map((a) => (
                <li key={a} className="py-4 border-b border-border flex gap-3 text-foreground/85">
                  <span className="text-gold">◆</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="display text-[clamp(2rem,4.5vw,3.5rem)]">
            We help you move from being seen to being trusted. From being heard to being
            <em className="text-emerald-deep"> believed.</em>
          </p>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-3 bg-foreground text-background px-8 py-5 text-[12px] tracking-[0.22em] uppercase font-semibold hover:bg-emerald-deep transition-colors"
          >
            Start the Conversation <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
