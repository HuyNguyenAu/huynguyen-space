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
    <div className="flex justify-between py-2">
      <a className="text-primary font-normal border-b border-dashed border-primary cursor-pointer hover:bg-tertiary" href={link}>{title}</a>
      <p className="text-primary font-normal">{description}</p>
    </div>
  );
};

const Project = ({ children }: PropsWithChildren) => {
  return (
    <article className="flex flex-col px-40 py-4">
      <p className="text-primary text-sm font-normal">/SIDE PROJECTS</p>
      {children}
    </article>
  );
};

Project.Item = ProjectItem;

export { Project };
