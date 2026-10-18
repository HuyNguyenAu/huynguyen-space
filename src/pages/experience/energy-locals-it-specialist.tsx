import { Article } from "@/components/article";

export const EnergyLocalsITSpecialistPage = () => {
  return (
    <Article>
      <h3>IT Specialist</h3>
      <p>
        <strong>Company: </strong>Energy Locals
        <br />
        <strong>Dates: </strong>Oct 2020 - Oct 2021
        <br />
        <strong>Location: </strong>Melbourne, Australia
        <br />
        <strong>Core Stack: </strong>Laravel (PHP), Bootstrap, C#, Python, SQL
        Server, Westpac & Equifax KYC APIs, Linux VPS, Bash / PowerShell
      </p>
      <p>
        I built customer onboarding systems, wholesale settlement reconciliation
        tools, and internal data pipelines for an Australian energy retailer,
        operating in a regulated market handling customer identity and financial
        records.
      </p>

      <h4>1. Multi Tenant Customer Onboarding</h4>
      <ul>
        <li>
          Built a white label customer onboarding platform in Laravel and
          Bootstrap with automated multi tenant database setup, making it easy to
          launch new retail energy partners without custom engineering work.
        </li>
        <li>
          Automated customer signups, replacing manual account creation (around
          20 minutes each) and processing over 10,000 customers.
        </li>
        <li>
          Integrated Westpac and Equifax KYC APIs for automated identity and
          credit checks, cutting verification times from 2 - 3 business days to
          under 60 seconds while meeting retail compliance requirements.
        </li>
      </ul>

      <h4>2. Wholesale Settlement Reconciliation</h4>
      <ul>
        <li>
          Built daily reconciliation scripts in Python and SQL between AEMO
          wholesale electricity market settlements and customer meter data,
          catching calculation discrepancies early.
        </li>
        <li>
          Built billing calculation pipelines to handle complex time of use
          tariffs and wholesale pass through pricing models.
        </li>
      </ul>

      <h4>3. Data Pipelines and Infrastructure Automation</h4>
      <ul>
        <li>
          Automated internal business reporting using C# and SQL ETL jobs, saving
          analysts 10 - 15 hours a week of manual spreadsheet tasks.
        </li>
        <li>
          Wrote Bash and PowerShell scripts to automate developer workstations and
          server setup, cutting new engineer onboarding time from 2 days to under
          2 hours.
        </li>
        <li>
          Managed Linux database servers, including automated backup routines,
          system monitoring, and disaster recovery procedures.
        </li>
      </ul>
    </Article>
  );
};
