const steps = [
  {
    icon: "📝",
    title: "Enter your business info",
    description: "Tell us what you do in one sentence.",
  },
  {
    icon: "🧲",
    title: "Define your ideal customer",
    description: "Pick job titles, company size, or industry.",
  },
  {
    icon: "✉️",
    title: "Get instant results",
    description: "We’ll deliver leads with match scores and pre-written emails.",
  },
];

const features = [
  "⚡ Instant setup — see value in under a minute",
  "🎯 Highly qualified — leads matched to your ICP",
  "✉️ Personalized outreach — AI-crafted cold emails",
  "💰 Affordable — replaces $300+/month tools",
];

const sampleLeads = [
  {
    name: "Avery Chen",
    title: "Head of RevOps",
    company: "Northwind Analytics",
    match: "98%",
  },
  {
    name: "Jordan Patel",
    title: "VP Growth",
    company: "Helios Cloud",
    match: "95%",
  },
  {
    name: "Sasha Nguyen",
    title: "Director of Sales",
    company: "Beacon Labs",
    match: "93%",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$49",
    leads: "100 leads / month",
  },
  {
    name: "Growth",
    price: "$99",
    leads: "500 leads / month",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-persimmon-burgundy via-brand-secondary/80 to-brand-accent text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-brand-light blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-brand-primary blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-24 px-6 pb-24 pt-24 sm:px-10 lg:px-16">
        <header className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.4em] text-brand-light/80 backdrop-blur">
            Persimmon Lead Engine
          </span>
          <h1 className="max-w-3xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            🚀 Find your next 10 qualified leads in 30 seconds.
          </h1>
          <p className="max-w-2xl text-lg text-brand-peach/90 sm:text-xl">
            Persimmon is the simplest way to generate B2B leads and draft personalized outreach — no setup, no API keys, just results.
          </p>
          <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:items-center">
            <a
              className="inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-3 font-semibold text-brand-dark shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-accent hover:shadow-2xl"
              href="#get-started"
            >
              👉 Get Started Free
            </a>
          </div>
          <div className="relative mt-12 w-full overflow-hidden rounded-3xl border border-white/10 bg-brand-dark/60 p-6 shadow-2xl backdrop-blur">
            <div className="absolute inset-0 bg-grid-white/[0.04]" />
            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-brand-light/60">
                  Live Snapshot
                </p>
                <h2 className="mt-3 font-display text-2xl text-brand-peach">Qualified leads generated this week</h2>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-center">
                <p className="text-sm text-brand-light/70">Average match score</p>
                <p className="font-display text-3xl text-white">96%</p>
              </div>
            </div>
          </div>
        </header>

        <section className="space-y-12" id="how-it-works">
          <div className="space-y-3 text-center sm:text-left">
            <h2 className="font-display text-3xl text-brand-peach sm:text-4xl">How Persimmon Works</h2>
            <p className="text-brand-light/80">Three simple steps. Zero guesswork.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="group space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-lg transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-3xl">
                  {step.icon}
                </div>
                <h3 className="font-display text-xl text-white">{step.title}</h3>
                <p className="text-sm text-brand-light/80">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8" id="features">
          <h2 className="font-display text-3xl text-brand-peach sm:text-4xl">Why Persimmon?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-3xl border border-white/10 bg-brand-dark/70 px-6 py-5 text-lg text-brand-light/90 shadow-xl backdrop-blur"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8" id="demo">
          <div className="space-y-3 sm:text-left">
            <h2 className="font-display text-3xl text-brand-peach sm:text-4xl">See the Results</h2>
            <p className="text-brand-light/80">“Here’s what a Persimmon lead list looks like.”</p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/20 text-left text-sm text-brand-dark">
                <thead className="bg-white/60">
                  <tr>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs text-brand-dark/80">
                      Name
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs text-brand-dark/80">
                      Title
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs text-brand-dark/80">
                      Company
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs text-brand-dark/80">
                      Match
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs text-brand-dark/80">
                      Outreach
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-dark/10 bg-white/80">
                  {sampleLeads.map((lead, index) => (
                    <tr key={`${lead.name}-${lead.company}-${index}`} className="text-brand-dark">
                      <td className="px-4 py-3 font-medium">{lead.name}</td>
                      <td className="px-4 py-3">{lead.title}</td>
                      <td className="px-4 py-3">{lead.company}</td>
                      <td className="px-4 py-3 font-semibold text-brand-secondary">{lead.match}</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-brand-dark/80 px-3 py-1 text-xs font-semibold text-white">
                          Draft email
                          <span className="text-brand-peach/70">blurred</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="space-y-10" id="pricing">
          <div className="space-y-3 sm:text-left">
            <h2 className="font-display text-3xl text-brand-peach sm:text-4xl">Simple Pricing</h2>
            <p className="text-brand-light/80">Try free today. No credit card required.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/15 bg-brand-dark/70 p-8 text-brand-light/90 shadow-2xl backdrop-blur"
              >
                <div className="space-y-3">
                  <h3 className="font-display text-2xl text-white">{plan.name} Plan</h3>
                  <p className="text-4xl font-bold text-brand-peach">{plan.price}<span className="text-base font-normal text-brand-light/60">/month</span></p>
                  <p>{plan.leads}</p>
                </div>
                <button className="mt-6 w-full rounded-full bg-brand-primary px-6 py-3 font-semibold text-brand-dark transition hover:-translate-y-0.5 hover:bg-brand-accent hover:shadow-xl">
                  👉 Get Started Free
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/15 bg-white/10 px-6 py-14 text-center shadow-2xl backdrop-blur" id="get-started">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Ready to find your next customer?</h2>
          <p className="mt-3 text-brand-light/80">Spin up your first lead list for free in under a minute.</p>
          <div className="mt-6 flex justify-center">
            <a
              className="inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-3 font-semibold text-brand-dark shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-accent hover:shadow-2xl"
              href="/signup"
            >
              👉 Get Started Free
            </a>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-white/10 py-8 text-center text-sm text-brand-light/70 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-white">Persimmon</span>
            <span>About · Contact</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <a className="hover:text-white" href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="hover:text-white" href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>
          <span className="text-xs">© 2025 Persimmon. All rights reserved.</span>
        </footer>
      </div>
    </div>
  );
}
