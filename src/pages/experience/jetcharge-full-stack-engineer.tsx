import { Article } from "@/components/article";

export const JETChargeFullStackEngineerPage = () => {
  return (
    <Article>
      <h3>Full Stack Software Engineer</h3>
      <p>
        JET Charge<br></br>Oct 2021 - Present
      </p>
      <h4>CORE - Electric Vehicle (EV) Energy Management System</h4>
      <ul>
        <li>
          Architected and implemented major upgrade and redesign of legacy
          backend system, transitioning from a monolithic to modular modern
          modular monolith, improving maintainability and scalability.
        </li>
        <li>
          Spearheaded the frontend architecture for a greenfield local-based
          smart-charging system, introducing real-time data streaming and
          streamlined commissioning workflows.
        </li>
        <li>
          Designed RESTful APIs for communication between the React UI and the
          C# backend hosted on device, enabling on-site configuration and
          monitoring of EV charging assets.
        </li>
      </ul>
      <h4>Illuminate - EV Charging Asset Management Platform</h4>
      <ul>
        <li>
          Led the integration of Stripe recurring billing into the .NET backend
          and React UI, automating multi-tenant invoicing and payment cycles for
          apartment charging installations.
        </li>
        <li>
          Engineered partner and contractor management solutions that
          streamlined the cloud commissioning pipeline of distributed EV
          charging assets.
        </li>
        <li>
          Designed and implemented a Zero-Touch Configuration (ZTC) system
          utilising custom React Node-UI, dashboards, and .NET cloud services,
          removing the need for manual on-site technician visits during remote
          setups.
        </li>
      </ul>
    </Article>
  );
};
