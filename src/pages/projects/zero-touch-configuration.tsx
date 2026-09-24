import { Article } from "@/components/article";

export const ZeroTouchConfigurationPage = () => {
  return (
    <Article>
      <h3>Zero-Touch Configuration (ZTC)</h3>
      <p>
        <strong>Role:</strong> Technical Lead and Systems Engineer
        <br />
        <strong>Company:</strong> JET Charge
        <br />
        <strong>Scope:</strong> A remote setup platform that eliminates
        specialist field labour and speeds up nationwide fleet rollouts.
      </p>

      <blockquote>
        <p>
          <strong>TLDR:</strong>
          <br />
          Rolling out commercial EV
          chargers across Australia was slow and expensive because every site
          required sending a specialist technician at $130/hr for 6+ hours to
          configure equipment by hand. This created project delays, annoyed
          clients, and ate into profit margins.
          <br />
          Built a visual web tool for
          pre-configuring hardware before shipping, paired with an automatic
          sync system so local electricians can simply plug the equipment in and
          walk away.
          <br />
          Cut on-site setup from 6 hours
          to 2 - 3.5 hours (or zero with warehouse pre-pairing), saved over $1M
          in field labour across national fleet contracts, and dropped device
          connection times to under 3 seconds.
        </p>
      </blockquote>

      <h4>The Problem: The $1M Field Labour Bottleneck</h4>
      <p>
        When enterprise clients like Woolworths and Team Global Express signed
        fleet electrification contracts, we had to install charging equipment
        across hundreds of commercial depots nationwide.
      </p>
      <p>
        The biggest bottleneck was on-site labour. Every site required sending a
        specialist technician at $130/hr for 6+ hours to set up network
        settings, configure devices, and troubleshoot issues. Travel costs were
        high, projects fell weeks behind schedule, and small typos in
        configuration files forced technicians to travel back for expensive
        repeat visits.
      </p>
      <p>
        Our sales and operations teams needed hardware that could arrive on site
        pre-configured and ready to run, so any local electrician could install
        it without needing software help.
      </p>

      <h4>How We Solved It</h4>

      <h4>1. Letting Teams Ship Updates Independently</h4>
      <p>
        Hardware teams and web teams need to move fast when customer requirements
        change. The textbook engineering approach would have locked every team
        into coordinated releases, slowing down new product launches. Instead,
        we designed our setup files so the customer-facing web tools and the
        device software could update independently. This allowed teams to launch
        new features for clients without waiting on long development cycles.
      </p>

      <h4>2. Catching Mistakes in the Office Instead of in the Field</h4>
      <p>
        The most expensive bug is one found by an electrician on site. We built
        visual guardrails directly into the web tool used by our project
        managers and operations team. They connect equipment on screen using a
        visual map that checks electrical rules in real time, like breaker
        limits and power phases. If a setup exceeds power capacity or is missing
        key details, the system will not let them save it. This stopped bad
        configurations before equipment ever left the warehouse.
      </p>

      <h4>3. Automatic Sync Over Flaky Depot Internet</h4>
      <p>
        Depot basements often have poor mobile phone reception. We built an
        automatic sync system so that when the hardware powers on, it checks
        whether its local settings match the customer order. If there is an
        update, it downloads and applies it automatically. Contractors did not
        have to wait on the phone with customer support to confirm device
        activation.
      </p>

      <h4>4. Faster Startup and Lower Cloud Bills</h4>
      <p>
        As thousands of devices came online, querying cloud databases repeatedly
        made device bootups slow and drove up our monthly cloud bill. We added an
        instant-access memory layer that cut connection times to under 3 seconds
        and reduced our monthly cloud infrastructure costs by 5% to 10%.
      </p>

      <h4>System Architecture Flow</h4>
      <figure className="my-6">
        <img
          src={`${import.meta.env.BASE_URL}zero-touch-configuration-architecture.svg`}
          alt="Zero-Touch Configuration System Architecture Flow"
          className="max-h-[600px]"
          loading="lazy"
        />
      </figure>

      <h4>Business Outcomes</h4>
      <ul>
        <li>
          <strong>Over $1M Saved in Field Labour:</strong> Cut on-site setup from
          6 hours to 2 - 3.5 hours, saving around $520 per site in technician
          time. With warehouse pre-pairing, technician site time was eliminated
          completely.
        </li>
        <li>
          <strong>Rollouts Scaled Without Extra Staff:</strong> Allowed our
          operations team to deliver hundreds of commercial depot installations
          on schedule without hiring a large team of travelling specialists.
        </li>
        <li>
          <strong>Faster Customer Updates:</strong> Decoupled software parts so
          teams could ship dozens of updates without blocking each other.
        </li>
        <li>
          <strong>Lower Operating Costs:</strong> Device connection times
          dropped to under 3 seconds, cutting recurring cloud data costs by 5% to
          10%.
        </li>
      </ul>
    </Article>
  );
};
