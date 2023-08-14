import React, { useState } from "react";
import dashboardData from "./dashboardData";
const { navItems } = dashboardData;
import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Logo from "../../public/Tradent-logo.png";
import Image from "next/image";
import { Divider } from "@tremor/react";

const MobileSidebar = ({isOpen, setIsOpen}) => {

    return (
        <>
        <div
        onClick={() => setIsOpen(false)}
        className={`fixed z-40 inset-0 bg-black transition-opacity duration-300 ${isOpen ? "opacity-50" : "opacity-0 pointer-events-none"} md:hidden`}
      ></div>
            <div
                className={`fixed top-0 left-0 h-full transition-transform duration-300 ease-in-out transform-gpu ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } z-50 w-64 bg-[#131313] md:hidden p-[25px]`} // Sliding sidebar
            >
                <div className="flex justify-between mb-[40px]">
                    <Link href='/' className="cursor-pointer">
                     <Image src={Logo} alt="Tradent Logo" width={200} height={200} className=" w-[30px]"/>
                    </Link>
                    <XIcon className="w-[40px]" onClick={() => setIsOpen(false)}/> {/* Button to close sidebar */}

                </div>
                <Divider className=" bg-opacity-50" />
                <nav>
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="p-4 pl-0">
                                <Link href={item.link} className="p-4 hover:bg-[#191919] hover:rounded-[10px]">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default MobileSidebar;
