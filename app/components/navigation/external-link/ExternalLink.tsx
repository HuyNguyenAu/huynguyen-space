import Link from "next/link";
import { PropsWithChildren } from "react";

const ExternalLink = ({ children, href, className }: PropsWithChildren<{ href: string, className?: string }>) => {
    return (
        <Link className={`h-6 w-6 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 ${className ?? ""}`} href={href}>
            {children}
        </Link>
    );
};

export default ExternalLink;