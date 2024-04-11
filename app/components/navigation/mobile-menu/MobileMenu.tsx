import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import React from "react";

import { BarsThreeIcon } from "../../icons/bars-three/BarsThree";
import { GithubIcon } from "../../icons/github/Github";
import { LinkedInIcon } from "../../icons/linkedin/LinkedIn";
import { PDFIcon } from "../../icons/pdf/PDF";
import { ThreeDotsIcon } from "../../icons/three-dots/ThreeDots";
import ExternalLink from "../external-link/ExternalLink";
import { Item } from "./item/Item";

export const MobileMenu = () => {
    return (
        <Popover className="relative size-6 min-[1428px]:hidden">
            <Popover.Button className="size-6 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                <BarsThreeIcon className="fill-[#F9DEC9] min-[1360px]:hidden" />
                <ThreeDotsIcon className="fill-[#F9DEC9] max-[1360px]:hidden min-[1428px]:hidden" />
            </Popover.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute mt-8 w-screen max-w-[282px] -translate-x-1/2 max-[1428px]:-translate-x-[86%] min-[1428px]:p-3">
                    <div className="overflow-hidden rounded-lg border border-[#F9DEC9] bg-[#F9DEC9]">
                        <div className="flex flex-col gap-3 bg-[#1B2432] max-[1360px]:p-3">
                            <Item className="min-[1360px]:hidden" href="/" text="Home" />
                            <Item className="min-[1360px]:hidden" href="/about" text="About" />
                            <Item className="min-[1360px]:hidden" href="/experience" text="Experience" />
                            <Item className="min-[1360px]:hidden" href="/projects" text="Projects" />
                            <Item className="min-[1360px]:hidden" href="/skills" text="Skills" />
                            <Item className="min-[1360px]:hidden" href="/education" text="Education" /> 
                        </div>
                        <div className="flex items-center justify-around gap-x-6 p-3">
                                <ExternalLink className="" href="https://github.com/HuyNguyenAu">
                                    <GithubIcon className="fill-[#1B2432]" />
                                </ExternalLink>
                                <ExternalLink className="" href="https://www.linkedin.com/in/huy-nguyen-454a6016a">
                                    <LinkedInIcon className="fill-[#1B2432]" />
                                </ExternalLink>
                                <ExternalLink className="" href="">
                                    <PDFIcon className="fill-[#1B2432]" />
                                </ExternalLink>
                            </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
};