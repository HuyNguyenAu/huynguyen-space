import type { PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router";

// Paths starting with "/" are app routes; everything else is a plain anchor.
export const Link = ({
  href,
  children,
}: PropsWithChildren<{ href: string }>) => {
  if (href.startsWith("/")) {
    return (
      <RouterLink className={className} to={href}>
        {children}
      </RouterLink>
    );
  }

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};

// E-ink does not animate: links invert instantly instead of fading.
const className =
  "text-inherit font-[inherit] underline decoration-1 underline-offset-[0.18em] hover:bg-primary hover:text-background hover:no-underline focus-visible:bg-primary focus-visible:text-background focus-visible:no-underline focus-visible:outline-none";
