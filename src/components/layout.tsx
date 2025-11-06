import type { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col mx-auto py-5 lg:py-10 lg:px-20 max-w-7xl font-mono">
      {children}
    </div>
  );
};
