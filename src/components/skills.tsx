import { Section } from "@/components/ui/section";
import { Body, Heading } from "@/components/ui/typography";

export const Skills = () => {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
      <div>
        <Heading>CORE BACKEND ARCHITECTURE</Heading>
        <Body className="m-0 mt-2">.NET</Body>
        <Body className="m-0 mt-2">C#</Body>
        <Body className="m-0 mt-2">SQL</Body>
      </div>

      <div>
        <Heading className="md:text-center">MODERN UI ENGINEERING</Heading>
        <Body className="md:text-center m-0 mt-2">TypeScript</Body>
        <Body className="md:text-center m-0 mt-2">React</Body>
        <Body className="md:text-center m-0 mt-2">Next.js</Body>
      </div>

      <div>
        <Heading className="md:text-end">CLOUD / AUTOMATION</Heading>
        <Body className="md:text-end m-0 mt-2">Azure</Body>
        <Body className="md:text-end m-0 mt-2">GitHub Actions</Body>
        <Body className="md:text-end m-0 mt-2">Bicep / Linux</Body>
      </div>
    </Section>
  );
};
