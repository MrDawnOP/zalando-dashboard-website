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

const dashboardMetrics = [
  { label: 'Total Revenue', value: '£2.4M', change: '+18%', note: 'vs previous period' },
  { label: 'Marketing ROI', value: '3.8x', change: '+22%', note: 'campaign efficiency' },
  { label: 'Average CPA', value: '£14.20', change: '-11%', note: 'lower acquisition cost' },
  { label: 'Conversion Rate', value: '4.7%', change: '+9%', note: 'checkout performance' },
  { label: 'Churn Risk', value: '18%', change: '-7%', note: 'at-risk customers' },
  { label: 'Repeat Purchase', value: '42%', change: '+13%', note: 'loyalty signal' },
];

const channelPerformance = [
  {
    channel: 'Email',
    spend: '£42K',
    revenue: '£218K',
    roas: '5.2x',
    cpa: '£8.70',
    score: 91,
    action: 'Protect',
  },
  {
    channel: 'Paid Search',
    spend: '£96K',
    revenue: '£442K',
    roas: '4.6x',
    cpa: '£12.40',
    score: 82,
    action: 'Scale',
  },
  {
    channel: 'Organic Social',
    spend: '£18K',
    revenue: '£66K',
    roas: '3.7x',
    cpa: '£10.90',
    score: 70,
    action: 'Maintain',
  },
  {
    channel: 'Paid Social',
    spend: '£78K',
    revenue: '£164K',
    roas: '2.1x',
    cpa: '£21.30',
    score: 44,
    action: 'Optimise',
  },
  {
    channel: 'Display',
    spend: '£54K',
    revenue: '£76K',
    roas: '1.4x',
    cpa: '£29.80',
    score: 28,
    action: 'Reduce',
  },
];

const funnelSteps = [
  { stage: 'Website Sessions', users: '240K', rate: 100, drop: 'Baseline traffic' },
  { stage: 'Product Views', users: '132K', rate: 55, drop: '45% drop-off' },
  { stage: 'Add to Basket', users: '38K', rate: 16, drop: 'Basket intent' },
  { stage: 'Checkout Started', users: '21K', rate: 9, drop: 'Payment friction' },
  { stage: 'Orders Completed', users: '11.3K', rate: 4.7, drop: 'Final CVR' },
];

const customerSegments = [
  {
    segment: 'Champions',
    size: '12%',
    revenue: '£680K',
    behaviour: 'Frequent buyers with high order value',
    action: 'Prioritise loyalty rewards, early access and premium recommendations.',
  },
  {
    segment: 'Loyal Customers',
    size: '21%',
    revenue: '£520K',
    behaviour: 'Repeat buyers with strong retention signals',
    action: 'Use cross-sell bundles and personalised category offers.',
  },
  {
    segment: 'Potential Loyalists',
    size: '18%',
    revenue: '£360K',
    behaviour: 'Recent buyers with medium frequency',
    action: 'Nurture with email flows and product discovery campaigns.',
  },
  {
    segment: 'At Risk',
    size: '16%',
    revenue: '£310K',
    behaviour: 'Past valuable customers with declining activity',
    action: 'Launch win-back campaigns with personalised incentives.',
  },
  {
    segment: 'Low Value',
    size: '33%',
    revenue: '£120K',
    behaviour: 'Low frequency and weak profitability',
    action: 'Limit paid spend and use low-cost automation only.',
  },
];

const budgetPlan = [
  {
    channel: 'Paid Search',
    current: '32%',
    recommended: '38%',
    reason: 'Strong purchase intent and high ROAS.',
  },
  {
    channel: 'Email',
    current: '14%',
    recommended: '22%',
    reason: 'Best retention efficiency and lowest CPA.',
  },
  {
    channel: 'Paid Social',
    current: '26%',
    recommended: '22%',
    reason: 'Useful for reach, but conversion needs optimisation.',
  },
  {
    channel: 'Display',
    current: '18%',
    recommended: '8%',
    reason: 'Weakest ROI and highest CPA.',
  },
  {
    channel: 'Testing Budget',
    current: '10%',
    recommended: '10%',
    reason: 'Preserve budget for experiments and new audience tests.',
  },
];

