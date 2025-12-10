import { Article } from "@/components/article";

export const ExperienceJetchargeFullStackEngineerPage = () => {
  return (
    <Article>
      <h3>Full Stack Software Engineer</h3>
      <p>
        Company: JET Charge<br></br>Duration: Oct 2021 - Present
      </p>
      <h4>EV Energy Management System (CORE)</h4>
      <p>
        An on-premise Electric Vehicle (EV) charging load management system
        (CORE).
      </p>
      <ul>
        <li>
          Developed Australia's first leading web app using node based UI to
          setup, deploy, and manage an EV charging site.
          <ul>
            <li>
              Built UI to create and manage devices such as chargers, power
              meters, and distribution boards, and configure load management
              strategies.
            </li>
            <li>
              Implemented real-time visualisation to monitor charging station
              performance and energy consumption.
            </li>
          </ul>
        </li>
        <li>
          Designed and developed RESTful APIs for communication between the
          local front-end and back-end systems.
          <ul>
            <li>
              Created endpoints for authentication, managing user accounts,
              devices, and load management configurations.
            </li>
            <li>Real-time data streaming to front-end using SignalR.</li>
          </ul>
        </li>
      </ul>
      <h4>Illuminate - EV Charging Management Platform</h4>
      <p>
        Cloud-based platform for Electric Vehicle (EV) smart-charging asset
        management (Illuminate).
      </p>
      <ul>
        <li>
          Developed apartment EV charging billing solution.
          <ul>
            <li>
              Built UI assign chargers to residents and set tariffs for EV
              charging sessions.
            </li>
            <li>
              Intergated with Stripe to handle payment processing and invoicing
              for EV charging sessions.
            </li>
            <li>
              Implemented RESTful API endpoints to manage residents, chargers,
              and billing.
            </li>
          </ul>
        </li>
        <li>
          Developed partner and contractor management solution enabling
          organisations to provision and manage EV charging assets.
          <ul>
            <li>
              Built UI and workflows for partners and contractors to manage
              their clients' EV charging assets.
            </li>
            <li>
              Ideate and implemented a tailored solution to allow partners and
              contractors to view and manage multiple organisations' EV charging
              assets from a single account while maintaining full compliance and
              compatibility with existing codebase.
            </li>
          </ul>
        </li>
      </ul>
    </Article>
  );
};
