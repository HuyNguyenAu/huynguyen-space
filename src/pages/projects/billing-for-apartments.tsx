import { Article } from "@/components/article";

export const BillingForApartments = () => {
  return (
    <Article>
      <h3>Multi-Tenant Billing and Payments</h3>
      <p>
        <strong>Role:</strong> Full Stack Software Engineer
        <br />
        <strong>Company:</strong> JET Charge
        <br />
        <strong>Tech Stack:</strong> C# / .NET Core, ASP.NET Core Web API,
        Entity Framework, SQL Server, Stripe Connect, Azure, Azure DevOps
      </p>

      <blockquote>
        <p>
          <strong>Problem:</strong> Apartment buildings and strata committees
          rejected EV chargers because they had no fair, automated way to bill
          residents for charging without using common building funds.
          <br />
          <strong>Solution:</strong> An independent billing service built in
          C# / .NET for per-session metering, time-of-use tariff pricing, and
          automated split payouts via Stripe Connect.
          <br />
          <strong>Result:</strong> Unlocked $100k - $300k a year in recurring
          revenue across 800 - 2,500 charging ports (measured), avoided 2 - 5
          support roles (~$300k - $500k/yr), and completely eliminated billing
          disputes.
        </p>
      </blockquote>

      <h4>The Problem: The Apartment Charging Standoff</h4>
      <p>
        Apartment towers and multi-tenant properties represent a massive market
        for EV charging, but sales repeatedly ground to a halt in body corporate
        meetings. Under Australian strata law, committees cannot use common
        electricity funds to subsidise private vehicle charging.
      </p>
      <p>
        Sending building staff into basements to read sub-meters every month was
        too expensive and error-prone, while flat monthly fees caused furious
        arguments between residents who drove different amounts. Without an
        automated, transparent way to bill drivers and reimburse the building,
        strata committees simply voted down charger proposals, stalling
        hardware and software sales.
      </p>
      <p>
        At the same time, the business wanted to transition from one-off
        hardware sales to steady recurring revenue. Our core platform had no
        native concept of multi-tenant billing and attempting a full
        architectural rewrite of the legacy system was far too slow and risky.
      </p>

      <h4>How It Works: Key Engineering Decisions</h4>
      <p>
        We needed an automated billing model that satisfied strict strata laws,
        required zero manual invoicing, and could launch quickly without
        jeopardizing existing operations:
      </p>
      <ul>
        <li>
          <strong>Standalone service with clean boundaries:</strong> Rather than
          undertaking a slow, high-risk rewrite of our core platform, we built an
          independent billing service with clean API boundaries. This allowed us
          to ship the product months ahead of schedule, unblock high-value
          strata deals, and isolate sensitive financial workflows from core
          device management.
        </li>
        <li>
          <strong>Per-session metering for private and shared bays:</strong>{" "}
          Some buildings have private chargers in assigned bays; others have
          shared visitor bays. We unified both into a single metering model.
          Drivers tap an RFID card or start a session in the mobile app, and
          every kilowatt-hour is tied directly to that driver's session,
          eliminating arguments over who used what power.
        </li>
        <li>
          <strong>Accurate time-of-use tariff calculations:</strong> Electricity
          prices fluctuate throughout the day, with peak hours costing
          substantially more than overnight off-peak power. We built a rate engine
          that prices every session against the building's specific time-of-use
          tariff schedule. Residents pay the actual cost, and building managers
          know every cent of power is fully recovered.
        </li>
        <li>
          <strong>Automated payments and Stripe Connect split deposits:</strong>{" "}
          We automated the entire financial flow. Drivers are charged
          automatically on their cards each month via Stripe, our platform
          collects its subscription and transaction margins, and net electricity
          funds are deposited straight into the strata's bank account every
          quarter. Building managers never have to touch an invoice or chase a
          resident for money.
        </li>
        <li>
          <strong>Self-service driver experience:</strong> We built self-service
          APIs for the resident mobile app so drivers can see live charging
          sessions, view itemized receipts, and manage payment methods.
          Complete billing transparency stopped customer support calls before
          they started.
        </li>
        <li>
          <strong>Delivery and testing:</strong> We wrote rigorous automated
          tests covering tariff edge cases and payment reconciliation logic in
          Azure DevOps, with live transactions monitored using Application
          Insights alerts.
        </li>
      </ul>

      <h4>End to End System Architecture</h4>
      <figure className="my-6">
        <img
          src={`${import.meta.env.BASE_URL}billing-for-apartments-architecture.svg`}
          alt="Billing for Apartments and Shared EV Infrastructure System Architecture Flow"
          className="max-h-[600px]"
          loading="lazy"
        />
      </figure>

      <h4>Commercial Impact & Business Outcomes</h4>
      <ul>
        <li>
          Generated $100k - $300k a year in predictable, recurring SaaS and
          transaction revenue across 800 - 2,500 active charging ports
          (measured).
        </li>
        <li>
          Saved an estimated $300k - $500k a year by avoiding 2 - 5 dedicated
          billing support roles (~$100k - $150k each) through end to end
          automation.
        </li>
        <li>
          Completely eliminated manual meter reading, spreadsheet tracking, and
          invoicing for building managers.
        </li>
        <li>
          Every single charge is fully auditable down to the interval meter
          reading, tariff window, and session timestamp.
        </li>
      </ul>
    </Article>
  );
};
