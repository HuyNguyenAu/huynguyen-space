import { Article } from "@/components/article";

export const JETChargeFullStackEngineerPage = () => {
  return (
    <Article>
      <h3>Full Stack Software Engineer</h3>
      <p>
        JET Charge<br></br>Oct 2021 - Present
      </p>
      <h4>CORE - EV Energy Management System</h4>
      <p>
        CORE is an on-premise Electric Vehicle (EV) charging load management
        system.
      </p>
      <ul>
        <li>
          Designed and optimised the C# backend architecture for an autonomous EV load management system, ensuring high uptime for real-time edge devices by implementing robust concurrency and state management.
        </li>
        <li>
          Spearheaded the frontend architecture for a greenfield smart-charging cloud optimisation platform, drastically improving user workflows and real-time data streaming.
        </li>
        <li>
          Implemented local RESTful APIs for communication between the fast-moving node-based UI and the high-throughput back-end system.
        </li>
      </ul>
      <h4>Illuminate - EV Charging Management Platform</h4>
      <p>
        Built and operated in Australia, Illuminate is a cloud-based platform
        connecting people, EV charging assets, and locations.
      </p>
      <ul>
        <li>
          Lead development of apartment EV charging billing solution featuring UI to assign chargers, and handle Stripe integration for recurring invoicing.
        </li>
        <li>
          Engineered complex partner and contractor management solutions enabling full compliance, compatibility, and rapid cloud deployment of EV charging assets.
        </li>
        <li>
          Built a Zero Touch Config (ZTC) solution utilising React/TypeScript dashboards backed by .NET cloud services, reducing onboarding friction remotely without an on-site technician.
        </li>
      </ul>
    </Article>
  );
};
