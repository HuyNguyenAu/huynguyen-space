import { Article } from "@/components/article";

export const EnergyLocalsITSpecialistPage = () => {
  return (
    <Article>
      <h3>IT Specialist</h3>
      <p>
        <strong>Company:</strong> Energy Locals
        <br />
        <strong>Dates:</strong> Oct 2020 - Oct 2021
      </p>
      <h4>Customer Portal & Identity Verification</h4>
      <ul>
        <li>
          Built the company's first white-labeled customer onboarding platform
          (Bootstrap & Laravel) with automated database provisioning, replacing
          manual setup and enabling self-serve, high-volume sign-ups with no
          per-customer engineering effort.
        </li>
        <li>
          Integrated Westpac and Equifax KYC verification, the company's first
          automated identity-verification flow. Meeting utility-sector
          regulatory requirements while removing a manual review step.
        </li>
      </ul>
      <h4>Data Engineering & Systems Operations</h4>
      <ul>
        <li>
          Designed C#/SQL ETL pipelines consolidating operational and compliance
          data into a single source, replacing ad-hoc manual consolidation.
        </li>
        <li>
          Administered high-availability VPS hosting core operational databases,
          establishing the monitoring and patching protocols the team ran on.
        </li>
        <li>
          Automated infrastructure and dev-workstation provisioning, turning a
          manual, error-prone setup into a repeatable script and standardising
          engineer onboarding.
        </li>
      </ul>
    </Article>
  );
};
