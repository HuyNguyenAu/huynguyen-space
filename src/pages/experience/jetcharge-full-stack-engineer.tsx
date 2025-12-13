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
        CORE is a on-premise Electric Vehicle (EV) charging load management
        system (CORE).
      </p>
      <p>
        Below are some of the key features I have contributed to the development
        of the system:
      </p>
      <ul>
        <li>
          Developed Australia's first leading web app using node based UI to
          setup, deploy, and manage an EV charging site featuring:
          <ul>
            <li>
              Create, configure, and manage devices such as chargers, power
              meters, distribution boards, and load management strategies.
            </li>
            <li>
              Real-time data streaming and feedback from chargers and power
              meters to monitor site performance and energy consumption.
            </li>
            <li>
              Complete site visualisation of electrical distribution boards and
              connected devices with live values and statuses.
            </li>
          </ul>
        </li>
        <li>
          Implemented RESTful APIs for communication between the local front-end
          and back-end systems:
          <ul>
            <li>
              Endpoints for authentication, managing user accounts, devices, and
              load management configurations.
            </li>
            <li>Real-time data streaming to the front-end.</li>
          </ul>
        </li>
      </ul>
      <h4>Illuminate - EV Charging Management Platform</h4>
      <p>
        Built and operated in Australia, Illuminate is a cloud-based platform
        connecting people, EV charging assets, and locations.
      </p>
      <p>
        Below are some of the key features I have contributed to the development
        of the system:
      </p>
      <ul>
        <li>
          Lead development of apartment EV charging billing solution:
          <ul>
            <li>
              UI to assign chargers to residents and set tariffs for EV charging
              sessions.
            </li>
            <li>
              Stripe integration to handle payment processing, invoicing for EV
              charging sessions, and recurring billing for residents.
            </li>
            <li>
              RESTful API endpoints to manage residents, chargers, and billing.
            </li>
          </ul>
        </li>
        <li>
          Partner and contractor management solution enabling organisations to
          provision and manage EV charging assets:
          <ul>
            <li>
              UI and workflows for partners and contractors to manage their
              clients' EV charging assets.
            </li>
            <li>
              Ideate and implemented a tailored solution to allow contractors to
              view and manage multiple organisations' assets while maintaining
              full compliance and compatibility with existing codebase.
            </li>
          </ul>
        </li>
        <li>
          Zero Touch Config (ZTC) solution reducing the technical ceiling of the
          onboarding COREs remotely without the need for on-site technician:
          <ul>
            <li>
              UI and workflows for contractors to create, manage, and configure
              assets connected to COREs remotely.
            </li>
            <li>
              Real-time data streaming for visualisation to monitor the status
              of EV charging assets.
            </li>
            <li>
              RESTful API endpoints and websockets communications to support the
              ZTC workflows.
            </li>
          </ul>
        </li>
      </ul>
    </Article>
  );
};
