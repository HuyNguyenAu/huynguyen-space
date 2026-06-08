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
          Architected white-labeled customer onboarding web applications in
          Bootstrap, automating end-to-end database provisioning to streamline
          registration flows and handle high-volume sign-ups with Laravel
          backend.
        </li>
        <li>
          Integrated secure Westpac and Equifax identity verification services,
          ensuring compliance with strict utility-sector regulatory requirements
          (KYC) while maintaining a seamless onboarding flow.
        </li>
      </ul>
      <h4>Complex Data Engineering & Systems Operations</h4>
      <ul>
        <li>
          Designed and maintained high-throughput ETL data pipelines using C#
          and SQL to consolidate operational and compliance reporting data.
        </li>
        <li>
          Administered high-availability Virtual Private Servers (VPS) hosting
          core operational databases, implementing monitoring protocols and
          regular updates.
        </li>
        <li>
          Automated infrastructure setup and dev workstation configurations,
          reducing technical debt and streamlining engineering onboarding
          cycles.
        </li>
      </ul>
    </Article>
  );
};
