import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export const Link = ({
  className,
  href,
  children,
}: PropsWithChildren<{ className?: string; href: string }>) => {
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
