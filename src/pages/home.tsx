import { Article } from "@/components/article";
import { Link } from "@/components/ui/typography";

export const HomePage = () => {
  return (
    <Article hideHome={true}>
      <h3>Huy Nguyen</h3>
      <figcaption>Full Stack .NET & React Engineer</figcaption>
      <p>
        Full-stack engineer with 5+ years building high-availability, distributed products on C#/.NET Core and React. At JET Charge, I've shipped event-driven systems, edge-to-cloud synchronisation, and SQL query optimisation for some of Australia's largest EV operators, including Woolworths, RACV, Team Global Express and SG Fleet. I move comfortably across the stack, from re-architecting legacy backends into modular services to leading greenfield frontends that put complex systems in the hands of non-specialist users. New stacks don't slow me down - I believe the problem space should dictate the technology, not the reverse.
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
      <h3>Selected Projects</h3>
      <h4>
        <Link href="projects/zero-touch-configuration" internal={true}>
          Zero-Touch Configuration
        </Link>
      </h4>
      <p>
        Cloud-based EV commissioning system enabling secure, plug-and-play
        remote hardware configuration and synchronisation.
      </p>
      <h4>
        <Link href="projects/edge-load-management" internal={true}>
          Edge Energy Management System
        </Link>
      </h4>
      <p>
        Offline-capable dynamic edge load management system with real-time local
        monitoring dashboards.
      </p>
      <h4>
        <Link href="projects/billing-for-apartments" internal={true}>
          Billing for Apartments
        </Link>
      </h4>
      <p>
        Billing system for apartment EV energy usage, integrating with existing
        utility data and providing detailed usage reports.
      </p>
      <h3>Professional History</h3>
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
            <td>
              <strong>JET Charge</strong>
            </td>
            <td>
              <Link
                href="experience/jetcharge/full-stack-software-engineer"
                internal={true}
              >
                Full Stack Software Engineer
              </Link>
            </td>
            <td>Oct 2021 - Jun 2026</td>
          </tr>
          <tr>
            <td>
              <strong>Energy Locals</strong>
            </td>
            <td>
              <Link
                href="experience/energy-locals/it-specialist"
                internal={true}
              >
                IT Specialist
              </Link>
            </td>
            <td>Oct 2020 - Oct 2021</td>
          </tr>
          <tr>
            <td>
              <strong>Energy Locals</strong>
            </td>
            <td>
              <Link
                href="experience/energy-locals/graduate-it-specialist"
                internal={true}
              >
                Graduate IT Specialist
              </Link>
            </td>
            <td>Sep 2019 - Oct 2020</td>
          </tr>
          <tr>
            <td>
              <strong>RMIT</strong>
            </td>
            <td>Computer and Network Engineering (Honours)</td>
            <td>Mar 2016 - Mar 2020</td>
          </tr>
        </tbody>
      </table>
      <h3>Open Source & Experiments</h3>
      <h4>
        <Link href="https://github.com/HuyNguyenAu/llm_native_virtual_machine">
          LLM Native Virtual Machine
        </Link>
      </h4>
      <p>
        An experimental virtual processor that has an LLM instead of an ALU.
      </p>
      <h4>
        <Link href="https://github.com/HuyNguyenAu/lox-lang-ai">
          Lox Lang AI
        </Link>
      </h4>
      <p>
        A simple programming language interpreter written in C# with various
        optimisations and AI capabilities.
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
      <h3>Interview Materials</h3>
      <h4>
        <Link href="interview" internal={true}>
          Interview Directory
        </Link>
      </h4>
      <p>Work references and prep materials organised by company.</p>
      <h3>Contact</h3>
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
