import Link from "next/link";
import { PropsWithChildren } from "react";

const ExternalLink = ({ children, href }: PropsWithChildren<{ href: string }>) => {
    return (
        <Link className="h-8 w-8 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300" href={href}>
            {children}
        </Link>
    );
};

export default ExternalLink;