import { Section } from "@/components/ui/section";
import { Body, Small } from "@/components/ui/typography";

export const Hero = () => {
  return (
    <>
      <Section>
        <Body className="text-primary text-base font-semibold m-0">
          Huy Nguyen
        </Body>
        <Small>Senior Full Stack .NET & React Engineer</Small>
      </Section>
      <Section>
        <Body className="m-0">
          I am a Senior Full Stack .NET & React Engineer specialising in complex
          data integrations, billing systems, and energy/EV infrastructure
          platforms. I bridge the gap between high-throughput C#/.NET backend
          architectures and fast-moving, modern user interfaces.
        </Body>
      </Section>
    </>
  );
};
