import { Children, type PropsWithChildren } from "react";

const ExperienceItem = ({
  role,
  startDate,
  endDate,
}: {
  role: string;
  startDate: string;
  endDate: string;
}) => {
  return (
    <div className="flex justify-between py-2">
      <p className="text-primary font-normal border-b border-dashed border-primary">
        {role}
      </p>
      <p className="text-primary font-normal">
        {startDate} - {endDate}
      </p>
    </div>
  );
};

const Company = ({
  company,
  children,
}: PropsWithChildren<{ company: string }>) => {
  return Children.map(children, (child, index) => (
    <>
      <p className="text-primary font-normal text-end w-40 py-2 pr-8">
        {index == 0 ? company : undefined}
      </p>
      {child}
    </>
  ));
};

const Experience = ({ children }: PropsWithChildren) => {
  {
    /* <p className="text-primary m-0">{role}</p> */
  }
  {
    /* <p className="text-primary m-0">
          
        </p>
        <p className="text-secondary">
          
        </p>
      </article>
      <article className="prose">
        {Array.isArray(responsibilities) ? (
          <ul>
            {responsibilities.map((item, index) => (
              <li key={index} className="text-primary">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {Object.entries(responsibilities).map(([key, values]) => (
              <li key={key}>
                <p>{key}</p>
                <ul>
                  {values.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )} */
  }
  return (
    <article className="flex flex-col py-4 pr-40">
      <p className="text-primary text-sm font-normal px-40">/WORK</p>
      <div className="grid grid-cols-[auto_1fr]">{children}</div>
    </article>
  );
};

Experience.Item = ExperienceItem;
Experience.Company = Company;

export { Experience };
