import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Statecraft" },
      { name: "description", content: "Begin the engagement. Reach Statecraft to design the strategy for your campaign or institution." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="pt-40 pb-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <div className="eyebrow text-emerald-deep">§ Engagement</div>
            <h1 className="display text-[clamp(3rem,8vw,7rem)] mt-6">
              Let's start the <em className="text-emerald-deep">conversation.</em>
            </h1>
            <p className="mt-8 text-foreground/75 text-lg leading-relaxed max-w-lg">
              The road to 2027 has already begun. Tell us about your campaign, constituency
              or institution — we will respond within two business days.
            </p>
            <div className="mt-12 space-y-6">
              <div>
                <div className="eyebrow text-foreground/50">Email</div>
                <a href="mailto:info@cerebralhub.com" className="font-serif text-3xl mt-2 block hover:text-emerald-deep">
                  info@cerebralhub.com
                </a>
              </div>
              <div>
                <div className="eyebrow text-foreground/50">Operated by</div>
                <p className="font-serif text-2xl mt-2">Cerebral Hub</p>
                <p className="text-sm text-foreground/60 mt-1">
                  Content creation · Public policy · Strategic communication · Advisory
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="bg-card border border-border p-8 lg:p-12 space-y-6"
            >
              <div className="eyebrow text-gold">Engagement Brief</div>
              <Field label="Full name" name="name" required />
              <Field label="Organisation / Campaign" name="org" />
              <Field label="Email" name="email" type="email" required />
              <div>
                <label className="eyebrow text-foreground/60 block mb-2">Type of engagement</label>
                <select className="w-full border border-border bg-background px-4 py-3 text-foreground">
                  <option>Political Brand Strategy</option>
                  <option>Strategic Communication & PR</option>
                  <option>Grassroots Mobilisation</option>
                  <option>Digital Political Engagement</option>
                  <option>Data, Research & Voter Intelligence</option>
                  <option>Full-spectrum campaign</option>
                </select>
              </div>
              <div>
                <label className="eyebrow text-foreground/60 block mb-2">Tell us about it</label>
                <textarea
                  rows={5}
                  required
                  className="w-full border border-border bg-background px-4 py-3 text-foreground"
                  placeholder="Constituency, timeline, current state, what victory looks like…"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-foreground text-background px-6 py-4 text-[12px] tracking-[0.22em] uppercase font-semibold hover:bg-emerald-deep transition-colors"
              >
                {sent ? "Received — we'll be in touch ✓" : "Submit Brief →"}
              </button>
              <p className="text-xs text-foreground/50">
                Submissions are confidential and reviewed by the Statecraft strategy desk.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-foreground/60 block mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border-b border-border bg-transparent px-1 py-3 text-foreground focus:outline-none focus:border-emerald-deep"
      />
    </div>
  );
}
