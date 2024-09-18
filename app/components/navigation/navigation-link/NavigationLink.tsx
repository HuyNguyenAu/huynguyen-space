"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
    href: string;
    text: string;
};

const NavigationLink = (props: Props) => {
    const pathname = usePathname();
    const active = pathname.endsWith(props.href);

    return (
        <Link className="relative h-fit text-sm font-bold tracking-wide text-[#F9DEC9] transition duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#F9DEC9] after:transition-all after:duration-300 data-[active=true]:text-white data-[active=false]:hover:-translate-y-1 data-[active=false]:hover:scale-105 data-[active=false]:hover:after:w-full"
            data-active={active}
            href={props.href}>
            {props.text}
        </Link>
    );
};

export default NavigationLink;