import { Article } from "@/components/article";
import { Link } from "@/components/ui/typography";

export const HomePage = () => {
  return (
    <Article hideHome={true}>
      <h3>Huy Nguyen</h3>
      <figcaption>
        Full Stack Software Engineer · C# / .NET · React / TypeScript · Azure
      </figcaption>
      <p>
        I am a full stack software engineer building cloud native services, edge
        systems, and web applications, from design through to production. 6+
        years of experience, including platforms behind national fleet rollouts
        for <strong>Woolworths, RACV, SG Fleet, and Team Global Express</strong>.
      </p>

      <h3>Commercial Projects</h3>
      <h4>
        <Link href="/projects/billing-for-apartments" internal={true}>
          Multi Tenant Billing and Payments
        </Link>
      </h4>
      <small>
        C# / .NET · Azure · Stripe Connect · SQL Server · Entity Framework
      </small>
      <p>
        Per session metering, time of use electricity pricing, and Stripe split
        payouts. Generates $100k - $300k a year in recurring software revenue
        and eliminated billing disputes for building managers.
      </p>
      <h4>
        <Link href="/projects/zero-touch-configuration" internal={true}>
          Zero Touch Configuration (ZTC)
        </Link>
      </h4>
      <small>React · .NET · Azure · Blob Storage · Device Sync</small>
      <p>
        Remote device configuration with automatic boot sync. Cut on site setup
        from 6 hours to 2 - 3.5 hours and dropped device handshakes under 3
        seconds.
      </p>
      <h4>
        <Link href="/projects/edge-load-management" internal={true}>
          Edge Energy Management System (CORE v2)
        </Link>
      </h4>
      <small>C# / .NET daemon · Linux · Modbus · OCPP · Next.js · WebSockets</small>
      <p>
        Offline first load balancing on site gateways. Runs up to 5x more
        chargers on existing electrical supplies without needing costly substation
        upgrades.
      </p>

      <h3>Professional Experience</h3>
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

      <h3>Systems Research & Open Source</h3>
      <h4>
        <Link href="https://github.com/HuyNguyenAu/Wayfare">Wayfare</Link>
      </h4>
      <small>TypeScript · Finite State Machines · Deterministic Execution Flow</small>
      <p>
        A coding agent bounded by a finite state machine to make agent workflows
        predictable, reproducible, and easy to debug.
      </p>
      <h4>
        <Link href="https://github.com/HuyNguyenAu/llm_native_virtual_machine">
          LLM Native Virtual Machine
        </Link>
      </h4>
      <small>
        Rust · RISC Inspired Assembly · Context Stack Registers · GGUF Models
      </small>
      <p>
        An assembly like virtual machine that breaks prompts into small atomic
        instructions executed sequentially, helping smaller local models stay
        accurate without getting lost.
      </p>
      <h4>
        <Link href="https://github.com/HuyNguyenAu/gpt-decoder">GPT Decoder</Link>
      </h4>
      <small>
        Python · PyTorch · Transformer Architecture · KeyValue Caching
      </small>
      <p>
        A minimal transformer inference engine written from scratch in Python
        and PyTorch to experiment with KV caching and local model execution.
      </p>
      <h4>
        <Link href="https://github.com/HuyNguyenAu/lox-lang-ai">Lox Lang AI</Link>
      </h4>
      <small>
        C# · Bytecode Interpreter · AST Evaluation · Compiler Construction
      </small>
      <p>
        A bytecode interpreter and tree walk evaluator in C# to explore
        compiler construction and AI assisted code execution.
      </p>
      <h4>
        <Link href="https://github.com/HuyNguyenAu/wobbly-ml">Wobbly ML</Link>
      </h4>
      <small>
        C# · Matrix Operations · Numerical Gradients · Backpropagation
      </small>
      <p>
        A small machine learning library built from first principles in C# to
        understand backpropagation and gradient descent without external
        dependencies.
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
