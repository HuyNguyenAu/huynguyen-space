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
          Commercial delivery depots needed to charge electric van fleets
          overnight, but their existing electrical switchboards could only power
          a few chargers without triggering expensive substation upgrades. On top
          of that, depots could not risk losing charging if their internet
          connection dropped out.
          <br /><br />
          I built an offline first control service in C# / .NET that runs
          directly on local Linux gateways, balancing power in real time over
          Modbus and OCPP. I also built an embedded Next.js dashboard so
          electricians could set up and verify the system on site using a tablet.
          <br /><br />
          This allowed sites to run up to 5x more chargers on their existing
          supply, saved clients an estimated $1.6M - $5.0M across roughly 20
          depot installations by avoiding grid upgrades, and kept fleets charging
          reliably through internet outages.
        </p>
      </blockquote>

      <h4>The Problem</h4>
      <p>
        When commercial delivery fleets transition to electric vehicles, they
        run into a hard physical constraint: the depot only has a limited
        electrical supply from the street. A client might need to charge 30
        delivery vans overnight, but the site switchboard only has capacity for 6
        unmanaged 22 kW chargers.
      </p>
      <p>
        Asking the local utility for a substation upgrade costs between $80,000
        and $250,000 per site and takes 12 to 18 months of civil works, which
        often stalled rollout plans.
      </p>
      <p>
        At the same time, commercial delivery fleets operate on strict morning
        departure schedules. If chargers stopped working overnight because the
        depot internet dropped out, vans would not be charged for morning routes,
        leading to thousands of dollars in delay penalties. The system had to
        manage power locally without depending on the cloud.
      </p>

      <h4>How It Works</h4>
      <ul>
        <li>
          <strong>Local offline first control loop:</strong> The control service
          runs as a C# / .NET daemon directly on the on site Linux gateway. It
          continuously polls local power meters over Modbus RTU/TCP and adjusts
          charger outputs via OCPP 1.6J / 2.0.1 in real time. If the depot
          internet drops out completely, load balancing continues locally so the
          main breaker never trips.
        </li>
        <li>
          <strong>Embedded web dashboard for electricians:</strong> In the past,
          setting up edge gateways meant sending a software engineer to customer
          sites to edit config files by hand. I built an embedded Next.js
          dashboard hosted directly on the gateway over local Wi-Fi, streaming
          live telemetry over WebSockets. Electricians can open the interface on
          a tablet, verify meter and charger readings, and complete commissioning
          without an engineer on site.
        </li>
        <li>
          <strong>Modular hardware abstraction layer:</strong> Different
          commercial tenders specify different brands of power meters and
          chargers. We built a device abstraction layer so adding support for a
          new meter or charger model takes a couple of days instead of weeks.
        </li>
        <li>
          <strong>Telemetry batching and alerting:</strong> Streaming raw
          telemetry every second from dozens of chargers over cellular links
          would have resulted in high mobile data bills. The gateway summarises
          normal operational telemetry before uploading, while immediately
          dispatching critical fault events like breaker trips to Azure Monitor.
        </li>
        <li>
          <strong>Packaging and deployments:</strong> Gateway runtimes are
          built, tested, and released through automated Azure DevOps pipelines,
          ensuring consistent deployments across customer hardware.
        </li>
      </ul>

      <h4>System Architecture</h4>
      <figure className="my-6">
        <img
          src={`${import.meta.env.BASE_URL}edge-load-management-architecture.svg`}
          alt="Edge Load Management System Architecture Flow"
          className="max-h-[600px]"
          loading="lazy"
        />
      </figure>

      <h4>Results</h4>
      <ul>
        <li>
          Enabled sites to run up to 5x more chargers on their existing power
          supply (such as charging 30 vans on a 150 kW supply that previously
          could only support 6 unmanaged 22 kW chargers).
        </li>
        <li>
          Saved clients an estimated $1.6M - $5.0M in avoided substation upgrades
          across roughly 20 depot installations ($80,000 - $250,000 per site).
        </li>
        <li>
          Guaranteed charging continuity during network dropouts, avoiding
          missed delivery windows and contract downtime penalties.
        </li>
        <li>
          Allowed electricians to commission sites in minutes using the embedded
          dashboard, removing the need for software engineers on site.
        </li>
      </ul>
    </Article>
  );
};
