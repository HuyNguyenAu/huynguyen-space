import { Link } from "@/components/ui/typography";
import type { PropsWithChildren } from "react";

export const Article = ({
  hideHome,
  children,
}: PropsWithChildren<{ hideHome?: boolean }>) => {
  return (
    <article className="prose mx-auto max-w-4xl">
      {!hideHome && (
        <Link href="/" internal={true}>
          Home
        </Link>
      )}
      {children}
    </article>
  );
};
