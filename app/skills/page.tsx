const Page = () => {
  return (
    <div className="flex justify-between w-full">
      <article className="prose dark:prose-invert text-[#F9DEC9]">
        <h3>Programming Languages</h3>
        <ul>
          <li>C#</li>
          <li>Typescript</li>
          <li>JavaScript</li>
        </ul>
      </article>
      <article className="prose dark:prose-invert text-[#F9DEC9]">
        <h3>Frameworks</h3>
        <ul>
          <li>.NET 6.0</li>
          <li>React</li>
          <li>NextJS</li>
        </ul>
      </article>
      <article className="prose dark:prose-invert text-[#F9DEC9]">
        <h3>Tools</h3>
        <ul>
          <li>Docker</li>
          <li>Figma</li>
        </ul>
      </article>
      <article className="prose dark:prose-invert text-[#F9DEC9]">
        <h3>Platforms</h3>
        <ul>
          <li>Windows</li>
          <li>Linux</li>
          <li>MacOS</li>
        </ul>
      </article>
    </div>
  );
};

export default Page;
