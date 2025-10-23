import { Link } from "lucide-react";
import { Experience } from "./Experience";
import { Hero } from "./Hero";
import { Links } from "./Links";
import { Project } from "./Project";
import { Skills } from "./Skills";

export const App = () => {
  return (
    <div className="flex flex-col mx-auto py-10 px-20 font-mono">
      <Hero />
      <Skills />
      <Experience>
        <Experience.Company company="JET Charge">
          <Experience.Item
            role="Full Stack Software Engineer"
            startDate="Oct 2021"
            endDate="Present"
          />
        </Experience.Company>
        <Experience.Company company="Energy Locals">
          <Experience.Item
            role="IT Specialist"
            startDate="Oct 2020"
            endDate="Oct 2021"
          />
          <Experience.Item
            role="Graduate IT Specialist"
            startDate="Sep 2019"
            endDate="Oct 2020"
          />
        </Experience.Company>
        <Experience.Company company="RMIT">
          <Experience.Item
            role="Computer and Network Engineering (Honours)"
            startDate="Mar 2016"
            endDate="Mar 2020"
          />
        </Experience.Company>
      </Experience>
      <Project>
        <Project.Item
          title="GPT Decoder"
          link="https://github.com/HuyNguyenAu/gpt-decoder"
          description="A Minimal GPT decoder with some optimisations"
        />
        <Project.Item
          title="Wobbly ML"
          link="https://github.com/HuyNguyenAu/wobbly-ml"
          description="A simple machine learning library"
        />
        <Project.Item
          title="Lox Crystal Lang"
          link="https://github.com/HuyNguyenAu/lox-lang-crystal"
          description="A Lox interpreter written in Crystal"
        />
      </Project>
      <Links>
        <Links.Item title="GitHub" link="https://github.com/HuyNguyenAu" />
        <Links.Item
          title="LinkedIn"
          link="https://www.linkedin.com/in/huy-nguyen-454a6016a"
        />
        <Links.Item title="Resume" link="/resume.pdf" />
      </Links>
      {/* <Experience
          startDate="October 2021"
          endDate="Present"
          company="JET Charge"
          location="Melbourne, AU"
          role="Full Stack Software Engineer"
          responsibilities={{
            "On-premise and autonomous Electric Vehicle (EV) charging load management system (CORE), developing both a user-friendly web interface and backend APIs.":
              [
                "Developed a user-friendly web interface for EV charging station management, allowing users to monitor and control their charging stations remotely.",
                "Implemented backend APIs for the web interface, enabling seamless live data updates and real-time control of charging stations.",
              ],
            "Cloud-based platform for Electric Vehicle (EV) smart-charging asset management (Illuminate): Enables efficient tracking and control of charging assets, improving operational efficiency and reducing downtime.":
              ["Fixed various bugs and issues in the existing codebase, ensuring the platform's stability and reliability."],
          }}
        />
        <Experience
          startDate="October 2020"
          endDate="October 2021"
          company="Energy Locals"
          location="Melbourne, AU"
          role="IT Specialist"
          responsibilities={[
            "Implemented specialised programs, utilising Azure services for efficient processing and management of AEMO settlements.",
            "Streamlined data management processes by implementing automated backup solutions for databases and IT systems.",
          ]}
        />
        <Experience
          startDate="September 2019"
          endDate="October 2020"
          company="Energy Locals"
          location="Melbourne, AU"
          role="Graduate IT Specialist"
          responsibilities={[
            "Creation and implementation of a customised customer sign-up journey under the umbrella of white-label branding, streamlining and enhancing user onboarding.",
            "Managed the deployment and maintenance of Virtual Private Servers (VPS), ensuring seamless functionality and system reliability.",
            "Government and business reporting tasks utilizing SQL, demonstrating a keen understanding of data management and reporting principles.",
            "Conducted the installation, testing, and configuration of IT equipment, contributing to a robust and well-functioning technological infrastructure.",
          ]}
        />
        <Experience
          startDate="March 2016"
          endDate="March 2020"
          company="RMIT"
          location="Melbourne, AU"
          role="Computer and Network Engineering (Honours)"
          responsibilities={[
            "Competed in the Telstra Innovation Challenge 2019.",
            "Volunteered for Openday.",
          ]}
        /> */}
    </div>
  );
};
