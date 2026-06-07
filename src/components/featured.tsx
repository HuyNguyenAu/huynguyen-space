import type { PropsWithChildren } from "react";
import { Body, Heading, Link, Small } from "@/components/ui/typography";
import { Section } from "@/components/ui/section";

const Item = ({
  title,
  subtitle,
  description,
  href,
}: {
  title: string;
  subtitle: string;
  description: string;
  href: string;
}) => {
  return (
    <>
      <div className="flex flex-col">
        <Link className="mt-2 mb-0 md:m-0" href={href}>
          {title}
        </Link>
        <Small className="text-secondary italic m-0">{subtitle}</Small>
      </div>
      <div>
        <Body className="text-start md:text-end m-0 md:mb-0">
          {description}
        </Body>
      </div>
    </>
  );
};

const Featured = ({ children }: PropsWithChildren) => {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-y-4 md:gap-y-2">
      <Heading className="m-0 md:mb-2 md:col-span-2">
        FEATURED
      </Heading>
      {children}
    </Section>
  );
};

Featured.Item = Item;

export { Featured };
