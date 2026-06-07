import { Article } from "@/components/article";

export const EdgeLoadManagementPage = () => {
  return (
    <Article>
      <h3>Edge Energy Management System</h3>
      <p>
        <strong>Role:</strong> Lead Full-Stack Engineer
        <br />
        <strong>Context:</strong> Engineered a real-time edge load management
        system with local monitoring dashboards to safely balance EV charging
        distribution on capacity-constrained grids.
      </p>

      <h4>The Challenge</h4>
      <p>
        Commercial sites (like commercial fleets and apartment complexes) have
        limited grid capacity. Charging multiple EVs simultaneously can exceed
        the site's electrical capacity, resulting in blackouts or expensive grid
        overloads. The system required a highly available edge-deployed and
        offline-capable solution to dynamically allocate power to chargers in
        real-time, even in the event of internet outages.
      </p>

      <h4>The Solution</h4>
      <ul>
        <li>
          <strong>Local Commissioning UI:</strong> Architected and built a local
          web-based dashboard and Node-UI for on-site technicians to provision,
          monitor, manage, and troubleshoot the load management system,
          providing real-time insights into charger status, load distribution,
          and system health.
        </li>
        <li>
          <strong>On-Device Load Management:</strong> Designed and implemented
          various modules to support the load management system, including:
          <ul>
            <li>
              <strong>WebSocket:</strong> Developed a WebSocket-based
              communication protocol to facilitate real-time data exchange
              between the edge system and cloud services, enabling remote
              monitoring and control capabilities.
            </li>
            <li>
              <strong>APIs:</strong> Designed and implemented RESTful APIs for
              seamless integration with the local commissioning UI and external
              systems, allowing for efficient data retrieval and command
              execution.
            </li>
          </ul>
        </li>
      </ul>

      <h4>The Outcome</h4>
      <p>
        The edge system prevents localised grid overloads by dynamically
        balancing EV charging loads based on real-time data, ensuring safe and
        efficient operation even during internet outages. The local
        commissioning UI has empowered technicians with the tools to easily
        manage and troubleshoot the system on-site, resulting in improved
        reliability and rapid deployment.
      </p>
    </Article>
  );
};
