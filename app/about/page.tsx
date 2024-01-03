import Link from "next/link";

const Page = () => {
  return (
    <div className="p-8 flex flex-col gap-y-6">
      <p className="p-1 w-fit text-lg text-[#F9DEC9]">
        In my current role as a Software Engineer at JET Charge, I actively contribute to a dynamic team dedicated to advancing the groundbreaking <Link className="underline" href="https://jetcharge.com.au/solutions/core/">Energy Management System (JET Charge CORE)</Link> project.
        My expertise spans both frontend and backend development, allowing me to play a pivotal role in shaping the future of EV charging and energy management.</p>
      <p className="p-1 w-fit text-lg text-[#F9DEC9]">
        My main focus is always how does this design and decision impact the user experience and journey.
        As Steve Jobs wisely said, <b>&quot;You got to start with the customer experience and work backwards to the technology&quot;</b>.
        This philosophy is at the core of my approach for creating impactful and user-centric solutions.</p>
    </div>
  );
};

export default Page;
