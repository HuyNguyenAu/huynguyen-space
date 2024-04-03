"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = {
    className?: string;
    text: string;
    href: string;
};

export const Item = (props: Item) => {
    const pathname = usePathname();
    const active = pathname.endsWith(props.href);
    
    return (
        <Link className={`text-sm font-bold tracking-wide h-fit text-[#F9DEC9] transition ease-in-out data-[active=false]:hover:-translate-y-1 data-[active=false]:hover:scale-105 duration-900 border-transparent border rounded-lg p-3 data-[active=false]:hover:border-[#F9DEC9] transition-all after:duration-300 data-[active=true]:text-white ${props.className ?? ""}`}
            href={props.href}
            data-active={active}>
            {props.text}
        </Link>
    );
};