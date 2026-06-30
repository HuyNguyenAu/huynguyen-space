import { Article } from "@/components/article";

export const JETChargeFullStackEngineerPage = () => {
  return (
    <Article>
      <h3>Full Stack Software Engineer</h3>
      <p>
        <strong>Company: </strong>JET Charge
        <br />
        <strong>Dates:</strong> Oct 2021 - Present
      </p>
      <h4>CORE - Electric Vehicle (EV) Energy Management System</h4>
      <ul>
        <li>
          Co-designed and led the frontend for a greenfield, first-in-Australia
          edge system that lets a non-specialist electrician commission a site
          without dealing directly with a convoluted configuration file. Enables
          load management to fit up to 5x more chargers on the same power
          supply, opening capacity-constrained sites (apartments, fleet depots)
          that were previously uneconomic.
        </li>
        <li>
          Built a real-time local dashboard (WebSocket streaming & RESTful APIs)
          so technicians and owners diagnose faults on-site instantly, replacing
          manual charger-by-charger and meter checks.
        </li>
        <li>
          Re-architected parts of the legacy backend from a monolith to a
          modular monolith and ported the communication layer to JET Charge's
          cloud platform, cutting the effort to support new message types.
        </li>
      </ul>
      <h4>Illuminate - EV Charging Asset Management Platform</h4>
      <ul>
        <li>
          Engineered partner/contractor management letting third parties manage
          assets across multiple organisations, a dealer-style network that
          offloaded operational burden and opened training/subscription revenue.
          The platform backs Australia's largest EV operators, including
          Woolworths, Team Global Express, RACV and SG Fleet.
        </li>
        <li>
          Refactored the core database permission layer to centralise access
          control, eliminating scattered duplicate checks and developer-error
          risk across the codebase.
        </li>
        <li>
          Contributed to the uplift of the legacy UI to a modern React component
          system, speeding feature delivery and giving design freedom for a
          consistent product standard.
        </li>
      </ul>
      <h4>Zero-Touch Configuration (ZTC) - Remote CORE Commissioning</h4>
      <ul>
        <li>
          Designed and led the ZTC system (custom React Node-UI & secure .NET
          cloud services) that pre-configures and pairs charger hardware before
          shipping, removing on-site technician visits and cutting
          commissioning from hours to minutes.
        </li>
        <li>
          Built a config sync engine with automatic push/pull and drift/conflict
          detection that recovers from transient network drops and prevents
          invalid device states, reducing config errors and engineer diagnosis
          time.
        </li>
        <li>
          Added a config pointer table & caching layer serving repeated reads
          without hitting slower and costlier blob storage, cutting repeated-query
          response times to under 3 seconds and lowering cloud query costs.
        </li>
      </ul>
      <h4>Billing - Apartment & Commercial Charging</h4>
      <ul>
        <li>
          Led integration of Stripe billing into a legacy .NET platform
          supporting both private chargers billed to individual residents and
          shared chargers billed per session, with automated quarterly
          reimbursement to the Owners Corporation. Unlocking hundreds of
          thousands in new recurring revenue across commercial customers.
        </li>
        <li>
          Exposed billing APIs to the JET Charge Connect mobile app so residents
          self-manage usage and payments, lifting adoption and reducing manual
          admin.
        </li>
      </ul>
    </Article>
  );
};
