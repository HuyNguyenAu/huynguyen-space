"use client";

import Link from "next/link";
import React from "react";

import { GithubIcon } from "../icons/github/Github";
import { LinkedInIcon } from "../icons/linkedin/LinkedIn";
import { PDFIcon } from "../icons/pdf/PDF";
import ExternalLink from "./external-link/ExternalLink";
import Logo from "./logo/Logo";
import { MobileMenu } from "./mobile-menu/MobileMenu";
import NavigationLink from "./navigation-link/NavigationLink";

const Navigation = () => {
    return (
        <div className="flex w-full justify-center">
            <div className="flex w-full gap-x-16 rounded-lg border border-[#F9DEC9] bg-[#F9DEC9]">
                <Link className="flex w-60 items-center gap-x-4 rounded-l-lg border-[#F9DEC9] p-4" href="/">
                    <Logo />
                    <p className="text-xs font-bold tracking-[0.75em] text-[#1B2432] max-[402px]:hidden">HUY NGUYEN</p>
                </Link>
                <div className="flex grow gap-x-10 rounded-r-lg bg-[#1B2432] p-3 pl-10">
                    <div className="flex grow items-center justify-center gap-x-6 max-[1295px]:hidden">
                        <NavigationLink href="/" text="Home" />
                        <NavigationLink href="/about" text="About" />
                        <NavigationLink href="/experience" text="Experience" />
                        <NavigationLink href="/projects" text="Projects" />
                        <NavigationLink href="/skills" text="Skills" />
                        <NavigationLink href="/education" text="Education" />
                    </div>
                    <div className="flex items-center gap-x-2.5 max-[1295px]:grow max-[1295px]:justify-end">
                        <MobileMenu/>
                        <ExternalLink className="max-[1382px]:hidden" href="https://github.com/HuyNguyenAu">
                            <GithubIcon className="fill-[#F9DEC9]" />
                        </ExternalLink>
                        <ExternalLink className="max-[1382px]:hidden" href="https://www.linkedin.com/in/huy-nguyen-454a6016a">
                            <LinkedInIcon className="fill-[#F9DEC9]" />
                        </ExternalLink>
                        <ExternalLink className="max-[1382px]:hidden" href="">
                            <PDFIcon className="fill-[#F9DEC9]" />
                        </ExternalLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;