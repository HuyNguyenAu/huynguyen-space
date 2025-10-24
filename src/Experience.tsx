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
    <div className="flex justify-between grow py-2 gap-3">
      <p className="transition-all h-fit text-primary font-normal underline underline-offset-6 decoration-dashed decoration-[0.667px] cursor-pointer hover:bg-tertiary">
        {role}
      </p>
      <p className="text-primary font-normal text-end">
        {startDate} - {endDate}
      </p>
    </div>
  );
};

const Company = ({
  company,
  children,
}: PropsWithChildren<{ company: string }>) => {
  return (
    <div className="flex flex-col lg:flex-row pl-10 md:pl-20 lg:pl-0">
      <div className="flex py-2 md:mt-0.5">
        <p className="text-secondary text-sm font-normal w-40 pr-4 lg:text-end">
          {company}
        </p>
      </div>
      <div className="flex flex-col grow">
        {children}
      </div>
    </div>
  );
  // return Children.map(children, (child, index) => (
  //   <div className="flex flex-col lg:flex-row pl-10 md:pl-20 md:py-2">
  //     {index === 0 && (
  //       <div className="flex items-center">
  //         <p className="text-secondary text-sm font-normal w-40 pr-8 lg:text-end">
  //           {company}
  //         </p>
  //       </div>
  //     )}
  //     {child}
  //   </div>
  // ));
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
    <article className="flex flex-col py-4 pr-10 md:pr-20 lg:pr-40">
      <p className="text-primary text-sm font-normal px-10 md:px-20 lg:px-40">
        /EXPERIENCE
      </p>
      {children}
    </article>
  );
};

Experience.Item = ExperienceItem;
Experience.Company = Company;

export { Experience };
