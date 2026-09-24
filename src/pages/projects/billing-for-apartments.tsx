import { Article } from "@/components/article";

export const BillingForApartments = () => {
  return (
    <Article>
      <h3>Billing for Apartments and Shared EV Infrastructure</h3>
      <p>
        <strong>Role:</strong> Technical Lead and Systems Engineer
        <br />
        <strong>Company:</strong> JET Charge
        <br />
        <strong>Scope:</strong> Automated tenant metering and billing platform
        that unblocks apartment property sales and generates recurring software
        revenue.
      </p>

      <blockquote>
        <p>
          <strong>TLDR:</strong>
          <br />
          Selling EV chargers into
          apartment buildings was completely blocked because body corporates
          refused to pay for private tenant electricity, and managing manual
          billing spreadsheets was an administrative nightmare.
          <br />
          Built an automated billing and payment
          system that tracks exact electricity use, calculates accurate power
          rates, and automatically sends funds to the building bank account
          through Stripe.
          <br />
          Generated $100k - $300k a year
          in predictable recurring software and transaction revenue, unblocked
          major property tenders, and eliminated billing disputes.
        </p>
      </blockquote>

      <h4>The Problem: The Billing Roadblock in Multi-Tenant Buildings</h4>
      <p>
        Apartment towers and commercial business parks represent a huge market
        for EV charging, but sales stalled over a single issue: body corporates
        and building managers did not want the headache of managing power bills.
      </p>
      <p>
        Under the law, building managers cannot use common electricity funds to
        subsidise private resident vehicle charging. Sending staff to read
        sub-meters every month was too expensive, and flat monthly fees created
        angry arguments between residents who drove different amounts. Without
        an automated, fair way to bill drivers and reimburse the building,
        property committees simply rejected EV charger proposals, stalling
        high-value hardware and software sales.
      </p>

      <h4>How We Solved It</h4>

      <h4>1. Fast Delivery Without Risky Rewrites</h4>
      <p>
        Rather than undertaking a slow, risky rewrite of our central company
        software, we built an independent billing service with clean boundaries.
        This allowed us to launch the apartment billing product months ahead of
        schedule and start closing building deals immediately without risking
        core operations.
      </p>

      <h4>2. Handling Both Private and Shared Parking Bays</h4>
      <p>
        Some apartment buildings have private chargers in assigned parking
        spots, while others share common visitor bays. We designed the system to
        support both. Drivers simply tap an RFID card or use the mobile app to
        start a session. The system records their exact kilowatt-hour usage,
        eliminating all disputes over who used what power.
      </p>

      <h4>3. Accurate Billing Based on Real Utility Rates</h4>
      <p>
        Electricity prices in Australia change throughout the day, with peak
        hours costing much more than overnight off-peak power. We built a rate
        engine that automatically matches electricity consumption to the
        building actual utility tariff schedule. Drivers receive transparent,
        fair bills, and building managers know every cent of electricity cost is
        fully recovered.
      </p>

      <h4>4. Automated Payments and Split Deposits</h4>
      <p>
        We automated the entire financial flow using Stripe. Drivers are charged
        automatically on their credit cards each month, our platform retains its
        recurring subscription margin, and the net electricity funds are
        deposited directly into the body corporate bank account every quarter.
        Building managers never have to create an invoice or chase a resident
        for money.
      </p>

      <h4>5. Self-Service Mobile Experience for Drivers</h4>
      <p>
        We built mobile APIs for the driver app so residents can see live
        charging sessions, track monthly costs, and manage their payment
        methods. This self-service model gave residents confidence and
        eliminated customer support calls to building managers.
      </p>

      <h4>System Architecture Flow</h4>
      <figure className="my-6">
        <img
          src={`${import.meta.env.BASE_URL}billing-for-apartments-architecture.svg`}
          alt="Billing for Apartments and Shared EV Infrastructure System Architecture Flow"
          className="max-h-[600px]"
          loading="lazy"
        />
      </figure>

      <h4>Business Outcomes</h4>
      <ul>
        <li>
          <strong>$100k - $300k in Recurring Annual Revenue:</strong> Turned
          one-off apartment hardware installations into a steady stream of
          recurring subscription and transaction income.
        </li>
        <li>
          <strong>Major Property Deals Unblocked:</strong> Allowed our sales
          team to win commercial property and strata tenders that were
          previously stuck in committee approval deadlocks.
        </li>
        <li>
          <strong>Zero Administrative Burden for Building Managers:</strong>{" "}
          Completely eliminated manual meter reading, spreadsheet tracking, and
          payment collection for property managers.
        </li>
        <li>
          <strong>100% Billing Accuracy and Trust:</strong> Provided clear,
          itemised usage statements that satisfied strict consumer standards
          and eliminated resident disputes.
        </li>
      </ul>
    </Article>
  );
};
