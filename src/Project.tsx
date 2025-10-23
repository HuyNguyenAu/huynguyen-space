import type { PropsWithChildren } from "react";

const ProjectItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex justify-between py-2">
      <p className="text-primary font-normal border-b border-dashed border-primary">{title}</p>
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
