import type { PropsWithChildren } from "react";
import { Heading, Link } from "@/ui/typography";
import { Section } from "@/ui/section";

const Item = ({ title, href }: { title: string; href: string }) => {
  return <Link href={href}>{title}</Link>;
};

const Links = ({ children }: PropsWithChildren) => {
  return (
    <Section>
      <Heading>/LINKS</Heading>
      <div className="flex justify-between">{children}</div>
    </Section>
  );
};

Links.Item = Item;

export { Links };
