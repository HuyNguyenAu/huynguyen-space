"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

type Props = {
    text: string;
    href: string;
};

const NavigationLink = (props: Props) => {
    const pathname = usePathname();
    const active = pathname.endsWith(props.href);

    return (
        <Link className="text-sm font-bold tracking-wide h-fit text-[#F9DEC9] transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 relative after:bg-[#F9DEC9] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 data-[active=true]:after:w-full"
            href={props.href}
            data-active={active}>
            {props.text}
        </Link>
    );
};

export default memo(NavigationLink);