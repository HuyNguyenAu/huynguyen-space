import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { Link as ReactLink } from "react-router";

export const Link = ({
  className,
  href,
  reactLink,
  children,
}: PropsWithChildren<{
  className?: string;
  href: string;
  reactLink?: boolean;
}>) => {
  const classNames = cn(
    "w-fit transition-all underline underline-offset-6 decoration-dashed decoration-[0.667px] hover:bg-tertiary",
    className,
  );

  if (reactLink) {
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
