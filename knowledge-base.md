# Irish Grants Eligibility Chatbot — Knowledge Base

> **Purpose:** This file is the complete knowledge base for a chatbot that guides Irish SMEs, startups, and non-profits through grant eligibility checks. It contains: grant summaries, eligibility rules (logic gates), covered/excluded expenses, application processes, required documents, timelines, official links, disqualification re-routing rules, and ready-to-use response templates.
>
> **Data currency:** Compiled July 2026 from official sources (localenterprise.ie, enterprise-ireland.com, google.com/nonprofits, neh.gov.ie). Grant budgets are allocated per county LEO annually — the bot must ALWAYS advise users to confirm current availability with their local office.
>
> **Golden rules for the bot:**
> 1. Never promise approval — the bot gives an *eligibility indication only*. Final decisions rest with the LEO / Enterprise Ireland / Google.
> 2. Never tell a user to spend money before grant approval — retrospective costs are almost never eligible.
> 3. Every disqualification must end with a redirect to an alternative support (see Routing Map, Section 12).
> 4. All amounts exclude VAT unless stated otherwise.

---

## 1. QUICK REFERENCE TABLE (all supports in this KB)

| # | Grant | Provider | Amount | Co-funding | Target user |
|---|-------|----------|--------|-----------|-------------|
| 1 | Priming Grant | LEO | Up to 50%, normally capped €80,000 (up to €150,000 exceptional export cases) | 50% | Startups < 18 months, < 10 staff |
| 2 | Business Expansion Grant | LEO | Up to 50%, normally capped €80,000 (up to €150,000 exceptional) | 50% | Micro-enterprises 18+ months trading, < 10 staff |
| 3 | Feasibility Study Grant | LEO | 50% (60% in BMW regions), max €15,000 | 50% | Pre-launch concepts, market/technical validation |
| 4 | Trading Online Voucher (TOV) | LEO | 50%, max €2,500 | 50% | Micro-enterprises going online (< 10 staff, < €2m turnover) |
| 5 | Grow Digital Voucher | LEO | 50%, €500–€5,000 | 50% | Businesses 1–50 staff, after Digital for Business report |
| 6 | Digital for Business | LEO | FREE (~3 days consultancy) | None | Businesses 1–50 staff; prerequisite for Grow Digital |
| 7 | Innovation Voucher | Enterprise Ireland | €10,000 standard (fully funded); co-funded up to €20,000 | None / 50% co-funded | CRO-registered ltd SMEs with a technical challenge |
| 8 | HPSU (High Potential Start-Up) | Enterprise Ireland | Equity matching typically €50k–€800k+ (up to €1.2m exceptional) | Requires private co-investors | Export tech/life-science startups, 10+ jobs & €1m exports in 3 yrs |
| 9 | Energy Efficiency Grant | LEO / SEAI-aligned | Up to 75%, €750–€10,000 | 25%+ | Businesses 1–50 staff with a completed green audit |
| 10 | Google Ad Grants | Google for Nonprofits | $10,000 USD/month in Search ads | None | Registered Irish charities (CHY number) |
| 11 | Market Explorer / TAME | LEO | 50%, max €2,500 | 50% | Micro-exporters (marketing/export costs) |
| 12 | Microfinance Ireland Loans | MFI via LEO | LOAN up to €25,000 (not a grant) | n/a | Micro-enterprises refused bank credit |

---

## 2. GRANT 1 — LEO PRIMING GRANT

### Summary
Startup grant for businesses in their **first 18 months** of trading. Up to 50% of eligible startup costs. Normal cap €80,000; up to €150,000 in exceptional cases with strong export/job-creation potential.

### Eligibility logic gates (ask in this order)
| # | Question | Pass | Fail → action |
|---|----------|------|---------------|
| Q1 | How long trading/registered? | 0–18 months | > 18 months → redirect to **Business Expansion Grant** |
| Q2 | Full-time employees? | 10 or fewer | > 10 → redirect to **Enterprise Ireland** |
| Q3 | Sector? | Manufacturing / digital-tech production / internationally traded services (or clear export potential) | Local retail, hospitality, personal services, local trades, local consultancy → DISQUALIFIED (market displacement rule) → redirect to **LEO training/mentoring + TOV** |
| Q4 | Commercial with job-creation intent? | Yes, commercial + plans to scale/hire | Non-profit / community / hobby → DISQUALIFIED → redirect to **The Wheel + Google Ad Grants** (Section 11) |

