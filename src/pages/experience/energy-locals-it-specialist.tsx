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
      </p>
      <p>
        Built core customer onboarding, wholesale settlement, and data automation
        systems for an Australian retail energy provider. Enabled Energy
        Locals' B2B "Retailer-as-a-Service" model to onboard partner customers
        with near-zero marginal cost, while automating daily settlement
        reconciliation across millions of dollars in wholesale power purchases.
      </p>

      <h4>1. Customer Onboarding and B2B Partnerships (Retailer-as-a-Service)</h4>
      <ul>
        <li>
          Built the company's first white-label customer onboarding platform,
          enabling Energy Locals' B2B "Retailer-as-a-Service" model to sign and
          launch new retail partners with near-zero marginal onboarding cost.
        </li>
        <li>
          Replaced manual account creation (~20 minutes per signup), saving over
          3,300 operational hours across 10,000 customers.
        </li>
        <li>
          Automated identity and credit checks via Westpac and Equifax, cutting
          verification turnaround from 2 - 3 business days to under 60 seconds
          and lifting signup conversion rates.
        </li>
        <li>
          Mitigated bad debt and customer default rates (typically averaging 1% -
          3% of retail utility revenue) while ensuring 100% compliance with strict
          energy-sector KYC regulations.
        </li>
      </ul>

      <h4>2. Wholesale Market Settlements and Revenue Assurance (AEMO & Billing)</h4>
      <ul>
        <li>
          Engineered automated daily reconciliation systems for wholesale power
          settlements with AEMO, auditing millions of dollars in wholesale power
          transactions.
        </li>
        <li>
          Resolved billing discrepancies between wholesale purchases and
          customer meter usage, preventing cash flow loss from Unaccounted for
          Energy (UFE) and avoiding market interest penalties.
        </li>
        <li>
          Eliminated exposure to AEMO financial audit fines and market
          participant breach notices through automated transaction checks.
        </li>
        <li>
          Delivered foundational billing and usage pipelines for variable
          time-of-use tariffs and wholesale pass-through, speeding up the
          meter-to-cash cycle and reducing unbilled accounts receivable.
        </li>
      </ul>

      <h4>3. Data Automation and Systems Operations (ETL & Infrastructure)</h4>
      <ul>
        <li>
          Consolidated business and compliance reporting data into automated C#
          and SQL ETL pipelines, saving analysts 10 - 15 hours a week (~$40k a
          year) and removing spreadsheet errors.
        </li>
        <li>
          Automated developer workstation setups with repeatable scripts, cutting
          onboarding time for new engineers from 2 days down to under 2 hours.
        </li>
        <li>
          Maintained core operational database servers on high-availability VPS,
          establishing automated backups, monitoring, and disaster recovery
          procedures.
        </li>
      </ul>
    </Article>
  );
};
