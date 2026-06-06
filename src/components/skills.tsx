import { Section } from "@/components/ui/section";
import { Body, Heading } from "@/components/ui/typography";

export const Skills = () => {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
      <div>
        <Heading>CODE</Heading>
        <Body className="m-0 mt-2">C#</Body>
        <Body className="m-0 mt-2">Typescript</Body>
        <Body className="m-0 mt-2">SQL</Body>
        <Body className="m-0 mt-2">Bicep</Body>
      </div>

      <div>
        <Heading className="md:text-center">FRAMEWORKS</Heading>
        <Body className="md:text-center m-0 mt-2">.NET</Body>
        <Body className="md:text-center m-0 mt-2">React</Body>
      </div>

      <div>
        <Heading className="md:text-end">PLATFORMS</Heading>
        <Body className="md:text-end m-0 mt-2">Azure</Body>
        <Body className="md:text-end m-0 mt-2">GitHub Actions</Body>
        <Body className="md:text-end m-0 mt-2">Azure DevOps</Body>
      </div>
    </Section>
  );
};
