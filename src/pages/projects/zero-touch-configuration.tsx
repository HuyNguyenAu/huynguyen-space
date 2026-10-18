import { Article } from "@/components/article";

export const ZeroTouchConfigurationPage = () => {
  return (
    <Article>
      <h3>Zero Touch Configuration (ZTC)</h3>
      <p>
        <strong>Role:</strong> Full Stack Software Engineer
        <br />
        <strong>Company:</strong> JET Charge
        <br />
        <strong>Tech Stack:</strong> React, TypeScript, C# / .NET Core, Azure,
        Blob Storage, Application Insights, Azure DevOps
      </p>

      <blockquote>
        <p>
          Deploying commercial charging infrastructure across hundreds of depots
          required sending specialist technicians on site for 6 or more hours to
          configure equipment by hand, creating an expensive rollout bottleneck.
          <br /><br />
          I built a visual web tool that validates electrical rules before
          hardware leaves the warehouse, paired with an automatic sync service
          that edge devices pull down on startup.
          <br /><br />
          This cut on site setup time from 6 hours down to 2 - 3.5 hours (or zero
          when pre paired in the warehouse), dropped device connection handshakes
          from over 30 seconds to under 3 seconds, and reduced cloud storage costs
          by 5% - 10%.
        </p>
      </blockquote>

      <h4>The Problem</h4>
      <p>
        When enterprise clients like Woolworths and Team Global Express signed
        contracts to electrify their commercial fleets, we needed to install
        charging equipment across hundreds of depots nationwide on tight rollout
        schedules.
      </p>
      <p>
        The main operational bottleneck was manual on site labour. Every site
        required sending a specialist technician at around $130 an hour for 6 or
        more hours just to configure network settings, pair equipment, and test
        connections. Travel expenses added up quickly, and a small typo in a
        configuration file meant an expensive return trip. Operations needed a
        way to scale depot rollouts without hiring a large team of travelling
        technicians.
      </p>

      <h4>How It Works</h4>
      <ul>
        <li>
          <strong>Visual pre configuration with validation:</strong> Finding a
          configuration bug after hardware is mounted on a wall is painful. We
          built a visual equipment map where project managers set up site
          layouts before hardware leaves the warehouse. The interface validates
          electrical rules in real time, checking breaker limits and phase
          allocations so invalid configurations cannot be saved or shipped.
        </li>
        <li>
          <strong>Decoupled configuration contracts:</strong> Web and firmware
          teams operated on different release schedules. Rather than locking
          both teams into coordinated releases, we decoupled the configuration
          contract between the web portal and edge devices. This allowed both
          teams to ship updates independently.
        </li>
        <li>
          <strong>Automatic device sync:</strong> Depot basements often have poor
          mobile reception. We built an automatic sync service so that when
          hardware powers on, it checks its local settings against the cloud
          order and downloads updates automatically. Contractors do not have to
          sit on hold with support to confirm device activation.
        </li>
        <li>
          <strong>Pointer table caching:</strong> As thousands of devices came
          online, querying Azure Blob Storage on every device handshake caused
          slow boots of over 30 seconds and drove up cloud storage costs. We added
          an indexed pointer table cache in front of Blob Storage, bringing median
          connection times down to under 3 seconds and lowering monthly Azure
          storage costs by 5% - 10%.
        </li>
        <li>
          <strong>Pipelines and monitoring:</strong> We built automated CI/CD
          pipelines in Azure DevOps deploying to dedicated per environment Azure
          subscriptions, while Application Insights and Azure Monitor alerts
          track device handshakes, boot syncs, and latency.
        </li>
      </ul>

      <h4>System Architecture</h4>
      <figure className="my-6">
        <img
          src={`${import.meta.env.BASE_URL}zero-touch-configuration-architecture.svg`}
          alt="Zero Touch Configuration System Architecture Flow"
          className="max-h-[600px]"
          loading="lazy"
        />
      </figure>

      <h4>Results</h4>
      <ul>
        <li>
          Cut on site setup from 6 hours down to 2 - 3.5 hours (and down to zero
          when pre paired in the warehouse), saving an estimated $325 - $520 per
          site in field labour (2.5 - 4 hours at $130/hr).
        </li>
        <li>
          Reduced median device handshake latency from over 30 seconds to under 3
          seconds and cut cloud storage costs by 5% - 10%.
        </li>
        <li>
          Delivered hundreds of commercial depot installs on schedule without
          hiring additional travelling technicians.
        </li>
        <li>
          Prevented configuration errors and return site visits through automated
          pre shipping validation rules.
        </li>
      </ul>
    </Article>
  );
};
