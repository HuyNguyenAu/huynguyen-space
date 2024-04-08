import Link from "next/link";
import React from 'react';
import { PropsWithChildren } from "react";

const ExternalLink = ({ children, className, href }: PropsWithChildren<{ className?: string, href: string }>) => {
    return (
        <Link className={`size-6 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 ${className ?? ""}`} href={href}>
            {children}
        </Link>
    );
};

export default ExternalLink;