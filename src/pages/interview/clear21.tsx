import { Article } from "@/components/article";

export const Clear21FinalInterviewPage = () => {
  return (
    <Article>
      {/* ── Header ── */}
      <div className="not-prose mb-6">
        <p className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-2">
          Final Stage · Behavioural
        </p>
        <h1 className="font-semibold text-4xl tracking-tight leading-tight mb-3">
          The last round is yours to lose.
        </h1>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 bg-white border border-stone-200 px-3 py-1.5 rounded-full text-xs text-stone-500 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-700 inline-block" />
            Tue ·{" "}
            <strong className="text-stone-800">11:30am</strong>
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white border border-stone-200 px-3 py-1.5 rounded-full text-xs text-stone-500 shadow-sm">
            Christian Hope ·{" "}
            <strong className="text-stone-800">Head of Software Eng.</strong>
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white border border-stone-200 px-3 py-1.5 rounded-full text-xs text-stone-500 shadow-sm">
            Level 1, 6/8 Compark Cct, Mulgrave
          </span>
        </div>
      </div>

      <p>
        This isn't a knowledge test — it's whether Christian wants you in a squad with Product and
        Design, trusted to drive. You already have the stories. You just have to tell them well.
      </p>

      {/* ── Golden Rules ── */}
      <div className="not-prose grid grid-cols-2 gap-3 my-6 max-[560px]:grid-cols-1">
        <div className="bg-green-900 text-green-50 rounded-2xl p-5 shadow-sm">
          <p className="font-mono text-xs tracking-widest text-green-400 mb-2">RULE 01</p>
          <h2 className="text-xl font-semibold tracking-tight text-white mb-1.5 leading-tight">
            Say "I," not "we."
          </h2>
          <p className="text-sm text-green-200 leading-relaxed m-0">
            Every answer needs a sentence about what <em>you</em> did or decided. They want your
            contribution, not the team's.
          </p>
        </div>
        <div className="bg-green-900 text-green-50 rounded-2xl p-5 shadow-sm">
          <p className="font-mono text-xs tracking-widest text-green-400 mb-2">RULE 02</p>
          <h2 className="text-xl font-semibold tracking-tight text-white mb-1.5 leading-tight">
            Lead, then stop.
          </h2>
          <p className="text-sm text-green-200 leading-relaxed m-0">
            Headline first → pause → let him pull the depth. This round scores communication
            directly.
          </p>
        </div>
      </div>

      {/* ── 01 · Story Bank ── */}
      <h2>01 · Story bank</h2>
      <p>
        <em>Six stories, each answering more than one theme. Know these cold.</em>
      </p>

      <h3>
        1 · The opaque-string config decision{" "}
        <code>TRADE-OFFS</code>
      </h3>
      <p>
        <strong>The call:</strong> Keep the ZTC config as an opaque string, not a strongly-typed
        object.
      </p>
      <p>
        <strong>The tension:</strong> Typed is "correct" — validation, compile-time safety. But
        every config change would ripple across multiple repos and force a risky coordinated
        deployment.
      </p>
      <p>
        <strong>Your reasoning:</strong> With the string, only the device and frontend change. The
        backend stays untouched — no risky deploy, no delay, less surface for customer-facing bugs.
      </p>
      <div className="not-prose border-l-4 border-green-700 bg-green-50 pl-4 pr-4 py-2.5 rounded-r-lg text-sm my-3">
        <strong className="text-green-900">Punchline:</strong> "I chose the less pure option
        because the deployment risk was the real cost, not the type safety."
      </div>
      <p>
        <em>
          <strong>Why it lands:</strong> juniors optimise for elegance, seniors optimise for risk
          and delivery. Have this loaded for anything resembling "tell me about a trade-off."
        </em>
      </p>

      <h3>
        2 · Pushing back on nice-to-haves <code>OWNERSHIP</code>
      </h3>
      <p>
        <strong>The situation:</strong> Constant meetings pushing new ZTC features — more
        automation, nice-to-haves.
      </p>
      <p>
        <strong>What you did:</strong> Pushed back. Argued ZTC needed stabilising and core
        functionality solid before extras.
      </p>
      <p>
        <strong>Why:</strong> Time-to-customer with the minimum met beats feature count. A shaky
        product that does more is worth less than a solid one that does the job.
      </p>
      <div className="not-prose border-l-4 border-green-700 bg-green-50 pl-4 pr-4 py-2.5 rounded-r-lg text-sm my-3">
        <strong className="text-green-900">Punchline:</strong> "Saying no to good ideas was the
        highest-value thing I did on that project."
      </div>
      <p>
        <em>
          <strong>Why it lands:</strong> they want people "confident in their technical opinions
          while remaining open." This is exactly that.
        </em>
      </p>

      <h3>
        3 · The shared-cursor disagreement <code>COLLABORATION</code>
      </h3>
      <p>
        <strong>The situation:</strong> Team wanted a shared cursor across multiple charts. Hard —
        each chart was downsampled differently, and there was no time to align sampling across
        sources.
      </p>
      <p>
        <strong>The compromise:</strong> Accepted the data was sampled at the same time, knowing it
        meant critical faults could be missed.
      </p>
      <p>
        <strong>The follow-up:</strong> Didn't leave it there — later fixed it properly with an
        order of precedence for status within each time slice, so important events surface.
      </p>
      <div className="not-prose border-l-4 border-green-700 bg-green-50 pl-4 pr-4 py-2.5 rounded-r-lg text-sm my-3">
        <strong className="text-green-900">Punchline:</strong> "We shipped the imperfect version to
        get feedback early, then I went back and fixed the correctness issue properly."
      </div>
      <p>
        <em>
          <strong>Why it lands:</strong> disagreement without ego, pragmatism under deadline,{" "}
          <strong>and</strong> you closed the loop. The last part makes it a good story instead of a
          mediocre one.
        </em>
      </p>

      <h3>
        4 · CORE v2 — the customer problem <code>PRODUCT</code>
      </h3>
      <p>
        <strong>Customer problem first:</strong> Commissioning a site needed a specialist who could
        handle terse raw JSON config files. That gatekept whole segments — apartments, fleet depots
        — that were uneconomic to serve.
      </p>
      <p>
        <strong>What you did:</strong> Co-designed and led the frontend for a greenfield,
        first-in-Australia edge system that lets a regular sparky commission a site without touching
        a config file. Added a live dashboard so technicians and owners diagnose faults at a glance,
        not charger-by-charger.
      </p>
      <p>
        <strong>The outcome:</strong> Load management fits up to 5× more chargers on the same
        supply. Opened segments that were previously off the table.
      </p>
      <p>
        <em>
          <strong>Delivery order matters:</strong> customer pain → tech → impact. Never tech first.
        </em>
      </p>

      <h3>
        5 · The permission-layer refactor <code>TECH DEBT</code>
      </h3>
      <p>
        <strong>The problem:</strong> Permission checks scattered and duplicated across the
        codebase. Every new feature was a chance for a dev to forget one.
      </p>
      <p>
        <strong>What you did:</strong> Refactored the core database layer to centralise access
        control.
      </p>
      <p>
        <strong>Why it matters:</strong> Doesn't just fix bugs — eliminates the{" "}
        <em>category</em>. Developer error stops being possible rather than being caught later.
      </p>
      <p>
        <em>
          <strong>Why it lands:</strong> Clear21's CTO named tech debt and multi-tenancy / data
          isolation as live pains. Same shape of problem.
        </em>
      </p>

      <h3>
        6 · Stripe into the legacy platform <code>OWNERSHIP</code>
      </h3>
      <blockquote>
        <p>
          "I led integrating Stripe into a legacy .NET billing platform — private chargers billed to
          residents, shared chargers billed per session, automated quarterly reimbursement to the
          Owners Corporation. It unlocked hundreds of thousands in recurring revenue and enabled
          deals we couldn't do before."
        </p>
      </blockquote>
      <p>
        <strong>If asked more:</strong> Exposed billing APIs to the mobile app so residents
        self-serve — more buy-in because it works like any other app on their phone.
      </p>

      <hr />

      {/* ── 02 · Product ── */}
      <h2>02 · Product mindset &amp; ownership</h2>
      <p>
        <em>Understand the "why," connect decisions to customer outcomes.</em>
      </p>

      <p>
        <strong>"Tell me about something you owned end-to-end."</strong>
      </p>
      <p>→ ZTC or Billing. Both yours from concept to production.</p>

      <p>
        <strong>"How do you approach ambiguity or unclear requirements?"</strong>
      </p>
      <p>
        Start from the customer's real problem, not the feature request. On CORE the ask could've
        been "make the config easier" — the real problem was "only specialists can commission a
        site, so we can't serve whole segments." Reframing it changed what got built.
      </p>

      <p>
        <strong>"How do you think about a great user experience?"</strong>
      </p>
      <ul>
        <li>
          <strong>Table view</strong> — info-dense, less scrolling; technicians work fast on a
          tablet instead of a laptop.
        </li>
        <li>
          <strong>Tree view</strong> — simpler site representation so less technical users aren't
          overwhelmed.
        </li>
        <li>
          <strong>Sanitised node/edge structure</strong> — users <em>can't</em> corrupt the config,
          even by accident. Saves diagnosis time.
        </li>
        <li>
          <strong>LTTB chart downsampling</strong> — better UX <em>and</em> lower cloud cost.
        </li>
      </ul>
      <div className="not-prose border-l-4 border-green-700 bg-green-50 pl-4 pr-4 py-2.5 rounded-r-lg text-sm my-3">
        Great line: "The best UX calls usually pay off twice — LTTB made the charts usable{" "}
        <strong className="text-green-900">and</strong> cut our cloud costs."
      </div>

      <hr />

      {/* ── 03 · Problem Solving ── */}
      <h2>03 · Problem solving &amp; adaptability</h2>
      <p>
        <em>Take a problem and drive it with minimal hand-holding.</em>
      </p>

      <p>
        <strong>"Picked up something new quickly?"</strong>
      </p>
      <p>
        → Your personal projects. LLM-native VM, Lox interpreter, TinyAgent — you taught yourself
        compiler construction and LLM internals <em>for fun</em>. Pure curiosity, their green flag.
      </p>

      <p>
        <strong>"Worked in an unfamiliar / legacy codebase?"</strong>
      </p>
      <p>
        Stripe into legacy .NET; the permission-layer refactor; porting legacy comms modules;
        monolith → modular monolith.
      </p>

      <p>
        <strong>"Improved an existing process?"</strong>
      </p>
      <p>
        → ZTC: commissioning hours → minutes, on-site visit eliminated. Also: automated
        infra/workstation provisioning at Energy Locals (manual → repeatable), automated backup/DR
        pipelines.
      </p>

      <p>
        <strong>"Solved a complex problem?"</strong>
      </p>
      <p>
        → The config sync engine. Push/pull with drift + conflict detection, recovering from network
        drops so a device can never land in an invalid state. Genuine distributed-state problem,
        entirely yours.
      </p>

      <hr />

      {/* ── 04 · AI ── */}
      <h2>04 · AI &amp; modern engineering</h2>
      <p>
        <em>Your differentiator — most candidates can't touch this.</em>
      </p>

      <p>
        Most candidates say "I use Copilot." You built an LLM-native VM, an interpreter with local
        model integration, and a state-driven agent. You understand these systems{" "}
        <strong>from the inside.</strong>
      </p>

      <p>
        <strong>How you use it:</strong> Day-to-day acceleration — boilerplate, unfamiliar APIs,
        rubber-ducking a design, first-draft tests.
      </p>

      <p>
        <strong>How you validate — near verbatim:</strong>
      </p>
      <blockquote>
        <p>
          "I treat AI output like a PR from a junior dev. I never merge what I don't understand. I
          read every line, check it against the requirement, run it, and lean on tests. It's fastest
          on the boring parts and least trustworthy on the parts that matter most — anything
          touching correctness or money, I'm reading properly. AI accelerates me; it doesn't own
          the code. I do."
        </p>
      </blockquote>

      <p>
        <strong>Depth card (briefly):</strong> Your LPU work taught you <em>why</em> models fail —
        small models pattern-match rather than reason, attention drops detail — so you decompose
        into atomic steps, keep context clean, add guardrails and retry limits. That's exactly why
        you don't trust output blindly.
      </p>

      <div className="not-prose border border-amber-300 bg-amber-50 rounded-xl p-4 my-3 text-sm">
        <p className="font-mono text-xs uppercase tracking-widest text-amber-600 font-semibold mb-1.5">
          Their amber flag
        </p>
        <p className="m-0">
          "Over-reliance on AI without understanding the output." You are the living counter-example
          — but only if you say so. Make it obvious.
        </p>
      </div>

      <hr />

      {/* ── 05 · Collaboration ── */}
      <h2>05 · Collaboration &amp; communication</h2>
      <p>
        <em>Easy to work with; explains clearly.</em>
      </p>

      <p>
        <strong>"Working with Product / Design?"</strong>
      </p>
      <p>
        CORE v2 &amp; ZTC — across multiple teams, product, UX/UI. Concrete: table view vs tree
        view came from spotting two user types (fast technician vs. overwhelmed non-technical user)
        — a product/design call, not a code one.
      </p>

      <p>
        <strong>"Handling disagreement?"</strong>
      </p>
      <p>
        → Shared-cursor (#3) and pushing back on nice-to-haves (#2). Hold a position with
        reasoning, land a decision, move on without drama. Also the pointer-table &amp; opaque-string
        debates.
      </p>

      <p>
        <strong>"Explaining technical concepts to non-technical people?"</strong>
      </p>
      <p>
        The whole <em>premise</em> of your work — CORE exists to let a non-specialist do what
        needed an expert. You've spent years turning complexity into interfaces normal people use.
        Same muscle.
      </p>

      <hr />

      {/* ── 06 · Questions ── */}
      <h2>06 · Questions for Christian</h2>
      <p>
        <em>Pick two or three. Curiosity is scored too.</em>
      </p>

      <ul>
        <li>
          "Your CTO mentioned caching is hard because every user does something different — where
          does that hurt most today?"{" "}
          <em>(connects to your pointer-table work)</em>
        </li>
        <li>
          "You're evolving the modular monolith toward more services — what's driving the
          sequencing?"
        </li>
        <li>
          "Where are the AI initiatives right now — shipped features or still exploratory? What's
          surprised you?"
        </li>
        <li>
          "How do squads balance feature delivery against tech-debt work? Who decides what gets paid
          down?"
        </li>
        <li>
          "What does 'hit the ground running' look like in the first 90 days for a senior here?"
        </li>
        <li>"What separates a good senior from a great one on your team?"</li>
      </ul>

      <hr />

      {/* ── 07 · Logistics ── */}
      <h2>07 · Logistics &amp; final notes</h2>
      <p>
        <em>Where, when, and the two things not to do.</em>
      </p>

      <ul>
        <li>
          <strong>Tue 11:30am · Level 1, 6/8 Compark Cct, Mulgrave.</strong> Free parking on site.
          Arrive ~10 min early.
        </li>
        <li>
          <strong>Whiteboarding may come up</strong> — for problem-solving <em>breakdown</em>, not
          code. Think out loud, clarify, state assumptions, sketch the shape before the detail. The
          process is the answer.
        </li>
        <li>
          <strong>Be easy to talk to.</strong> This round is substantially a vibe check. Warmth and
          genuine interest in their problems count as much as any answer.
        </li>
      </ul>

      <div className="not-prose border border-amber-300 bg-amber-50 rounded-xl p-4 my-3 text-sm">
        <p className="font-mono text-xs uppercase tracking-widest text-amber-600 font-semibold mb-2">
          Two amber flags — don't trip them
        </p>
        <p className="mb-2">
          <strong>Don't bluff.</strong> If you don't know something (AWS is fair — it's preferred,
          not required), say so and pivot to adjacent experience: VPS admin, infra automation, DR
          pipelines, JETCharge's cloud platform. "I haven't used AWS specifically, but here's the
          infra work I've done, and I pick up platforms fast."
        </p>
        <p className="m-0">
          <strong>Don't over-explain.</strong> Same note as the technical round — and here it's
          scored directly.
        </p>
      </div>

      <p>
        <strong>
          You cleared a technical round with a senior engineer. They already believe you can code.
          This is theirs to lose.
        </strong>
      </p>

      <hr />

      <p>
        <em>Prep briefing · Clear21 Senior Full-Stack · good luck, Huy</em>
      </p>
    </Article>
  );
};
