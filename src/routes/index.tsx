import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Download,
  FileCheck2,
  Globe2,
  Handshake,
  Landmark,
  LockKeyhole,
  MapPin,
  Menu,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const PDF_URL = "/downloads/Civic-Rewards-Investor-Partner-Business-Plan-2026.pdf";

const sections = [
  ["01", "Executive brief", "executive"],
  ["02", "Market case", "market"],
  ["03", "Platform model", "model"],
  ["04", "Commercial model", "commercial"],
  ["05", "Financial case", "financial"],
  ["06", "Partner strategy", "partners"],
  ["07", "Go-to-market", "gtm"],
  ["08", "Risk & governance", "risk"],
  ["09", "Roadmap & ask", "roadmap"],
] as const;

const revenueRows = [
  [
    "Premium membership",
    "Residents",
    "R49/month; waived after 3 validated reports",
    "Retention + recurring revenue",
  ],
  [
    "Municipal intelligence",
    "Municipalities",
    "Pilot-to-annual licence",
    "Workflow visibility + service analytics",
  ],
  [
    "Risk intelligence",
    "Insurers / utilities",
    "R15k–R45k/region/month",
    "De-identified infrastructure heatmaps",
  ],
  [
    "Merchant acquisition",
    "Retail partners",
    "4%–7% CPA on attributed baskets",
    "Local customer acquisition",
  ],
  [
    "Verification reports",
    "Contractors",
    "R25/validated closure",
    "Independent proof of completion",
  ],
  [
    "Category sponsorship",
    "Corporate / CSI",
    "From R75k/category/year",
    "Reward pool + brand participation",
  ],
];

const financials = [
  {
    year: "Year 1",
    revenue: "R1.5m",
    grant: "R1.1m",
    users: "60k",
    clients: "1",
    ebitda: "(R5.0m)",
  },
  {
    year: "Year 2",
    revenue: "R7.8m",
    grant: "R4.2m",
    users: "220k",
    clients: "4",
    ebitda: "(R8.0m)",
  },
  {
    year: "Year 3",
    revenue: "R20.6m",
    grant: "R10.5m",
    users: "550k",
    clients: "9",
    ebitda: "(R8.3m)",
  },
];

function DownloadLink({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={compact ? "download-button download-button--compact" : "download-button"}
      href={PDF_URL}
      download
    >
      <Download size={18} aria-hidden="true" />
      <span>{compact ? "PDF" : "Download full business plan"}</span>
    </a>
  );
}

function SectionHeading({
  number,
  eyebrow,
  title,
  intro,
}: {
  number: string;
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="section-heading">
      <span className="section-number">{number}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="section-intro">{intro}</p>
      </div>
    </header>
  );
}

