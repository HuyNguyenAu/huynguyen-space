import { Section } from "@/ui/section";
import { Body, Small } from "@/ui/typography";

export const Hero = () => {
  return (
    <>
      <Section>
        <Body className="m-0">Huy Nguyen</Body>
        <Small>Software Engineer</Small>
      </Section>
      <Section>
        <Body>Building software with only one core principle:</Body>
        <Body className="m-0">
          "You got to start with the customer experience and work backwards to
          the technology."
        </Body>
        <Small>Steve Jobs</Small>
      </Section>
    </>
  );
};
