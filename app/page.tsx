const featureList = [
  {
    title: "Lifecycle visibility",
    description:
      "Track every customer milestone with real-time dashboards and smart alerts that keep your team ahead of churn.",
  },
  {
    title: "Playbooks that convert",
    description:
      "Launch tailored outreach with automation that feels personal, powered by Persimmon's revenue AI.",
  },
  {
    title: "Integrations that sync",
    description:
      "Connect effortlessly to your CRM, billing, and support stack to orchestrate the entire customer journey.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-persimmon-burgundy via-brand-secondary/80 to-brand-accent animate-gradient" />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pb-20 pt-24 sm:px-10 lg:px-16">
        <header className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.3em] text-brand-light/80 shadow-lg backdrop-blur">
            Persimmon SaaS Platform
          </span>
          <h1 className="max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Craft customer journeys that feel curated, scalable, and distinctly yours.
          </h1>
          <p className="max-w-2xl text-lg text-brand-peach/90 sm:text-xl">
            Persimmon unifies revenue, product, and success teams with a shared source of truth for every account touchpoint.
          </p>
          <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:items-center">
            <a
              className="inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-3 font-semibold text-brand-dark transition hover:-translate-y-0.5 hover:bg-brand-accent hover:shadow-xl"
              href="#request-demo"
            >
              Request a demo
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              href="#explore"
            >
              Explore the platform
            </a>
          </div>
        </header>

        <section
          id="explore"
          className="grid gap-8 rounded-3xl border border-white/10 bg-brand-dark/60 p-10 shadow-2xl backdrop-blur-lg lg:grid-cols-[1.2fr_1fr]"
        >
          <div className="space-y-6">
            <h2 className="font-display text-3xl text-brand-peach sm:text-4xl">
              A command center for modern customer teams
            </h2>
            <p className="text-brand-light/80">
              From onboarding to expansion, Persimmon equips every role with the context they need to turn accounts into advocates. Use automated health scoring, timeline insights, and collaborative playbooks to drive outcomes faster.
            </p>
            <dl className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <dt className="text-sm uppercase tracking-wider text-brand-light/60">Time to value</dt>
                <dd className="mt-2 font-display text-3xl text-brand-peach">↘ 45%</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <dt className="text-sm uppercase tracking-wider text-brand-light/60">Retention lift</dt>
                <dd className="mt-2 font-display text-3xl text-brand-peach">+18 pts</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <dt className="text-sm uppercase tracking-wider text-brand-light/60">NPS boost</dt>
                <dd className="mt-2 font-display text-3xl text-brand-peach">2.4×</dd>
              </div>
            </dl>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 -translate-x-6 rounded-full bg-gradient-to-br from-brand-primary/40 via-brand-peach/30 to-white/20 blur-3xl" />
            <div className="relative w-full max-w-sm rounded-3xl border border-white/15 bg-white/10 p-6 text-left shadow-xl backdrop-blur">
              <p className="text-sm uppercase tracking-[0.25em] text-white/70">Forecast snapshot</p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-xs uppercase text-brand-light/60">Top account</p>
                  <p className="font-display text-2xl text-white">Atlas Labs</p>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-brand-dark/70 px-4 py-3">
                  <span className="text-brand-light/70">Expansion potential</span>
                  <span className="font-display text-xl text-brand-peach">$248k</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-brand-dark/70 px-4 py-3">
                  <span className="text-brand-light/70">Health score</span>
                  <span className="font-display text-xl text-brand-peach">92</span>
                </div>
                <button className="mt-2 w-full rounded-full bg-white px-4 py-2 font-semibold text-brand-dark transition hover:bg-brand-peach">
                  View account plan
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10" id="request-demo">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Why revenue leaders choose Persimmon</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureList.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >
                <h3 className="font-display text-2xl text-brand-peach group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-brand-light/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="rounded-3xl border border-white/10 bg-brand-dark/80 p-10 text-center shadow-2xl backdrop-blur">
          <p className="font-display text-3xl text-white">Ready to orchestrate every customer moment?</p>
          <p className="mt-3 text-brand-light/70">
            Join the Persimmon community of modern SaaS teams creating unforgettable customer experiences.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 font-semibold text-brand-dark transition hover:-translate-y-0.5 hover:bg-brand-accent hover:shadow-lg"
              href="mailto:hello@persimmon.com"
            >
              Talk to sales
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              href="/docs"
            >
              View docs
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
