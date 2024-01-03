import Link from "next/link";

const Page = () => {
  return (
    <article className="prose dark:prose-invert text-[#F9DEC9 w-full">
      <h3><Link href="https://github.com/HuyNguyenAu/gpt-decoder">GPT Decoder</Link></h3>
      <p><small>Apr 2023 - Nov 2023</small></p>
      <p>A simple GPT decoder for educational purposes following Andrej Karpathy&apos;s &quot;Let&apos;s build GPT: from scratch, in code, spelled out&quot; with some optimisations.</p>

      <h3><Link href="https://github.com/HuyNguyenAu/wobbly-ml">Wobbly ML</Link></h3>
      <p><small>Jul 2022 - March 2023</small></p>
      <p>A machine learning library using the the Neural Networks From Scratch book.</p>

      <h3><Link href="https://github.com/HuyNguyenAu/lox-lang-crystal">Lox Crystal Lang</Link></h3>
      <p><small>Aug 2021 - Nov 2022</small></p>
      <p>A Crystal programming language implementation of the Lox programming language using the Crafting Interpreters book.</p>
    </article>
  );
};

export default Page;
