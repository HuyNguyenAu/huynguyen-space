import Image from "next/image";
import React from "react";

import HeroImage from "./hero.png";

const Page = () => {
  return (
    <div className="flex max-w-screen-2xl items-center justify-between">
      <div className="flex flex-col gap-y-6">
        <p className="p-1 text-xs font-bold tracking-[0.75em] text-[#F9DEC9]">FULLSTACK SOFTWARE<br/>ENGINEER</p>
        <p className="text-2xl font-bold leading-[85%] tracking-wide text-[#F9DEC9] md:text-6xl lg:text-7xl xl:text-8xl">HUY<br />NGUYEN</p>
        <article className="prose text-[#F9DEC9]">
          <p>I&apos;m a curious individual and an avid learner.<br />I thrive on tackling interesting and difficult challenges.</p>
        </article>
      </div>
      <Image
        alt=""
        className="flex w-1/2 items-center rounded-lg"
        placeholder="blur"
        src={HeroImage}
      />
    </div>
  );
};

export default Page;
