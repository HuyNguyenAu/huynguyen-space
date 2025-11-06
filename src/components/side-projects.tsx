import type { PropsWithChildren } from "react";
import { Body, Heading, Link } from "@/ui/typography";
import { Section } from "@/ui/section";

const Item = ({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) => {
  return (
    <>
      <Link className="m-0 mt-2 md:my-2" href={href}>
        {title}
      </Link>
      <Body className="m-0 md:my-2 md:text-end">{description}</Body>
    </>
  );
};

const SideProjects = ({ children }: PropsWithChildren) => {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-[auto_1fr]">
      <Heading className="md:col-span-2">/SIDE PROJECTS</Heading>
      {children}
    </Section>
  );
};

SideProjects.Item = Item;

export { SideProjects };
