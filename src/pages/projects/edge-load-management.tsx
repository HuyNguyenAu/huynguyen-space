import { Article } from "@/components/article";

export const EdgeLoadManagementPage = () => {
  return (
    <Article>
      <h3>Edge Energy Management System (CORE v2)</h3>
      <p>
        <strong>Role:</strong> Full Stack Software Engineer
        <br />
        <strong>Company:</strong> JET Charge
        <br />
        <strong>Tech Stack:</strong> C# / .NET Core, Linux, Modbus RTU / TCP,
        OCPP 1.6J / 2.0.1, Next.js, React, TypeScript, WebSockets, Azure DevOps
      </p>

      <blockquote>
        <p>
          <strong>Problem:</strong> Commercial depots lacked the electrical
          capacity to charge entire fleets, and delivery operations could not
          risk relying on cloud connectivity.
          <br />
          <strong>Solution:</strong> An offline-first C# / .NET control daemon
          running directly on local Linux edge gateways, balancing power in real
          time over Modbus and OCPP.
          <br />
          <strong>Result:</strong> Powered up to 5x more chargers on the same
          supply, saved clients an estimated $1.6M - $5.0M in avoided substation
          upgrades, and kept fleet charging completely uninterrupted during
          network outages.
        </p>
      </blockquote>

      <h4>The Problem: The Grid Limits That Stopped Sales Deals</h4>
      <p>
        When commercial delivery fleets go electric, they immediately run into a
        hard physical constraint: a depot only has so much electricity coming
        from the street. A client might need to charge 30 delivery vans
        overnight, but the existing switchboard only has capacity for 6
        unmanaged 22 kW chargers.
      </p>
      <p>
        Asking the local utility for a substation or supply upgrade costs
        between $80,000 and $250,000 per site and takes 12 to 18 months of civil
        works—which regularly killed sales deals before they even got off the
        ground.
      </p>
      <p>
        To make matters worse, commercial delivery fleets (like supermarket home
        deliveries and express couriers) run on tight morning departure
        schedules. If chargers shut down overnight because the depot's internet
        dropped out, vans couldn't leave on time, triggering customer contract
        penalties between $5,000 and $50,000 per hour. A cloud-dependent load
        controller was simply not acceptable.
      </p>

      <h4>How It Works: Key Engineering Decisions</h4>
      <p>
        We needed a system that kept site power draw strictly within breaker
        limits while operating entirely on-premise without cloud dependencies:
      </p>
      <ul>
        <li>
          <strong>Local, offline-first control loop:</strong> Our primary promise
          was that a fleet would never be stranded because of a network outage.
          The control service runs as a C# / .NET daemon directly on the on-site
          Linux gateway. It continuously polls local power meters over Modbus
          RTU/TCP and throttles charger outputs via OCPP 1.6J / 2.0.1 every split
          second. If the internet drops out completely, load balancing continues
          locally without tripping the main breaker.
        </li>
        <li>
          <strong>Embedded web dashboard for local electricians:</strong> In the
          past, commissioning edge energy hardware required sending specialized
          software engineers to customer sites to manually edit configuration
          files. We built an embedded Next.js dashboard served right from the
          gateway over local Wi-Fi, streaming live telemetry over WebSockets. Any
          local electrician can open the UI on a tablet, verify meter and
          charger readings, and finish commissioning without software support.
        </li>
        <li>
          <strong>Pluggable hardware abstraction layer:</strong> Different
          commercial tenders specify different brands of power meters and
          chargers. We built a clean device abstraction layer so integrating a
          new meter or charger brand takes days instead of weeks, keeping sales
          bids fast and competitive.
        </li>
        <li>
          <strong>Telemetry summarisation and alerting:</strong> Streaming raw
          telemetry every second from hundreds of chargers over cellular links
          would have created huge mobile data bills. We built an edge data
          pipeline that summarizes normal operating telemetry to keep bandwidth
          minimal, while instantly dispatching critical fault events (like
          breaker trips) to Azure Monitor and our on-call rotation.
        </li>
        <li>
          <strong>Delivery and packaging:</strong> Gateway runtimes and packages
          are built, tested, and released via automated Azure DevOps pipelines,
          ensuring reproducible deployments across diverse customer hardware.
        </li>
      </ul>

      <h4>System Architecture Flow</h4>
      <figure className="my-6">
        <img
          src={`${import.meta.env.BASE_URL}edge-load-management-architecture.svg`}
          alt="Edge Load Management System Architecture Flow"
          className="max-h-[600px]"
          loading="lazy"
        />
      </figure>

      <h4>The Impact</h4>
      <ul>
        <li>
          Powered up to 5x more chargers on the same supply (such as charging 30
          vans on a 150 kW supply that previously could only support 6 unmanaged
          22 kW chargers).
        </li>
        <li>
          Saved clients an estimated $1.6M - $5.0M in avoided substation upgrades
          across ~20 depot installations ($80k - $250k per site).
        </li>
        <li>
          Guaranteed 100% charging continuity through network dropouts,
          protecting commercial fleets from expensive SLA downtime penalties.
        </li>
        <li>
          Enabled electricians to commission sites in minutes via the embedded
          dashboard, removing the need for on-site software engineers.
        </li>
      </ul>
    </Article>
  );
};
