import { Layout } from "@/components/layout";
import { Section } from "@/ui/section";
import { Link } from "@/ui/typography";
import type { PropsWithChildren } from "react";

export const ArticlePage = ({ children }: PropsWithChildren) => {
  return (
    <Layout>
      <Section>
        <Link className="m-0 mt-2 md:my-2" href="/">
          Home
        </Link>
      </Section>
      <Section>
        <article className="prose">{children}</article>
      </Section>
    </Layout>
  );
};
