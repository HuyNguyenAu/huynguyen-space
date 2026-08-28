import { Article } from "@/components/article";

export const XeroFinalInterviewPage = () => {
  return (
    <Article>
      <h1>Xero Values / Future Proof Interview — Daily Drill</h1>
      <p>
        <strong>Thursday 6 Aug 2026, 11:00-11:45 AM (Melbourne)</strong><br />
        <strong>Interviewers:</strong> Tymon Bernard (Head of Engineering) &middot; Usman Khalid (Engineering Manager)<br />
        <strong>Format:</strong> 45-min behavioural conversation. STAR method. Emphasis on <em>your individual contribution, measurable outcomes, and what you learned.</em>
      </p>

      <hr />

      <h2>The One-Paragraph Mindset (read this first, every day)</h2>
      <p>They are not hiring a JET Charge mid-level engineer. They are hiring a <strong>Xero senior engineer</strong>. Every story must show senior behaviours: you saw the problem before being asked, you made the judgment call, you brought others along, you tied it to customer/business outcomes, and you learned something you now apply everywhere. The technical detail is the <em>supporting evidence</em>, never the headline. Lead with the outcome, explain the judgment, mention the tech only as needed.</p>
      <p><strong>Your identity statement (memorise, say a version of this early):</strong></p>
      <blockquote>
        <p>"I've spent 5 years at JET Charge leading full-stack work end-to-end — greenfield edge systems, cloud sync, billing — for Australia's largest EV operators like Woolworths and RACV. What I care most about is designing systems where bad states can't exist and where non-specialists can do specialist work. I've repeatedly turned ambiguous, constraint-heavy problems into shipped products with measurable customer and revenue impact."</p>
      </blockquote>

      <hr />

      <h2>The Story Bank — 7 Core Stories</h2>
      <p>Drill these until you can tell each in <strong>90 seconds</strong> (short version) and <strong>3 minutes</strong> (deep version). Each has a memorable name so you can retrieve it under pressure.</p>

      <h3>STORY 1 — "Sparky-Proof" (CORE v2 Commissioning UI)</h3>
      <p><strong>Best for:</strong> Customer outcomes at the centre &middot; Raising standards &middot; Ambiguity</p>
      <ul>
        <li><strong>S:</strong> Commissioning an EV load management site required a specialist hand-editing terse raw JSON config files. Errors were easy, expensive, and locked out whole customer segments (apartments, fleet depots) — sites where load management fits up to 5x more chargers on the same supply.</li>
        <li><strong>T:</strong> Co-design and lead the frontend for a greenfield, first-in-Australia edge system so a non-specialist electrician ("sparky") could commission a site alone.</li>
        <li><strong>A:</strong> I architected the commissioning experience around the user, not the config format: a guided UI replacing raw JSON, plus a real-time local dashboard (WebSocket streaming + REST APIs) so technicians and owners diagnose faults instantly instead of walking charger-to-charger with a meter. I made the deliberate call that the <em>product's ceiling was the least technical user</em>, and designed every screen against that.</li>
        <li><strong>R:</strong> Opened previously uneconomic customer segments; fault diagnosis went from manual physical checks to instant; the company could sell into capacity-constrained sites for the first time.</li>
        <li><strong>Learned:</strong> The customer outcome isn't "the config is correct" — it's "a sparky can do this on a Tuesday without calling us." Framing requirements from the end user's skill level, not the system's needs, changed every design decision.</li>
      </ul>

      <h3>STORY 2 — "Hours to Minutes" (Zero-Touch Configuration)</h3>
      <p><strong>Best for:</strong> Customer outcomes &middot; Ownership beyond remit &middot; Operational excellence</p>
      <ul>
        <li><strong>S:</strong> Every deployment needed a specialised technician physically on site: manual network setup, reverse tunnelling, IT coordination. High commissioning overhead, deployment delays, config errors.</li>
        <li><strong>T:</strong> As lead full-stack engineer, design and deliver a system to pre-configure and pair hardware <em>before shipping</em> — plug-and-play deployment.</li>
        <li><strong>A:</strong> I designed and led both halves: the React Node-UI for back-office staff to register hardware and pair it with client profiles pre-shipment, and the secure .NET cloud endpoints the device calls on first boot to validate itself and sync config. I built the sync engine with push/pull and drift/conflict detection so it recovers from transient network drops and can never land in an invalid state.</li>
        <li><strong>R:</strong> Commissioning went from <strong>hours to minutes</strong>. No on-site technician required. Config errors effectively designed out. Deployment became scalable rather than headcount-bound.</li>
        <li><strong>Learned:</strong> The biggest wins came from removing entire categories of work, not speeding up existing work. "How do we make the technician faster?" was the wrong question; "how do we make the visit unnecessary?" was the right one.</li>
      </ul>

      <h3>STORY 3 — "The Opaque String" (Config Architecture Trade-off)</h3>
      <p>
        <strong>Best for:</strong> Judgment &amp; trade-offs &middot; Challenging respectfully &middot; Communicating clearly<br />
        <strong>⭐ Your strongest "hard technical decision / disagreement" story. Know it cold.</strong>
      </p>
      <ul>
        <li><strong>S:</strong> Designing ZTC's config handling, the natural engineering instinct — and the team's initial lean — was a strongly-typed config object end to end. Clean, type-safe, "correct."</li>
        <li><strong>T:</strong> Decide the config representation across device, cloud, and frontend, knowing our deployment reality: multiple repos, and backend deployments were slow, complex, and risky.</li>
        <li><strong>A:</strong> I argued for treating the config as an <strong>opaque string</strong> in the backend. A typed object meant every config schema change rippled across multiple repos and forced coordinated backend deployments. With an opaque string, only the device and frontend need to change — zero backend deploys for schema evolution. I made the case not on elegance but on <em>deployment risk and iteration speed</em>: which design lets us ship changes to customers fastest with least chance of breaking them? I paired it with frontend sanitisation (a nodes-and-edges model that validates before anything is sent) so we didn't trade away correctness.</li>
        <li><strong>R:</strong> Faster, lower-risk iteration; schema changes stopped triggering multi-repo coordination; fewer delayed deployments irritating customers. The pattern held up for the life of the product.</li>
        <li><strong>Learned:</strong> "Correct" architecture is context-dependent. Type safety is a means, not an end — I moved the safety to the boundary where it was cheap (frontend validation) instead of where it was expensive (backend coupling). Also: I won the argument by reframing it around customer risk, not by defending my design.</li>
      </ul>

      <h3>STORY 4 — "Push Back to Ship" (Scope Defence on ZTC)</h3>
      <p><strong>Best for:</strong> Changing priorities &amp; ambiguity &middot; Challenging respectfully &middot; Customer outcomes</p>
      <ul>
        <li><strong>S:</strong> During ZTC delivery there were constant meetings pushing for extra "nice-to-have" features — more automation, more bells. Every addition threatened stability and time-to-customer.</li>
        <li><strong>T:</strong> Keep the project deliverable. Someone had to hold the line, and as lead engineer that was me.</li>
        <li><strong>A:</strong> I repeatedly and respectfully pushed back: acknowledged the value of each idea, then made the case that shipping a <em>stable core</em> to customers sooner beat shipping a bigger, shakier thing later. I anchored discussions on minimal-requirement delivery and time-to-customer, and kept a clear record of what was deferred, not killed — which made the pushback palatable to stakeholders.</li>
        <li><strong>R:</strong> ZTC hit delivery with a solid, stabilised core. The deferred ideas remained on the table for later instead of derailing v1.</li>
        <li><strong>Learned:</strong> Saying no well is a senior skill: never "no," always "not yet, and here's why the customer wins." Framing scope defence as <em>protecting the customer's timeline</em> turns a conflict into a shared goal.</li>
      </ul>

      <h3>STORY 5 — "Shared Cursor" (Iterating Under Constraint)</h3>
      <p><strong>Best for:</strong> Ambiguity &middot; Learning &amp; iteration &middot; Trade-offs honestly acknowledged</p>
      <ul>
        <li><strong>S:</strong> ZTC's monitoring charts used LTTB downsampling to cut cloud cost — but each chart's data was sampled differently, so a shared cursor across charts (which users needed to correlate faults) was genuinely hard. There was no time to co-sample every source.</li>
        <li><strong>T:</strong> Ship something useful now without pretending the problem away.</li>
        <li><strong>A:</strong> V1: I linked cursors accepting the data was sampled at the same times — a conscious, communicated risk that a critical fault inside a slice could be missed. I didn't stop there. Later I designed the proper fix: an <strong>order-of-precedence for status within each time slice</strong>, so the most important signal always surfaces even after downsampling.</li>
        <li><strong>R:</strong> Customers got early visibility and feedback from v1, which reinforced the product's value; v2 closed the correctness gap. Cloud processing cost stayed low throughout.</li>
        <li><strong>Learned:</strong> Perfect-later beats perfect-never — <em>if</em> you're honest about the gap and actually come back for it. I now explicitly log the debt I take on and the trigger for repaying it.</li>
      </ul>

      <h3>STORY 6 — "Millions Unlocked" (Stripe Billing into a Legacy System)</h3>
      <p><strong>Best for:</strong> Stepping beyond remit &middot; Collaboration across disciplines &middot; Business impact</p>
      <ul>
        <li><strong>S:</strong> JET Charge couldn't bill for whole categories of usage — apartment shared charging, public charging. Owners Corporations relied on manual readings or flat fees: disputes, inaccuracy, dead revenue.</li>
        <li><strong>T:</strong> Integrate Stripe billing into a legacy .NET platform — private chargers billed to residents, shared chargers billed per session, automated quarterly reimbursement to the Owners Corporation.</li>
        <li><strong>A:</strong> I led the integration end to end: billing engine reconciling utility data with charging data for per-resident accuracy, shared-charger attribution so multiple residents on one charger are billed individually, and billing APIs exposed to the JET Charge Connect mobile app so residents self-manage usage and payments. This meant working across the legacy platform team, the mobile team, and directly with how property managers actually operate.</li>
        <li><strong>R:</strong> <strong>Hundreds of thousands in new recurring revenue</strong>; deals worth potentially millions enabled; billing disputes reduced; residents self-serve instead of generating manual admin.</li>
        <li><strong>Learned:</strong> The highest-leverage engineering work is often unglamorous integration into legacy systems — because that's where the business is actually blocked. Revenue impact came from understanding property managers' workflow, not from the payment API.</li>
      </ul>

      <h3>STORY 7 — "Permissions, Once" (Illuminate Refactor + Partner Management)</h3>
      <p><strong>Best for:</strong> Raising engineering standards &middot; Quality by design &middot; Collaboration</p>
      <ul>
        <li><strong>S:</strong> Illuminate (the asset platform behind Woolworths, RACV, Team Global Express, SG Fleet) had permission checks scattered and duplicated across the codebase — every new feature was a chance for a developer to forget one.</li>
        <li><strong>T:</strong> Make access control impossible to get wrong, and separately, enable a new customer type: partners managing assets across multiple organisations.</li>
        <li><strong>A:</strong> I refactored the core database layer so permissions are centralised and built in — the safe path became the default path. Then I architected multi-org partner management on top: a dealer-style network where third parties manage assets across organisations. I also contributed to uplifting the legacy UI to a modern React component system (ShadCN), which sped up every team's feature delivery.</li>
        <li><strong>R:</strong> Eliminated a whole class of developer error; opened a partner network that offloads operational burden and creates training/subscription revenue; the platform backs Australia's largest EV operators.</li>
        <li><strong>Learned:</strong> Raising standards sticks when you change the <em>structure</em>, not the guidelines. A centralised layer beats a code-review checklist every time. Same philosophy as ZTC sanitisation: prevent bad states, don't debug them.</li>
      </ul>

      <hr />

      <h2>AI / Future Proof — Have This Ready</h2>
      <p>They will ask about adapting to AI. You have unusually good material — don't waste it.</p>
      <p><strong>Your angle:</strong> "I don't just use AI tools — I've built with the underlying tech to understand it properly."</p>
      <ul>
        <li><strong>Personal projects:</strong> a minimal <strong>GPT decoder</strong> built from scratch with optimisations; an <strong>LLM-native virtual machine</strong> (an experimental processor with an LLM instead of an ALU); <strong>Wobbly ML</strong> (a machine learning library); AI capabilities in a C# language interpreter (<strong>Lox Lang AI</strong>). Point: when a technology matters, I go beneath the API and learn how it works — that's how I judge what it's genuinely good for versus hype.</li>
        <li><strong>Day-to-day:</strong> how you use AI assistants in real work — accelerating boilerplate, exploring unfamiliar codebases, drafting tests — <em>while</em> applying senior judgment: reviewing everything, knowing where it's unreliable (subtle concurrency, security, legacy-context decisions).</li>
        <li><strong>The senior framing:</strong> "The skill that's appreciating is judgment — knowing what to build, what a correct result looks like, and where the risk lives. AI raises the ceiling on people who have that and exposes people who don't. I want to be on the team that treats AI as leverage on good engineering practice, not a replacement for it."</li>
      </ul>
      <p><strong>Learning fast (the "new stack" question):</strong> Energy Locals — as a graduate/junior you learned AEMO market settlement rules, built C#/SQL reconciliation and ETL pipelines that became the company's data foundation, and integrated Westpac + Equifax KYC (the company's first automated identity verification) in a regulated utility environment. Also Bootstrap/Laravel for the onboarding portal — a completely different stack from your .NET core skillset. Your line from the portfolio: <em>"the problem space should dictate the technology, not the reverse."</em></p>

      <hr />

      <h2>Values Mapping — Their 8 Prompts → Your Stories</h2>
      <table>
        <thead>
          <tr>
            <th>Their prompt</th>
            <th>Primary story</th>
            <th>Backup</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Customer outcomes at the centre</td>
            <td><strong>1 Sparky-Proof</strong></td>
            <td>2 Hours-to-Minutes, 6 Billing</td>
          </tr>
          <tr>
            <td>Progress through ambiguity / changing priorities</td>
            <td><strong>4 Push Back to Ship</strong></td>
            <td>5 Shared Cursor</td>
          </tr>
          <tr>
            <td>Communicating clearly, challenging respectfully</td>
            <td><strong>3 Opaque String</strong></td>
            <td>4 Push Back</td>
          </tr>
          <tr>
            <td>Collaborating across teams/disciplines</td>
            <td><strong>6 Millions Unlocked</strong></td>
            <td>7 Permissions/Partners</td>
          </tr>
          <tr>
            <td>Raising standards / operational excellence</td>
            <td><strong>7 Permissions, Once</strong></td>
            <td>2 (sync engine), pointer-table caching</td>
          </tr>
          <tr>
            <td>Stepping beyond your remit</td>
            <td><strong>6 Millions Unlocked</strong></td>
            <td>2 Hours-to-Minutes</td>
          </tr>
          <tr>
            <td>Adapting to new tools / AI</td>
            <td><strong>AI section above</strong></td>
            <td>Energy Locals stack switch</td>
          </tr>
          <tr>
            <td>Learning quickly to solve a meaningful problem</td>
            <td><strong>Energy Locals (AEMO/KYC)</strong></td>
            <td>5 Shared Cursor v2 fix</td>
          </tr>
        </tbody>
      </table>
      <p>Also keep in your pocket: <strong>pointer table + caching + LTTB downsampling</strong> — repeated-query response times under 3 seconds, lower cloud costs. Use it whenever "cost awareness" or "operational excellence" comes up as a quick concrete example.</p>

      <hr />

      <h2>The Shift: Mid at JET Charge → Senior at Xero</h2>
      <p>This is the lens the whole interview is scored through. The good news: <strong>you've already been operating at senior scope</strong> — leading ZTC end-to-end, arguing architecture, defending delivery, owning revenue outcomes. The shift isn't learning new behaviours; it's <em>recognising them, naming them, and scaling them to a much bigger organisation.</em> Drill these seven reframes until they're how you naturally talk.</p>

      <p>
        <strong>1. From completing work → owning outcomes.</strong><br />
        Mid: "I was asked to build the billing integration and I built it well."<br />
        Senior: "The business couldn't bill entire categories of usage. I owned closing that gap — the Stripe engine, the shared-charger attribution, the mobile APIs, and working out how property managers actually operate — until revenue was flowing."<br />
        <em>The unit of work stops being the ticket and becomes the problem.</em>
      </p>

      <p>
        <strong>2. From having answers → exercising judgment.</strong><br />
        Mid-level engineers are valued for solving the problem in front of them correctly. Seniors are valued for deciding <em>which</em> correctness matters. The opaque-string decision is exactly this: type safety was "correct," but deployment risk was the judgment call. At Xero — accounting software holding millions of small businesses' financial data — judgment about risk, correctness, and blast radius is the core currency.
      </p>

      <p>
        <strong>3. From personal output → multiplying others.</strong><br />
        At JET Charge you did this structurally: the centralised permission layer meant <em>no developer could forget a check again</em>; the React component uplift made <em>every team</em> faster; the comms-layer re-architecture cut the effort for <em>anyone</em> adding message types. Senior at Xero means deliberately looking for these leverage points — your best week might produce no features, just a change that makes forty engineers safer or faster.
      </p>

      <p>
        <strong>4. From wide ownership in a small company → influence without authority in a large one.</strong><br />
        This is the honest, biggest change. At JET Charge you could walk over and change anything; you led by <em>doing</em>. Xero has thousands of engineers, established platforms, and teams you'll never meet who depend on your choices. Seniority there means alignment: writing things down, building the case, finding the right stakeholders, and persuading — your "push back to ship" and "opaque string" stories show you already persuade by reframing around customer risk; at Xero that skill becomes the job, at 10x the audience. <strong>Say a version of this out loud if asked why senior / why Xero — self-awareness about this exact transition is what they're probing for.</strong>
      </p>

      <p>
        <strong>5. From reacting to scope → shaping it.</strong><br />
        Mid: absorbs requirements. Senior: interrogates them. You did this when you pushed back on ZTC nice-to-haves and when you reframed CORE v2 around "the least technical user." The senior move is doing it <em>earlier</em> — in the planning doc, not the delivery meeting.
      </p>

      <p>
        <strong>6. From "prevent my bugs" → "make bad states impossible for everyone."</strong><br />
        Your recurring design philosophy — sanitised nodes-and-edges config, sync with drift detection, permissions built into the data layer — <em>is</em> senior operational thinking. At Xero scale (financial data, compliance, audit), "correctness by construction" isn't a preference, it's the standard. Claim this philosophy explicitly; it's your strongest cultural match.
      </p>

      <p>
        <strong>7. From learning what's needed → learning ahead of need.</strong><br />
        Mid learns the stack the task requires (you did — Laravel, AEMO, KYC). Senior builds understanding <em>before</em> the org needs it, so they can guide decisions when it arrives — your GPT decoder and LLM-VM projects are exactly this posture applied to AI. That's the "Future Proof" half of this interview, handed to you.
      </p>

      <p><strong>The one-line version if they ask directly ("what does senior mean to you?"):</strong></p>
      <blockquote>
        <p>"Mid-level is being trusted with a solution; senior is being trusted with a problem. At JET Charge I grew from the first into the second — owning outcomes end-to-end, making the judgment calls, and building things that made other engineers faster and safer. The step I'm deliberately taking at Xero is doing that at organisational scale, where the lever isn't what I build myself but how well I align, persuade, and raise the bar for people around me."</p>
      </blockquote>

      <hr />

      <h2>Mid → Senior: The Words That Signal the Level</h2>
      <p>Sprinkle these truthfully — they're all accurate for you:</p>
      <ul>
        <li>"I <strong>argued for / made the case</strong> that…" (not "we decided")</li>
        <li>"I <strong>pushed back because</strong> the customer impact was…"</li>
        <li>"The trade-off I <strong>accepted knowingly</strong> was…"</li>
        <li>"I <strong>brought the team along by</strong> reframing it as…"</li>
        <li>"That taught me a principle I <strong>now apply by default</strong>: prevent bad states rather than debug them."</li>
        <li>Always close with <strong>learned + how it changed your behaviour since.</strong> That last beat is what separates senior answers.</li>
      </ul>
      <p><strong>Avoid:</strong> pure tech tours, "we" with no "I", stories with no number or outcome, answering the question you wish they'd asked.</p>
      <p><strong>Numbers to have on your tongue:</strong> hours → minutes commissioning &middot; up to 5x more chargers on the same supply &middot; under-3-second repeated queries &middot; hundreds of thousands in recurring revenue, deals worth millions &middot; Woolworths / RACV / Team Global Express / SG Fleet &middot; 5+ years, full-stack lead on 4 major systems.</p>

      <hr />

      <h2>Questions to Ask Them (pick 2-3)</h2>
      <p>For <strong>Tymon (Head of Engineering):</strong></p>
      <ol>
        <li>"What does the engineering culture at Xero need to look like in three years that it doesn't yet today — and where do senior engineers move that needle most?"</li>
        <li>"How is Xero changing how teams build now that AI is in the workflow — what's actually stuck versus what's still experiment?"</li>
      </ol>
      <p>For <strong>Usman (Engineering Manager):</strong></p>
      <ol start={3}>
        <li>"What separates the senior engineers who thrive here from the ones who plateau?"</li>
        <li>"When your team disagrees on a technical direction, how do decisions actually get made?"</li>
      </ol>
      <p>Universal closer:</p>
      <ol start={5}>
        <li>"What would 'this hire went brilliantly' look like twelve months in?"</li>
      </ol>

      <hr />

      <h2>The Daily Routine (10-15 minutes)</h2>
      <ol>
        <li><strong>Say the identity statement out loud.</strong> Once.</li>
        <li><strong>Pick 2 stories</strong> (rotate). Tell each out loud in 90 seconds — S/T in two sentences, A as "I…" statements, R with a number, one learning line.</li>
        <li><strong>One curveball:</strong> pick a prompt from the values table at random and answer it with the <em>backup</em> story instead of the primary.</li>
        <li><strong>Say the AI answer out loud</strong> every second day; alternate it with the <strong>"what does senior mean to you?" one-liner</strong> from the Shift section.</li>
        <li>Last 2 days before the interview: full 45-min self-run — all 7 stories short-form + AI + your questions.</li>
      </ol>
      <p><strong>Day-of:</strong> good energy is a listed criterion. Smile, be curious about <em>their</em> answers, and remember — they told you the marking guide: judgment, trade-offs, bringing others along, impact, learning. Every answer hits at least three of those or it isn't finished.</p>
    </Article>
  );
};
