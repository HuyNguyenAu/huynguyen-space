import { Article } from "@/components/article";
import { Link } from "@/components/ui/typography";

export const HomePage = () => {
  return (
     <Article hideHome={true}>
      <h3>Huy Nguyen</h3>
      <figcaption>Senior Full Stack .NET & React Engineer</figcaption>
      <p>
        I am a Senior Full Stack Engineer specialising in complex data
        integrations, billing systems, and energy/EV infrastructure platforms. I
        bridge the gap between high-throughput C#/.NET backend architectures and
        fast-moving, modern user interfaces.
      </p>
      <table>
        <thead>
          <tr>
            <th>Backend</th>
            <th>Frontend</th>
            <th>Platform</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>.NET</td>
            <td>React</td>
            <td>Azure</td>
          </tr>
          <tr>
            <td>C#</td>
            <td>TypeScript</td>
            <td>GitHub Actions</td>
          </tr>
          <tr>
            <td>SQL</td>
            <td />
            <td>Azure DevOps</td>
          </tr>
          <tr>
            <td />
            <td />
            <td>Bicep</td>
          </tr>
        </tbody>
      </table>
      <h3>Projects</h3>
      <h4>
        <Link href="projects/zero-touch-configuration" reactLink={true}>
          Zero-Touch Configuration
        </Link>
      </h4>
      <p>
        Cloud-based EV commissioning system enabling secure, plug-and-play
        remote hardware configuration and synchronisation.
      </p>
      <h4>
        <Link href="projects/edge-energy-management-system" reactLink={true}>
          Edge Energy Management System
        </Link>
      </h4>
      <p>
        Offline-capable dynamic edge load management system with real-time local
        monitoring dashboards.
      </p>
      <h4>
        <Link href="projects/billing-for-apartments" reactLink={true}>
          Billing for Apartments
        </Link>
      </h4>
      <p>
        Billing system for apartment EV energy usage, integrating with existing
        utility data and providing detailed usage reports.
      </p>
      <h3>Experience</h3>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Dates</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>JET Charge</td>
            <td>Full Stack Software Engineer</td>
            <td>Oct 2021 - Present</td>
          </tr>
          <tr>
            <td>Energy Locals</td>
            <td>IT Specialist</td>
            <td>Oct 2020 - Oct 2021</td>
          </tr>
          <tr>
            <td>Energy Locals</td>
            <td>Graduate IT Specialist</td>
            <td>Sep 2019 - Oct 2020</td>
          </tr>
          <tr>
            <td>RMIT</td>
            <td>Computer and Network Engineering (Honours)</td>
            <td>Mar 2016 - Mar 2020</td>
          </tr>
        </tbody>
      </table>
      <h3>Experiments</h3>
      <h4>
        <Link href="https://github.com/HuyNguyenAu/llm_native_virtual_machine">
          LLM Native Virtual Machine
        </Link>
      </h4>
      <p>
        An experimental virtual processor that has an LLM instead of an ALU.
      </p>
      <h4>
        <Link href="https://github.com/HuyNguyenAu/gpt-decoder">
          GPT Decoder
        </Link>
      </h4>
      <p>A Minimal GPT decoder with some optimisations.</p>
      <h4>
        <Link href="https://github.com/HuyNguyenAu/wobbly-ml">Wobbly ML</Link>
      </h4>
      <p>A simple machine learning library.</p>
      <h4>
        <Link href="https://github.com/HuyNguyenAu/lox-lang-crystal">
          Lox Crystal Lang
        </Link>
      </h4>
      <p>A simple programming language interpreter written in Crystal.</p>
      <h3>Links</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <Link href="mailto:work@huynguyen.email">Email</Link>
            </td>
            <td>
              <Link href="https://github.com/HuyNguyenAu">GitHub</Link>
            </td>
            <td>
              <Link href="https://www.linkedin.com/in/huy-nguyen-au">
                LinkedIn
              </Link>
            </td>
            <td>
              <Link href="resume.pdf">Resume</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </Article>
  );
};
