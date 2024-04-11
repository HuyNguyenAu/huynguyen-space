import Image from "next/image";
import React from "react";

import HeroImage from "./hero.png";

const Page = () => {
  return (
    <>
      <article className="prose hidden w-full text-[#F9DEC9] dark:prose-invert max-lg:block">
        <Image
          alt=""
          className="flex w-full rounded-lg "
          placeholder="blur"
          src={HeroImage}
        />
        <h1>Huy Nguyen</h1>
        <h4>Fullstack Software Engineer</h4>
        <p>I&apos;m a curious individual and an avid learner.<br />I thrive on tackling interesting and difficult challenges.</p>
      </article>
      <div className="flex max-w-screen-2xl items-center justify-between gap-x-8 max-lg:hidden">
        <article className="prose text-[#F9DEC9] dark:prose-invert">
          <h1 className="text-white"><strong>HUY NGUYEN</strong></h1>
          <h4 className="text-white"><strong>FULLSTACK SOFTWARE ENGINEER</strong></h4>
          <p>I&apos;m a curious individual and an avid learner.<br />I thrive on tackling interesting and difficult challenges.</p>
        </article>
        <Image
          alt=""
          className="flex w-1/2 rounded-lg"
          placeholder="blur"
          src={HeroImage}
        />
      </div>
    </>
  );
};

export default Page;
