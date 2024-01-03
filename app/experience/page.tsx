import Divider from "./Divider";
import Item from "./Item";

const Page = () => {
  return (
    <article className="prose dark:prose-invert text-[#F9DEC9]">
      <Item title="Full Stack Software Engineer" company="JET Charge" start="Oct 2021" end="Present" items={[
        "On-premise and autonomous Electric Vehicle (EV) charging load management system, developing both a user-friendly web interface green field project and implementing backend APIs.",
        "Cloud-based platform focused on Electric Vehicle smart-charging management and optimisation. This encompassed implementing the web interface and backend APIs.",
      ]} />
      <Divider />
      <Item title="IT Specialist" company="Energy Locals" start="Sep 2020" end="Oct 2021" items={[
        "Implemented specialised programs, utilising Azure services for efficient processing and management of AEMO settlements.",
        "Streamlined data management processes by implementing automated backup solutions for databases and IT systems.",
      ]} />
      <Divider />
      <Item title="Graduate IT Specialist" company="Energy Locals" start="Sep 2019" end="Oct 2020" items={[
        "Creation and implementation of a customized customer sign-up journey under the umbrella of white-label branding, streamlining and enhancing user onboarding.",
        "Managed the deployment and maintenance of Virtual Private Servers (VPS), ensuring seamless functionality and system reliability.",
        "Government and business reporting tasks utilizing SQL, demonstrating a keen understanding of data management and reporting principles.",
        "Conducted the installation, testing, and configuration of IT equipment, contributing to a robust and well-functioning technological infrastructure.",
      ]} />
    </article>
  );
};

export default Page;
