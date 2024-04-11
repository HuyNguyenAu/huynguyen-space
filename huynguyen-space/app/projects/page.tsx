import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <article className="prose text-[#F9DEC9] dark:prose-invert">
      <h2><Link href="https://github.com/HuyNguyenAu/gpt-decoder">GPT Decoder</Link></h2>
      <h4>Apr 2023 - Nov 2023</h4>
      <p>A simple GPT decoder for educational purposes following Andrej Karpathy&apos;s &quot;Let&apos;s build GPT: from scratch, in code, spelled out&quot; with some optimisations.</p>

      <h2><Link href="https://github.com/HuyNguyenAu/wobbly-ml">Wobbly ML</Link></h2>
      <h4>Jul 2022 - March 2023</h4>
      <p>A machine learning library using the the Neural Networks From Scratch book.</p>

      <h2><Link href="https://github.com/HuyNguyenAu/lox-lang-crystal">Lox Crystal Lang</Link></h2>
      <h4>Aug 2021 - Nov 2022</h4>
      <p>A Crystal programming language implementation of the Lox programming language using the Crafting Interpreters book.</p>
    </article>
  );
};

export default Page;
