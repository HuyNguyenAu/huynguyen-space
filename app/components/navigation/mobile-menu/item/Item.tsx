"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
    className?: string;
    href: string;
    text: string;
};

export const Item = (props: Props) => {
    const pathname = usePathname();
    const active = pathname.endsWith(props.href);
    
    return (
        <Link className={`h-fit rounded-lg border border-transparent p-3 text-sm font-bold tracking-wide text-[#F9DEC9] transition-all duration-700 ease-in-out after:duration-300 data-[active=true]:text-white data-[active=false]:hover:-translate-y-1 data-[active=false]:hover:scale-105 data-[active=false]:hover:border-[#F9DEC9] ${props.className ?? ""}`}
            data-active={active}
            href={props.href}>
            {props.text}
        </Link>
    );
};