import Link from "next/link";

const Page = () => {
  return (
    <article className="prose dark:prose-invert text-[#F9DEC9]">
      <Link href="https://github.com/HuyNguyenAu/gpt-decoder"><h3>GPT Decoder</h3></Link>
      <p><small>Apr 2023 - Nov 2023</small></p>
      <p>A simple GPT decoder for educational purposes following Andrej Karpathy&apos;s &quot;Let&apos;s build GPT: from scratch, in code, spelled out&quot; with some optimisations.</p>

      <Link href="https://github.com/HuyNguyenAu/wobbly-ml"><h3>Wobbly ML</h3></Link>
      <p><small>Jul 2022 - March 2023</small></p>
      <p>A machine learning library using the the Neural Networks From Scratch book.</p>

      <Link href="https://github.com/HuyNguyenAu/lox-lang-crystal"><h3>Lox Crystal Lang</h3></Link>
      <p><small>Aug 2021 - Nov 2022</small></p>
      <p>A Crystal programming language implementation of the Lox programming language using the Crafting Interpreters book.</p>
    </article>
  );
};

export default Page;
