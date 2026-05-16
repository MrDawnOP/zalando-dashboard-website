import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Database,
  ExternalLink,
  Moon,
  Sparkles,
  Sun,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';

const repoLink =
  'https://github.com/MrDawnOP/zalando-style-customer-segmentation-roi';

const portfolioLink =
  'https://ankit-vyas-analytics-portfolio-51j7qv0mp-mrdawnops-projects.vercel.app/';

const metrics = [
  { label: 'Customers Analysed', value: '10,000+', icon: Users },
  { label: 'Orders Reviewed', value: '50,000+', icon: Database },
  { label: 'Campaigns Tracked', value: '120', icon: BarChart3 },
  { label: 'Core KPIs', value: 'ROI / ROAS', icon: TrendingUp },
];

const methodology = [
  {
    title: 'Data Preparation',
    text: 'Cleaned customer, order and campaign-level datasets into BI-ready structures for segmentation and marketing performance analysis.',
  },
  {
    title: 'Customer Segmentation',
    text: 'Applied RFM-style logic to identify high-value customers, repeat buyers, inactive customers and churn-risk groups.',
  },
  {
    title: 'Campaign ROI Analysis',
    text: 'Measured channel and campaign performance using ROI, ROAS, CPA, conversion rate and revenue contribution.',
  },
  {
    title: 'Business Recommendations',
    text: 'Converted findings into budget reallocation, retention targeting and growth strategy recommendations.',
  },
];

const insights = [
  'High-value customer groups should receive priority retention campaigns.',
  'Campaigns with high spend but weak conversion require landing-page or creative optimisation.',
  'Budget should shift from weak ROAS campaigns into stronger customer acquisition channels.',
  'Churn-risk customers can be targeted through personalised reactivation offers.',
];

const tools = [
  'SQL',
  'Python',
  'Pandas',
  'Excel',
  'Power BI / Tableau',
  'GA4-style Metrics',
  'RFM Analysis',
  'Marketing ROI',
];

const kpis = [
  'Revenue',
  'Profit',
  'Conversion Rate',
  'CPA',
  'ROAS',
  'Marketing ROI',
  'Customer Lifetime Value',
  'RFM Score',
  'Churn Risk',
];

const ThemeToggle = ({ theme, setTheme }) => {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-900 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-slate-900 dark:text-white"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
};

const SectionHeader = ({ eyebrow, title, text }) => (
  <div className="mb-10 max-w-3xl">
    <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">
      <Sparkles size={14} />
      {eyebrow}
    </p>

    <h2 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white md:text-4xl">
      {title}
    </h2>

    {text && (
      <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
        {text}
      </p>
    )}
  </div>
);

