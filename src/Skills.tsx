export const Skills = () => {
  return (
    <article className="flex flex-col px-10 md:px-20 lg:px-40 py-4">
      <div className="grid grid-cols-3">
        <div>
          <p className="text-primary text-sm font-normal">/CODE</p>
          <p className="text-primary font-normal py-2">C#</p>
          <p className="text-primary font-normal py-2">Typescript</p>
          <p className="text-primary font-normal py-2">Javascript</p>
        </div>
        <div className="text-center">
          <p className="text-primary text-sm font-normal">/FRAMEWORKS</p>
          <p className="text-primary font-normal py-2">.NET 6.0</p>
          <p className="text-primary font-normal py-2">React</p>
          <p className="text-primary font-normal py-2">NextJS</p>
        </div>
        <div className="text-end">
          <p className="text-primary text-sm font-normal">/PLATFORMS</p>
          <p className="text-primary font-normal py-2">Windows</p>
          <p className="text-primary font-normal py-2">Linux</p>
          <p className="text-primary font-normal py-2">MacOS</p>
        </div>
      </div>
    </article>
  );
};
