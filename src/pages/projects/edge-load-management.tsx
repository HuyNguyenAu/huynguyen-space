import { Article } from "@/components/article";

export const EdgeLoadManagementPage = () => {
  return (
    <Article>
      <h3>Edge Energy Management System (CORE v2)</h3>
      <p>
        <strong>Role:</strong> Technical Lead and Systems Engineer
        <br />
        <strong>Company:</strong> JET Charge
        <br />
        <strong>Scope:</strong> Smart energy management software that maximises
        site electrical capacity, avoids expensive utility upgrades, and protects
        commercial delivery fleets from downtime.
      </p>

      <blockquote>
        <p>
          <strong>TLDR:</strong>
          <br />
          Commercial depots have limited
          power supplies. Adding enough chargers to electrify fleets risked
          $80,000 - $250,000 substation upgrades per site and $5,000 - $50,000
          per hour in contract penalties if charging failed overnight.
          <br />
          Built a smart energy controller that
          balances power in real time and works 100% offline, paired with a clean
          on-site screen for local electricians.
          <br />
          Avoided $1.6M - $5.0M in
          substation upgrade costs across client sites, allowed 5x more chargers
          on existing power feeds, and protected commercial fleets from expensive
          morning delivery delays.
        </p>
      </blockquote>

      <h4>The Problem: The Grid Limits That Stopped Sales Deals</h4>
      <p>
        For commercial fleets, going electric comes down to a simple physical
        limit: a depot only has so much electricity coming from the street. A
        client might want to buy 30 electric delivery vans, but their building
        only has enough power to charge 6 of them at once.
      </p>
      <p>
        Asking the power company for a substation upgrade costs between $80,000
        and $250,000 per site and takes 12 to 18 months of construction work.
        For many prospective customers, that price tag and waiting period killed
        the deal before it started.
      </p>
      <p>
        At the same time, commercial delivery fleets (like Woolworths online
        groceries or express couriers) operate on tight morning schedules. If an
        internet outage caused chargers to shut down overnight, delivery vans
        could not leave on time, triggering customer contract penalties between
        $5,000 and $50,000 per hour. Sales teams needed a solution that proved
        EV fleets could charge safely on existing power supplies without relying
        on internet connections.
      </p>

      <h4>How We Solved It</h4>

      <h4>1. Guaranteed Offline Reliability to Protect Fleet Schedules</h4>
      <p>
        Our primary promise was that a client fleet would never be stuck because
        the internet went down. The smart load balancing software runs directly
        on hardware installed at the depot. It constantly reads power meters and
        adjusts charger speeds every split second. If the mobile network drops
        out overnight, vehicles continue charging safely without tripping the
        building main circuit breaker. This allowed sales teams to reassure
        clients that their morning delivery runs were completely safe.
      </p>

      <h4>2. Making Setup Easy for Electricians</h4>
      <p>
        In the past, energy management systems required sending software
        engineers to customer sites to hand-edit fragile configuration files.
        This slowed down projects and frustrated customers. We built a local web
        dashboard that runs directly from the device over Wi-Fi. Any local
        electrician can open the screen on a phone or tablet, verify the
        installation with clear visual diagrams, and finish setup in minutes
        without calling software support.
      </p>

      <h4>3. Clear Diagnostics Without Expensive Mobile Bills</h4>
      <p>
        To provide ongoing support, our operations team needed performance data
        from customer sites. But streaming live data every second from hundreds
        of chargers over cellular connections would have created huge mobile
        bills. We used a smart data summarisation method that cuts data volume
        while making sure that sudden electrical faults, like breaker trips, are
        immediately highlighted. This gave our customer support team clear
        visibility while keeping monthly mobile data costs low.
      </p>

      <h4>4. Quick Integration for New Charger Brands</h4>
      <p>
        Different fleet clients use different brands of chargers and power
        meters. We redesigned our communication layer so sales and engineering
        could support new hardware brands in days rather than months, keeping our
        bids competitive in enterprise tenders.
      </p>

      <h4>System Architecture Flow</h4>
      <figure className="my-6">
        <img
          src={`${import.meta.env.BASE_URL}edge-load-management-architecture.svg`}
          alt="Edge Load Management System Architecture Flow"
          className="max-h-[600px]"
          loading="lazy"
        />
      </figure>

      <h4>Business Outcomes</h4>
      <ul>
        <li>
          <strong>$1.6M - $5.0M in Avoided Substation Upgrades:</strong> Allowed
          client depots and residential properties to deploy EV charging
          immediately without waiting for expensive utility upgrades, closing
          sales deals over a year faster.
        </li>
        <li>
          <strong>5x More Chargers on Existing Power:</strong> Allowed clients
          to install 5x more charging stations than normal electrical limits
          would allow.
        </li>
        <li>
          <strong>$150k - $500k in Downtime Risk Prevented:</strong> Protected
          overnight charging schedules during internet outages, shielding
          clients from heavy contractual penalties.
        </li>
        <li>
          <strong>Faster Troubleshooting:</strong> Replaced hours of manual
          electrical testing with clear on-screen diagnostics, reducing customer
          support calls and repair times.
        </li>
      </ul>
    </Article>
  );
};
