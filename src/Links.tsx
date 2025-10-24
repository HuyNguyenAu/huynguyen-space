import type { PropsWithChildren } from "react";

const LinksItem = ({ title, link }: { title: string; link: string }) => {
  return (
    <div className="flex justify-between py-2 gap-3">
      <a
        className="transition-all h-fit text-primary font-normal underline underline-offset-6 decoration-dashed decoration-[0.667px] cursor-pointer hover:bg-tertiary"
        href={link}
      >
        {title}
      </a>
    </div>
  );
};

const Links = ({ children }: PropsWithChildren) => {
  return (
    <article className="flex flex-col px-10 md:px-20 lg:px-40 py-4">
      <p className="text-primary text-sm font-normal">/LINKS</p>
      <div className="flex justify-between">{children}</div>
    </article>
  );
};

Links.Item = LinksItem;

export { Links };
