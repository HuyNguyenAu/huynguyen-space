import { Article } from "@/components/article";

export const EnergyLocalsGraduateITSpecialistPage = () => {
  return (
    <Article>
      <h3>Graduate IT Specialist</h3>
      <p>
        <strong>Company:</strong> Energy Locals
        <br />
        <strong>Dates:</strong> Oct 2019 - Oct 2020
      </p>
      <h4>AEMO Market Management System (MMS) Settlements</h4>
      <ul>
        <li>
          Engineered C# programs and SQL procedures to reconcile AEMO national
          electricity market settlement data, ensuring audit compliance and
          reconciliation accuracy across the company's market-facing financials.
        </li>
        <li>
          Built the ETL pipelines pulling grid pricing, demand, and network-load
          telemetry from AEMO MMS. Establishing the company's reporting and
          analytics data foundation.
        </li>
      </ul>
      <h4>Systems & Infrastructure Automation</h4>
      <ul>
        <li>
          Designed automated backup and disaster-recovery pipelines for critical
          databases, replacing manual backups and cutting recovery risk.
        </li>
        <li>
          Automated provisioning scripts for technical workstations, making
          engineering setup repeatable instead of hand-configured.
        </li>
      </ul>
    </Article>
  );
};
