import { Article } from "@/components/article";
import { Link } from "@/components/ui/typography";

export const HomePage = () => {
  return (
    <Article hideHome={true}>
      <h3>Huy Nguyen</h3>
      <figcaption>
        Senior Systems and Software Engineer
        <br />
        <span className="text-sm font-normal text-stone-600">
          Technical Lead helping clean energy and hardware businesses cut
          installation costs, solve grid limits, and grow recurring revenue.
        </span>
      </figcaption>
      <p>
        I build software and systems that solve real-world problems for electric
        vehicle charging and clean energy companies. Over the last 5+ years, I
        have led software delivery for commercial EV fleets across Australia,
        working with clients like{" "}
        <strong>Woolworths, RACV, SG Fleet, and Team Global Express</strong>.
      </p>
      <p>My focus is simple:</p>
      <ul>
        <li>
          <strong>Cut installation and labour costs.</strong> Turn messy on-site
          setups into simple plug-and-play tools so projects scale without hiring
          armies of technicians.
        </li>
        <li>
          <strong>Help sales close difficult deals.</strong> Remove the power
          limits and electrical bottlenecks that stop customers from buying
          chargers.
        </li>
        <li>
          <strong>Protect client operations.</strong> Make sure charging systems
          keep working even when the internet drops out, so fleets are always
          ready to drive in the morning.
        </li>
      </ul>

      <h3>Commercial and Operational Scale</h3>
      <table>
        <thead>
          <tr>
            <th>Impact Metric</th>
            <th>Commercial and Operational Scope</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>$1.6M - $5.0M in Avoided Upgrade Costs</strong>
            </td>
            <td>
              Allowed commercial sites to fit 5x more EV chargers onto existing
              power supplies without waiting 12 - 18 months for expensive utility
              upgrades.
            </td>
          </tr>
          <tr>
            <td>
              <strong>$1M+ Saved in Field Labour</strong>
            </td>
            <td>
              Cut on-site setup from 6 hours to 2 - 3.5 hours (or zero with
              warehouse pre-pairing), saving travel costs and speeding up rollouts
              across national fleet contracts.
            </td>
          </tr>
          <tr>
            <td>
              <strong>$150k - $500k in Fleet Outage Risk Prevented</strong>
            </td>
            <td>
              Built systems that run 100% offline, protecting delivery fleets from
              missing morning routes and avoiding $5k - $50k per hour delay
              penalties.
            </td>
          </tr>
          <tr>
            <td>
              <strong>$100k - $300k in Recurring Annual Revenue</strong>
            </td>
            <td>
              Built automated meter billing and payment splits, turning apartment
              and commercial charging into predictable subscription income.
            </td>
          </tr>
          <tr>
            <td>
              <strong>3,500+ Commercial Fleet Vehicles Supported</strong>
            </td>
            <td>
              Delivered the software and systems behind the national $25M ARENA
              fleet rollout for major enterprise clients.
            </td>
          </tr>
        </tbody>
      </table>

      <h3>What I Work On</h3>
      <table>
        <thead>
          <tr>
            <th>Capability Area</th>
            <th>Focus and Practical Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Field Automation and Setup Tools</strong>
            </td>
            <td>
              Turning complicated hardware setups into simple web tools that
              local electricians can use in minutes without engineering help.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Billing and Subscription Systems</strong>
            </td>
            <td>
              Building automated billing, meter tracking, and payment splits that
              turn one-time hardware sales into ongoing monthly revenue.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Reliable Offline Systems</strong>
            </td>
            <td>
              Designing software that runs on site without internet, protecting
              customer operations and avoiding expensive emergency support
              calls.
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Selected Projects</h3>
      <h4>
        <Link href="/projects/zero-touch-configuration" internal={true}>
          Zero-Touch Configuration (ZTC)
        </Link>
      </h4>
      <p>
        A remote setup tool that removed the need for specialist engineers on
        site. Slashed installation time by over 90% and saved more than $1M
        across national rollouts.
      </p>
      <h4>
        <Link href="/projects/edge-load-management" internal={true}>
          Edge Energy Management System (CORE v2)
        </Link>
      </h4>
      <p>
        Smart energy software that balances power locally so sites can run 5x
        more chargers on existing supplies. Avoided millions in utility upgrades
        and unblocked stalled fleet deals.
      </p>
      <h4>
        <Link href="/projects/billing-for-apartments" internal={true}>
          Billing for Apartments and Shared EV Infrastructure
        </Link>
      </h4>
      <p>
        An automated billing system that solved body corporate power disputes and
        unlocked apartment charging, bringing in $100k - $300k a year in
        recurring software revenue.
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
                href="/experience/jetcharge/full-stack-software-engineer"
                internal={true}
              >
                Technical Lead and Systems Engineer
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
                href="/experience/energy-locals/it-specialist"
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
                href="/experience/energy-locals/graduate-it-specialist"
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

      <h3>Applied AI and Systems Projects</h3>
      <h4>
        <Link href="https://github.com/HuyNguyenAu/Wayfare">
          Wayfare
        </Link>
      </h4>
      <p>
        A simple coding agent bounded by a state machine that allows for
        agentic workflows that are reproducible, easy to debug, and predictable.
      </p>
      <h4>
        <Link href="https://github.com/HuyNguyenAu/llm_native_virtual_machine">
          LLM Native Virtual Machine
        </Link>
      </h4>
      <p>
        An experimental project testing how to use language models as software
        engines. Breaks large prompts into small, predictable steps to reduce
        errors and cut computing costs.
      </p>
      <h4>
        <Link href="https://github.com/HuyNguyenAu/lox-lang-ai">
          Lox Lang AI
        </Link>
      </h4>
      <p>
        A custom programming language experiment testing how artificial
        intelligence can help optimise and write software routines
        automatically.
      </p>
      <h4>
        <Link href="https://github.com/HuyNguyenAu/gpt-decoder">
          GPT Decoder
        </Link>
      </h4>
      <p>
        A minimal language model engine built from scratch to test how models run
        on local hardware without depending on third party cloud providers.
      </p>
      <h4>
        <Link href="https://github.com/HuyNguyenAu/wobbly-ml">Wobbly ML</Link>
      </h4>
      <p>
        A lightweight machine learning tool built from first principles to
        understand mathematical optimisation and data models.
      </p>

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
