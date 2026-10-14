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
        operating in a strictly regulated market handling customer identity and
        financial records.
      </p>

      <h4>1. Multi-Tenant Customer Onboarding</h4>
      <ul>
        <li>
          Built the company's first white-label onboarding platform (Laravel,
          Bootstrap) featuring automated multi-tenant database provisioning,
          allowing us to spin up new retail energy partners without custom code.
        </li>
        <li>
          Replaced manual account creation (~20 minutes per signup) with an
          automated signup pipeline that processed 10,000+ customers.
        </li>
        <li>
          Integrated automated identity and credit verification using Westpac
          and Equifax KYC APIs, slashing verification times from 2 - 3 business
          days to under 60 seconds while meeting retail energy compliance rules.
        </li>
      </ul>

      <h4>2. Wholesale Settlement Reconciliation</h4>
      <ul>
        <li>
          Built automated daily reconciliation in Python and SQL between AEMO
          wholesale electricity settlements and customer meter data, catching
          discrepancies before they became billing or compliance headaches.
        </li>
        <li>
          Engineered billing calculation pipelines supporting complex
          time-of-use tariffs and wholesale pass-through pricing models.
        </li>
      </ul>

      <h4>3. Data Pipelines and Infrastructure Automation</h4>
      <ul>
        <li>
          Consolidated business reporting into automated C# and SQL ETL
          pipelines, saving business analysts 10 - 15 hours every week and
          eliminating spreadsheet errors.
        </li>
        <li>
          Automated developer workstations and server provisioning with
          repeatable Bash and PowerShell scripts, cutting new engineer setup time
          from 2 days to under 2 hours.
        </li>
        <li>
          Managed core database servers on Linux, writing automated backup
          routines, monitoring, and disaster recovery procedures.
        </li>
      </ul>
    </Article>
  );
};
