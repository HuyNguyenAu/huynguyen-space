import type { ElementType, PropsWithChildren } from "react";
import { Heading, Link } from "@/components/ui/typography";
import { Section } from "@/components/ui/section";

const Item = ({
  title,
  href,
  as,
}: {
  title: string;
  href: string;
  as?: ElementType;
}) => {
  return (
    <Link href={href} as={as}>
      {title}
    </Link>
  );
};

const Links = ({ children }: PropsWithChildren) => {
  return (
    <Section>
      <Heading>LINKS</Heading>
      <div className="flex flex-wrap justify-between gap-y-2">{children}</div>
    </Section>
  );
};

Links.Item = Item;

export { Links };
