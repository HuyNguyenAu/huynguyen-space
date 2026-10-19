import type { PropsWithChildren } from "react";
import { Link } from "@/components/link";
import { Masthead } from "@/components/masthead";

export type Figure = { value: string; caption: string };

export const Article = ({
  section,
  kicker,
  title,
  stack,
  figures,
  children,
}: PropsWithChildren<{
  section: "Commercial Projects" | "Professional Experience";
  kicker: string;
  title: string;
  stack: string;
  figures?: Figure[];
}>) => {
  return (
    <div className="mx-auto max-w-3xl">
      <header>
        <Masthead left={<Link href="/">← Front page</Link>} center={section} />
      </header>
      <header className="mt-8 border-b-4 border-double border-primary pb-4">
        <p className="kicker text-sm">{kicker}</p>
        <h1 className="display mt-1 text-[clamp(2.25rem,6vw,3.75rem)] font-black">
          {title}
        </h1>
        <p className="kicker mt-3 text-sm">{stack}</p>
      </header>
      {figures && <Figures figures={figures} />}
      <article className="mt-8 space-y-6 text-lg/[1.78] hyphens-auto">
        {children}
      </article>
    </div>
  );
};

// Problem, solution, result: one paragraph each.
export const Summary = ({ children }: PropsWithChildren) => {
  return (
    <blockquote className="space-y-6 border-b-4 border-double border-primary pb-4 text-[1.15em] italic">
      {children}
    </blockquote>
  );
};

export const Section = ({
  title,
  children,
}: PropsWithChildren<{ title: string }>) => {
  return (
    <section className="mt-10 space-y-6">
      <h4 className="mb-3 border-b border-primary pb-[0.3rem] font-display text-[1.75rem]/[1.15] font-bold">
        {title}
      </h4>
      {children}
    </section>
  );
};

// Opening paragraph, set with a drop cap.
export const Lede = ({ children }: PropsWithChildren) => {
  return (
    <p className="first-letter:float-left first-letter:mt-[0.06em] first-letter:mr-[0.08em] first-letter:font-display first-letter:text-[3.6em]/[0.8] first-letter:font-black">
      {children}
    </p>
  );
};

export const List = ({ children }: PropsWithChildren) => {
  return <ul className="list-disc space-y-3 pl-7">{children}</ul>;
};

export const Item = ({
  title,
  children,
}: PropsWithChildren<{ title?: string }>) => {
  return (
    <li className="pl-2">
      {title && <strong className="font-semibold">{title}: </strong>}
      {children}
    </li>
  );
};

// `src` is a file name in /public.
export const Diagram = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <figure>
      <img
        src={`${import.meta.env.BASE_URL}${src}`}
        alt={alt}
        className="mx-auto max-h-[600px] mix-blend-multiply grayscale"
        loading="lazy"
      />
    </figure>
  );
};

export const FullStory = ({ href, title }: { href: string; title: string }) => {
  return (
    <p className="pl-9 text-base text-secondary italic">
      Continued in <Link href={href}>{title} →</Link>
    </p>
  );
};

const Figures = ({ figures }: { figures: Figure[] }) => {
  return (
    <div className="border-b-4 border-double border-primary">
      <dl className="grid grid-cols-2 gap-px bg-primary">
        {figures.map(({ value, caption }) => (
          <div key={value} className="bg-background px-4 py-5 text-center">
            <dt className="display text-2xl font-black sm:text-4xl">{value}</dt>
            <dd className="kicker mt-1 text-sm">{caption}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
