import React from "react";

const Page = () => {
  return (
    <article className="prose w-full text-[#F9DEC9] dark:prose-invert marker:text-[#F9DEC9]">
      <h2>Programming Languages</h2>
      <ul>
        <li>C#</li>
        <li>Typescript</li>
        <li>JavaScript</li>
      </ul>
      <h2>Frameworks</h2>
      <ul>
        <li>.NET 6.0</li>
        <li>React</li>
        <li>NextJS</li>
      </ul>
      <h2>Tools</h2>
      <ul>
        <li>Docker</li>
        <li>Figma</li>
      </ul>
      <h2>Platforms</h2>
      <ul>
        <li>Windows</li>
        <li>Linux</li>
        <li>MacOS</li>
      </ul>
    </article>
  );
};

export default Page;
