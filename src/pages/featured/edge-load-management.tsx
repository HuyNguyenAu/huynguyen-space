import { Article } from "@/components/article";

export const EdgeLoadManagementPage = () => {
  return (
    <Article>
      <h3>High-Availability Edge Load Management</h3>
      <p>
        <strong>Role:</strong> Lead Backend Engineer
        <br />
        <strong>Context:</strong> Real-time edge load management engine to
        balance power distribution across EV chargers on site-restricted grids.
      </p>

      <h4>The Challenge</h4>
      <p>
        Commercial sites (like commercial fleets and apartment complexes) have
        limited grid capacity. Charging multiple EVs simultaneously can exceed
        the site's electrical capacity, resulting in blackouts or expensive grid
        overload fees. The system required a highly available edge-deployed
        solution to dynamically allocate power to chargers in real-time, even in
        the event of internet outages.
      </p>

      <h4>The Architecture</h4>
      <ul>
        <li>
          <strong>C# Concurrency Engine:</strong> Built the core backend
          architecture using C# concurrency patterns, managing real-time thread
          safety and state synchronisation for charging queues.
        </li>
        <li>
          <strong>Edge-to-Cloud Resilience:</strong> Programmed the system to
          run locally on an edge gateway. This decoupled the load-shedding
          decision loop from internet connectivity, ensuring autonomous site
          protection during cloud dropouts.
        </li>
        <li>
          <strong>Decoupled UI APIs:</strong> Designed local RESTful APIs to
          facilitate communication between the local React UI dashboard and the
          C# system, eliminating UI blocking and enhancing device
          responsiveness.
        </li>
      </ul>

      <h4>The Outcome</h4>
      <p>
        The edge system prevents localised grid overloads by executing real-time
        command delivery to chargers, adjusting power output dynamically based
        on active load. Localised execution guarantees continuous operation and
        safety compliance, maintaining high device uptime and grid stability.
      </p>
    </Article>
  );
};
