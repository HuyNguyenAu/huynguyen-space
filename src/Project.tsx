import type { PropsWithChildren } from "react";

const ProjectItem = ({
  title,
  link,
  description,
}: {
  title: string;
  link: string;
  description: string;
}) => {
  return (
    <div className="flex justify-between py-2 flex-col md:flex-row">
      <a className="transition-all size-fit text-primary font-normal underline underline-offset-6 decoration-dashed decoration-[0.667px] cursor-pointer hover:bg-tertiary" href={link}>{title}</a>
      <p className="text-primary font-normal">{description}</p>
    </div>
  );
};

const Project = ({ children }: PropsWithChildren) => {
  return (
    <article className="flex flex-col px-10 md:px-20 lg:px-40 py-4">
      <p className="text-primary text-sm font-normal">/SIDE PROJECTS</p>
      {children}
    </article>
  );
};

Project.Item = ProjectItem;

export { Project };
