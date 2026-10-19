import {
  Brief,
  LeadStory,
  Role,
  SectionHeading,
  Story,
} from "@/components/front-page";
import { Link } from "@/components/link";
import { Masthead } from "@/components/masthead";

export const HomePage = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <header>
        <Masthead
          left={<span>Melbourne, Australia</span>}
          center={
            <nav className="flex gap-4">
              <Link href="mailto:work@huynguyen.email">Email</Link>
              <Link href="https://github.com/HuyNguyenAu">GitHub</Link>
              <Link href="https://www.linkedin.com/in/huy-nguyen-au">
                LinkedIn
              </Link>
              <Link href="resume.pdf">Resume</Link>
            </nav>
          }
        />
        <h1 className="display py-4 text-center text-[clamp(3.25rem,12vw,8.5rem)] font-black">
          Huy Nguyen
        </h1>
        <p className="kicker border-y-4 border-double border-primary py-2 text-center text-sm sm:text-base">
          Full Stack Software Engineer · C# / .NET · React / TypeScript · Azure
        </p>
      </header>

      <div className="border-b border-primary py-6 max-lg:border-b-4 max-lg:border-double">
        <p className="mx-auto max-w-3xl text-center text-lg italic sm:text-xl">
          I am a full stack software engineer building cloud native services,
          edge systems, and web applications, from design through to production.
          6+ years of experience, including platforms behind national fleet
          rollouts for{" "}
          <strong>Woolworths, RACV, SG Fleet, and Team Global Express</strong>.
        </p>
      </div>

      {/* One grid so narrow screens read projects, then experience. On desktop
          the aside is pinned beside the lead story. */}
      <div className="grid lg:grid-cols-12">
        <SectionHeading className="pt-6 lg:hidden">
          Commercial Projects
        </SectionHeading>
        <LeadStory
          kicker="Commercial Project · JET Charge"
          title="Multi Tenant Billing and Payments"
          href="/projects/billing-for-apartments"
          stack="C# / .NET · Azure · Stripe Connect · SQL Server · Entity Framework"
          figure={{
            value: "$100k - $300k",
            caption: "a year in recurring software revenue",
          }}
        >
          Per session metering, time of use electricity pricing, and Stripe
          split payouts. Generates $100k - $300k a year in recurring software
          revenue and eliminated billing disputes for building managers.
        </LeadStory>

        <section className="grid divide-y divide-primary border-t border-b-4 border-double border-primary md:grid-cols-2 md:divide-x md:divide-y-0 lg:col-span-12">
          <Story
            kicker="Commercial Project · JET Charge"
            title="Zero Touch Configuration (ZTC)"
            href="/projects/zero-touch-configuration"
            stack="React · .NET · Azure · Blob Storage · Device Sync"
            figure={{ value: "6 h → 2 - 3.5 h", caption: "on site setup" }}
          >
            Remote device configuration with automatic boot sync. Cut on site
            setup from 6 hours to 2 - 3.5 hours and dropped device handshakes
            under 3 seconds.
          </Story>
          <Story
            kicker="Commercial Project · JET Charge"
            title="Edge Energy Management System (CORE v2)"
            href="/projects/edge-load-management"
            stack="C# / .NET daemon · Linux · Modbus · OCPP · Next.js · WebSockets"
            figure={{
              value: "Up to 5x",
              caption: "more chargers on existing supply",
            }}
          >
            Offline first load balancing on site gateways. Runs up to 5x more
            chargers on existing electrical supplies without needing costly
            substation upgrades.
          </Story>
        </section>

        <aside className="pt-6 pb-3 max-lg:border-b-4 max-lg:border-double max-lg:border-primary lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:border-l lg:border-primary lg:pb-6 lg:pl-8">
          <SectionHeading className="lg:pb-1 lg:text-left lg:text-2xl">
            Professional Experience
          </SectionHeading>
          <ul className="divide-y divide-primary/30 max-lg:mt-3">
            <Role
              organisation="JET Charge"
              title="Full Stack Software Engineer"
              href="/experience/jetcharge/full-stack-software-engineer"
              dates="Oct 2021 - Jun 2026"
            />
            <Role
              organisation="Energy Locals"
              title="IT Specialist"
              href="/experience/energy-locals/it-specialist"
              dates="Oct 2020 - Oct 2021"
            />
            <Role
              organisation="Energy Locals"
              title="Graduate IT Specialist"
              href="/experience/energy-locals/graduate-it-specialist"
              dates="Sep 2019 - Oct 2020"
            />
            <Role
              organisation="RMIT"
              title="Computer and Network Engineering (Honours)"
              dates="Mar 2016 - Mar 2020"
            />
          </ul>
        </aside>
      </div>

      <section className="border-b-4 border-double border-primary pt-6 md:pb-6">
        <SectionHeading>Systems Research & Open Source</SectionHeading>
        <div className="mt-6 gap-x-8 max-md:divide-y max-md:divide-primary/30 [column-rule:1px_solid_var(--color-primary)] md:columns-2 lg:columns-3">
          <Brief
            title="Amber 8"
            href="https://github.com/HuyNguyenAu/amber-8"
            stack="Rust · Assembly · Decision Models"
          >
            An assembly virtual machine that brings the messy real world into
            the deterministic domain of software.
          </Brief>
          <Brief
            title="Wayfare"
            href="https://github.com/HuyNguyenAu/Wayfare"
            stack="TypeScript · Finite State Machines · Deterministic Execution Flow"
          >
            A coding agent bounded by a finite state machine to make agent
            workflows predictable, reproducible, and easy to debug.
          </Brief>
          <Brief
            title="LLM Native Virtual Machine"
            href="https://github.com/HuyNguyenAu/llm_native_virtual_machine"
            stack="Rust · RISC Inspired Assembly · Context Stack Registers · GGUF Models"
          >
            An assembly like virtual machine that breaks prompts into small
            atomic instructions executed sequentially, helping smaller local
            models stay accurate without getting lost.
          </Brief>
          <Brief
            title="GPT Decoder"
            href="https://github.com/HuyNguyenAu/gpt-decoder"
            stack="Python · PyTorch · Transformer Architecture · KeyValue Caching"
          >
            A minimal transformer inference engine written from scratch in
            Python and PyTorch to experiment with KV caching and local model
            execution.
          </Brief>
          <Brief
            title="Lox Lang AI"
            href="https://github.com/HuyNguyenAu/lox-lang-ai"
            stack="C# · Bytecode Interpreter · AST Evaluation · Compiler Construction"
          >
            A bytecode interpreter and tree walk evaluator in C# to explore
            compiler construction and AI assisted code execution.
          </Brief>
          <Brief
            title="Wobbly ML"
            href="https://github.com/HuyNguyenAu/wobbly-ml"
            stack="C# · Matrix Operations · Numerical Gradients · Backpropagation"
          >
            A small machine learning library built from first principles in C#
            to understand backpropagation and gradient descent without external
            dependencies.
          </Brief>
        </div>
      </section>
    </div>
  );
};
