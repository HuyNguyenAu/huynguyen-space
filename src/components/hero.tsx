import { Section } from "@/components/ui/section";
import { Body, Small } from "@/components/ui/typography";

export const Hero = () => {
  return (
    <>
      <Section>
        <Body className="m-0">Huy Nguyen</Body>
        <Small>Full-Stack Engineer</Small>
      </Section>
      <Section>
        <Body className="m-0">
          I am a Full-Stack Engineer specialising in high-throughput C#/.NET backend architectures, relational data modeling, and modern React interfaces for complex, compliance-driven industries. I bridge the gap between heavy enterprise backend architecture and fast-moving, modern user interfaces.
        </Body>
        <Body>Building software, I only follow one core principle:</Body>
        <Body className="m-0">
          "You've got to start with the customer experience and work backwards
          to the technology."
        </Body>
        <Small>Steve Jobs</Small>
      </Section>
    </>
  );
};
