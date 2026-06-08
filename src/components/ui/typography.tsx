import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { Link as ReactLink } from "react-router";

export const Link = ({
  className,
  href,
  internal,
  children,
}: PropsWithChildren<{
  className?: string;
  href: string;
  internal?: boolean;
}>) => {
  const classNames = cn(
    "transition-all duration-200 underline underline-offset-4 decoration-[1px] decoration-stone-400/50 hover:decoration-stone-900 hover:bg-stone-200/50 text-stone-900 font-medium",
    className,
  );

  if (internal) {
    return (
      <ReactLink className={classNames} to={href}>
        {children}
      </ReactLink>
    );
  }

  return (
    <a className={classNames} href={href}>
      {children}
    </a>
  );
};