### What it funds (up to 50% match)
- **Salary costs:** up to €15,000 per full-time job created in year one.
- **Capital items:** workspace fit-out, machinery, fixed technology. *Excludes vehicles, laptops, mobile assets, buildings, land.*
- **Marketing & consultancy:** website development, branding, packaging, business cards.

### Required documents
1. Completed business plan.
2. 3-year financial / cash-flow projections.
3. Supplier quotes: 1 quote for items under €5,000; 3 written quotes for any single item over €5,000.
4. Valid Tax Clearance Certificate.

### Process & notes
- Apply through your **county LEO** (regional evaluation, rolling applications subject to budget).
- Funding is **reimbursement-based** (drawdown after spend, post-approval).
- No spending before the official application/approval date.

### Official links
- Grant page: https://www.localenterprise.ie/Discover-Business-Supports/Financial-Supports/Priming-Grant/
- Find your LEO: https://www.localenterprise.ie/Find-Your-Local-Enterprise-Office/
- National Enterprise Hub: https://www.neh.gov.ie/

---

## 3. GRANT 2 — LEO BUSINESS EXPANSION GRANT

### Summary
Growth grant for micro-enterprises **past the 18-month startup phase**. Up to 50% of growth costs; normally capped €80,000, up to €150,000 in exceptional international export cases.

### Eligibility logic gates
| # | Question | Pass | Fail → action |
|---|----------|------|---------------|
| Q1 | Trading duration? | 18 months or more | < 18 months → redirect to **Priming Grant** |
| Q2 | Received a Priming Grant in last 12 months? | No | Yes → PAUSE: generally must wait 12 months after Priming drawdown; exceptional cases discussed with LEO advisor |
| Q3 | Employees? | 10 or fewer | > 10 → redirect to **Enterprise Ireland scaling supports** |
| Q4 | Sector? | Manufacturing / digital-tech / internationally traded services (or clear export plan) | Local retail, hospitality, local services → DISQUALIFIED (displacement) → redirect to **TOV, mentoring, management courses** |
| Q5 | Will expansion create new sustainable jobs? | Yes, new full-time hires planned | No, funding overheads/existing costs → LOW PROBABILITY → redirect to **Lean for Business** productivity supports |

### What it funds (up to 50%)
- **Salary support:** up to €15,000 per new full-time position (priority to quality jobs, salaries over €40k).
- **Capital items:** specialised machinery, workspace upgrades, fixed technology (*excludes laptops/mobiles*).
- **Consultancy & marketing:** innovation, management consultancy, new export market entry.

### Required documents
1. Most recent set of certified accounts.
2. Updated business plan with expansion strategy.
3. Supplier quotes (1 under €5k / 3 over €5k per item).
4. Current Tax Clearance Certificate.

### Key restriction
Cannot claim any money spent **before** the official application date. Book a pre-application meeting with your LEO advisor first.

### Official links
- Grant page: https://www.localenterprise.ie/Discover-Business-Supports/Financial-Supports/Business-Expansion-Grant/
- Find your LEO: https://www.localenterprise.ie/Find-Your-Local-Enterprise-Office/

---

## 4. GRANT 3 — LEO FEASIBILITY STUDY GRANT

### Summary
For testing **market viability of a brand-new product/service before launch**. 50% of research costs (60% in Border, Midlands & Western — BMW — regions), maximum €15,000.

### Eligibility logic gates
| # | Question | Pass | Fail → action |
|---|----------|------|---------------|
| Q1 | Stage of venture? | Pre-launch / researching a new concept | Fully operational & scaling → redirect to **Business Expansion Grant** |
| Q2 | Will employ fewer than 10 people? | Yes | No → redirect to **Enterprise Ireland R&D supports** |
| Q3 | Sector of the idea? | Manufacturing / digital-tech / internationally traded services | Local retail, professional services, local trades → DISQUALIFIED (displacement) → redirect to **LEO pre-start advice / Start Your Own Business course** |
| Q4 | Preliminary desk research done? | Yes, initial data validates concept | No → ACTION NEEDED: do basic desk research first (libraries, National Enterprise Hub) then return |

### What it funds (50%/60% up to €15,000)
- Market research (proving a sustainable customer base).
- Technical development & prototyping (design, architecture, MVP).
- Consultancy (specialists, design engineers, legal/patent advice).
- **Own labour:** up to €400/week for your own research time, capped at 20% of total drawdown.

