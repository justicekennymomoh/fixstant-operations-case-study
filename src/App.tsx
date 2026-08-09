import "./styles.css";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const flow = [
  ["01", "Enter", "Land on the platform, log in or create an account, then select the client or artisan path."],
  ["02", "Onboard", "Complete details, profile photo, location and the optional referral code step before reaching the dashboard."],
  ["03", "Explore", "Use search, categories, verified artisan results or service listings to narrow the available options."],
  ["04", "Evaluate", "Review experience, ratings, location, profile details, customer reviews, portfolio and services before choosing."],
  ["05", "Brief", "Capture the preferred date and time, service location, issue description and reference photos."],
  ["06", "Submit", "Send one structured booking request so the artisan receives the same schedule, location and job context."],
  ["07", "Clarify", "Let the artisan confirm availability and close information gaps before committing to a price."],
  ["08", "Quote", "Separate labour, materials, timing and notes into one reviewable proposal."],
  ["09", "Agree", "Accept, decline or negotiate the flexible part of the quote within a bounded loop."],
  ["10", "Pay", "Move payment after scope agreement, keeping commercial rules behind the platform."],
  ["11", "Deliver", "Track service states, materials, arrival, progress and completion."],
  ["12", "Resolve & close", "Route changes or disputes, confirm completion, release payment and preserve the service record."],
];

const edgeCases = [
  ["Scope changes", "Review the price and confirm the scope again before more work begins."],
  ["Material variance", "Keep the material trail visible without publishing internal settlement rules."],
  ["Cancellation", "Route the case according to job stage and documented policy."],
  ["Missed appointment", "Create a clear escalation path instead of leaving the client in chat limbo."],
  ["Revision request", "Separate service correction from an immediate payment dispute."],
  ["Dispute", "Preserve job evidence and bring operations into the decision."],
  ["External payment risk", "Keep trust, records and payment protection inside the marketplace."],
  ["Incomplete brief", "Ask for missing media or context before an artisan commits to a quote."],
];

