import { Article } from "@/components/article";

export const JETChargeWorkReferencePage = () => {
  return (
    <Article>
      <h3>JETCharge Work Reference</h3>
      <p>
        <strong>Position:</strong> Full Stack Software Engineer
        <br />
        <strong>Dates:</strong> Oct 2021 - Jun 2026
      </p>
      <blockquote>
        <p>Organised from my own notes. Each project lists <strong>what I built</strong>, the <strong>key decisions / trade-offs</strong> I made or argued for, and the <strong>impact</strong>. The trade-off sections are the best material for behavioural questions ("tell me about a hard technical decision" / "a time you disagreed with the team").</p>
      </blockquote>
 
      <hr></hr>
 
      <h2>1. CORE v2 - EV Load Management (greenfield)</h2>
      <p><strong>What it is:</strong> A greenfield, first-in-Australia system that lets a non-specialist electrician ("sparky") commission a site without needing specialised knowledge or hand-editing raw JSON config files.</p>
 
      <h3>What I built</h3>
      <ul>
        <li><strong>Frontend (co-designed & architected):</strong> The commissioning experience that replaced difficult, terse raw JSON config files, making the product accessible to customers/segments that couldn't be targeted before.</li>
        <li><strong>Live monitoring dashboard:</strong> Lets technicians and site owners diagnose and detect issues quickly, instead of manually checking each charger and power meter.</li>
        <li><strong>Backend APIs:</strong> Endpoints company technicians use to automate custom jobs via scripts, and to back the frontend UI.</li>
        <li><strong>Communication layer:</strong> Designed and ported the legacy communication modules that send/receive data to/from the Illuminate platform, so devs can quickly support new message types.</li>
      </ul>
 
      <h3>Impact</h3>
      <ul>
        <li>Opened up new customer segments by removing the need for specialist commissioning knowledge.</li>
        <li>Faster fault diagnosis for technicians and owners.</li>
        <li>Lower effort to add new message types going forward.</li>
      </ul>
 
      <hr></hr>
 
      <h2>2. Zero-Touch Configuration (ZTC)</h2>
      <p><strong>What it is:</strong> Remote pre-configuration and pairing of charger hardware so it can be shipped ready to deploy.</p>
 
      <h3>Frontend - what I built</h3>
      <ul>
        <li><strong>Table view UI:</strong> An information-dense view users can quickly verify and modify without excessive scrolling. Lets technicians work faster and use smaller/portable devices (e.g. a tablet in portrait) instead of a laptop.</li>
        <li><strong>Tree view UI:</strong> A simpler, more direct representation of a site for less-technical users, so they can set up a site without being overwhelmed.</li>
        <li><strong>Live status:</strong> Surfaced live power meter and charger statuses/readings so users can tell at a glance whether a site is malfunctioning.</li>
        <li><strong>Nodes-and-edges data model with sanitisation:</strong> Ensures no invalid/corrupt config can be sent to the backend, so a user can't accidentally corrupt the config - saving technicians and engineers diagnosis time.</li>
        <li><strong>Segmented chart with LTTB downsampling:</strong> Reduces cloud DB, processing cost, and time.</li>
      </ul>
 
      <h3>Frontend - key decisions / trade-offs</h3>
      <ul>
        <li><strong>Pushing back on "nice-to-have" features:</strong> There were constant meetings pushing for extra features (e.g. more automation). I pushed back to keep ZTC stabilised and the core functionality solid, so we could hit minimal-requirement delivery and keep time-to-customer as low as possible.</li>
        <li><strong>Shared cursor across multiple charts:</strong> Argued about linking a shared cursor across charts. It was hard because each chart's data differed due to downsampling, and there wasn't time to co-sample every source together. First resolved by accepting the data was sampled at the same time (with the risk that critical faults in a slice could be missed). Later fixed properly with an order-of-precedence for status within a given time slice/chunk, so the important data still surfaces - giving customers early visibility and feedback, and reinforcing the product's value.</li>
      </ul>
 
      <h3>Backend - what I built</h3>
      <ul>
        <li><strong>Config syncing (push / pull / conflict flagging):</strong> Removes the manual step and human error, and ensures no bad state can exist.</li>
        <li><strong>Caching:</strong> Improves user response times and saves cloud costs.</li>
      </ul>
 
      <h3>Backend - key decisions / trade-offs</h3>
      <ul>
        <li><strong>Pointer table before blob storage:</strong> Argued for a pointer table the backend checks first to find config quickly, avoiding the slower, costlier blob-storage query. Lets the business link other resources to it easily, and keeps repeated queries cheap thanks to caching.</li>
        <li><strong>Config as an opaque string vs. a strongly-typed object:</strong> Argued for treating the config as an opaque string rather than a strongly-typed object. A typed object would mean changes across multiple repos; the string means only the device and frontend need to change - no backend changes, which avoids delayed, complex, risky deployments. Reduces risk of issues that would irritate customers.</li>
      </ul>
 
      <h3>Impact</h3>
      <ul>
        <li>Config errors effectively designed out via sanitisation and sync.</li>
        <li>Lower cloud cost and faster responses via caching + pointer table + downsampling.</li>
        <li>Faster, lower-risk iteration by keeping config as an opaque string.</li>
      </ul>
 
      <hr></hr>
 
      <h2>3. Billing (Stripe)</h2>
      <p><strong>What it is:</strong> Billing integration into the legacy system so the company can charge for EV usage across both public and private charging.</p>
 
      <h3>What I built</h3>
      <ul>
        <li><strong>Stripe integration with the legacy system:</strong> Enabled charging customers for usage (public and private). Unlocked new solutions for both commercial and private customers - notably public charging and apartment shared charging - enabling new deals worth potentially millions.</li>
        <li><strong>Billing APIs for the mobile app:</strong> Exposed APIs so customers manage billing from their phone. Drives more customer buy-in because it's much easier to set up and access, like any other app.</li>
      </ul>
 
      <h3>Impact</h3>
      <ul>
        <li>New revenue streams from previously un-billable scenarios (public + shared apartment charging).</li>
        <li>Higher adoption and less manual admin via mobile self-service.</li>
      </ul>
 
      <hr></hr>
 
      <h2>4. Illuminate</h2>
      <p><strong>What it is:</strong> The EV charging asset-management platform.</p>
 
      <h3>Frontend uplift - what I built</h3>
      <ul>
        <li><strong>Legacy UI → modern React components (ShadCN):</strong> Lets devs move much faster and gives product/design more freedom against a tailored standard, so the company can express itself and stand out.</li>
      </ul>
 
      <h3>Backend (Partner management) - what I built</h3>
      <ul>
        <li><strong>Multi-organisation partner management:</strong> Architected and implemented a solution letting a new type of customer manage resources across multiple organisations. Enables partnership networks (similar to car dealerships) that dramatically reduce the company's operational burden, create a network effect / community of specialists, and open new revenue streams like training and subscriptions.</li>
        <li><strong>Centralised database permission layer:</strong> Refactored the legacy core database layer so user permissions are built in and centralised. Eliminates scattered duplicate logic and removes the risk of developer mistakes or forgotten checks.</li>
      </ul>
 
      <h3>Impact</h3>
      <ul>
        <li>Faster feature delivery and a more distinctive product via the React uplift.</li>
        <li>New dealer-style partner revenue model that offloads operational burden.</li>
        <li>Safer, consistent access control across the codebase.</li>
      </ul>
 
      <hr></hr>
 
      <h2>Quick reference - themes to lean on in interviews</h2>
      <ul>
        <li><strong>Product thinking / business value:</strong> Nearly every piece of work ties to a customer or revenue outcome (new segments, new revenue, lower cost, faster delivery).</li>
        <li><strong>Trade-offs under constraints:</strong> Opaque-string config, pointer table, shared-cursor precedence, pushing back on nice-to-haves for stability/time-to-customer.</li>
        <li><strong>Full-stack ownership:</strong> Led both frontend and backend across ZTC, Billing, Illuminate, and CORE v2.</li>
        <li><strong>Cost & performance awareness:</strong> Caching, pointer table, LTTB downsampling - repeatedly chose designs that cut cloud cost and improved response times.</li>
        <li><strong>Reliability / correctness by design:</strong> Sanitised nodes-and-edges model, config sync with conflict detection, centralised permissions - preventing bad states rather than debugging them later.</li>
      </ul>
 
    </Article>
  );
};
