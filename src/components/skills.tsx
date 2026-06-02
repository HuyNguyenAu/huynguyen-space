import { Section } from "@/components/ui/section";
import { Body, Heading } from "@/components/ui/typography";

export const Skills = () => {
  return (
    <Section className="grid grid-cols-3">
      <Heading>CODE</Heading>
      <Heading className="text-center">FRAMEWORKS</Heading>
      <Heading className="text-end">PLATFORMS</Heading>

      <Body className="m-0 mt-2">C#</Body>
      <Body className="text-center m-0 mt-2">.NET 6.0</Body>
      <Body className="text-end m-0 mt-2">Windows</Body>

      <Body className="m-0 mt-2">Typescript</Body>
      <Body className="text-center m-0 mt-2">React</Body>
      <Body className="text-end m-0 mt-2">Linux</Body>

      <Body className="m-0 mt-2">Javascript</Body>
      <Body className="text-center m-0 mt-2">NextJS</Body>
      <Body className="text-end m-0 mt-2">MacOS</Body>
    </Section>
  );
};
