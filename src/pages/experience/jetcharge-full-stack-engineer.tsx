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
        applications across three main products: the Illuminate cloud platform,
        the remote commissioning system (ZTC), and an edge energy management
        controller (CORE v2). Supported the $25M ARENA Charging as a Service
        program, delivering software for 3,500+ commercial fleet vehicles across
        clients like Woolworths, IAG, Kinetic, and the ACT Government.
      </p>

      <h4>1. Cloud Platform and Multi Tenant Billing (Illuminate)</h4>
      <ul>
        <li>
          Built an independent billing engine in ASP.NET Core with Stripe Connect
          split payouts, generating $100k - $300k a year in recurring
          subscription and transaction revenue.
        </li>
        <li>
          Built self service portals in React, TypeScript, Zustand, and ASP.NET
          Core so fleet managers and electrical contractors could manage their
          own charging stations directly.
        </li>
        <li>
          Centralised multi tenant authorisation in the Entity Framework data
          layer, avoiding duplicate permission checks across endpoints and
          keeping customer data isolated.
        </li>
        <li>
          Modernized legacy web applications by refactoring frontend code into
          reusable React components.
        </li>
      </ul>

      <h4>2. Remote Commissioning and Device Sync (ZTC)</h4>
      <ul>
        <li>
          Built a visual pre configuration web tool and automated boot sync
          service, cutting on site setup from 6 hours down to 2 - 3.5 hours (and
          down to zero when hardware was pre paired in the warehouse).
        </li>
        <li>
          Decoupled the configuration format between the web app and edge
          firmware so both teams could release updates independently.
        </li>
        <li>
          Reduced median device connection latency from over 30 seconds to under 3
          seconds and cut monthly Azure storage bills by 5% - 10% by adding an
          indexed pointer table cache in front of Blob Storage.
        </li>
      </ul>

      <h4>3. Smart Edge Energy Management (CORE v2)</h4>
      <ul>
        <li>
          Built an offline first C# / .NET Core control daemon running on Linux
          gateways that balances charger loads in real time over Modbus and
          OCPP, allowing sites to run up to 5x more chargers on existing
          electrical supplies.
        </li>
        <li>
          Developed an embedded Next.js dashboard streaming live telemetry over
          WebSockets, allowing local electricians to test and verify sites on a
          tablet without needing a software engineer on site.
        </li>
        <li>
          Redesigned the hardware integration layer with clean device
          abstractions, cutting onboarding time for new meter and charger brands
          from weeks to days.
        </li>
      </ul>

      <h4>4. Engineering Delivery and Production Operations</h4>
      <ul>
        <li>
          Maintained automated CI/CD pipelines in Azure DevOps deploying to
          isolated per environment Azure subscriptions, managing cloud
          infrastructure with Bicep.
        </li>
        <li>
          Wrote unit and integration test suites using xUnit, NUnit, Jest, and
          Vitest, with SonarQube and Roslyn analyzers running in every build
          pipeline.
        </li>
        <li>
          Handled on call production support using Application Insights, Azure
          Monitor alerts, and KQL log queries to investigate issues.
        </li>
        <li>
          Led design discussions with small engineering groups (3 - 5
          engineers), ran 1:1 code reviews, pair programmed with teammates, and
          onboarded junior developers.
        </li>
        <li>
          Worked in Scrum sprints alongside product owners and QA, and
          contributed technical architecture input to commercial tenders (Team
          Global Express, PTA WA, DTF Victoria).
        </li>
      </ul>
    </Article>
  );
};
