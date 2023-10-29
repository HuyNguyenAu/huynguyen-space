import Link from "next/link";

const Page = () => {
  return (
    <div className="h-full w-full border border-red-600 p-8">
      <div className="flex w-full justify-center">
        <div className="flex flex gap-x-20 w-fit border border-white rounded-lg">
          <div className="w-60 border-r border-white" />
          <div className="p-6 flex flex gap-x-20 pl-0">
            <div className="flex flex gap-x-14 items-center">
              <Link className="text-sm font-bold tracking-wide h-fit text-white transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 relative after:bg-white after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300" href="">WORKS</Link>
              <Link className="text-sm font-bold tracking-wide h-fit text-white transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 relative after:bg-white after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300" href="">ABOUT</Link>
              <Link className="text-sm font-bold tracking-wide h-fit text-white transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 relative after:bg-white after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300" href="">AWARDS</Link>
            </div>
            <div className="flex flex gap-x-2.5">
              <div className="h-8 w-8 rounded-full border transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300" />
              <div className="h-8 w-8 rounded-full border transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300" />
              <div className="h-8 w-8 rounded-full border transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
