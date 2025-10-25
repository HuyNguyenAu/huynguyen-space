import { type PropsWithChildren } from "react";
import { Body, Heading, Link, Small } from "./ui/typography";

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
    <div className="flex justify-between grow">
      <Link className="" href="">{role}</Link>
      <Body className="text-end">
        {startDate} - {endDate}
      </Body>
    </div>
  );
};

const Company = ({
  company,
  children,
}: PropsWithChildren<{ company: string }>) => {
  return (
    <div className="flex flex-col lg:flex-row ml-10 md:ml-20 lg:ml-0">
      <Small className="w-36 mt-2 lg:mt-3 mr-4 lg:text-end">{company}</Small>
      <div className="flex flex-col grow">{children}</div>
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
    <div className="flex flex-col my-4 mr-10 md:mr-20 lg:mr-40">
      <Heading className="mx-10 md:mx-20 lg:mx-40">/EXPERIENCE</Heading>
      {children}
    </div>
  );
};

Experience.Item = ExperienceItem;
Experience.Company = Company;

export { Experience };
