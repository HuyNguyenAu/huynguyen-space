import { Article } from "@/components/article";

export const EnergyLocalsGraduateITSpecialistPage = () => {
  return (
    <Article>
      <h3>Graduate IT Specialist</h3>
      <p>
        <strong>Company:</strong> Energy Locals
        <br />
        <strong>Dates:</strong> Oct 2019 - Oct 2020
        <br />
        <strong>Location:</strong> Melbourne, Australia
        <br />
        <strong>Core Stack:</strong> Python, SQL Server, AEMO Market Management System (MMS), PowerShell, Bash, Azure
      </p>
      <h4>Energy Market Financial Reconciliation</h4>
      <ul>
        <li>
          Engineered automated AEMO market reconciliation systems, verifying daily
          wholesale settlement runs to ensure 100% financial accuracy and prevent
          costly market balancing penalties.
        </li>
        <li>
          Automated market pricing and energy demand data feeds to support
          commercial decision-making and operational planning.
        </li>
      </ul>
      <h4>Systems and Infrastructure Automation</h4>
      <ul>
        <li>
          Designed automated database backup pipelines and disaster recovery
          procedures using PowerShell, Bash, and Python, protecting critical
          customer datasets and securing business continuity.
        </li>
        <li>
          Wrote automated setup scripts for technical workstations,
          standardising developer onboarding.
        </li>
      </ul>
    </Article>
  );
};
