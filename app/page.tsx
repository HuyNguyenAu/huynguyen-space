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
      <svg className="text-[#FF5943] p-2 border border-2 border-[#FF5943] rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
        <polyline points="4 17 10 11 4 5"></polyline>
        <line x1="12" y1="19" x2="20" y2="19"></line>
      </svg>
    </div>
  );
};

const Navigation = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex gap-x-18 w-fit border rounded-lg border-white rounded-lg bg-white">
        <div className="p-4 w-60 flex items-center gap-x-4 rounded-l-lg border-white">
          <Logo />
          <p className="text-xs font-bold tracking-[0.75em] text-[#FF5943]">HUY NGUYEN</p>
        </div>
        <div className="p-6 pl-20 flex flex gap-x-20 bg-[#FF5943] rounded-r-lg">
          <div className="flex flex gap-x-14 items-center">
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
    <div className="h-full w-full border p-8">
      <Navigation />
    </div>
  );
};

export default Page;
