import { type PropsWithChildren } from "react";
import { Body, Heading, Link, Small } from "@/components/ui/typography";

const ExperienceItem = ({
  role,
  startDate,
  endDate,
  href,
}: {
  role: string;
  startDate: string;
  endDate: string;
  href: string;
}) => {
  return (
    <div className="flex justify-between grow">
      <Link href={href}>{role}</Link>
      <Body className="text-end">
        {startDate} - {endDate}
      </Body>
    </div>
  );
};

const Company = ({
  company,
  children,
}: PropsWithChildren<{ company: string }>) => {
  return (
    <div className="flex flex-col lg:flex-row ml-10 md:ml-20 lg:ml-0">
      <Small className="w-36 mt-2 lg:mt-3 mr-4 lg:text-end">{company}</Small>
      <div className="flex flex-col grow">{children}</div>
    </div>
  );
};

const Experience = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col my-4 mr-10 md:mr-20 lg:mr-40">
      <Heading className="mx-10 md:mx-20 lg:mx-40">/EXPERIENCE</Heading>
      {children}
    </div>
  );
};

Experience.Item = ExperienceItem;
Experience.Company = Company;

export { Experience };
