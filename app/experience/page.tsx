const Page = () => {
  return (
    <>
      <div className="h-full w-fit flex items-center gap-8">
        <div className="p-4 border rounded-lg border-[#F9DEC9] rounded-lg">
          <p className="p-1 w-fit font-bold text-[#F9DEC9]">Full Stack Software Engineer @ JET Charge</p>
          <p className="p-1 w-fit text-sm text-[#F9DEC9]">Oct 2021 - Present</p>
          <ul className="list-disc list-inside">
            <li className="p-1 text-[#F9DEC9]">Development of on-premise and autonomous EV charging load management system and web interface.</li>
            <li className="p-1 text-[#F9DEC9]">Development of cloud platform EV smart-charging management and optimisation system.</li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg border-[#F9DEC9] rounded-lg">
          <p className="p-1 w-fit font-bold text-[#F9DEC9]">IT Specialist @ Energy Locals</p>
          <p className="p-1 w-fit text-sm text-[#F9DEC9]">Sep 2020 - Oct 2021</p>
          <ul className="list-disc list-inside">
            <li className="p-1 text-[#F9DEC9]">Developed programs and deployed Azure services to process and handle AEMO settlements.</li>
            <li className="p-1 text-[#F9DEC9]">Automated backups of databases and IT systems.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;
