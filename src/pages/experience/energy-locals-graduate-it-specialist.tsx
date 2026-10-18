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
        My first role after graduating from RMIT, where I focused on automating
        energy market data ingestion, wholesale settlement audits, and internal
        tools for a growing retail energy provider.
      </p>

      <h4>Market Data and Settlement Automation</h4>
      <ul>
        <li>
          Automated daily verification of AEMO wholesale settlement runs using
          Python and SQL to verify billing calculations and catch discrepancies
          early.
        </li>
        <li>
          Built data ingestion feeds for electricity spot prices and regional
          energy demand data to support daily trading and forecasting.
        </li>
      </ul>

      <h4>Systems and Infrastructure Automation</h4>
      <ul>
        <li>
          Wrote PowerShell, Bash, and Python scripts for automated database
          backups and recovery testing.
        </li>
        <li>
          Created setup scripts to automate developer workstation configuration,
          saving time when onboarding new engineers.
        </li>
      </ul>
    </Article>
  );
};
