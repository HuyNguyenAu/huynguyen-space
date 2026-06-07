import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Links } from "@/components/links";
import { Experiments } from "@/components/experiments";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects>
        <Projects.Item
          title="Zero-Touch Configuration"
          subtitle="Remote EMS Provisioning"
          description="Cloud-based EV commissioning system enabling secure, plug-and-play remote hardware configuration and synchronisation."
          href="projects/zero-touch-configuration"
        />
        <Projects.Item
          title="Edge Energy Management System"
          subtitle="EV Load Management"
          description="Offline-capable dynamic edge load management system with real-time local monitoring dashboards."
          href="projects/edge-load-management"
        />
      </Projects>
      <Experience>
        <Experience.Item
          company="JET Charge"
          role="Full Stack Software Engineer"
          startDate="Oct 2021"
          endDate="Present"
          href="experience/jetcharge/full-stack-software-engineer"
        />
        <Experience.Item
          company="Energy Locals"
          role="IT Specialist"
          startDate="Oct 2020"
          endDate="Oct 2021"
          href="experience/energy-locals/it-specialist"
        />
        <Experience.Item
          company="Energy Locals"
          role="Graduate IT Specialist"
          startDate="Sep 2019"
          endDate="Oct 2020"
          href="experience/energy-locals/graduate-it-specialist"
        />
        <Experience.Item
          company="RMIT"
          role="Computer and Network Engineering (Honours)"
          startDate="Mar 2016"
          endDate="Mar 2020"
          href=""
        />
      </Experience>
      <Experiments>
        <Experiments.Item
          title="LLM Native Virtual Machine"
          href="https://github.com/HuyNguyenAu/llm_native_virtual_machine"
          description="An experimental virtual processor that has an LLM instead of an ALU."
        />
        <Experiments.Item
          title="GPT Decoder"
          href="https://github.com/HuyNguyenAu/gpt-decoder"
          description="A Minimal GPT decoder with some optimisations."
        />
        <Experiments.Item
          title="Wobbly ML"
          href="https://github.com/HuyNguyenAu/wobbly-ml"
          description="A simple machine learning library."
        />
        <Experiments.Item
          title="Lox Crystal Lang"
          href="https://github.com/HuyNguyenAu/lox-lang-crystal"
          description="A simple programming language interpreter written in Crystal."
        />
      </Experiments>
      <Links>
        <Links.Item title="Email" href="mailto:work@huynguyen.email" as="a" />
        <Links.Item title="GitHub" href="https://github.com/HuyNguyenAu" />
        <Links.Item
          title="LinkedIn"
          href="https://www.linkedin.com/in/huy-nguyen-au"
        />
        <Links.Item title="Resume" href="resume.pdf" as="a" />
      </Links>
    </>
  );
};
