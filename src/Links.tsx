import type { PropsWithChildren } from "react";

const LinksItem = ({ title, link }: { title: string; link: string }) => {
  return (
    <div className="flex justify-between py-2">
      <a
        className="text-primary font-normal border-b border-dashed border-primary cursor-pointer hover:bg-tertiary"
        href={link}
      >
        {title}
      </a>
    </div>
  );
};

const Links = ({ children }: PropsWithChildren) => {
  return (
    <article className="flex flex-col px-40 py-4">
      <p className="text-primary text-sm font-normal">/LINKS</p>
      <div className="flex justify-between">{children}</div>
    </article>
  );
};

Links.Item = LinksItem;

export { Links };
