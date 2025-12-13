import { Section } from "@/components/ui/section";
import { Body, Small } from "@/components/ui/typography";

export const Hero = () => {
  return (
    <>
      <Section>
        <Body className="m-0">Huy Nguyen</Body>
        <Small>Software Engineer</Small>
      </Section>
      <Section>
        <Body>
          Hello, I thrive on tackling interesting and difficult challenges. Over
          the years, I have built a diverse range of software solutions, from
          web and APIs to billing systems and AEMO integrations.
        </Body>
        <Body>Building software, I only follow one core principle:</Body>
        <Body className="m-0">
          "You got to start with the customer experience and work backwards to
          the technology."
        </Body>
        <Small>Steve Jobs</Small>
      </Section>
    </>
  );
};
