"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    text: string;
    href: string;
};

const NavigationLink = (props: Props) => {
    const pathname = usePathname();
    const active = pathname.endsWith(props.href);

    return (
        <Link className="text-sm font-bold tracking-wide h-fit text-[#F9DEC9] transition ease-in-out data-[active=false]:hover:-translate-y-1 data-[active=false]:hover:scale-105 duration-300 relative after:bg-[#F9DEC9] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 data-[active=false]:hover:after:w-full after:transition-all after:duration-300 data-[active=true]:text-white"
            href={props.href}
            data-active={active}>
            {props.text}
        </Link>
    );
};

export default NavigationLink;