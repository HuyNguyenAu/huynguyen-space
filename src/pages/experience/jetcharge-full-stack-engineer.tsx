import { Article } from "@/components/article";

export const JETChargeFullStackEngineerPage = () => {
  return (
    <Article>
      <h3>Full Stack Software Engineer</h3>
      <p>
        <strong>Company: </strong>JET Charge
        <br />
        <strong>Dates: </strong>Oct 2021 - Jun 2026
        <br />
        <strong>Location: </strong>Melbourne, Australia
        <br />
        <strong>Core Stack: </strong>C#, .NET Core, ASP.NET Core, Entity
        Framework, React, Next.js, TypeScript, Zustand, Azure Functions, App
        Service, Container Apps, Service Bus, Event Grid, Azure SQL, Cosmos DB,
        Azure DevOps, Stripe, WebSockets, Modbus, OCPP
      </p>
      <p>
        I built and operated backend services, edge systems, and web
        applications across three core products: the Illuminate cloud platform,
        our remote commissioning system (ZTC), and an edge energy management
        controller (CORE v2). Supported the $25M ARENA Charging-as-a-Service
        program, delivering software for 3,500+ commercial fleet vehicles across
        clients like Woolworths, IAG, Kinetic, and the ACT Government.
      </p>

      <h4>1. Cloud Platform and Multi-Tenant Billing (Illuminate)</h4>
      <ul>
        <li>
          Built an independent billing engine from scratch using ASP.NET Core
          and Stripe Connect split payouts, unlocking $100k - $300k a year in
          recurring subscription and transaction revenue (measured).
        </li>
        <li>
          Built self-service asset delegation portals in React, TypeScript,
          Zustand, and ASP.NET Core, letting fleet managers and electrical
          contractors manage their own charging infrastructure directly.
        </li>
        <li>
          Centralised multi-tenant authorisation directly in the Entity
          Framework data access layer, eliminating duplicate permission checks
          across endpoints and ensuring strict customer data isolation.
        </li>
        <li>
          Helped modernize legacy web apps by migrating frontend code to
          reusable React components.
        </li>
      </ul>

      <h4>2. Remote Commissioning and Device Sync (ZTC)</h4>
      <ul>
        <li>
          Built a validated remote pre-configuration web tool and automated boot
          sync service, cutting on-site technician time from 6 hours to 2 - 3.5
          hours (and down to zero when hardware was pre-paired in the
          warehouse).
        </li>
        <li>
          Decoupled the configuration contract between the web application and
          edge firmware, letting both teams release features independently
          without coordinated release bottlenecks.
        </li>
        <li>
          Slashed median device handshake latency from &gt;30s to &lt;3s and cut
          the service's monthly Azure bill by 5% - 10% (measured) by adding a
          pointer-table cache in front of Blob Storage.
        </li>
      </ul>

      <h4>3. Smart Edge Energy Management (CORE v2)</h4>
      <ul>
        <li>
          Built an offline-first C# / .NET Core control daemon running on Linux
          edge gateways that balances charger loads in real time via Modbus and
          OCPP, allowing sites to power up to 5x more chargers on existing
          supplies.
        </li>
        <li>
          Developed an embedded Next.js dashboard streaming live telemetry over
          WebSockets, allowing local electricians to commission and verify sites
          on a tablet without software engineers on site.
        </li>
        <li>
          Redesigned the hardware integration layer with clean device
          abstractions, slashing onboarding time for new meter and charger brands
          from weeks to days.
        </li>
      </ul>

      <h4>4. Team Practices and Production Operations</h4>
      <ul>
        <li>
          Maintained automated CI/CD pipelines in Azure DevOps deploying to
          isolated per-environment Azure subscriptions, managing cloud
          infrastructure as code with Bicep.
        </li>
        <li>
          Wrote comprehensive unit and integration test suites (xUnit, NUnit,
          MSTest, Jest, Vitest) backed by SonarQube and Roslyn analyzers in
          every build pipeline.
        </li>
        <li>
          Supported production systems on-call using Application Insights, Azure
          Monitor, and KQL log analysis for rapid incident triage.
        </li>
        <li>
          Ran collaborative system design sessions for squads of 3 - 5
          engineers, conducted regular 1:1 code reviews, pair-programmed with
          teammates, and onboarded junior developers.
        </li>
        <li>
          Worked in active Scrum sprints alongside product owners and QA, and
          contributed technical architecture input to major enterprise tenders
          (Team Global Express, PTA WA, DTF Victoria).
        </li>
      </ul>
    </Article>
  );
};
