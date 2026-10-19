import type { PropsWithChildren } from "react";
import { Lede, type Figure } from "@/components/article";
import { Link } from "@/components/link";

type StoryProps = PropsWithChildren<{
  kicker: string;
  title: string;
  href: string;
  stack: string;
  figure: Figure;
}>;

// Desktop layouts add `lg:` overrides through `className`.
export const SectionHeading = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <h2
      className={`display border-b border-primary pb-2 text-center text-3xl font-bold sm:text-4xl ${className ?? ""}`}
    >
      {children}
    </h2>
  );
};

// The front page's main commercial project.
export const LeadStory = ({
  kicker,
  title,
  href,
  stack,
  figure,
  children,
}: StoryProps) => {
  return (
    <article className="py-6 lg:col-span-8 lg:pr-8">
      <p className="kicker text-sm">{kicker}</p>
      <h2 className="display mt-1 text-4xl font-black sm:text-5xl lg:text-6xl">
        <Link href={href}>{title}</Link>
      </h2>
      <p className="kicker mt-3 text-sm">{stack}</p>
      <div className="mt-5 grid gap-6 sm:grid-cols-[1fr_15rem]">
        <div className="text-xl text-pretty hyphens-auto">
          <Lede>{children}</Lede>
        </div>
        <figure className="self-start border-y-4 border-double border-primary py-3 text-center">
          <p className="display text-3xl font-black whitespace-nowrap">
            {figure.value}
          </p>
          <figcaption className="kicker mt-1 text-sm">
            {figure.caption}
          </figcaption>
        </figure>
      </div>
    </article>
  );
};

// A secondary commercial project, laid out in columns.
export const Story = ({
  kicker,
  title,
  href,
  stack,
  figure,
  children,
}: StoryProps) => {
  return (
    <article className="flex flex-col py-6 md:px-8 md:first:pl-0 md:last:pr-0">
      <p className="kicker text-sm">{kicker}</p>
      <h3 className="display mt-1 text-3xl font-bold sm:text-4xl">
        <Link href={href}>{title}</Link>
      </h3>
      <p className="kicker mt-2 text-sm">{stack}</p>
      {/* Grows so the figure sits on the bottom edge, level with its neighbour. */}
      <p className="mt-4 flex-1 text-pretty hyphens-auto">{children}</p>
      <figure className="mt-4 border-t border-primary pt-3">
        <p className="display text-3xl font-black">{figure.value}</p>
        <figcaption className="kicker text-sm">{figure.caption}</figcaption>
      </figure>
    </article>
  );
};

// A professional experience entry. Without `href` the title is plain text.
export const Role = ({
  organisation,
  title,
  href,
  dates,
}: {
  organisation: string;
  title: string;
  href?: string;
  dates: string;
}) => {
  return (
    <li className="py-3">
      <p className="font-semibold">{organisation}</p>
      {href ? <Link href={href}>{title}</Link> : <p>{title}</p>}
      <p className="kicker text-sm tabular-nums">{dates}</p>
    </li>
  );
};

// A research or open source project.
export const Brief = ({
  title,
  href,
  stack,
  children,
}: PropsWithChildren<{ title: string; href: string; stack: string }>) => {
  return (
    <article className="mb-6 break-inside-avoid max-md:mb-0 max-md:py-6 max-md:first:pt-0">
      <h3 className="display text-xl font-bold">
        <Link href={href}>{title}</Link>
      </h3>
      <p className="kicker text-sm">{stack}</p>
      <p className="mt-1 text-pretty hyphens-auto">{children}</p>
    </article>
  );
};
