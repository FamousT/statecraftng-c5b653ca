import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — Statecraft" },
      { name: "description", content: "Political brand strategy, strategic communication, grassroots mobilisation, digital engagement and voter intelligence." },
    ],
  }),
});

const services = [
  {
    n: "01",
    title: "Political Brand Strategy",
    lead: "Every successful political journey begins with a clear identity.",
    items: [
      "Candidate persona development",
      "Public image positioning",
      "Campaign message architecture",
      "Reputation mapping",
      "Issue framing",
      "Speech tone and communication style",
      "Political storytelling",
      "Visual identity and campaign aesthetics",
    ],
  },
  {
    n: "02",
    title: "Strategic Communication & Public Relations",
    lead: "The message is never just what you say. It is how people receive, repeat, debate and remember it.",
    items: [
      "Campaign communication strategy",
      "Public relations planning",
      "Media engagement",
      "Press releases & official statements",
      "Crisis communication",
      "Stakeholder messaging",
      "Speechwriting & talking points",
      "Debate & interview preparation",
      "Reputation management",
    ],
  },
  {
    n: "03",
    title: "Grassroots Engagement & Voter Mobilisation",
    lead: "Elections are won in communities — wards, markets, schools, town halls, religious centres.",
    items: [
      "Ward-level communication planning",
      "Community engagement strategy",
      "Town hall planning",
      "Door-to-door campaign messaging",
      "Voter education materials",
      "Local influencer & community leader engagement",
      "Field activation strategy",
      "Feedback collection systems",
      "Volunteer communication guides",
    ],
  },
  {
    n: "04",
    title: "Digital Political Engagement",
    lead: "The modern voter is online, informed, distracted and constantly exposed to competing narratives.",
    items: [
      "Social media campaign strategy",
      "Content planning & production",
      "Candidate profile management",
      "Online reputation building",
      "Digital advertising strategy",
      "Voter sentiment tracking",
      "Issue-based content campaigns",
      "Short-form video strategy",
      "Influencer & creator engagement",
      "Online community management",
    ],
  },
  {
    n: "05",
    title: "Data, Research & Voter Intelligence",
    lead: "Strong campaigns are not built on guesswork.",
    items: [
      "Voter mapping",
      "Constituency analysis",
      "Public perception research",
      "Grassroots feedback tracking",
      "Issue identification",
      "Demographic targeting",
      "Real-time campaign intelligence",
      "Message testing",
      "Polling support",
      "Political risk analysis",
    ],
  },
];

function Services() {
  return (
    <Layout>
      <section className="pt-40 pb-24 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="eyebrow text-emerald-deep">Services · Vol. I</div>
          <h1 className="display text-[clamp(3rem,9vw,8rem)] mt-6 max-w-[18ch]">
            Five disciplines, engineered to <em className="text-emerald-deep">compound.</em>
          </h1>
          <p className="mt-10 max-w-2xl text-foreground/70 text-lg leading-relaxed">
            Brand, message, ground game, digital and intelligence — each capable on its own,
            unstoppable in concert. Below: the full doctrine.
          </p>
        </div>
      </section>

      <section>
        {services.map((s, idx) => (
          <article
            key={s.n}
            className={`py-24 lg:py-32 ${idx % 2 === 0 ? "bg-background" : "bg-secondary"}`}
          >
            <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="font-serif text-gold text-7xl leading-none">{s.n}</div>
                <h2 className="display text-[clamp(2rem,4vw,3.5rem)] mt-6">{s.title}</h2>
                <p className="mt-8 text-foreground/75 text-lg leading-relaxed italic font-serif">
                  {s.lead}
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <div className="eyebrow text-emerald-deep mb-6">Capabilities</div>
                <ul className="grid sm:grid-cols-2 gap-x-8">
                  {s.items.map((i) => (
                    <li
                      key={i}
                      className="py-3 border-b border-border flex gap-3 items-start text-foreground/85"
                    >
                      <span className="text-gold text-xs mt-1">▸</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-ink text-bone py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 text-center">
          <h2 className="display text-[clamp(2.5rem,6vw,5rem)] max-w-[20ch] mx-auto">
            Ready to design the strategy your message deserves?
          </h2>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-3 bg-gold text-ink px-8 py-5 text-[12px] tracking-[0.22em] uppercase font-semibold hover:bg-bone transition-colors"
          >
            Engage Statecraft <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
