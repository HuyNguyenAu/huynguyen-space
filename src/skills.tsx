import { Section } from "@/ui/section";
import { Body, Heading } from "@/ui/typography";

export const Skills = () => {
  return (
    <Section className="grid grid-cols-3">
      <Heading>/CODE</Heading>
      <Heading className="text-center">/FRAMEWORKS</Heading>
      <Heading className="text-end">/PLATFORMS</Heading>

      <Body>C#</Body>
      <Body className="text-center">.NET 6.0</Body>
      <Body className="text-end">Windows</Body>

      <Body>Typescript</Body>
      <Body className="text-center">React</Body>
      <Body className="text-end">Linux</Body>

      <Body>Javascript</Body>
      <Body className="text-center">NextJS</Body>
      <Body className="text-end">MacOS</Body>
    </Section>
  );
};
