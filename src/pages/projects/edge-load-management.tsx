import {
  Article,
  Diagram,
  Item,
  Lede,
  List,
  Section,
  Summary,
} from "@/components/article";

export const EdgeLoadManagementPage = () => {
  return (
    <Article
      section="Commercial Projects"
      kicker="JET Charge · Full Stack Software Engineer"
      title="Edge Energy Management System (CORE v2)"
      stack="C# / .NET Core · Linux · Modbus RTU / TCP · OCPP 1.6J / 2.0.1 · Next.js · React · TypeScript · WebSockets · Azure DevOps"
    >
      <Summary>
        <p>
          Commercial delivery depots needed to charge electric van fleets
          overnight, but their existing electrical switchboards could only power
          a few chargers without triggering expensive substation upgrades. On
          top of that, depots could not risk losing charging if their internet
          connection dropped out.
        </p>
        <p>
          I built an offline first control service in C# / .NET that runs
          directly on local Linux gateways, balancing power in real time over
          Modbus and OCPP. I also built an embedded Next.js dashboard so
          electricians could set up and verify the system on site using a
          tablet.
        </p>
        <p>
          This allowed sites to run up to 5x more chargers on their existing
          supply, saved clients an estimated $1.6M - $5.0M across roughly 20
          depot installations by avoiding grid upgrades, and kept fleets
          charging reliably through internet outages.
        </p>
      </Summary>

      <Section title="The Problem">
        <Lede>
          When commercial delivery fleets transition to electric vehicles, they
          run into a hard physical constraint: the depot only has a limited
          electrical supply from the street. A client might need to charge 30
          delivery vans overnight, but the site switchboard only has capacity
          for 6 unmanaged 22 kW chargers.
        </Lede>
        <p>
          Asking the local utility for a substation upgrade costs between
          $80,000 and $250,000 per site and takes 12 to 18 months of civil
          works, which often stalled rollout plans.
        </p>
        <p>
          At the same time, commercial delivery fleets operate on strict morning
          departure schedules. If chargers stopped working overnight because the
          depot internet dropped out, vans would not be charged for morning
          routes, leading to thousands of dollars in delay penalties. The system
          had to manage power locally without depending on the cloud.
        </p>
      </Section>

      <Section title="How It Works">
        <List>
          <Item title="Local offline first control loop">
            The control service runs as a C# / .NET daemon directly on the on
            site Linux gateway. It continuously polls local power meters over
            Modbus RTU/TCP and adjusts charger outputs via OCPP 1.6J / 2.0.1 in
            real time. If the depot internet drops out completely, load
            balancing continues locally so the main breaker never trips.
          </Item>
          <Item title="Embedded web dashboard for electricians">
            In the past, setting up edge gateways meant sending a software
            engineer to customer sites to edit config files by hand. I built an
            embedded Next.js dashboard hosted directly on the gateway over local
            Wi-Fi, streaming live telemetry over WebSockets. Electricians can
            open the interface on a tablet, verify meter and charger readings,
            and complete commissioning without an engineer on site.
          </Item>
          <Item title="Modular hardware abstraction layer">
            Different commercial tenders specify different brands of power
            meters and chargers. We built a device abstraction layer so adding
            support for a new meter or charger model takes a couple of days
            instead of weeks.
          </Item>
          <Item title="Telemetry batching and alerting">
            Streaming raw telemetry every second from dozens of chargers over
            cellular links would have resulted in high mobile data bills. The
            gateway summarises normal operational telemetry before uploading,
            while immediately dispatching critical fault events like breaker
            trips to Azure Monitor.
          </Item>
          <Item title="Packaging and deployments">
            Gateway runtimes are built, tested, and released through automated
            Azure DevOps pipelines, ensuring consistent deployments across
            customer hardware.
          </Item>
        </List>
      </Section>

      <Section title="System Architecture">
        <Diagram
          src="edge-load-management-architecture.svg"
          alt="Edge Load Management System Architecture Flow"
        />
      </Section>

      <Section title="Results">
        <List>
          <Item>
            Enabled sites to run up to 5x more chargers on their existing power
            supply (such as charging 30 vans on a 150 kW supply that previously
            could only support 6 unmanaged 22 kW chargers).
          </Item>
          <Item>
            Saved clients an estimated $1.6M - $5.0M in avoided substation
            upgrades across roughly 20 depot installations ($80,000 - $250,000
            per site).
          </Item>
          <Item>
            Guaranteed charging continuity during network dropouts, avoiding
            missed delivery windows and contract downtime penalties.
          </Item>
          <Item>
            Allowed electricians to commission sites in minutes using the
            embedded dashboard, removing the need for software engineers on
            site.
          </Item>
        </List>
      </Section>
    </Article>
  );
};
