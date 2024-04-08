import { Popover, Transition } from "@headlessui/react";
import { BarsThreeIcon } from "../../icons/bars-three/BarsThree";
import { GithubIcon } from "../../icons/github/Github";
import { LinkedInIcon } from "../../icons/linkedin/LinkedIn";
import { PDFIcon } from "../../icons/pdf/PDF";
import { ThreeDotsIcon } from "../../icons/three-dots/ThreeDots";
import ExternalLink from "../external-link/ExternalLink";
import { Item } from "./item/Item";
import { Fragment } from "react";

export const MobileMenu = () => {
    return (
        <Popover className="relative h-6 w-6 min-[1382px]:hidden">
            <Popover.Button className="h-6 w-6 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                <BarsThreeIcon className="min-[1295px]:hidden fill-[#F9DEC9]" />
                <ThreeDotsIcon className="min-[1382px]:hidden max-[1295px]:hidden fill-[#F9DEC9]" />
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
                <Popover.Panel className="absolute mt-8 w-screen max-w-[282px] max-[1382px]:-translate-x-[86%] -translate-x-1/2 transform min-[1382px]:p-3">
                    <div className="overflow-hidden border border-[#F9DEC9] bg-[#F9DEC9] rounded-lg">
                        <div className="flex flex-col gap-3 bg-[#1B2432] max-[1295px]:p-3">
                            <Item className="min-[1295px]:hidden" text="Home" href="/" />
                            <Item className="min-[1295px]:hidden" text="About" href="/about" />
                            <Item className="min-[1295px]:hidden" text="Experience" href="/experience" />
                            <Item className="min-[1295px]:hidden" text="Projects" href="/projects" />
                            <Item className="min-[1295px]:hidden" text="Skills" href="/skills" />
                            <Item className="min-[1295px]:hidden" text="Education" href="/education" /> 
                        </div>
                        <div className="flex flex gap-x-6 items-center justify-around p-3">
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