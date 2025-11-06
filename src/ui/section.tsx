import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export const Section = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={cn("flex flex-col px-10 md:px-20 lg:px-40 py-4", className)}
    >
      {children}
    </div>
  );
};
