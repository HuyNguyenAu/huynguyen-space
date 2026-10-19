import {
  Article,
  Diagram,
  Item,
  Lede,
  List,
  Section,
  Summary,
} from "@/components/article";

export const ZeroTouchConfigurationPage = () => {
  return (
    <Article
      section="Commercial Projects"
      kicker="JET Charge · Full Stack Software Engineer"
      title="Zero Touch Configuration (ZTC)"
      stack="React · TypeScript · C# / .NET Core · Azure · Blob Storage · Application Insights · Azure DevOps"
    >
      <Summary>
        <p>
          Deploying commercial charging infrastructure across hundreds of depots
          required sending specialist technicians on site for 6 or more hours to
          configure equipment by hand, creating an expensive rollout bottleneck.
        </p>
        <p>
          I built a visual web tool that validates electrical rules before
          hardware leaves the warehouse, paired with an automatic sync service
          that edge devices pull down on startup.
        </p>
        <p>
          This cut on site setup time from 6 hours down to 2 - 3.5 hours (or
          zero when pre paired in the warehouse), dropped device connection
          handshakes from over 30 seconds to under 3 seconds, and reduced cloud
          storage costs by 5% - 10%.
        </p>
      </Summary>

      <Section title="The Problem">
        <Lede>
          When enterprise clients like Woolworths and Team Global Express signed
          contracts to electrify their commercial fleets, we needed to install
          charging equipment across hundreds of depots nationwide on tight
          rollout schedules.
        </Lede>
        <p>
          The main operational bottleneck was manual on site labour. Every site
          required sending a specialist technician at around $130 an hour for 6
          or more hours just to configure network settings, pair equipment, and
          test connections. Travel expenses added up quickly, and a small typo
          in a configuration file meant an expensive return trip. Operations
          needed a way to scale depot rollouts without hiring a large team of
          travelling technicians.
        </p>
      </Section>

      <Section title="How It Works">
        <List>
          <Item title="Visual pre configuration with validation">
            Finding a configuration bug after hardware is mounted on a wall is
            painful. We built a visual equipment map where project managers set
            up site layouts before hardware leaves the warehouse. The interface
            validates electrical rules in real time, checking breaker limits and
            phase allocations so invalid configurations cannot be saved or
            shipped.
          </Item>
          <Item title="Decoupled configuration contracts">
            Web and firmware teams operated on different release schedules.
            Rather than locking both teams into coordinated releases, we
            decoupled the configuration contract between the web portal and edge
            devices. This allowed both teams to ship updates independently.
          </Item>
          <Item title="Automatic device sync">
            Depot basements often have poor mobile reception. We built an
            automatic sync service so that when hardware powers on, it checks
            its local settings against the cloud order and downloads updates
            automatically. Contractors do not have to sit on hold with support
            to confirm device activation.
          </Item>
          <Item title="Pointer table caching">
            As thousands of devices came online, querying Azure Blob Storage on
            every device handshake caused slow boots of over 30 seconds and
            drove up cloud storage costs. We added an indexed pointer table
            cache in front of Blob Storage, bringing median connection times
            down to under 3 seconds and lowering monthly Azure storage costs by
            5% - 10%.
          </Item>
          <Item title="Pipelines and monitoring">
            We built automated CI/CD pipelines in Azure DevOps deploying to
            dedicated per environment Azure subscriptions, while Application
            Insights and Azure Monitor alerts track device handshakes, boot
            syncs, and latency.
          </Item>
        </List>
      </Section>

      <Section title="System Architecture">
        <Diagram
          src="zero-touch-configuration-architecture.svg"
          alt="Zero Touch Configuration System Architecture Flow"
        />
      </Section>

      <Section title="Results">
        <List>
          <Item>
            Cut on site setup from 6 hours down to 2 - 3.5 hours (and down to
            zero when pre paired in the warehouse), saving an estimated $325 -
            $520 per site in field labour (2.5 - 4 hours at $130/hr).
          </Item>
          <Item>
            Reduced median device handshake latency from over 30 seconds to
            under 3 seconds and cut cloud storage costs by 5% - 10%.
          </Item>
          <Item>
            Delivered hundreds of commercial depot installs on schedule without
            hiring additional travelling technicians.
          </Item>
          <Item>
            Prevented configuration errors and return site visits through
            automated pre shipping validation rules.
          </Item>
        </List>
      </Section>
    </Article>
  );
};