function Metric({ value, label, note }: { value: string; label: string; note: string }) {
  return (
    <div className="metric">
      <strong>{value}</strong>
      <span>{label}</span>
      <small>{note}</small>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Civic Rewards | Investor & Partner Business Plan" },
      {
        name: "description",
        content:
          "Investor and partner business plan for Civic Rewards, a public service delivery loyalty platform for South African cities.",
      },
      { property: "og:title", content: "Civic Rewards Investor & Partner Business Plan" },
      {
        property: "og:description",
        content:
          "A partnership and investment blueprint for smarter, more responsive South African cities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("executive");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.3] },
    );
    sections.forEach(([, , id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="plan-shell">
      <header className="topbar">
        <a href="#top" className="brand" aria-label="Civic Rewards business plan home">
          <span className="brand-mark">C</span>
          <span>
            <strong>CivicRewards</strong>
            <small>South Africa</small>
          </span>
        </a>
        <div className="topbar-actions">
          <span className="document-label">Investor & partner plan · 2026</span>
          <DownloadLink compact />
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle contents"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <aside
        className={menuOpen ? "sidebar sidebar--open" : "sidebar"}
        aria-label="Business plan contents"
      >
        <p className="sidebar-title">Contents</p>
        <nav>
          {sections.map(([number, label, id]) => (
            <a
              key={id}
              className={active === id ? "active" : ""}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
            >
              <span>{number}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className="sidebar-note">
          <span>Document status</span>
          <strong>Strategic planning draft</strong>
          <small>Prepared 14 September 2026</small>
        </div>
      </aside>

      <main id="top">
        <section className="cover">
          <div className="cover-grid" aria-hidden="true" />
          <div className="cover-content">
            <p className="cover-kicker">Corporate investor & partner engagement plan</p>
            <h1>
              Civic Rewards
              <br />
              <span>Program</span>
            </h1>
            <p className="cover-subtitle">
              A public service delivery loyalty platform for smarter cities and municipalities.
            </p>
            <div className="cover-actions">
              <DownloadLink />
              <a className="text-link" href="#executive">
                Read the plan <ArrowDown size={17} />
              </a>
            </div>
          </div>
          <div className="cover-thesis">
            <p>Investment thesis</p>
            <strong>
              Convert verified civic action into better infrastructure intelligence, local economic
              value and a pathway to inclusive wealth creation.
            </strong>
          </div>
          <div className="cover-meta">
            <span>South Africa</span>
            <span>Confidential discussion document</span>
            <span>Version 1.0</span>
          </div>
        </section>

        <section id="executive" className="content-section">
          <SectionHeading
            number="01"
            eyebrow="Executive brief"
            title="A civic data utility with a rewards-led adoption engine"
            intro="Civic Rewards links residents, municipalities, service providers and commercial partners in one verified service-delivery loop."
          />
          <div className="thesis-grid">
            <div className="lead-statement">
              <p className="eyebrow">The proposition</p>
              <h3>Report. Verify. Resolve. Reward.</h3>
              <p>
                Residents report potholes, leaks, outages and missed collections. Evidence and
                location signals are validated, resolution is confirmed, and Civic Credits are
                issued. Aggregated operational intelligence helps delivery partners prioritise work
                while sponsors and merchants fund useful rewards.
              </p>
            </div>
            <div className="decision-panel">
              <p className="eyebrow">Decision sought</p>
              <h3>R25 million blended seed round</h3>
              <p>
                Proposed as <strong>R15m equity</strong> for the core platform and{" "}
                <strong>R10m ring-fenced grant / CSI capital</strong> for inclusion and pensioner
                services.
              </p>
              <div className="decision-tags">
                <span>24-month runway</span>
                <span>3-metro launch</span>
                <span>Anchor pilot</span>
              </div>
            </div>
          </div>
          <div className="metric-row">
            <Metric value="550k" label="Registered users" note="Year 3 base-case assumption" />
            <Metric value="9" label="Institutional clients" note="Municipal and data clients" />
            <Metric value="R20.6m" label="Commercial revenue" note="Year 3 illustrative case" />
            <Metric value="45k" label="Verified reports / month" note="Year 3 exit run-rate" />
          </div>
          <div className="caution-callout">
            <ShieldCheck size={22} />
            <p>
              <strong>Investor framing.</strong> The venture is pre-validation. Adoption, revenue
              and funding figures are planning assumptions—not historical performance. Named
              organisations are prospective partners unless a signed agreement is disclosed.
            </p>
          </div>
        </section>

        <section id="market" className="content-section section-tint">
          <SectionHeading
            number="02"
            eyebrow="Market case"
            title="Two structural gaps. One coordinated response."
            intro="The opportunity sits at the intersection of municipal operating pressure, fragmented citizen reporting and limited access to wealth-building products."
          />
          <div className="two-column">
            <article className="issue-block">
              <span className="icon-box">
                <Building2 />
              </span>
              <p className="eyebrow">Civic friction</p>
              <h3>Failures are detected late and reported through fragmented channels.</h3>
              <p>
                Manual inspections, call-centre queues and inconsistent closure evidence increase
                response time and secondary damage. Civic Rewards creates a standardised, geotagged
                evidence layer without replacing municipal systems.
              </p>
            </article>
            <article className="issue-block">
              <span className="icon-box accent">
                <CircleDollarSign />
              </span>
              <p className="eyebrow">Financial disconnect</p>
              <h3>Everyday civic effort rarely produces direct household value.</h3>
              <p>
                Points begin as non-financial loyalty units. With explicit user choice and regulated
                partners, future redemption could fund vouchers or fractional investments—subject to
                legal clearance and partner capability.
              </p>
            </article>
          </div>
          <div className="market-lens">
            <div>
              <span>Beachhead</span>
              <strong>Urban wards in Gauteng</strong>
              <p>
                Start where reporting density, ratepayer networks, contractors and insurable risk
                overlap.
              </p>
            </div>
            <ArrowRight aria-hidden="true" />
            <div>
              <span>Expansion</span>
              <strong>Seven metropolitan municipalities</strong>
              <p>Replicate after measurable pilot outcomes and procurement fit are demonstrated.</p>
            </div>
            <ArrowRight aria-hidden="true" />
            <div>
              <span>Platform horizon</span>
              <strong>National civic intelligence network</strong>
              <p>Interoperable service data and reward rails across municipalities and partners.</p>
            </div>
          </div>
          <div className="positioning-grid">
            <div>
              <MapPin />
              <strong>Local density</strong>
              <p>Ward-level mobilisation creates data quality and network effects.</p>
            </div>
            <div>
              <FileCheck2 />
              <strong>Resolution evidence</strong>
              <p>Closed-loop verification differentiates from complaint-only channels.</p>
            </div>
            <div>
              <Handshake />
              <strong>Multi-sided economics</strong>
              <p>Institutions fund value while residents use the platform free.</p>
            </div>
            <div>
              <LockKeyhole />
              <strong>Privacy by design</strong>
              <p>Identity is separated from commercial geospatial intelligence.</p>
            </div>
          </div>
        </section>

        <section id="model" className="content-section">
          <SectionHeading
            number="03"
            eyebrow="Platform model"
            title="One civic action. Four measurable outcomes."
            intro="The operating design makes fault data useful before, during and after service delivery."
          />
          <div className="process-flow">
            {[
              ["01", "Report", "A resident submits a photo, category and geolocation."],
              ["02", "Validate", "Rules, duplicate checks and human review score the evidence."],
              [
                "03",
                "Route & resolve",
                "The issue reaches the appropriate municipality or service partner.",
              ],
              [
                "04",
                "Verify & reward",
                "Closure evidence triggers Civic Credits and service analytics.",
              ],
            ].map(([n, title, text]) => (
              <div key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="architecture">
            <div className="architecture-label">
              <p className="eyebrow">Controlled value architecture</p>
              <h3>Civic engagement remains distinct from regulated financial activity.</h3>
            </div>
            <div className="architecture-steps">
              <div>
                <Users />
                <span>Citizen app</span>
                <small>Non-financial points ledger</small>
              </div>
              <ArrowRight />
              <div>
                <BarChart3 />
                <span>Civic intelligence</span>
                <small>De-identified operational data</small>
              </div>
              <ArrowRight />
              <div>
                <Landmark />
                <span>Licensed partner</span>
                <small>KYC, execution and custody</small>
              </div>
              <ArrowRight />
              <div>
                <ShieldCheck />
                <span>User wallet</span>
                <small>Opt-in ownership only</small>
              </div>
            </div>
          </div>
          <h3 className="subsection-title">Value by stakeholder</h3>
          <div className="stakeholder-table">
            <div className="table-head">
              <span>Stakeholder</span>
              <span>Value received</span>
              <span>Proof metric</span>
            </div>
            {[
              [
                "Residents",
                "Faster visibility, useful rewards, property-value protection",
                "Resolution time · rewards issued",
              ],
              [
                "Municipalities",
                "Prioritised demand, closure evidence, ward analytics",
                "Backlog reduction · SLA compliance",
              ],
              [
                "Insurers",
                "Earlier risk signals and mitigation targeting",
                "Alerts acted on · claims avoided",
              ],
              [
                "Contractors",
                "Clearer work queues and independent job verification",
                "Verified closures · rework rate",
              ],
              [
                "Merchants",
                "Attributed, hyper-local acquisition",
                "Basket value · redemption rate",
              ],
              [
                "Financial partners",
                "Compliant retail origination and micro-investment flows",
                "KYC wallets · funded accounts",
              ],
            ].map((row) => (
              <div className="table-row" key={row[0]}>
                {row.map((cell) => (
                  <span key={cell}>{cell}</span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="commercial" className="content-section section-dark">
          <SectionHeading
            number="04"
            eyebrow="Commercial model"
            title="Diversified revenue, anchored in institutional value"
            intro="The resident layer drives density; higher-margin institutional products are expected to drive enterprise value."
          />
          <div className="revenue-table">
            <div className="table-head">
              <span>Revenue line</span>
              <span>Payer</span>
              <span>Planning price</span>
              <span>Strategic role</span>
            </div>
            {revenueRows.map((row) => (
              <div className="table-row" key={row[0]}>
                {row.map((cell) => (
                  <span key={cell}>{cell}</span>
                ))}
              </div>
            ))}
          </div>
          <div className="economics-grid">
            <div>
              <p className="eyebrow">Household engine</p>
              <strong>R49</strong>
              <span>monthly premium fee</span>
              <p>
                Waived after three validated reports. Designed primarily for retention and civic
                activation—not as the sole profit pool.
              </p>
            </div>
            <div>
              <p className="eyebrow">Enterprise engine</p>
              <strong>R450k</strong>
              <span>illustrative annual contract value</span>
              <p>
                Municipal workflow and intelligence licences are the central long-term gross-margin
                driver.
              </p>
            </div>
            <div>
              <p className="eyebrow">Reward engine</p>
              <strong>70 / 30</strong>
              <span>proposed partner-fee split</span>
              <p>
                70% funds user value; 30% supports platform operations, subject to contract and tax
                design.
              </p>
            </div>
          </div>
          <div className="validation-box">
            <p>
              <strong>Commercial gate:</strong> The Joburg 10% advance-payment rates rebate is a
              2026/27, city-specific policy reported publicly. Any bill-pay product requires
              primary-policy confirmation, consumer mandate design, treasury/legal advice and a
              capital provider before launch. It is excluded from the base financial forecast.
            </p>
          </div>
        </section>

        <section id="financial" className="content-section">
          <SectionHeading
            number="05"
            eyebrow="Financial case"
            title="A conservative path to institutional scale"
            intro="The base case deliberately separates commercial revenue from grant-funded inclusion activity and does not claim breakeven within three years."
          />
          <div className="financial-table">
            <div className="table-head">
              <span>Period</span>
              <span>Commercial revenue</span>
              <span>Grant / CSI</span>
              <span>Users</span>
              <span>Clients</span>
              <span>EBITDA incl. grants</span>
            </div>
            {financials.map((row) => (
              <div className="table-row" key={row.year}>
                <span>
                  <strong>{row.year}</strong>
                </span>
                <span>{row.revenue}</span>
                <span>{row.grant}</span>
                <span>{row.users}</span>
                <span>{row.clients}</span>
                <span className="negative">{row.ebitda}</span>
              </div>
            ))}
          </div>
          <div className="chart-card">
            <div className="chart-copy">
              <p className="eyebrow">Commercial revenue trajectory</p>
              <h3>13.6× growth across the planning horizon</h3>
              <p>
                Growth is driven by paid households and higher-value municipal/data licences. Grants
                are shown separately and should not be valued as recurring commercial revenue.
              </p>
            </div>
            <div
              className="bars"
              aria-label="Commercial revenue grows from R1.5 million in year 1 to R20.6 million in year 3"
            >
              <div>
                <span>R1.5m</span>
                <i style={{ height: "12%" }} />
                <small>Y1</small>
              </div>
              <div>
                <span>R7.8m</span>
                <i style={{ height: "38%" }} />
                <small>Y2</small>
              </div>
              <div>
                <span>R20.6m</span>
                <i style={{ height: "100%" }} />
                <small>Y3</small>
              </div>
            </div>
          </div>
          <div className="scenario-grid">
            <div>
              <span>Downside</span>
              <strong>R14.4m</strong>
              <small>Y3 commercial revenue</small>
              <p>Slower municipal sales and higher churn.</p>
            </div>
            <div className="scenario-active">
              <span>Base</span>
              <strong>R20.6m</strong>
              <small>Y3 commercial revenue</small>
              <p>9 institutional clients; 550k users.</p>
            </div>
            <div>
              <span>Upside</span>
              <strong>R28.8m</strong>
              <small>Y3 commercial revenue</small>
              <p>14 clients and lower referral-led acquisition cost.</p>
            </div>
          </div>
          <p className="footnote">
            Illustrative management assumptions only. Figures exclude tax, depreciation, financing
            costs and working-capital timing. Replace with pilot evidence before formal fundraising.
          </p>
        </section>

        <section id="partners" className="content-section section-tint">
          <SectionHeading
            number="06"
            eyebrow="Partner strategy"
            title="A specific exchange of value for every alliance"
            intro="Each engagement begins with a focused pilot ask, measurable outcome and clear boundary of responsibility."
          />
          <div className="partner-grid">
            {[
              [
                Landmark,
                "Municipalities",
                "Pilot access, routing integration and service-status data",
                "Verified demand and ward-level performance intelligence",
              ],
              [
                ShieldCheck,
                "Licensed financial platforms",
                "KYC, compliant execution, custody and product suitability",
                "Qualified retail origination and funded-wallet flow",
              ],
              [
                TrendingUp,
                "Insurers & utilities",
                "Anchor data-offtake and risk-mitigation sponsorship",
                "Early-warning signals and targeted intervention",
              ],
              [
                Building2,
                "Contractors",
                "Closure evidence, SLA data and repair capacity",
                "Work visibility and independent completion proof",
              ],
              [
                Handshake,
                "Retailers",
                "Vouchers, CPA budget and local offers",
                "Attributed footfall and basket conversion",
              ],
              [
                Globe2,
                "Community networks",
                "Resident activation, trust and multilingual mobilisation",
                "Local relevance and lower acquisition cost",
              ],
            ].map(([Icon, title, ask, value]) => {
              const PartnerIcon = Icon as typeof Landmark;
              return (
                <article key={title as string}>
                  <PartnerIcon />
                  <h3>{title as string}</h3>
                  <p>
                    <span>Our ask</span>
                    {ask as string}
                  </p>
                  <p>
                    <span>Partner return</span>
                    {value as string}
                  </p>
                </article>
              );
            })}
          </div>
          <div className="partner-priority">
            <div>
              <span>Priority 01</span>
              <strong>Anchor municipality / delivery partner</strong>
              <p>Validate routing, closure and operating workflow.</p>
            </div>
            <div>
              <span>Priority 02</span>
              <strong>Financial-services architecture partner</strong>
              <p>Define what is legally and technically feasible.</p>
            </div>
            <div>
              <span>Priority 03</span>
              <strong>Insurer or CSI sponsor</strong>
              <p>Fund a bounded ward-level rewards pilot.</p>
            </div>
          </div>
          <p className="footnote">
            Mesh.trade, Luno, Altify and EasyEquities are identified as prospective ecosystem
            candidates. No partnership or endorsement is represented.
          </p>
        </section>

        <section id="gtm" className="content-section">
          <SectionHeading
            number="07"
            eyebrow="Go-to-market"
            title="Win one dense geography before scaling the network"
            intro="The launch model prioritises measurable ward density over broad but shallow national acquisition."
          />
          <div className="timeline">
            {[
              [
                "0–3 months",
                "Design & diligence",
                "Confirm legal perimeter, sign pilot MOU, establish baseline and recruit community nodes.",
              ],
              [
                "4–6 months",
                "Controlled pilot",
                "Launch in 3–5 wards; test validation accuracy, reporting density and partner response.",
              ],
              [
                "7–12 months",
                "Prove economics",
                "Convert first institutional licence, launch sponsored rewards and publish impact evidence.",
              ],
              [
                "13–24 months",
                "Metro expansion",
                "Extend to three metros and launch de-identified risk intelligence.",
              ],
              [
                "25–36 months",
                "Platform scale",
                "Reach seven-metro readiness and institutionalise governance and interoperability.",
              ],
            ].map(([period, title, body], i) => (
              <div key={period}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <small>{period}</small>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
          <div className="kpi-grid">
            <div>
              <Target />
              <strong>Adoption</strong>
              <p>Weekly active reporters · reports per ward · referral rate</p>
            </div>
            <div>
              <CheckCircle2 />
              <strong>Operations</strong>
              <p>Validation precision · duplicates · time to resolution</p>
            </div>
            <div>
              <CircleDollarSign />
              <strong>Economics</strong>
              <p>CAC · revenue per active user · contract ACV · gross margin</p>
            </div>
            <div>
              <ShieldCheck />
              <strong>Trust</strong>
              <p>Consent rate · complaints · incidents · partner SLA</p>
            </div>
          </div>
        </section>

        <section id="risk" className="content-section section-dark">
          <SectionHeading
            number="08"
            eyebrow="Risk & governance"
            title="Regulatory clearance is a stage gate—not a footnote"
            intro="The operating perimeter must be validated before any financial conversion, pooled capital or municipal payment feature is activated."
          />
          <div className="risk-table">
            <div className="table-head">
              <span>Risk</span>
              <span>Exposure</span>
              <span>Required mitigation before scale</span>
            </div>
            {[
              [
                "Financial regulation",
                "Advice, intermediation, custody or crypto-asset activity may require authorisation",
                "Written FSCA/FIC counsel; licensed partner owns KYC, execution and custody",
              ],
              [
                "POPIA & security",
                "Precise location and identity can create re-identification risk",
                "Information Officer, privacy impact assessment, minimisation, separation and operator agreements",
              ],
              [
                "Municipal procurement",
                "Long sales cycles and public contracting constraints",
                "Paid proof-of-value pathway, transparent procurement plan and diversified private-sector revenue",
              ],
              [
                "Fraud & data quality",
                "Duplicate, staged or manipulated reports",
                "Device and geospatial checks, confidence scoring, moderation and auditable closure evidence",
              ],
              [
                "Reward liability",
                "Unfunded points or changing partner economics",
                "Ring-fenced reward budgets, expiry rules and reconciliation controls",
              ],
              [
                "Reputation & neutrality",
                "Perceived political alignment or unverified performance claims",
                "Independent adjudication, published methodology and non-partisan governance charter",
              ],
            ].map((row) => (
              <div className="table-row" key={row[0]}>
                {row.map((cell) => (
                  <span key={cell}>{cell}</span>
                ))}
              </div>
            ))}
          </div>
          <div className="governance-grid">
            <div>
              <span>Board</span>
              <p>Independent chair; audit/risk; social-impact oversight.</p>
            </div>
            <div>
              <span>Data ethics</span>
              <p>External review of consent, fairness and commercial data use.</p>
            </div>
            <div>
              <span>Adjudication</span>
              <p>Published criteria for awards, contractor scores and disputes.</p>
            </div>
            <div>
              <span>Assurance</span>
              <p>Annual security testing and impact-data verification.</p>
            </div>
          </div>
          <p className="legal-note">
            <strong>Important:</strong> This plan is strategic planning material, not legal, tax,
            regulatory or investment advice. IFWG sandbox participation is not a licence. Any
            stokvel/SPV, tokenised asset, bill-payment or investment feature remains conceptual
            pending formal legal opinion and partner approval.
          </p>
        </section>

        <section id="roadmap" className="content-section closing-section">
          <SectionHeading
            number="09"
            eyebrow="Roadmap & investment ask"
            title="Fund the proof, not the promise"
            intro="Capital is directed toward measurable product, regulatory, commercial and operating milestones over 24 months."
          />
          <div className="funding-layout">
            <div className="funding-total">
              <span>Proposed blended round</span>
              <strong>R25m</strong>
              <p>R15m equity + R10m grant / CSI target</p>
            </div>
            <div className="use-of-funds">
              {[
                ["Product & engineering", "30%"],
                ["Sales & partnerships", "20%"],
                ["User activation", "20%"],
                ["Field operations", "15%"],
                ["Legal, risk & G&A", "10%"],
                ["Contingency", "5%"],
              ].map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <i>
                    <b style={{ width: value }} />
                  </i>
                </div>
              ))}
            </div>
          </div>
          <div className="milestone-grid">
            <div>
              <span>Month 3</span>
              <strong>Legal perimeter + anchor pilot MOU</strong>
            </div>
            <div>
              <span>Month 6</span>
              <strong>20k users + 40 vetted contractors</strong>
            </div>
            <div>
              <span>Month 12</span>
              <strong>First institutional revenue</strong>
            </div>
            <div>
              <span>Month 24</span>
              <strong>4 clients + data product launched</strong>
            </div>
          </div>
          <div className="closing-cta">
            <p className="eyebrow">Partner with Civic Rewards</p>
            <h2>Help build the trust layer between active citizens and responsive cities.</h2>
            <p>
              The immediate objective is a bounded, evidence-led pilot with one anchor delivery
              partner, one rewards sponsor and one regulated financial-services architecture
              partner.
            </p>
            <DownloadLink />
          </div>
          <div className="sources">
            <p>
              <strong>Selected diligence sources:</strong> Auditor-General South Africa 2023/24 MFMA
              General Report; National Treasury local government finance report; Information
              Regulator South Africa; Financial Sector Conduct Authority licensing guidance;
              Financial Intelligence Centre PCC22A; IFWG Regulatory Sandbox guidance; City of
              Johannesburg rates policy and 2026/27 advance-settlement reporting.
            </p>
            <p>
              <strong>Document basis:</strong> User-supplied concept and pricing architecture,
              supplemented by clearly labelled management assumptions. No due diligence, audit,
              legal opinion or third-party endorsement has been completed.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
