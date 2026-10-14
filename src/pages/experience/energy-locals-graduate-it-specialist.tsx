import { Article } from "@/components/article";

export const EnergyLocalsGraduateITSpecialistPage = () => {
  return (
    <Article>
      <h3>Graduate IT Specialist</h3>
      <p>
        <strong>Company:</strong> Energy Locals
        <br />
        <strong>Dates:</strong> Sep 2019 - Oct 2020
        <br />
        <strong>Location:</strong> Melbourne, Australia
        <br />
        <strong>Core Stack:</strong> Python, SQL Server, AEMO Market Management
        System (MMS), PowerShell, Bash, Azure
      </p>
      <p>
        My first role out of RMIT, where I focused on automating energy market
        data ingestion, wholesale settlement audits, and day-to-day engineering
        workflows for a fast-scaling retail energy startup.
      </p>

      <h4>Market Data and Settlement Automation</h4>
      <ul>
        <li>
          Automated daily verification of AEMO wholesale settlement runs using
          Python and SQL, identifying calculation discrepancies early and
          keeping wholesale statements balanced with zero unresolved variances.
        </li>
        <li>
          Built automated ingestion feeds for electricity spot prices and
          regional energy demand data, feeding commercial forecasting and
          operational planning.
        </li>
      </ul>

      <h4>Systems and Infrastructure Automation</h4>
      <ul>
        <li>
          Built automated database backup routines and disaster recovery
          procedures using PowerShell, Bash, and Python to safeguard critical
          customer account data.
        </li>
        <li>
          Created standardized workstation configuration scripts, cutting down
          manual setup and getting new engineers productive faster.
        </li>
      </ul>
    </Article>
  );
};