const executiveInsights = [
  {
    title: 'High-value customers drive disproportionate revenue',
    metric: 'Top 20%',
    text: 'A smaller group of loyal and high-frequency customers contributes a large share of revenue, making retention campaigns more valuable than broad discounting.',
  },
  {
    title: 'Email and paid search deserve protected budget',
    metric: '4x+ ROAS',
    text: 'These channels show stronger commercial efficiency and should receive protected or increased investment.',
  },
  {
    title: 'Display spend should be reduced',
    metric: '1.4x ROAS',
    text: 'Display has weak ROI and high CPA, so budget should shift into higher-performing channels.',
  },
  {
    title: 'Churn-risk customers need a separate strategy',
    metric: '18%',
    text: 'Inactive and at-risk customers should receive personalised reactivation journeys instead of generic acquisition messaging.',
  },
];

const recommendations = [
  'Shift budget from weak display campaigns into paid search and email.',
  'Create separate journeys for Champions, Loyal Customers and At-Risk users.',
  'Use RFM segmentation to personalise campaign targeting and reduce wasted spend.',
  'Track CPA, ROAS and conversion rate weekly to prevent inefficient spend.',
  'Build an executive dashboard showing revenue, ROI, channel performance and churn-risk signals.',
  'Run controlled A/B tests on landing pages for paid social campaigns.',
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

const ProgressBar = ({ value }) => (
  <div className="h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
    <div
      className="h-full rounded-full bg-cyan-400"
      style={{ width: `${value}%` }}
    />
  </div>
);

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
            <a href="#dashboard" className="hover:text-cyan-700 dark:hover:text-cyan-200">Dashboard</a>
            <a href="#segments" className="hover:text-cyan-700 dark:hover:text-cyan-200">Segments</a>
            <a href="#budget" className="hover:text-cyan-700 dark:hover:text-cyan-200">Budget</a>
            <a href="#insights" className="hover:text-cyan-700 dark:hover:text-cyan-200">Insights</a>
            <a href="#methodology" className="hover:text-cyan-700 dark:hover:text-cyan-200">Methodology</a>
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
                Featured Marketing Analytics Dashboard
              </p>

              <h1 className="max-w-5xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 dark:text-white md:text-6xl">
                Zalando-Style Customer Segmentation & Marketing ROI Dashboard
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                A European fashion e-commerce analytics dashboard analysing customer behaviour,
                channel efficiency, ROI, ROAS, CPA, conversion rate, RFM segmentation, churn risk
                and marketing budget reallocation.
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
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-cyan-900/10 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-cyan-950/30">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-slate-900/80">
                <div className="flex items-center justify-between border-b border-slate-200 pb-5 dark:border-white/10">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Executive Summary</p>
                    <h2 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
                      Marketing Growth Engine
                    </h2>
                  </div>

                  <div className="rounded-2xl bg-cyan-400 p-3 text-slate-950">
                    <TrendingUp size={24} />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    ['Best Channel', 'Email leads retention performance with 5.2x ROAS.'],
                    ['Biggest Risk', 'Display campaigns show weak ROI and high CPA.'],
                    ['Best Segment', 'Champions and Loyal Customers drive the strongest revenue.'],
                    ['Decision', 'Shift budget toward paid search and lifecycle email.'],
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

        <section id="dashboard" className="border-y border-slate-200 bg-white/60 dark:border-white/10 dark:bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <SectionHeader
              eyebrow="Dashboard"
              title="Executive marketing performance dashboard."
              text="A dashboard-style view of KPI performance, channel efficiency, funnel drop-off and commercial recommendations."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {dashboardMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/80"
                >
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-3xl font-black text-slate-950 dark:text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm font-black text-cyan-700 dark:text-cyan-200">
                    {metric.change}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {metric.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/80">
                <h3 className="text-xl font-black text-slate-950 dark:text-white">
                  Channel ROI & ROAS Performance
                </h3>

                <div className="mt-6 space-y-5">
                  {channelPerformance.map((channel) => (
                    <div key={channel.channel}>
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <div>
                          <p className="font-bold text-slate-800 dark:text-white">
                            {channel.channel}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Spend: {channel.spend} · Revenue: {channel.revenue} · ROAS: {channel.roas}
                          </p>
                        </div>

                        <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-black text-cyan-800 dark:bg-cyan-400/10 dark:text-cyan-200">
                          {channel.action}
                        </span>
                      </div>

                      <ProgressBar value={channel.score} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/80">
                <h3 className="text-xl font-black text-slate-950 dark:text-white">
                  Funnel Performance
                </h3>

                <div className="mt-6 space-y-5">
                  {funnelSteps.map((step) => (
                    <div key={step.stage}>
                      <div className="mb-2 flex items-center justify-between">
                        <div>
                          <p className="font-bold text-slate-800 dark:text-white">
                            {step.stage}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {step.users} · {step.drop}
                          </p>
                        </div>
                        <p className="text-sm font-black text-cyan-700 dark:text-cyan-200">
                          {step.rate}%
                        </p>
                      </div>
                      <ProgressBar value={step.rate} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="segments" className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeader
            eyebrow="Customer Segments"
            title="RFM-style customer segmentation insights."
            text="Customer groups are translated into practical marketing actions so the analysis becomes useful for retention, acquisition and budget planning."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {customerSegments.map((segment) => (
              <div
                key={segment.segment}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/80"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-black text-slate-950 dark:text-white">
                      {segment.segment}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {segment.behaviour}
                    </p>
                  </div>

                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-black text-cyan-800 dark:bg-cyan-400/10 dark:text-cyan-200">
                    {segment.size}
                  </span>
                </div>

                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/70">
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
                    Revenue Contribution
                  </p>
                  <p className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
                    {segment.revenue}
                  </p>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  <span className="font-black text-cyan-700 dark:text-cyan-200">Action: </span>
                  {segment.action}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="budget" className="border-y border-slate-200 bg-white/60 dark:border-white/10 dark:bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <SectionHeader
              eyebrow="Budget Reallocation"
              title="Where marketing spend should move next."
              text="The recommendation focuses on shifting budget away from weak ROI activity and into channels with stronger conversion and retention performance."
            />

            <div className="grid gap-5">
              {budgetPlan.map((item) => (
                <div
                  key={item.channel}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/80"
                >
                  <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr_1fr] lg:items-center">
                    <div>
                      <h3 className="text-xl font-black text-slate-950 dark:text-white">
                        {item.channel}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {item.reason}
                      </p>
                    </div>

                    <div>
                      <div className="mb-2 flex justify-between text-sm font-bold text-slate-600 dark:text-slate-300">
                        <span>Current</span>
                        <span>{item.current}</span>
                      </div>
                      <ProgressBar value={Number(item.current.replace('%', ''))} />
                    </div>

                    <div>
                      <div className="mb-2 flex justify-between text-sm font-bold text-slate-600 dark:text-slate-300">
                        <span>Recommended</span>
                        <span>{item.recommended}</span>
                      </div>
                      <ProgressBar value={Number(item.recommended.replace('%', ''))} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="insights" className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeader
            eyebrow="Insights Deep Dive"
            title="Commercial insights from the Zalando-style analysis."
            text="Insights are written as interview-ready talking points that connect the data to commercial decisions."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {executiveInsights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/80"
              >
                <p className="text-3xl font-black text-cyan-700 dark:text-cyan-200">
                  {item.metric}
                </p>
                <h3 className="mt-4 text-lg font-black text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6">
            <h3 className="text-xl font-black text-slate-950 dark:text-white">
              Final Recommendations
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {recommendations.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-950/70"
                >
                  <Target className="mt-1 shrink-0 text-cyan-700 dark:text-cyan-200" size={20} />
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="methodology" className="border-y border-slate-200 bg-white/60 dark:border-white/10 dark:bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-6 py-20">
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

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {[
                ['Tools Used', tools],
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
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500 dark:border-white/10">
        Zalando-Style Customer Segmentation & Marketing ROI Dashboard © 2026
      </footer>
    </div>
  );
}

export default App;