### Required documents
1. Updated CV showing your ability to execute.
2. Quotes for study costs (1 under €5k / 3 over €5k per item).
3. Certified accounts (only if an existing business launching a spin-off).

### Official links
- Grant page: https://www.localenterprise.ie/Discover-Business-Supports/Financial-Supports/Feasibility-Grant/
- Find your LEO: https://www.localenterprise.ie/Find-Your-Local-Enterprise-Office/

---

## 5. GRANT 4 — LEO TRADING ONLINE VOUCHER (TOV)

### Summary
The classic **€2,500 digital grant** (50% co-funded, ex VAT) for e-commerce, booking systems, and digital marketing. Unlike other LEO capital grants, it IS open to local retail, services and hospitality — the most accessible LEO digital support.
**Important context:** the TOV has been largely superseded by the **Grow Digital Voucher** (Section 6) in most LEO areas; some offices still run TOV. Bot must advise checking current availability with the county LEO.

### Eligibility logic gates
| # | Question | Pass | Fail → action |
|---|----------|------|---------------|
| Q1 | Trading duration? | 6 months or more | Less / pre-trade → PAUSE: need 6-month verifiable track record (tax registration or CRO). Suggest attending the info seminar early + LEO mentoring meanwhile |
| Q2 | Received a TOV before? | No → go Q3 | Yes → go Q2b |
| Q2b | Is the 2nd voucher for NEW transactional upgrades (payment gateway, booking engine)? | Yes | Just maintenance/hosting/layout refresh → DISQUALIFIED (2nd voucher can't fund routine upkeep) |
| Q3 | Size? | ≤ 10 staff AND < €2m turnover | Larger → redirect to **Digital for Business / Grow Digital / Enterprise Ireland** |
| Q4 | Current e-commerce state? | Limited/no online trading presence (no site or brochure-only site) | Already advanced e-commerce store with significant sales → LOW PROBABILITY; confirm with LEO advisor |

### What it funds (50% match up to €2,500 ex VAT)
- E-commerce website build/redesign; booking integrations.
- Booking & payment software: click-and-collect, reservations, payment gateways.
- Digital marketing setup: SEO strategy, social ads setup and initial campaigns — **online ad spend capped at 30% of project costs, drawn in one payment phase only**.
- Digital assets: professional photography & video for the online store.
- Training specific to trading online.

### Application process
1. Attend the **mandatory information webinar** (~2–3 hours) at your LEO.
2. Receive & complete the application form (business description ≤150 words; project pitch ≤150 words; turnover & staff figures; supplier costs ex VAT).
3. LEO committee decision in **1–4 weeks**.
4. If approved: complete work within **3 months** (some LEOs allow +1 month extension).
5. Pay suppliers → submit paid invoices → LEO reimburses 50%.

### Required documents
1. Proof of mandatory seminar attendance.
2. Itemised supplier quotes on formal letterhead (typically 2–3 independent suppliers).
3. Proof of trading: CRO registration or tax-compliance evidence (6+ months).
4. Project pitch (~150 words: how the upgrade scales reach/sales).
5. Tax clearance details at payment stage.

### Official links
- Scheme page: https://www.localenterprise.ie/discover-business-supports/trading-online-voucher-scheme/
- Find your LEO & event calendar: https://www.localenterprise.ie/Find-Your-Local-Enterprise-Office/

---

## 6. GRANT 5 — LEO GROW DIGITAL VOUCHER (+ Digital for Business prerequisite)

### Summary
The **current flagship LEO digital grant** — successor to the TOV. 50% of eligible costs, minimum €500, maximum €5,000 per application. Up to **two vouchers** allowed with a combined cap of €5,000 (second requires demonstrated progress). Broader than TOV: covers CRM, cloud accounting, cybersecurity, e-commerce software.

### MANDATORY PREREQUISITE — Digital for Business
- FREE consultancy: up to **3 days of an approved consultant's time**, producing a digital roadmap report.
- The Grow Digital Voucher can only fund recommendations arising from a **Digital for Business report completed within the previous 2 years**.
- Page: https://www.localenterprise.ie/discover-business-supports/digital-for-business-support/

### Eligibility logic gates
| # | Question | Pass | Fail → action |
|---|----------|------|---------------|
| Q1 | Digital for Business report completed in last 2 years? | Yes | No → redirect: apply for the FREE Digital for Business consultation first |
| Q2 | Paid employees? | 1–50 | 0 or > 50 → out of scope; > 50 → Enterprise Ireland |
| Q3 | Trading 6+ months in your LEO area? | Yes | No → wait until 6 months trading |
| Q4 | Client of Enterprise Ireland or IDA? | No | Yes → use EI/IDA digital supports instead |
| Q5 | Commercial + taxable trade (Case I/II Schedule D), solvent, tax-clear? | Yes | Charities/not-for-profits not meeting trading criteria, trade associations, chambers → NOT ELIGIBLE → non-profits go to Section 11 |
| Q6 | Sector exclusions | Not in coal/steel, primary agriculture/fishery/aquaculture, gambling, adult entertainment, tobacco, unauthorised cannabis products | In excluded sector → DISQUALIFIED |

### What it funds
- **New** software subscriptions (new to the business) for up to **12 months**: e-commerce platforms, CRM, cloud accounting, job tracking / field-service management, electronic invoicing, inventory, analytics, marketing dashboards, cybersecurity, standard office software if not already used.
- Training and IT configuration for the new software — **combined training+configuration capped at 50% of the software subscription cost**.

### What it does NOT fund
- Custom/bespoke software.
- Systems purely for regulatory compliance.
- Additional licences for software already in use.
- Own labour (incl. spouse/children).
- Any cost incurred **before approval**.
- Hardware is generally out of scope (software + training/config focus).

### Key rules
- Grant = 50% of costs; min €500, max €5,000 per application; max 2 approved projects, cumulative cap €5,000.
- Claims in 1 or 2 instalments, only for completed work; each cost claimable once.
- Falls under **De Minimis** State Aid (max €300,000 state aid over any 3 fiscal years).
- Voucher typically must be used within ~6 months of approval.
- Previous TOV recipients CAN apply for Grow Digital.

### Required documents
1. Digital for Business report (≤ 2 years old).
2. Financial statements proving solvency (if trading 6–12 months: management accounts; sole traders may submit a Revenue-acknowledged Form 11).
3. Tax Reference Number + Tax Clearance Access Number.
4. Supplier quotes for the software/training.

### Official links
- Grant page: https://www.localenterprise.ie/Discover-Business-Supports/Grow-Digital/
- Application portal (example): https://leo.submit.com/show/51
- Digital for Business: https://www.localenterprise.ie/discover-business-supports/digital-for-business-support/

---

## 7. GRANT 6 — ENTERPRISE IRELAND INNOVATION VOUCHER

### Summary
€10,000 vouchers to partner with third-level colleges / public research institutes ("knowledge providers") to solve a **technical or innovation challenge**. Open to EI clients AND non-clients. Great entry route for AI, data analytics, prototyping, new processes.

### Eligibility logic gates
| # | Question | Pass | Fail → action |
|---|----------|------|---------------|
| Q1 | Legal structure? | Limited company registered with the CRO | Sole trader / partnership / non-profit / charity / trade association → DISQUALIFIED |
| Q2 | Primary agriculture producer? | No (food processing/agritech OK) | Yes → DISQUALIFIED under EU State Aid → redirect to **Teagasc / Dept. of Agriculture** |
| Q3 | SME size? | < 250 employees AND < €50m turnover (or balance sheet < €43m) | Larger → DISQUALIFIED |
| Q4 | Open/unredeemed voucher right now? | No | Yes → PAUSE: only one active voucher at a time; current project must be redeemed first |
| Q5 | Intended use? | Solve a technical issue, prototype/MVP, new production process, innovative business model — true transfer of new scientific/technological knowledge | Standard web development, general marketing, standard software purchase, legal/business plans → DISQUALIFIED (project type) |

### Voucher types & limits
- **Standard voucher: €10,000**, fully funded (subject to periodic open calls; applications year-round via EI's online system).
- **Co-funded / Fast Track voucher:** projects up to **€20,000** on a 50/50 basis; open year-round.
- Max **4 vouchers** per company lifetime (3 standard + 1 co-funded, one of which must be co-funded); one active at a time; re-apply after 5 years.
- Vouchers valid **18 months**.
- **VAT warning:** vouchers exclude VAT. The college invoices the company separately for 23% VAT, payable by the company (usually reclaimable via VAT returns).
- IP developed belongs to the company unless otherwise agreed.

### What to prepare
1. The **"Knowledge Question"**: 100–150-word description of the scientific/technological problem you can't solve in-house.
2. Registered business name + CRO number.
3. Liquidity to pay the upfront VAT invoice.

### Official links
- Voucher page (incl. list of 38+ registered knowledge providers): https://www.enterprise-ireland.com/en/supports/innovation-voucher
- National Enterprise Hub entry: https://www.neh.gov.ie/business-supports/innovation-voucher-grant

---

## 8. GRANT 7 — ENTERPRISE IRELAND HIGH POTENTIAL START-UP (HPSU)

### Summary
Elite equity-based support for export-driven startups. Matching equity investment typically **€50,000 → €800,000+** (up to €1.2m exceptional) for ~10% equity, plus a dedicated Development Advisor, global office network, and elite mentoring.

### Eligibility logic gates
| # | Question | Pass | Fail → action |
|---|----------|------|---------------|
| Q1 | Sales focus? | International / export-driven | Domestic Irish market → redirect to **LEO supports** |
| Q2 | Activity? | Manufacturing or internationally traded services (SaaS, FinTech, MedTech, Life Sciences…) | Local services, retail, hospitality, standard consultancy → DISQUALIFIED (EI legislative mandate) |
| Q3 | Can you realistically hit BOTH €1m annual export sales AND 10+ Irish full-time jobs within 3 years? | Yes, models support it | No → redirect to **LEO Business Expansion Grant** |
| Q4 | Company age? | < 5 years since CRO incorporation | ≥ 5 years → redirect to **EI Scaling & R&D grants** |
| Q5 | MVP built + commercial traction/validation? | Yes | Idea/concept only → redirect to **Pre-Seed Start Fund (PSSF)**: €50k–€100k convertible loan note to reach MVP |
| Q6 | Ready to raise matching private capital (VC/angels)? | Yes, investor-ready round in progress | Expecting EI as sole funder → WARNING: EI never leads/acts alone; private co-investors required |

### What HPSU status unlocks
- Innovative HPSU Fund: up to €800,000 equity matching (€1.2m exceptional).
- Dedicated EI Development Advisor.
- Access to EI's 40+ international offices.
- ~10 curated mentoring sessions with scale-up veterans.
- **HPSU Feasibility Study Grant:** up to €30,000 at 70% funding to build the investor-ready plan — https://www.enterprise-ireland.com/en/supports/hpsu-feasibility-study-grant

### What to prepare
1. Investor deck: global pain point, defensible IP, competitive advantage.
2. 3-year projections showing a pathway to €1m+ export revenue.
3. Cap table + management bios (balanced technical+commercial founding team based in Ireland) + CRO details.

### Official links
- HPSU portal: https://www.enterprise-ireland.com/en/innovative-hpsu-fund
- Enquiries: hpsuenquiries@enterprise-ireland.com

---

## 9. GRANT 8 — ENERGY EFFICIENCY GRANT (LEO / SEAI-aligned)

### Summary
Green-tech upgrade grant. **Up to 75% co-funding, from €750 to €10,000** (previously capped at €5,000 — the higher cap reflects recent updates). Administered by the LEO; tied to a prior green audit.

### Eligibility logic gates
| # | Question | Pass | Fail → action |
|---|----------|------|---------------|
| Q1 | Completed a green audit in last 12–24 months? (LEO Green for Business / GreenStart / SEAI Energy Audit) | Yes | No → MANDATORY PREREQUISITE: apply for the free **Green for Business** audit first |
| Q2 | Commercially rateable premises (owned, or leased with 12+ months remaining)? | Yes | Home office / residential → redirect to **SEAI home energy upgrade schemes** |
| Q3 | Size & history? | 1–50 employees, 6+ months trading, turnover > €30,000 | Larger → SEAI EXEED / business schemes; smaller/newer → baseline LEO startup supports |
| Q4 | EI or IDA client? | No | Yes → EI GreenStart / Strategic Consultancy via your EI advisor |
| Q5 | Sector exclusions | Not primary agriculture, fisheries, coal, steel | Excluded (State Aid) → Dept. of Agriculture / BIM alternatives |

### What it funds (75% up to €10,000)
- Building fabric: roof and wall insulation.
- Systems: commercial heat pumps, efficient HVAC, advanced heating controls.
- Lighting: full LED conversions.
- Equipment: upgrading commercial refrigeration, smart pumps, or process machinery **at least 5 years old** to a superior energy rating.

### Required documents
1. The green audit report showing the specific equipment recommendation.
2. Proof of commercial premises (rates bill or lease with 12+ months remaining).
3. Proof the replaced equipment is ≥ 5 years old.
4. Itemised competitive supplier quotes with energy-saving specs.

### Key rule
Do **not** sign equipment contracts before official grant approval.

### Official links
- Grant page: https://www.localenterprise.ie/Discover-Business-Supports/Energy-Efficiency-Grant/
- Green for Business: via your LEO — https://www.localenterprise.ie/Find-Your-Local-Enterprise-Office/
- SEAI business grants: https://www.seai.ie/grants/business-grants/

---

## 10. GRANT 9 — GOOGLE AD GRANTS (for non-profits & charities)

### Summary
**$10,000 USD per month** of in-kind Google Search advertising (≈ $120,000/year) for qualifying non-profits, via the **Google for Nonprofits** programme. Free; unused budget does not roll over.

### Eligibility logic gates
| # | Question | Pass | Fail → action |
|---|----------|------|---------------|
| Q1 | Registered Irish charity? | Yes — Charities Regulator registration + CHY number (charitable tax exemption) from Revenue | No → not eligible; if a commercial business → LEO/EI supports |
| Q2 | Organisation type? | Standard charity/non-profit | Governmental entity, hospital/medical group, school/university → EXCLUDED (philanthropic/fundraising arms of educational institutions ARE eligible) |
| Q3 | Website quality? | Own domain, SSL certificate (https), unique content, clear mission description, non-commercial | No site / no SSL / thin content → fix website first |
| Q4 | Accept Google's certifications? | Yes (non-discrimination + donation receipt & use) | No → cannot proceed |

### Application process (2 stages)
1. **Register for Google for Nonprofits** → submit organisation details.
2. Verification by Google's validation partner (**Goodstack**) — days to a few weeks.
3. Once verified, activate **Ad Grants** inside the account: "Get started" → enter & submit website URL.
4. Complete the eligibility form (organisation + advertising goals).
5. Submit activation request → invitation email from the Ad Grants team within **~10 business days**.

### Ongoing compliance rules (bot should warn users)
- Search ads only (no Display, Performance Max, YouTube).
- Maintain **5% CTR** each month (2 consecutive failing months risks suspension).
- Geo-targeting mandatory.
- No single-word or overly generic keywords (own-brand terms excepted).
- Keyword quality score ≥ 3 (pause/remove QS 1–2).
- At least 1 meaningful conversion tracked per month (where required); GA4 recommended.
- Violations → suspension; reinstatement possible after fixes + appeal; repeated breaches → permanent loss.

### Official links
- Google for Nonprofits / Ad Grants offering: https://www.google.com/nonprofits/offerings/google-ad-grants/
- Ad Grants Ireland: https://www.google.ie/grants/
- Requirements & FAQ: https://www.google.com/grants/faq/

---

## 11. NON-PROFIT / CHARITY RESOURCE BLOCK (use on every "non-commercial" disqualification)

```markdown
### 📚 Funding routes for non-profits & charities

**🔹 The Wheel — Ireland's national association for charities & social enterprises.**
Live directory of grants, fundraising guides, and compliance resources:
🔗 [Explore The Wheel Funding & Fundraising Directory](https://www.wheel.ie/funding#:~:text=Funding-,Fundraising,29)
*(Link scrolls straight to the Fundraising section.)*

**🔹 Free Google advertising ($10,000 USD/month):**
If you hold a CHY number, you may qualify for Google Ad Grants:
🔗 [Google Ad Grants — Google for Nonprofits](https://www.google.com/nonprofits/offerings/google-ad-grants/)

**🔹 Registration prerequisites:**
Most non-profit funding requires BOTH:
1. Registration with the **Charities Regulator**
2. A **CHY number** (charitable tax exemption) from **Revenue**
```

> **Technical note:** wheel.ie blocks automated scraping (robots disallowed). Hardcode the link in bot responses; do NOT attempt live fetching of this site.

---

## 12. DISQUALIFICATION ROUTING MAP (bot must never dead-end)

| User profile / failure reason | Redirect to |
|---|---|
| Trading > 18 months (failed Priming) | Business Expansion Grant |
| Trading < 18 months (failed Expansion) | Priming Grant |
| Product already launched (failed Feasibility) | Business Expansion Grant |
| More than 10 employees (LEO core grants) | Enterprise Ireland; if 10–50 staff & digital need → Grow Digital Voucher |
| Local retail / hospitality / personal services (displacement rule) | TOV or Grow Digital Voucher (open to these sectors) + LEO mentoring & training |
| Non-profit / charity / community group | Section 11 block (The Wheel + Google Ad Grants + Charities Regulator/CHY) |
| Sole trader / partnership (failed Innovation Voucher) | LEO grants (open to sole traders) — Priming/Expansion/TOV/Grow Digital |
| Idea stage only (failed HPSU) | EI Pre-Seed Start Fund (PSSF, €50k–€100k convertible note); LEO Feasibility Grant |
| Domestic-market focus (failed HPSU) | LEO supports |
| Modest growth plans (failed HPSU jobs/€1m test) | LEO Business Expansion Grant |
| No green audit (failed EEG) | Free LEO Green for Business audit first |
| Home-based business (failed EEG premises) | SEAI residential schemes: https://www.seai.ie |
| Wants working-capital / overheads funding | Microfinance Ireland loans (up to €25,000): https://www.localenterprise.ie/Discover-Business-Supports/Financial-Supports/Microfinance-Loans/ |
| Wants export-marketing money | Market Explorer / TAME (50% up to €2,500): https://www.localenterprise.ie/Discover-Business-Supports/Market-Explorer-Grant/ |
| Needs digital roadmap before spending | FREE Digital for Business (3 days consultancy) |
| Nothing fits | National Enterprise Hub (315+ supports, advisers by phone/chat): https://www.neh.gov.ie/business-supports |

---

## 13. CROSS-CUTTING FAQ (for free-text user questions)

**Q: Do I have to pay part of the cost myself?**
Yes for almost all LEO grants — they are matched funding (typically you pay 50%; Energy Efficiency Grant covers up to 75%). The EI standard Innovation Voucher (€10,000) and Digital for Business consultancy are fully funded. Google Ad Grants is free ad credit.

**Q: Is VAT covered?**
No. All grant amounts exclude VAT. VAT is always paid by the business (Innovation Voucher: college invoices 23% VAT separately; usually reclaimable through VAT returns).

**Q: Can I spend first and claim later?**
No. Spending before approval disqualifies those costs on effectively every scheme. Get approval → spend → submit paid invoices → reimbursement.

**Q: Can I combine grants?**
Yes, but never for the same costs (no double-funding). Common path: Digital for Business (free) → Grow Digital Voucher → later a Priming or Expansion Grant for other costs. State aid is capped by **De Minimis** rules: max €300,000 total state aid over any 3 fiscal years.

**Q: Are there deadlines?**
Most LEO grants run on **rolling applications** subject to each county office's annual budget — apply early in the year. EI Innovation Vouchers: applications year-round (standard vouchers subject to periodic calls). Always confirm current availability with the specific office.

**Q: How long do decisions take?**
TOV: 1–4 weeks after submission. Other LEO grants: typically a few weeks (committee-based, varies by county). Google Ad Grants: verification days–weeks, then ~10 business days for the activation invitation.

**Q: I'm a sole trader — what can I get?**
LEO grants (Priming, Expansion, Feasibility, TOV, Grow Digital, EEG) accept sole traders, partnerships and limited companies. The EI Innovation Voucher and HPSU require a CRO-registered limited company.

**Q: What sectors are always excluded from LEO financial grants?**
Gambling/gaming, adult entertainment, tobacco, unauthorised cannabis products, coal/steel, primary agriculture/fisheries/aquaculture (State Aid rules) — plus locally traded retail/hospitality/personal services for the *capital* grants (displacement rule). Exception: TOV and Grow Digital ARE open to local retail/services.

**Q: Who do I actually apply to?**
All LEO grants → your **county** Local Enterprise Office (31 offices; no central national application): https://www.localenterprise.ie/Find-Your-Local-Enterprise-Office/. EI supports → Enterprise Ireland online system. Google Ad Grants → Google for Nonprofits portal.

**Q: What is the National Enterprise Hub?**
A government portal (launched July 2024) listing 300+ supports across 19 departments, filterable by business size, sector, and support type, with human advisers on (01) 727 2100, email, and live chat: https://www.neh.gov.ie

---

## 14. MASTER LINK DIRECTORY

| Resource | URL |
|---|---|
| Find Your Local Enterprise Office | https://www.localenterprise.ie/Find-Your-Local-Enterprise-Office/ |
| LEO Priming Grant | https://www.localenterprise.ie/Discover-Business-Supports/Financial-Supports/Priming-Grant/ |
| LEO Business Expansion Grant | https://www.localenterprise.ie/Discover-Business-Supports/Financial-Supports/Business-Expansion-Grant/ |
| LEO Feasibility Grant | https://www.localenterprise.ie/Discover-Business-Supports/Financial-Supports/Feasibility-Grant/ |
| LEO Trading Online Voucher | https://www.localenterprise.ie/discover-business-supports/trading-online-voucher-scheme/ |
| LEO Grow Digital Voucher | https://www.localenterprise.ie/Discover-Business-Supports/Grow-Digital/ |
| Grow Digital application portal (example) | https://leo.submit.com/show/51 |
| LEO Digital for Business | https://www.localenterprise.ie/discover-business-supports/digital-for-business-support/ |
| LEO Energy Efficiency Grant | https://www.localenterprise.ie/Discover-Business-Supports/Energy-Efficiency-Grant/ |
| LEO Market Explorer / TAME | https://www.localenterprise.ie/Discover-Business-Supports/Market-Explorer-Grant/ |
| Microfinance Ireland Loans (via LEO) | https://www.localenterprise.ie/Discover-Business-Supports/Financial-Supports/Microfinance-Loans/ |
| EI Innovation Voucher | https://www.enterprise-ireland.com/en/supports/innovation-voucher |
| EI Innovative HPSU Fund | https://www.enterprise-ireland.com/en/innovative-hpsu-fund |
| EI HPSU Feasibility Study Grant | https://www.enterprise-ireland.com/en/supports/hpsu-feasibility-study-grant |
| EI Digital & AI Discovery | https://www.enterprise-ireland.com/aidiscovery |
| National Enterprise Hub | https://www.neh.gov.ie/business-supports |
| SEAI Business Grants | https://www.seai.ie/grants/business-grants/ |
| The Wheel Funding Directory (non-profits) | https://www.wheel.ie/funding#:~:text=Funding-,Fundraising,29 |
| Google for Nonprofits — Ad Grants | https://www.google.com/nonprofits/offerings/google-ad-grants/ |
| Google Ad Grants Ireland | https://www.google.ie/grants/ |
| Google Ad Grants FAQ | https://www.google.com/grants/faq/ |
| HPSU enquiries email | hpsuenquiries@enterprise-ireland.com |
| NEH advisers phone | (01) 727 2100 (Mon–Fri, 9am–5pm) |

---

## 15. RESPONSE TEMPLATES (copy-paste bot copy)

### 15.1 Eligible result
```markdown
🎉 Great news! Based on your answers, you appear to meet the core criteria for the **{GRANT_NAME}**.

**What you could get:** {AMOUNT_SUMMARY}

⚠️ Remember: this is an indication, not an approval. Final decisions are made by {PROVIDER}. Do not spend any money before official grant approval — retrospective costs are not covered.

**Next step:** {NEXT_STEP_LINK}
```

### 15.2 Disqualified (with redirect)
```markdown
Based on your answers, the **{GRANT_NAME}** isn't the right fit — {REASON_ONE_LINE}.

But there's a better match for you: 👉 **{ALTERNATIVE_GRANT}** — {ONE_LINE_PITCH}
🔗 {ALTERNATIVE_LINK}

Would you like me to run the eligibility check for that one now?
```

### 15.3 Document checklist card
```markdown
📋 **Prepare these before contacting your advisor:**
{CHECKLIST_ITEMS}

Having these ready typically speeds up approval significantly.
```

### 15.4 End-of-flow directory (commercial user)
```markdown
🔍 **Keep exploring funding:**
• 315+ government supports, filterable by size & sector → [National Enterprise Hub](https://www.neh.gov.ie/business-supports)
• All LEO applications go through your county office → [Find Your LEO](https://www.localenterprise.ie/Find-Your-Local-Enterprise-Office/)
• Prefer to talk to a human? Call the NEH advisers: (01) 727 2100
```

### 15.5 End-of-flow directory (non-profit user)
Use the block in **Section 11**.

### 15.6 Standard disclaimer (append to final results)
```markdown
ℹ️ Grant terms, caps and availability change per county and per year. Information last verified July 2026 — always confirm current details on the official page linked above before applying.
```
