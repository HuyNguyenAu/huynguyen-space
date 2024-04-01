import Link from "next/link";

const Page = () => {
  return (
    <article className="prose dark:prose-invert text-[#F9DEC9] w-full">
      <p>
        In my current role as a Software Engineer at JET Charge, I actively contribute to a dynamic team dedicated to advancing the groundbreaking <Link className="underline" href="https://jetcharge.com.au/solutions/core/">Energy Management System (JET Charge CORE)</Link> project.
      </p>
      <p>
        My expertise spans both frontend and backend development, allowing me to play a pivotal role in shaping the future.
      </p>
      <p>
        I believe the main focus should always be:
        <blockquote>How does this design and decision impact the user experience and journey?</blockquote>
        As Steve Jobs wisely said:
      </p>
      <blockquote><strong>&quot;You got to start with the customer experience and work backwards to the technology.&quot;</strong></blockquote>
      <p>
        This philosophy is at the core of my approach for creating impactful and user-centric solutions.
      </p>
    </article>
  );
};

export default Page;
