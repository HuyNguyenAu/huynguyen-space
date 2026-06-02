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
    <p className={cn("text-primary font-serif text-base font-semibold tracking-tight uppercase border-b border-primary/20 pb-1 mb-2", className)}>
      {children}
    </p>
  );
};

export const Body = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <p className={cn("my-2 text-primary text-base leading-relaxed", className)}>{children}</p>
  );
};

export const Small = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <p className={cn("text-secondary text-sm font-normal leading-relaxed", className)}>
      {children}
    </p>
  );
};