function Evidence({ type }: { type: "live" | "documented" | "proposed" | "pending" }) {
  const labels = {
    live: "Visible live",
    documented: "Documented flow",
    proposed: "Proposed recommendation",
    pending: "Pending evidence",
  };
  return <span className={`evidence evidence-${type}`}>{labels[type]}</span>;
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Fixstant case study home">
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <span>Fixstant <small>case study</small></span>
        </a>
        <nav aria-label="Case study navigation">
          <a href="#system">System</a>
          <a href="#workflow">Workflow</a>
          <a href="#evidence">Evidence</a>
          <a className="nav-cta" href="#role">My role</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>Fixstant</span> / Product &amp; Marketplace Operations</p>
          <h1>Making a local services marketplace <em>operable.</em></h1>
          <p className="dek">
            How I helped structure the operating system behind a marketplace serving several user groups, from a client&apos;s first request to quotation, agreement, service delivery and resolution.
          </p>
          <div className="hero-meta">
            <div><span>Role</span><strong>Project Manager &amp; Operations Lead</strong></div>
            <div><span>Period</span><strong>September 2024 to February 2026</strong></div>
            <div><span>Market</span><strong>Lagos, Nigeria</strong></div>
          </div>
        </div>
        <div className="hero-system" aria-label="Marketplace system overview">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="system-node node-client"><b>01</b><span>Client</span></div>
          <div className="system-node node-artisan"><b>02</b><span>Artisan</span></div>
          <div className="system-node node-ops"><b>03</b><span>Operations</span></div>
          <div className="system-node node-growth"><b>04</b><span>Growth</span></div>
          <div className="system-core"><span>Request</span><i>→</i><span>Resolution</span></div>
        </div>
      </section>

      <section className="summary-strip" aria-label="Case study summary">
        <p><span>Challenge</span>Turn informal service coordination into a trusted, trackable transaction.</p>
        <p><span>Operating idea</span>Make every handoff, decision and exception an explicit state.</p>
        <p><span>Evidence</span>Live public flows + supplied workflow documents, sanitised for public use.</p>
      </section>

      <section className="section intro" id="role">
        <div className="section-label">01 / Mandate</div>
        <div className="intro-main">
          <h2>The screen was only one part of the product.</h2>
          <p className="lead">The harder problem was coordinating people who price, trust, schedule and complete work differently.</p>
          <p>
            My remit sat between product delivery and marketplace operations: translate real world behaviour into clear workflows, align teams around shared service states, and make the difficult paths as deliberate as the normal path.
          </p>
        </div>
        <aside className="role-card">
          <p className="mini-label">Role focus</p>
          <ul>
            <li>Service blueprint &amp; journey design</li>
            <li>Cross functional delivery coordination</li>
            <li>Workflow rules &amp; operational handoffs</li>
            <li>Exception and escalation design</li>
            <li>Growth operations enablement</li>
            <li>Future AI integration concept proposed during the case study period</li>
          </ul>
          <p className="confidentiality">Public version: commercial percentages, settlement rules and private controls are intentionally excluded.</p>
        </aside>
      </section>

      <section className="section behaviour">
        <div className="section-label">02 / Behaviour</div>
        <div className="behaviour-heading">
          <h2>Design for what each side needs <em>before</em> they can commit.</h2>
          <Evidence type="documented" />
        </div>
        <div className="tension-grid">
          <article className="tension-card client-tension">
            <p className="card-kicker">Client reality</p>
            <h3>“What will this really cost, and who is coming?”</h3>
            <ul>
              <li>Price clarity before commitment</li>
              <li>Room to negotiate without ambiguity</li>
              <li>No surprise material costs</li>
              <li>Confidence in the artisan&apos;s identity</li>
            </ul>
          </article>
          <div className="tension-bridge" aria-hidden="true"><span>Operational<br />handoff</span></div>
          <article className="tension-card artisan-tension">
            <p className="card-kicker">Artisan reality</p>
            <h3>“Give me enough detail to price the job fairly.”</h3>
            <ul>
              <li>A usable brief before quoting</li>
              <li>Clarity on material responsibility</li>
              <li>Scheduling and location context</li>
              <li>Confidence in timely payment</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section system" id="system">
        <div className="section-label">03 / System map</div>
        <div className="system-heading">
          <div>
            <h2>One marketplace, four operating surfaces.</h2>
            <p>Each surface owns a different part of demand, supply, growth or control. The transaction record connects them.</p>
          </div>
          <div className="legend" aria-label="Evidence legend">
            <Evidence type="live" /><Evidence type="documented" />
          </div>
        </div>
        <div className="surface-grid">
          <article>
            <div className="surface-top"><span>01</span><Evidence type="live" /></div>
            <h3>Client</h3>
            <p>Choose role → onboard → explore → evaluate → brief → agree → pay → track → confirm.</p>
          </article>
          <article>
            <div className="surface-top"><span>02</span><Evidence type="live" /></div>
            <h3>Artisan</h3>
            <p>Onboard → review context → clarify → quote → schedule → deliver → complete.</p>
          </article>
          <article>
            <div className="surface-top"><span>03</span><Evidence type="live" /></div>
            <h3>Marketer</h3>
            <p>Refer clients and artisans, attribute acquisition and track tiered rewards.</p>
          </article>
          <article className="muted-surface">
            <div className="surface-top"><span>04</span><Evidence type="pending" /></div>
            <h3>Admin &amp; Operations</h3>
            <p>Verification, case oversight, complaints, disputes, payments and platform controls.</p>
          </article>
        </div>
        <div className="system-rails">
          <div><span>Trust rail</span><b>Identity • evidence • service states • escalation</b></div>
          <div><span>Transaction rail</span><b>Scope • quote • agreement • payment • completion</b></div>
        </div>
      </section>

      <section className="section workflow" id="workflow">
        <div className="section-label">04 / Complete operating flow</div>
        <div className="workflow-heading">
          <div>
            <h2>From entry to resolution.</h2>
            <p>The supplied client workflow confirms the journey through onboarding, discovery, evaluation and booking. The transaction workflow continues from clarification and quotation through payment, delivery and resolution.</p>
          </div>
          <Evidence type="documented" />
        </div>
        <div className="journey-phases" aria-label="Four phases of the marketplace journey">
          <article><span>Phase 01</span><h3>Acquire &amp; onboard</h3><p>Enter → choose role → create account → dashboard</p></article>
          <article><span>Phase 02</span><h3>Discover &amp; evaluate</h3><p>Explore → search or browse → compare → select</p></article>
          <article><span>Phase 03</span><h3>Request &amp; agree</h3><p>Brief → submit → clarify → quote → negotiate → pay</p></article>
          <article><span>Phase 04</span><h3>Deliver &amp; resolve</h3><p>Schedule → execute → update → complete or escalate</p></article>
        </div>
        <div className="flow-list">
          {flow.map(([num, title, text]) => (
            <article className="flow-item" key={num}>
              <span>{num}</span><h3>{title}</h3><p>{text}</p><i aria-hidden="true">↘</i>
            </article>
          ))}
        </div>
        <div className="decision-row">
          <p><span>Key design decision</span><strong>Negotiate the flexible component, keep materials itemised, and limit the number of negotiation rounds.</strong></p>
          <p><span>Why it matters</span><strong>Users can reach agreement without obscuring what the job actually requires.</strong></p>
        </div>
      </section>

      <section className="section proof" id="evidence">
        <div className="section-label">05 / Product evidence</div>
        <div className="proof-heading">
          <h2>Public surfaces show the operating model taking shape.</h2>
          <p>Captured from the live Fixstant site on 7 August 2026. No production code or private account access was used.</p>
        </div>
        <div className="proof-grid">
          <figure className="proof-wide">
            <div className="browser-frame"><span /><span /><span /><img src={asset("screenshots/fixstant-home.png")} alt="Fixstant public home page showing verified artisans positioning" /></div>
            <figcaption><b>Marketplace promise</b><span>Verified supply, live booking, progress updates and flexible payment are visible on the public home experience.</span><Evidence type="live" /></figcaption>
          </figure>
          <figure>
            <div className="browser-frame portrait"><span /><span /><span /><img src={asset("screenshots/client-signup.png")} alt="Fixstant client four step account creation flow" /></div>
            <figcaption><b>Client onboarding</b><span>A four step path moves from details to photo, location and finish.</span><Evidence type="live" /></figcaption>
          </figure>
          <figure>
            <div className="browser-frame portrait"><span /><span /><span /><img src={asset("screenshots/artisan-signup.png")} alt="Fixstant artisan four step account creation flow" /></div>
            <figcaption><b>Artisan onboarding</b><span>A separate artisan route establishes the same structured entry point.</span><Evidence type="live" /></figcaption>
          </figure>
          <figure className="proof-wide">
            <div className="browser-frame"><span /><span /><span /><img src={asset("screenshots/marketer-portal.png")} alt="Fixstant public marketer programme landing page" /></div>
            <figcaption><b>Growth operations</b><span>The marketer portal makes referral attribution and tiered rewards a distinct operating surface.</span><Evidence type="live" /></figcaption>
          </figure>
        </div>
      </section>

      <section className="section decisions">
        <div className="section-label">06 / Operational decisions</div>
        <div className="decisions-layout">
          <div className="decisions-copy">
            <h2>Five choices that turn a flow into an operating model.</h2>
            <p>A marketplace is reliable when the next action is clear, especially when the normal path breaks.</p>
          </div>
          <ol className="decision-list">
            <li><span>01</span><div><h3>Brief before price</h3><p>Collect evidence, access details, location and material preference before asking for a quote.</p></div></li>
            <li><span>02</span><div><h3>Clarification before commitment</h3><p>Let the artisan close information gaps instead of pricing uncertainty into the job.</p></div></li>
            <li><span>03</span><div><h3>Agreement before payment</h3><p>Keep the quote reviewable and make scope confirmation a visible checkpoint.</p></div></li>
            <li><span>04</span><div><h3>State before status message</h3><p>Arrival, progress, completion and revision should change the shared job record, not live only in chat.</p></div></li>
            <li><span>05</span><div><h3>Evidence before resolution</h3><p>Give operations a consistent record for disputes, changes and completion decisions.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section exceptions">
        <div className="section-label">07 / Edge cases</div>
        <div className="exceptions-heading">
          <div><h2>The unhappy path is part of the product.</h2><p>These scenarios were treated as workflow branches, not operational surprises.</p></div>
          <Evidence type="documented" />
        </div>
        <div className="edge-grid">
          {edgeCases.map(([title, text], index) => (
            <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="section delivery">
        <div className="section-label">08 / Delivery model</div>
        <div className="delivery-grid">
          <div>
            <h2>Cross functional alignment around shared states.</h2>
            <p className="lead">The operating flow became the common language between product, engineering, design, growth and service operations.</p>
          </div>
          <div className="delivery-track" aria-label="Cross functional delivery loop">
            <div><span>Discover</span><p>Translate marketplace behaviour into constraints and service moments.</p></div>
            <div><span>Define</span><p>Map actors, decisions, states, dependencies and exception paths.</p></div>
            <div><span>Coordinate</span><p>Sequence product work and clarify ownership across handoffs.</p></div>
            <div><span>Operationalise</span><p>Prepare teams for verification, support, cases and ongoing improvement.</p></div>
          </div>
        </div>
      </section>

      <section className="section future-recommendation">
        <div className="section-label">09 / Future AI integration recommendation</div>
        <div className="recommendation-heading">
          <div><h2>An improvement concept proposed during the period covered.</h2><p>During the period covered by this case study, I proposed a future AI assisted layer to make enquiries, job briefs and operational escalations easier to coordinate. It is presented as a future recommendation rather than an implemented feature.</p></div>
          <Evidence type="proposed" />
        </div>
        <div className="recommendation-pipeline">
          <article><span>Potential input</span><h3>Enquiry &amp; job brief</h3><p>Bring web, social and messaging requests into a consistent triage path.</p></article>
          <i aria-hidden="true">→</i>
          <article><span>Suggested assistance</span><h3>Operational support</h3><p>Classify intent, flag missing details, suggest matches and summarise cases for the team.</p></article>
          <i aria-hidden="true">→</i>
          <article><span>Human ownership</span><h3>Team decision</h3><p>Keep quotes, payment exceptions, disputes and sensitive escalations with accountable people.</p></article>
        </div>
        <div className="guardrail-row"><span>Guardrails I recommended</span><b>Minimum data access</b><b>Visible escalation</b><b>Decision records</b><b>Human override</b></div>
      </section>

      <section className="section evidence-index">
        <div className="section-label">10 / Evidence boundary</div>
        <div className="evidence-heading"><h2>What is verified, documented and still unknown.</h2><p>This case study distinguishes live evidence, documented workflow design and a future recommendation developed during the period covered.</p></div>
        <div className="evidence-table">
          <div className="evidence-row"><Evidence type="live" /><strong>Publicly observable</strong><p>Marketplace positioning, client signup, artisan signup and the marketer programme.</p></div>
          <div className="evidence-row"><Evidence type="documented" /><strong>Confirmed in supplied workflows</strong><p>Role selection, client onboarding, discovery, profile evaluation, booking intake, clarification, quotation, bounded negotiation, payment staging, service states and exception handling.</p></div>
          <div className="evidence-row"><Evidence type="proposed" /><strong>Future recommendation</strong><p>A future AI assisted concept for enquiry handling, brief completeness, matching support, case summaries and human escalation.</p></div>
          <div className="evidence-row"><Evidence type="pending" /><strong>Not claimed or publicly verified</strong><p>Admin screens, authenticated dashboards, production analytics, measured outcomes or implementation of the future AI recommendation.</p></div>
        </div>
      </section>

      <section className="takeaway">
        <p className="eyebrow">Leadership takeaway</p>
        <blockquote>“Designing the happy path was only the start. The real operating work was deciding what happens when information, price, materials, timing or trust changes during a job.”</blockquote>
        <div className="takeaway-meta"><span>Project Manager &amp; Operations Lead</span><span>September 2024 to February 2026</span></div>
      </section>

      <section className="source-note">
        <div><span>Sources</span><p>Fixstant public website, captured 7 Aug 2026; <i>Fixstant Work Flow</i>; and <i>Fixstant Booking Payment Flow Lagos</i>, sanitised for public presentation.</p></div>
        <div><span>Privacy</span><p>No source code, credentials, private dashboards, user data, internal percentages or confidential settlement logic are shown.</p></div>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true"><i /></span><span>Fixstant <small>case study</small></span></a>
        <p>Selected product &amp; marketplace operations work</p>
        <div><a href="https://fixstant.com/home" target="_blank" rel="noreferrer">Live marketplace ↗</a><a href="https://fixstant.com/marketers/" target="_blank" rel="noreferrer">Marketer portal ↗</a></div>
      </footer>
    </main>
  );
}
