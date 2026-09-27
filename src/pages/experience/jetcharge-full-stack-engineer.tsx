import { Article } from "@/components/article";

export const JETChargeFullStackEngineerPage = () => {
  return (
    <Article>
      <h3>Technical Lead and Systems Engineer</h3>
      <p>
        <strong>Company: </strong>JET Charge
        <br />
        <strong>Dates: </strong>Oct 2021 - Jun 2026
        <br />
        <strong>Location: </strong>Melbourne, Australia
        <br />
        <strong>Official Band: </strong>Full Stack Software Engineer (Acting Technical Lead / Systems Architect)
        <br />
        <strong>Core Stack: </strong>C#, .NET Core, React, TypeScript, WebSockets, Modbus-RTU/TCP, OCPP, Azure, SQL Server, Stripe, EntityFramework
      </p>
      <p>
        Led technical architecture and product delivery across smart energy
        management (CORE), automated field onboarding (ZTC), and multi-tenant
        billing platforms. Served as technical lead supporting the $25M ARENA
        Charging-as-a-Service program (3,500+ commercial fleet vehicles across
        Woolworths, IAG, Kinetic, and ACT Gov) and major enterprise tenders
        including Team Global Express ($45M fleet project), Public Transport
        Authority WA ($10M electric bus depot), and DTF Victoria ($5M).
      </p>

      <h4>1. Energy Management and Enterprise Sales (CORE v2)</h4>
      <ul>
        <li>
          Delivered the smart edge energy management platform (C#/.NET Core
          daemon on Linux edge gateways), allowing sites to power 5x more EV
          chargers on existing supplies and saving clients $1.6M - $5.0M in
          substation upgrade costs.
        </li>
        <li>
          Built 100% offline edge autonomy into commercial fleet charging via
          Modbus power meter polling and OCPP charge point control, protecting
          enterprise customers from morning delivery delays and preventing $5k -
          $50k per hour contract penalties.
        </li>
        <li>
          Designed an on-site visual dashboard (embedded web server, WebSockets,
          React) that allows local electricians to commission and verify
          equipment in minutes, removing the need to dispatch senior engineers to
          customer sites.
        </li>
        <li>
          Accelerated new equipment integration from weeks to days, helping
          sales teams win tenders requiring specialised third party hardware.
        </li>
      </ul>

      <h4>2. Operational Scaling and Deployment Automation (ZTC)</h4>
      <ul>
        <li>
          Shipped the remote commissioning platform (React Node-UI, .NET Core,
          & cloud APIs) that cut on-site technician time from 6 hours to 2 - 3.5
          hours (or zero with warehouse pre-pairing), saving over $1M in field
          labour across national fleet contracts.
        </li>
        <li>
          Structured software boundaries so customer-facing web tools and device
          teams could release new features independently, eliminating
          development backlogs and speeding up product releases.
        </li>
        <li>
          Built visual safety checks into the setup portal, catching electrical
          configuration errors before equipment leaves the warehouse and
          preventing expensive on-site troubleshooting visits.
        </li>
        <li>
          Optimised device connection speeds to under 3 seconds, improving user
          experience while cutting monthly cloud infrastructure bills by 5% to
          10%.
        </li>
      </ul>

      <h4>3. Revenue Growth and Customer Operations (Illuminate and Billing)</h4>
      <ul>
        <li>
          Architected the automated apartment and fleet billing engine with
          Stripe split disbursements, unlocking $100k - $300k a year in recurring
          subscription and transaction revenue.
        </li>
        <li>
          Built customer and partner delegation portals in React and .NET,
          allowing fleet managers and contractors to manage their own assets and
          saving $300k - $500k a year in customer support staffing costs.
        </li>
        <li>
          Refactored the core database permission layer in C# and EntityFramework to
          centralise access control, eliminating duplicate checks and ensuring
          enterprise clients meet strict data isolation compliance standards.
        </li>
        <li>
          Contributed to the uplift of legacy web applications to modern React
          components (ShadCN UI), accelerating squad delivery cycles across all
          product teams.
        </li>
      </ul>
    </Article>
  );
};
