import { Article } from "@/components/article";

export const ZeroTouchConfigurationPage = () => {
  return (
    <Article>
      <h3>Zero-Touch Configuration (ZTC)</h3>
      <p>
        <strong>Role:</strong> Lead Full-Stack Engineer
        <br />
        <strong>Context:</strong> Cloud-based EV commissioning system that
        eliminated the need for on-site technicians by enabling secure,
        plug-and-play remote hardware configuration and synchronisation.
      </p>

      <h4>The Challenge</h4>
      <p>
        Deploying commercial Electric Vehicle (EV) load management systems
        traditionally required physical presence from specialised technicians.
        Each unit needed manual network setup, reverse tunneling to access the
        onboard systems, and coordination with the site's IT infrastructure.
        This manual setup created high commissioning overhead, deployment
        delays, and risk of configuration errors.
      </p>

      <h4>The Solution</h4>
      <ul>
        <li>
          <strong>Interactive Remote Configuration:</strong> Built React Node-UI
          interfaces allowing back-office administrators or contractors to
          configure/register the system and charger hardware serial numbers and
          pair them with pre-defined client profiles before shipping.
        </li>
        <li>
          <strong>Secured APIs:</strong> Developed secure .NET cloud endpoints
          that edge EV load management calls on initial boot. It validates the
          device and synchronises the configuration.
        </li>
        <li>
          <strong>Synchronisation Algorithm:</strong> Implemented safe
          transaction patterns to push, pull, and dectect configuration drift
          between the cloud and edge device, ensuring consistent state during
          the initial setup process and beyond. This allows the system to
          recover from transient network issues during setup and maintain
          configuration integrity.
        </li>
      </ul>

      <h4>The Outcome</h4>
      <p>
        The system eliminated the requirement for technicians to be physically
        present during installation. Remote configuration and secure cloud
        synchronisation enabled hardware to be shipped pre-configured, allowing
        for plug-and-play deployment. This reduced commissioning time from hours
        to minutes, increased deployment scalability, and improved overall
        reliability by removing manual configuration steps.
      </p>
    </Article>
  );
};
