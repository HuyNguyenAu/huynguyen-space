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
        I'm a full stack software engineer building cloud-native services, edge
        systems, and web apps, owning them from design through to production. 6+
        years of experience, including platforms behind national fleet rollouts
        for <strong>Woolworths, RACV, SG Fleet, and Team Global Express</strong>.
      </p>

      <h3>Engineering Practices</h3>
      <table>
        <thead>
          <tr>
            <th>Practice</th>
            <th>In Practice</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Cloud-Native and Serverless</strong>
            </td>
            <td>
              Event-driven services on Azure Functions, Container Apps, and
              Service Bus.
            </td>
          </tr>
          <tr>
            <td>
              <strong>CI/CD and Environments</strong>
            </td>
            <td>
              Azure DevOps pipelines deploying to per-environment Azure
              subscriptions; infrastructure in Bicep.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Testing and Static Analysis</strong>
            </td>
            <td>
              Unit and integration tests, with SonarQube and Roslyn analyzers
              gating every pull request.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Code Review and Mentoring</strong>
            </td>
            <td>
              1:1 reviews on every change, pair programming, onboarding juniors,
              and design sessions with 3 - 5 engineers.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Monitoring and Production Support</strong>
            </td>
            <td>
              Application Insights, Azure Monitor alerts, fast KQL triage, and
              participating in on-call rotations.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Security and Data Protection</strong>
            </td>
            <td>
              Centralised multi-tenant authorisation in the data layer; KYC
              verification and payment data handling.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Agile Delivery</strong>
            </td>
            <td>
              Active Scrum sprints; validating acceptance criteria and releases
              with POs and QA.
            </td>
          </tr>
          <tr>
            <td>
              <strong>AI-Assisted Engineering</strong>
            </td>
            <td>
              AI coding agents in daily workflows; building my own (
              <Link href="https://github.com/HuyNguyenAu/Wayfare">Wayfare</Link>
              ).
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Technical Stack</h3>
      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th>Technologies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Backend</strong>
            </td>
            <td>
              C#, .NET / .NET Core, ASP.NET Core Web API, Entity Framework,
              REST APIs, Python.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Cloud</strong>
            </td>
            <td>
              Azure Functions, App Service, Container Apps, Service Bus, Event
              Grid, Bicep.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Data</strong>
            </td>
            <td>
              SQL Server / Azure SQL, PostgreSQL, Cosmos DB, Table and Blob
              Storage.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Frontend</strong>
            </td>
            <td>
              React, Next.js, TypeScript, Zustand, React Context, Vite, ShadCN UI.
            </td>
          </tr>
          <tr>
            <td>
              <strong>DevOps and Quality</strong>
            </td>
            <td>
              Azure DevOps Pipelines, xUnit, NUnit, MSTest, Jest, Vitest,
              SonarQube / SonarCloud, Roslyn analyzers.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Observability</strong>
            </td>
            <td>
              Application Insights, Azure Monitor, Log Analytics (KQL).
            </td>
          </tr>
          <tr>
            <td>
              <strong>Integrations and Protocols</strong>
            </td>
            <td>
              Stripe, WebSockets, third party KYC APIs, Modbus RTU / TCP, OCPP
              1.6J / 2.0.1.
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Selected Outcomes</h3>
      <table>
        <thead>
          <tr>
            <th>Outcome</th>
            <th>What Changed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Device handshake from ~30s to ~3s</strong>
            </td>
            <td>
              Replaced repeated Blob Storage lookups with a pointer-table cache,
              also cutting the monthly Azure bill for the service by 5% - 10%.
            </td>
          </tr>
          <tr>
            <td>
              <strong>On-site setup from 6h to 2 - 3.5h</strong>
            </td>
            <td>
              Moved device configuration into a validated web tool with automatic
              sync, so field installs need no engineering help.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Up to 5x more chargers per supply</strong>
            </td>
            <td>
              Real-time, offline-first load balancing on edge gateways keeps
              sites within their electrical limits without cloud connectivity.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Identity checks from 2 - 3 days to ~60s</strong>
            </td>
            <td>
              Integrated automated KYC and credit checks through Westpac and
              Equifax APIs into customer onboarding.
            </td>
          </tr>
          <tr>
            <td>
              <strong>3,500+ fleet vehicles supported</strong>
            </td>
            <td>
              Software behind the $25M ARENA fleet rollout for enterprise
              clients.
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Selected Projects</h3>
      <h4>
        <Link href="/projects/billing-for-apartments" internal={true}>
          Multi-Tenant Billing and Payments
        </Link>
      </h4>
      <small>
        C# / .NET · Azure · Stripe Connect · SQL Server · Entity Framework
      </small>
      <p>
        Per-session metering, time-of-use pricing, and Stripe split payouts.
        Generates $100k - $300k a year in recurring revenue and eliminated
        manual billing disputes.
      </p>
      <h4>
        <Link href="/projects/zero-touch-configuration" internal={true}>
          Zero Touch Configuration (ZTC)
        </Link>
      </h4>
      <small>React · .NET · Azure · Blob Storage · Device Sync</small>
      <p>
        Validated remote device configuration with automatic sync. Cut on-site
        setup from 6h to 2 - 3.5h and dropped device handshakes under 3 seconds.
      </p>
      <h4>
        <Link href="/projects/edge-load-management" internal={true}>
          Edge Energy Management System (CORE v2)
        </Link>
      </h4>
      <small>C# / .NET daemon · Linux · Modbus · OCPP · Next.js · WebSockets</small>
      <p>
        Offline-first load balancing on site gateways. Powers up to 5x more
        chargers on existing supplies and avoids costly substation upgrades.
      </p>

      <h3>AI and Systems Projects</h3>
      <h4>
        <Link href="https://github.com/HuyNguyenAu/Wayfare">Wayfare</Link>
      </h4>
      <small>TypeScript · Finite State Machines · Deterministic Execution Flow</small>
      <p>
        A coding agent bounded by a finite state machine to make agentic
        workflows reproducible, predictable, and easy to debug.
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
        An assembly-like virtual machine that breaks prompts into small,
        predictable atomic steps to improve accuracy for small local models.
      </p>
      <h4>
        <Link href="https://github.com/HuyNguyenAu/gpt-decoder">GPT Decoder</Link>
      </h4>
      <small>
        Python · PyTorch · Transformer Architecture · KeyValue Caching
      </small>
      <p>
        A minimal transformer inference engine built from scratch in Python and
        PyTorch to explore KV-caching and local model execution.
      </p>
      <h4>
        <Link href="https://github.com/HuyNguyenAu/lox-lang-ai">Lox Lang AI</Link>
      </h4>
      <small>
        C# · Bytecode Interpreter · AST Evaluation · Compiler Construction
      </small>
      <p>
        A bytecode interpreter and AST evaluator used to explore AI-generated
        and AI-optimised execution routines.
      </p>
      <h4>
        <Link href="https://github.com/HuyNguyenAu/wobbly-ml">Wobbly ML</Link>
      </h4>
      <small>
        C# · Matrix Operations · Numerical Gradients · Backpropagation
      </small>
      <p>
        A lightweight machine learning library built from first principles in C#
        to explore backpropagation and numerical gradients.
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
