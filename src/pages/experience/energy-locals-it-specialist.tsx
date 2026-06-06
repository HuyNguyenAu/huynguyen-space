import { Article } from "@/components/article";

export const EnergyLocalsITSpecialistPage = () => {
  return (
    <Article>
      <h3>IT Specialist</h3>
      <p>
        Energy Locals<br></br>Oct 2020 - Oct 2021
      </p>
      <h4>Customer Portal & Identity Verification</h4>
      <ul>
        <li>
          Developed dynamic, white-labeled customer onboarding journeys using React, optimising the sign-up funnel and automating downstream database provisioning.
        </li>
        <li>
          Integrated secure third-party identity verification services (Westpac, Equifax) satisfying complex regulatory requirements.
        </li>
      </ul>
      <h4>Complex Data Engineering & Systems Operations</h4>
      <ul>
        <li>
          Designed and maintained massive-scale ETL pipelines using C# and SQL, gathering critical compliance data into centralised reporting databases.
        </li>
        <li>
          Administered high-availability Virtual Private Servers (VPS) hosting core operational databases and enterprise tools, maintaining robust continuous uptime.
        </li>
        <li>
          Managed critical IT provisioning and network continuity for a fast-scaling corporate staff, building automated processes to eliminate technical debt.
        </li>
      </ul>
    </Article>
  );
};
