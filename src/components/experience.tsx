import { type PropsWithChildren } from "react";
import { Body, Heading, Link, Small } from "@/components/ui/typography";
import { Section } from "@/components/ui/section";

const ExperienceItem = ({
  company,
  role,
  startDate,
  endDate,
  href,
}: {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  href: string;
}) => {
  return (
    <>
      <Link className="mt-2 mb-0 md:m-0" href={href}>
        {role}
      </Link>
      <div>
        <Body className="text-start md:text-end m-0 md:mb-0">
          {startDate} - {endDate}
        </Body>
        <Small className="text-start md:text-end m-0">{company}</Small>
      </div>
    </>
  );
};

const Experience = ({ children }: PropsWithChildren) => {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-[auto_1fr]">
      <Heading className="m-0 md:mb-2 md:col-span-2">EXPERIENCE</Heading>
      {children}
    </Section>
  );
};

Experience.Item = ExperienceItem;

export { Experience };
