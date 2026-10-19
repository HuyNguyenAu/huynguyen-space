import type { ReactNode } from "react";

export const Masthead = ({
  left,
  center,
}: {
  left: ReactNode;
  center: ReactNode;
}) => {
  return (
    <div className="kicker grid grid-cols-2 gap-x-4 gap-y-1 border-b border-primary pb-2 text-sm sm:grid-cols-3">
      {left}
      <div className="order-last col-span-2 flex justify-center sm:order-0 sm:col-span-1">
        {center}
      </div>
      <span className="text-right">{today}</span>
    </div>
  );
};

const today = new Date().toLocaleDateString("en-AU", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});
