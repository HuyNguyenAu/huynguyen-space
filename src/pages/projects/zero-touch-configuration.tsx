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
          <strong>Problem:</strong> Every site installation required a
          specialist on site for 6+ hours to configure equipment by hand.
          <br />
          <strong>Solution:</strong> A visual web tool that validates
          electrical configurations before hardware leaves the warehouse,
          paired with an automatic sync service devices pull from on boot.
          <br />
          <strong>Result:</strong> Cut on-site setup from 6h to 2 - 3.5h (or
          zero with warehouse pre-pairing), dropped device handshake from
          &gt;30s to &lt;3s, and reduced service Azure costs by 5% - 10%.
        </p>
      </blockquote>

      <h4>The Problem: The Field Labour Bottleneck</h4>
      <p>
        When enterprise clients like Woolworths and Team Global Express signed
        commercial fleet electrification contracts, we had to install charging
        equipment across hundreds of depots nationwide on tight rollout schedules.
      </p>
      <p>
        The biggest operational bottleneck was on-site labour. Every single site
        required sending a specialist technician at ~$130/hr for 6+ hours just
        to configure network settings, pair equipment, and troubleshoot
        connections. Travel costs were high, projects fell behind schedule, and
        a single typo in a configuration file meant an expensive repeat visit.
        Operations needed to scale depot rollouts without having to hire a massive
        team of travelling specialists.
      </p>

      <h4>How It Works: Key Engineering Decisions</h4>
      <p>
        We needed hardware that could arrive on site pre-configured and ready to
        run, so any local electrician could simply mount it, wire it up, and
        walk away:
      </p>
      <ul>
        <li>
          <strong>Pre-configuring with strict validation:</strong> The most
          expensive bug is one found by an electrician in the field. We built a
          visual equipment map where project managers configure site layouts
          before hardware ever leaves the warehouse. The UI enforces electrical
          rules in real time checking breaker limits and phase allocation and
          blocks invalid configurations from ever being saved or shipped.
        </li>
        <li>
          <strong>Decoupled configuration contracts:</strong> Web and firmware
          teams move at different speeds. The textbook approach would have locked
          everyone into lockstep, coordinated releases. Instead, we decoupled
          the configuration contract between the web portal and edge devices,
          allowing teams to ship updates independently without blocking each
          other.
        </li>
        <li>
          <strong>Automatic sync over flaky depot internet:</strong> Commercial
          depot basements often have terrible mobile reception. We built an
          automatic sync system so that when hardware boots up, it compares its
          local configuration against the cloud order and pulls down updates
          automatically. Contractors never had to sit on hold with customer
          support to confirm device activation.
        </li>
        <li>
          <strong>Pointer-table caching to cut cloud bills and boot times:</strong>{" "}
          As thousands of devices came online, querying Azure Blob Storage on
          every device handshake made boots slow (&gt;30s) and drove up our
          cloud bill. We introduced a pointer-table cache layer in front of Blob
          Storage, slashing median connection times to under 3 seconds and
          reducing our service Azure costs by 5% - 10% (measured).
        </li>
        <li>
          <strong>Delivery and observability:</strong> Automated CI/CD pipelines
          in Azure DevOps deploy builds to dedicated per-environment Azure
          subscriptions, while device handshakes, boot syncs, and latency are
          monitored with Application Insights and Azure Monitor alerts.
        </li>
      </ul>

      <h4>End to End System Architecture</h4>
      <figure className="my-6">
        <img
          src={`${import.meta.env.BASE_URL}zero-touch-configuration-architecture.svg`}
          alt="Zero Touch Configuration System Architecture Flow"
          className="max-h-[600px]"
          loading="lazy"
        />
      </figure>

      <h4>Commercial Impact & Business Outcomes</h4>
      <ul>
        <li>
          Cut on-site setup from 6 hours down to 2 - 3.5 hours (and down to zero
          when pre-paired in the warehouse), saving an estimated $325 - $520 per
          site in specialist field labour (2.5 - 4 hours * $130/hr).
        </li>
        <li>
          Slashed median device handshake from &gt;30s to &lt;3s and cut
          service Azure infrastructure costs by 5% - 10% (measured).
        </li>
        <li>
          Delivered hundreds of commercial depot installs on schedule without
          hiring additional travelling engineers.
        </li>
        <li>
          Eliminated configuration typos and repeat site visits through automated
          pre-shipping validation rules.
        </li>
      </ul>
    </Article>
  );
};
