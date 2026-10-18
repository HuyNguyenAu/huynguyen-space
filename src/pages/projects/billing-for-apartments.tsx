import { Article } from "@/components/article";

export const BillingForApartments = () => {
  return (
    <Article>
      <h3>Multi Tenant Billing and Payments</h3>
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
          Selling EV chargers into apartment buildings was stalled because body
          corporates refused to pay for private tenant electricity, and managing
          manual billing spreadsheets was an administrative headache.
          <br /><br />
          I built an independent billing service in C# / .NET with per session
          metering, time of use electricity pricing, and automated split payouts
          through Stripe Connect.
          <br /><br />
          This generated $100k - $300k a year in recurring software and
          transaction revenue across 800 - 2,500 active chargers, avoided roughly
          $300k - $500k a year in manual billing support costs, and eliminated
          disputes over power bills.
        </p>
      </blockquote>

      <h4>The Problem</h4>
      <p>
        Apartment towers and multi tenant properties represent a large market
        for EV charging, but sales repeatedly ground to a halt in body corporate
        meetings. Under Australian strata law, committees cannot use common
        electricity funds to subsidise private vehicle charging.
      </p>
      <p>
        Sending building staff into basements to read submeters every month was
        too expensive and prone to error, while flat monthly fees caused arguments
        between residents who drove different amounts. Without an automated,
        accurate way to bill drivers and reimburse the building, strata
        committees voted down charger proposals, stalling hardware and software
        sales.
      </p>
      <p>
        At the same time, the business wanted to transition from one off hardware
        sales to steady recurring revenue. Our core platform had no native
        concept of multi tenant billing, and trying to rewrite the existing
        system to support it would have been slow and risky.
      </p>

      <h4>How It Works</h4>
      <ul>
        <li>
          <strong>Independent service with clean API boundaries:</strong> We
          built the billing engine as a standalone service with clean API
          boundaries instead of doing a risky rewrite of the legacy platform.
          This let us launch months earlier, unblock building sales right away,
          and keep financial code separated from device management.
        </li>
        <li>
          <strong>Metering private and shared parking bays:</strong> Some
          buildings have private chargers in assigned bays; others share common
          visitor bays. We supported both by tying each charging session to the
          driver's RFID card or mobile app account. The system records exact
          kilowatt hours per session, eliminating arguments over who used the
          power.
        </li>
        <li>
          <strong>Time of use tariff calculations:</strong> Electricity prices
          change throughout the day, with peak hours costing substantially more
          than off peak overnight power. We built a rate engine that prices every
          session against the building's specific tariff schedule. Residents pay
          the actual cost, and building managers know every cent of electricity is
          recovered.
        </li>
        <li>
          <strong>Automated billing and Stripe split payouts:</strong> We
          automated the payment flow. Drivers are charged automatically on their
          cards each month through Stripe. The platform collects its subscription
          margin, and electricity reimbursements are deposited directly into the
          body corporate's bank account every quarter without anyone having to
          send an invoice.
        </li>
        <li>
          <strong>Driver mobile app integration:</strong> We built APIs for the
          resident mobile app so drivers can monitor live charging sessions, view
          itemised receipts, and manage payment methods directly.
        </li>
        <li>
          <strong>Automated tests and monitoring:</strong> We wrote automated
          tests covering tariff calculations and payment reconciliation in Azure
          DevOps, and set up Application Insights alerts to flag any transaction
          failures.
        </li>
      </ul>

      <h4>System Architecture</h4>
      <figure className="my-6">
        <img
          src={`${import.meta.env.BASE_URL}billing-for-apartments-architecture.svg`}
          alt="Billing for Apartments and Shared EV Infrastructure System Architecture Flow"
          className="max-h-[600px]"
          loading="lazy"
        />
      </figure>

      <h4>Results</h4>
      <ul>
        <li>
          Generated $100k - $300k a year in recurring software and transaction
          revenue across 800 - 2,500 active charging ports.
        </li>
        <li>
          Saved an estimated $300k - $500k a year by avoiding 2 - 5 dedicated
          billing support roles through automated metering and payment
          processing.
        </li>
        <li>
          Eliminated manual meter reading, spreadsheet tracking, and payment
          collection for building managers.
        </li>
        <li>
          Made every charging session auditable down to the interval meter
          reading, tariff rate, and session timestamp.
        </li>
      </ul>
    </Article>
  );
};
