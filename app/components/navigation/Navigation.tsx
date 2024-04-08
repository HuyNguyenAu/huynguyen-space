"use client";

import Link from "next/link";
import ExternalLink from "./external-link/ExternalLink";
import Logo from "./logo/Logo";
import NavigationLink from "./navigation-link/NavigationLink";
import { GithubIcon } from "../icons/github/Github";
import { LinkedInIcon } from "../icons/linkedin/LinkedIn";
import { PDFIcon } from "../icons/pdf/PDF";
import { MobileMenu } from "./mobile-menu/MobileMenu";

const Navigation = () => {
    return (
        <div className="flex justify-center w-full">
            <div className="w-full flex flex gap-x-18 w-fit border rounded-lg border-[#F9DEC9] rounded-lg bg-[#F9DEC9]">
                <Link className="p-4 w-60 flex items-center gap-x-4 rounded-l-lg border-[#F9DEC9]" href="/">
                    <Logo />
                    <p className="text-xs font-bold tracking-[0.75em] text-[#1B2432] max-[402px]:hidden">HUY NGUYEN</p>
                </Link>
                <div className="p-3 pl-10 grow flex flex gap-x-10 bg-[#1B2432] rounded-r-lg">
                    <div className="grow flex flex gap-x-6 justify-center items-center max-[1295px]:hidden">
                        <NavigationLink text="Home" href="/" />
                        <NavigationLink text="About" href="/about" />
                        <NavigationLink text="Experience" href="/experience" />
                        <NavigationLink text="Projects" href="/projects" />
                        <NavigationLink text="Skills" href="/skills" />
                        <NavigationLink text="Education" href="/education" />
                    </div>
                    <div className="flex flex gap-x-2.5 items-center max-[1295px]:grow max-[1295px]:justify-end">
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