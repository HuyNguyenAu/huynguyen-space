import Image from "next/image";
import HeroImage from "./hero.png";

const Page = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-y-10">
        <p className="p-1 text-xs text-[#F9DEC9] font-bold tracking-[0.75em]">FULLSTACK SOFTWARE<br/>ENGINEER</p>
        <p className="text-2xl md:text-6xl lg:text-7xl xl:text-8xl text-[#F9DEC9] font-bold tracking-wide leading-[85%]">HUY<br />NGUYEN</p>
        <article className="prose text-[#F9DEC9]">
          <p>I&apos;m a curious individual and an avid learner.<br />I thrive on tackling interesting and difficult challenges.</p>
        </article>
      </div>
      <Image
        className="w-1/2 rounded-lg flex items-center"
        src={HeroImage}
        placeholder="blur"
        alt=""
      />
    </div>
  );
};

export default Page;
