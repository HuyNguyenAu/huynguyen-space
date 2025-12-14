import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { Link as ReactLink } from "react-router";

export const Link = ({
  className,
  href,
  as = ReactLink,
  children,
}: PropsWithChildren<{
  className?: string;
  href: string;
  as?: React.ElementType;
}>) => {
  if (as === ReactLink) {
    return (
      <ReactLink
        className={cn(
          "my-2 size-fit text-primary font-normal transition-all underline underline-offset-6 decoration-dashed decoration-[0.667px] hover:bg-tertiary",
          className
        )}
        to={href}
      >
        {children}
      </ReactLink>
    );
  }

  return (
    <a
      className={cn(
        "my-2 size-fit text-primary font-normal transition-all underline underline-offset-6 decoration-dashed decoration-[0.667px] hover:bg-tertiary",
        className
      )}
      href={href}
    >
      {children}
    </a>
  );
};

export const Heading = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <p className={cn("text-primary text-sm font-normal", className)}>
      {children}
    </p>
  );
};

export const Body = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <p className={cn("my-2 text-primary font-normal", className)}>{children}</p>
  );
};

export const Small = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <p className={cn("text-secondary text-sm font-normal", className)}>
      {children}
    </p>
  );
};
