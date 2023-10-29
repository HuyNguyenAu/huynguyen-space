import Image from "next/image";
import HeroImage from "../hero.png";

const Leading = () => {
  return (
    <div className="h-full w-fit flex items-center">
      <div className="w-fit p-8 flex flex-col gap-y-12">
        <p className="p-1 w-fit text-center text-xs text-[#F9DEC9] font-bold tracking-[0.75em]">FULLSTACK SOFTWARE ENGINEER</p>
        <p className="w-fit text-8xl text-[#F9DEC9] font-bold tracking-wide leading-[85%]">HUY<br />NGUYEN</p>
        <p className="p-1 w-fit text-xs text-[#F9DEC9]">I'm a curious individual and an avid learner.<br />I thrive on tackling interesting and difficult challenges.</p>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <>
      <Leading />
      <Image
        className="w-1/2 rounded-lg flex items-center"
        src={HeroImage}
        placeholder="blur"
        alt=""
      />
    </>
  );
};

export default Page;
