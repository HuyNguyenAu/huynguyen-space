import { Section } from "@/components/ui/section";
import { Link } from "@/components/ui/typography";
import type { PropsWithChildren } from "react";

export const Article = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Section>
        <Link className="m-0" href="/">
          Home
        </Link>
      </Section>
      <Section>
        <article className="prose">{children}</article>
      </Section>
    </>
  );
};
