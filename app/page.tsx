import Link from "next/link";

const NavigationLink = ({ text, href }: { text: string, href: string }) => {
  return (
    <Link className="text-sm font-bold tracking-wide h-fit text-white transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 relative after:bg-white after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300" href={href}>
      {text}
    </Link>
  );
};

const Logo = () => {
  return (
    <div className="w-10 p-px">
      <svg className="text-[#FF5943]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    </div>
  );
};

const Navigation = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full flex flex gap-x-18 w-fit border rounded-lg border-white rounded-lg bg-white">
        <div className="p-4 w-60 flex items-center gap-x-4 rounded-l-lg border-white">
          <Logo />
          <p className="text-xs font-bold tracking-[0.75em] text-[#FF5943]">HUY NGUYEN</p>
        </div>
        <div className="p-6 pl-20 grow flex flex gap-x-20 bg-[#FF5943] rounded-r-lg">
          <div className="grow flex flex gap-x-14 justify-center items-center">
            <NavigationLink text="About" href="" />
            <NavigationLink text="Experience" href="" />
            <NavigationLink text="Projects" href="" />
            <NavigationLink text="Skills" href="" />
            <NavigationLink text="Education" href="" />
          </div>
          <div className="flex flex gap-x-2.5">
            <div className="h-8 w-8 rounded-full border transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300" />
            <div className="h-8 w-8 rounded-full border transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300" />
            <div className="h-8 w-8 rounded-full border transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="h-screen w-screen border p-8 flex flex-col gap-y-8">
      <Navigation />
      <div className="border w-fit p-8 flex flex-col gap-y-12">
        <p className="w-fit text-center text-xs text-white font-bold tracking-[0.75em]">FULLSTACK SOFTWARE ENGINEER</p>
        <p className="w-fit text-center text-8xl text-white font-bold tracking-tight leading-[80%]">HUY<br />NGUYEN</p>
      </div>
    </div>
  );
};

export default Page;
