import React from "react";

const Page = () => {
  return (
    <article className="prose text-[#F9DEC9] dark:prose-invert marker:text-[#F9DEC9]">
      <h2>Full Stack Software Engineer</h2>
      <h4>Oct 2021 - Present</h4>
      <p>JET Charge</p>
      <ul>
        <li>On-premise and autonomous Electric Vehicle (EV) charging load management system, developing both a user-friendly web interface and backend APIs.
          <ul>
            <li>Developed a user-friendly web interface for EV charging station management, allowing users to monitor and control their charging stations remotely.</li>
            <li>Implemented backend APIs for the web interface, enabling seamless live data updates and real-time control of charging stations.</li>
          </ul>
        </li>
       <li>Cloud-based platform for Electric Vehicle (EV) smart-charging asset management: Enables efficient tracking and control of charging assets, improving operational efficiency and reducing downtime.
          <ul>
            <li>Fixed various bugs and issues in the existing codebase, ensuring the platform&apos;s stability and reliability.</li>
          </ul>
       </li>
      </ul>

      <h2>IT Specialist</h2>
      <h4>Sep 2020 - Oct 2021</h4>
      <p>Energy Locals</p>
      <ul>
        <li>Implemented specialised programs, utilising Azure services for efficient processing and management of AEMO settlements.</li>
        <li>Streamlined data management processes by implementing automated backup solutions for databases and IT systems.</li>
      </ul>

      <h2>Graduate IT Specialist</h2>
      <h4>Sep 2019 - Oct 2020</h4>
      <p>Energy Locals</p>
      <ul>
        <li>Creation and implementation of a customized customer sign-up journey under the umbrella of white-label branding, streamlining and enhancing user onboarding.</li>
        <li>Managed the deployment and maintenance of Virtual Private Servers (VPS), ensuring seamless functionality and system reliability.</li>
        <li>Government and business reporting tasks utilizing SQL, demonstrating a keen understanding of data management and reporting principles.</li>
        <li>Conducted the installation, testing, and configuration of IT equipment, contributing to a robust and well-functioning technological infrastructure.</li>
      </ul>
    </article>
  );
};

export default Page;
