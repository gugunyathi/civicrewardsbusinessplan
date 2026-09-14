# Civic Rewards Investor & Partner Business Plan

## Goal

Create a consulting-grade, investor-ready digital business plan at the main website address, matched to the existing CivicRewards brand, with an immediate downloadable PDF version.

## Deliverables

- Replace the blank page with a polished executive document experience for investors, municipalities, financial partners, insurers, contractors, retailers, and CSI sponsors.
- Produce a complete downloadable PDF—not a print-dialog workflow—and connect it to prominent download buttons.
- Retain the current CivicRewards visual identity: deep charcoal, civic green, warm gold, pale green, and restrained orange accents.

## Business plan structure

1. Cover, confidentiality note, executive summary, investment thesis, and decision brief.
2. Problem, solution, citizen journey, platform model, and stakeholder value proposition.
3. South African market context, target segments, competitive positioning, and defensibility.
4. Product roadmap, operating model, data architecture, verification controls, and rewards economics.
5. Commercial model with each proposed revenue stream, pricing, unit economics, and payment flows.
6. Three-year base financial case, downside/upside sensitivities, funding requirement, use of funds, and investor outcomes.
7. Partner strategy covering municipalities, regulated financial providers, insurers, contractors, retailers, community organisations, and capital providers.
8. Go-to-market plan, pilot design, implementation roadmap, KPIs, governance, organisation, and impact measurement.
9. Regulatory and risk section covering POPIA, financial-services boundaries, consumer protection, municipal contracting, fraud, cybersecurity, and legal diligence gates.
10. Appendices with assumptions, milestones, partner engagement asks, diligence checklist, glossary, and source notes.

## Important treatment of claims

- Clearly separate supplied concepts from verified facts and planning assumptions.
- Reframe unconfirmed partnerships, licences, rebates, adoption figures, and asset availability as proposals or diligence items.
- Avoid presenting the municipal bill-payment spread, stokvel/SPV exemption, or tokenised investment access as legally cleared until written legal and partner validation exists.
- Include a professional disclaimer that the plan is strategic planning material, not legal, tax, regulatory, or investment advice.

## Experience and layout

- Desktop document rail with section navigation, progress indication, and sticky download action.
- Mobile-friendly single-column reading experience with a compact download action.
- Consulting-style typography, numbered sections, restrained data visualisations, tables, callouts, and process diagrams.
- Accessible contrast, semantic headings, keyboard-friendly navigation, and reduced-motion support.

## Technical details

- Build the page with React and the existing TanStack setup; no backend is required.
- Define the complete semantic colour and typography system in the global stylesheet.
- Generate a versioned PDF asset in the public download folder and use a direct file download link.
- Add route-specific title, description, Open Graph, and Twitter metadata.
- Validate the page at desktop and mobile sizes, confirm the PDF response and download link, and inspect every rendered PDF page for clipping or layout defects.