const ExternalButton = ({ href, children, primary = false }) => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-black transition duration-200';

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        primary
          ? `${base} bg-cyan-400 text-slate-950 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20`
          : `${base} border border-slate-300 bg-white text-slate-900 hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-cyan-300 dark:hover:text-cyan-200`
      }
    >
      {children}
    </a>
  );
};

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-12rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-400/10" />
        <div className="absolute right-[-14rem] top-[18rem] h-[34rem] w-[34rem] rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-500/10" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-base font-black tracking-tight text-slate-950 dark:text-white">
            Zalando Analytics
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 dark:text-slate-300 md:flex">
            <a href="#overview" className="hover:text-cyan-700 dark:hover:text-cyan-200">Overview</a>
            <a href="#methodology" className="hover:text-cyan-700 dark:hover:text-cyan-200">Methodology</a>
            <a href="#insights" className="hover:text-cyan-700 dark:hover:text-cyan-200">Insights</a>
            <a href="#tools" className="hover:text-cyan-700 dark:hover:text-cyan-200">Tools</a>
          </div>

          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>

      <main className="relative z-10">
        <section id="home" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">
                <BarChart3 size={15} />
                Featured Marketing Analytics Case Study
              </p>

              <h1 className="max-w-5xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 dark:text-white md:text-6xl">
                Zalando-Style Customer Segmentation & Marketing ROI Analysis
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                A European fashion e-commerce analytics project analysing customer behaviour,
                campaign ROI, ROAS, CPA, conversion rate, customer lifetime value, RFM
                segmentation, churn risk and marketing budget reallocation.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <ExternalButton href={repoLink} primary>
                  <ExternalLink size={17} />
                  GitHub Repo
                </ExternalButton>

                <ExternalButton href={portfolioLink}>
                  <ArrowUpRight size={17} />
                  Back to Portfolio
                </ExternalButton>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {metrics.map((metric) => {
                  const Icon = metric.icon;

                  return (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
                    >
                      <Icon className="text-cyan-600 dark:text-cyan-300" size={20} />
                      <p className="mt-4 text-2xl font-black text-slate-950 dark:text-white">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-sm font-bold text-slate-500 dark:text-slate-400">
                        {metric.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-cyan-900/10 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-cyan-950/30">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-slate-900/80">
                <div className="flex items-center justify-between border-b border-slate-200 pb-5 dark:border-white/10">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Project Snapshot</p>
                    <h2 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
                      Marketing ROI Engine
                    </h2>
                  </div>

                  <div className="rounded-2xl bg-cyan-400 p-3 text-slate-950">
                    <TrendingUp size={24} />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    ['Business Problem', 'Which customer segments and channels drive profitable growth?'],
                    ['Core Analysis', 'RFM segmentation, ROI, ROAS, CPA, CLV and churn risk.'],
                    ['Decision Output', 'Budget reallocation and retention recommendations.'],
                    ['Recruiter Value', 'Shows analytics, commercial thinking and storytelling.'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-950/70"
                    >
                      <p className="text-xs font-bold uppercase tracking-wide text-cyan-700 dark:text-cyan-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="border-y border-slate-200 bg-white/60 dark:border-white/10 dark:bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <SectionHeader
              eyebrow="Overview"
              title="A marketing analytics project designed around commercial decisions."
              text="The project simulates realistic e-commerce analytics questions faced by fashion retailers. It connects customer behaviour, campaign efficiency and budget allocation into one executive-ready story."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {[
                ['Customer Segmentation', 'Identify profitable customer groups, repeat buyers and churn-risk audiences.'],
                ['Marketing ROI', 'Evaluate channel and campaign performance using ROI, ROAS and CPA.'],
                ['Budget Strategy', 'Recommend where spend should be reduced, protected or reallocated.'],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/70"
                >
                  <CheckCircle2 className="text-cyan-600 dark:text-cyan-300" size={22} />
                  <h3 className="mt-5 text-xl font-black text-slate-950 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="methodology" className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeader
            eyebrow="Methodology"
            title="From raw data to executive recommendations."
            text="A structured workflow for cleaning, segmenting, measuring and recommending actions."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {methodology.map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.035]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400 text-sm font-black text-slate-950">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-black text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="insights" className="border-y border-slate-200 bg-white/60 dark:border-white/10 dark:bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <SectionHeader
              eyebrow="Insights"
              title="Key business insights and recommendations."
              text="The final output is designed to help marketing, commercial and growth teams make better decisions."
            />

            <div className="grid gap-5 lg:grid-cols-2">
              {insights.map((insight) => (
                <div
                  key={insight}
                  className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/70"
                >
                  <Target className="mt-1 shrink-0 text-cyan-600 dark:text-cyan-300" size={22} />
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {insight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tools" className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeader
            eyebrow="Tools & KPIs"
            title="Technical stack and metrics used."
            text="Built to demonstrate both technical analytics capability and commercial KPI understanding."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              ['Tools', tools],
              ['KPIs Analysed', kpis],
            ].map(([title, items]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.035]"
              >
                <h3 className="text-xl font-black text-slate-950 dark:text-white">
                  {title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700 dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500 dark:border-white/10">
        Zalando-Style Customer Segmentation & Marketing ROI Analysis © 2026
      </footer>
    </div>
  );
}

export default App;
